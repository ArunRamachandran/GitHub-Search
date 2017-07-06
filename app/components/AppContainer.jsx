'use strict'

import React, {Component} from 'react';
import GitSearch from './GitSearch.jsx';
import Header from './Header.jsx';
import GitUsersList from './GitUsersList.jsx';
import GitRepositoryList from './GitRepositoryList.jsx';
import RepositoryOpenIssues from './RepositoryOpenIssues.jsx';
import Loader from './Loader.jsx';
import {searchGitUser, searchGitRepository, fetchUserRepository, fetchRepositoryOpenIssues} from '../actions/GitActionCreator';
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
		gitStore.addChangeListner(EVENT_CONSTANT.GIT_REPOS_LOADED, this.updateGitRepositories);
		gitStore.addChangeListner(EVENT_CONSTANT.OPEN_ISSUES_RECEIVED, this.updateRepositoryOpenIssues);
	}

	componentWillUnMount() {
		gitStore.removeChangeListner(EVENT_CONSTANT.GIT_USERS_LOADED, this.updateGitUsersList);
		gitStore.removeChangeListner(EVENT_CONSTANT.GIT_USER_REPOS_LOADED, this.updateGitUserRepositories);
		gitStore.removeChangeListner(EVENT_CONSTANT.GIT_REPOS_LOADED, this.updateGitRepositories);
		gitStore.removeChangeListner(EVENT_CONSTANT.OPEN_ISSUES_RECEIVED, this.updateRepositoryOpenIssues);
	}

	/** TODO : Write function for updating repositories of a git user **/

	updateGitUsersList = (data) => {
		this.setState({ isLoader: false, gitData: data });
	}

	updateGitUserRepositories = (data) => {
		this.setState({ isLoader: false, gitData: data });
	}

	updateGitRepositories = (data) => {
		this.setState({ isLoader: false, gitData: data.items });
	}

	updateRepositoryOpenIssues = (data) => {
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

	fetchRepositoryOpenIssues = (userName, repository) => {
		this.setState({ isLoader: true, contentType: "OpenIssues" });
		fetchRepositoryOpenIssues(userName, repository);
	}

	fetchUserRepository = (url) => {
		this.setState({ isLoader: true, contentType: "Repository" });
		fetchUserRepository(url);
	}

	createComponent = (type, data) => {
		switch(type) {
			case "User":
				return <GitUsersList data={data} fetchUserRepository={this.fetchUserRepository}/>;
				break;

			case "Repository":
				return <GitRepositoryList data={data} fetchRepositoryOpenIssues={this.fetchRepositoryOpenIssues}/>
				break;

			case "OpenIssues":
				return <RepositoryOpenIssues data={data}/>
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

		let children = isLoader ? <Loader/> : this.createComponent(contentType, gitData);

		return (
			<div className="componentWrapper">
				<Header/>
				<GitSearch searchData={this.searchData}/>
				<div>
					{children}
				</div>
			</div>
		);
	}

}