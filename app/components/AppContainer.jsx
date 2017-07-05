'use strict'

import React, {Component} from 'react';
import GitSearch from './GitSearch.jsx';
import Header from './Header.jsx';
import GitUsersList from './GitUsersList.jsx';
//import GitRepositoryList from './GitRepositoryList';
import {searchGitUser, searchGitRepository, fetchGitRepositories} from '../actions/GitActionCreator';
import gitStore from '../stores/gitStore';
import AppConstants from '../constant/Constants';
import '../stylesheets/appContainer.scss';

const {
	ACTIONS_CONSTANT,
	API_CONSTANT,
	EVENT_CONSTANT
} = AppConstants;

export default class AppContainer extends Component {

	constructor (props) {
		super(props);
		this.state = {
			gitData: null,
			contentType: null,
			isLoader: false
		}
	}

	componentDidMount() {
		gitStore.addChangeListner(EVENT_CONSTANT.GIT_USERS_LOADED, this.updateGitUsersList);
		gitStore.addChangeListner(EVENT_CONSTANT.GIT_USER_REPOS_LOADED, this.updateGitUserRepositories);
	}

	componentWillUnMount() {
		gitStore.removeChangeListner(EVENT_CONSTANT.GIT_USERS_LOADED, this.updateGitUsersList);
		gitStore.removeChangeListner(EVENT_CONSTANT.GIT_USER_REPOS_LOADED, this.updateGitUserRepositories);
	}

	/** TODO : Write function for updating repositories of a git user **/

	updateGitUsersList = (data) => {
		this.setState({ isLoader: false, gitData: data });
	}

	updateGitUserRepositories = (data) => {
		console.log("repos : ", data);
		this.setState({ isLoader: false, gitData: data });
	}

	searchData = (keyword, option) => {

		this.setState({ contentType: option, isLoader: true });

		switch(option) {
			case "User":
				searchGitUser(keyword);
				break;

			case "Repository":
				searchGitRepository(keyword);
				break;

			default:
				searchGitUser(keyword);
		}
	}

	fetchGitRepositories = (url) => {
		this.setState({ isLoader: true, contentType: "Repository" });
		fetchGitRepositories(url);
	}

	createComponent = (type, data) => {
		switch(type) {
			case "User":
				return <GitUsersList data={data} fetchGitRepositories={this.fetchGitRepositories}/>;
				break;

			case "Repository":
				//return <GitRepositoryList data={data}/>
				break;

			default:
				return <noscript/>;
		}
	}

	render () {

		let {
			isLoader,
			contentType,
			gitData
		} = this.state;

		let children = isLoader ? <h3>Loading</h3> : this.createComponent(contentType, gitData);

		return (
			<div className="componentWrapper">
				<Header/>
				<GitSearch searchData={this.searchData}/>
				<div className="appContainer_dataWraper">
					{children}
				</div>
			</div>
		);
	}

}