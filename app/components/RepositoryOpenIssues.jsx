'use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/repositoryOpenIssues.scss';

export default class RepositoryOpenIssues extends Component {

	constructor(props) {
		super(props);
	}

	getDateDifference = (created_at) => {
		let today = new Date();
		let createdDate = new Date(created_at);
		return Math.round(Math.abs((today.getTime() - createdDate.getTime())/ (24*60*60*1000)));
	}

	createItems = (data) => {
		let openIssues = data.map((issue, index) => {	

			let noOfDays = this.getDateDifference(issue.created_at);
			return (
				<div key={index} className="openIssuesList">
					<img className="openIssue_img" src="./app/assets/issue-opened.png"/>
					<p className="openIssue_title">{issue.title}</p>
					<p className="issue_number">#{issue.number}</p>
					<p className="issues_created_date">{noOfDays} days ago </p>
					<p className="issue_opened_by">by {issue.user.login}</p>
				</div>
			);
		});

		return openIssues;
	}

	render() {
		return (
			<div className="openIssues_container">
				<div className="openIssues_actionBar">
					<h5>Open issues</h5>
				</div>
				{this.createItems(this.props.data)}
			</div>
		);
	}

}