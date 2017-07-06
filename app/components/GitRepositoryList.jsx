'use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/gitRepositoryList.scss';

export default class GitRepositoryList extends Component {

	constructor(props) {
		super(props);
	}

	createEmptyView = () => {
		return (
			<div className="repositoryWarningLayout">
				<img src="./app/assets/issue-opened.png"/>
				<h5>Sorry, no repositories found</h5>
			</div>
		);
	}

	createRepositoryList = (data) => {
		let repositories = data.map((repo, index) => {
			let createdDate = new Date(repo.created_at).toDateString();
			return (
				<div className="repositoryList">
					<img src="./app/assets/git_repo.png"/>
					<p className="repositoryName" onClick={() => {this.props.fetchRepositoryOpenIssues(repo.owner.login, repo.name)}}>
						{repo.name}
					</p>
					<p className="repo_createdBy">cretaed by : {repo.owner.login}</p>
					<p className="repo_createdAt">created at : {createdDate}</p>
					<p className="repo_language">language : {repo.language}</p>
				</div>
			);
		});

		return repositories;
	}

	render() {

		const { data } = this.props;

		return (
			<div className="gitRepositoryList_container">
				{data.length ? this.createRepositoryList(data) : this.createEmptyView()}
			</div>
		);
	}

}