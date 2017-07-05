'use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/gitRepositoryList.scss';

export default class GitRepositoryList extends Component {

	constructor(props) {
		super(props);
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
					<p className="repo_createdAt">created at : {createdDate}</p>
					<p className="repo_language">language : {repo.language}</p>
				</div>
			);
		});

		return repositories;
	}

	render() {
		return (
			<div className="gitRepositoryList_container">
				{this.createRepositoryList(this.props.data)}
			</div>
		);
	}

}