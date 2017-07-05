'use strict'

import React, {Component} from 'react';
import '../stylesheets/gitUsersList.scss';

export default class GitUsersList extends Component {

	constructor(props) {
		super(props);
	}

	createView = (data) => {
		console.log("data : ", data);
		let items = data.items && data.items.map((user, index) => {
			return (
				<div className="userList" key={index}>
					<img src={user.avatar_url}/>
					<h4 onClick={() => {this.props.fetchGitRepositories(user.repos_url)}}>{user.login}</h4>
				</div>
			);
		});
		return items;
	}

	render () {
		return (
			<div className="gitUsersList_outerLayer">
				{this.createView(this.props.data)}
			</div>
		);
	}

}