'use strict'

import React, {Component} from 'react';
import '../stylesheets/gitUsersList.scss';

export default class GitUsersList extends Component {

	constructor(props) {
		super(props);
	}

	createEmptyView = () => {
		return (
			<div className="warningLayout">
				<img src="./app/assets/issue-opened.png"/>
				<h5>Sorry, no data found</h5>
			</div>
		);
	}

	createView = (data) => {
		console.log("data : ", data);
		let items = data.items && data.items.map((user, index) => {
			return (
				<div className="userList" key={index}>
					<img src={user.avatar_url}/>
					<h4 onClick={() => {this.props.fetchUserRepository(user.repos_url)}}>{user.login}</h4>
				</div>
			);
		});
		return items;
	}

	render () {

		const {data} = this.props;

		return (
			<div className="gitUsersList_container">
				{data.total_count ? this.createView(data) : this.createEmptyView()}
			</div>
		);
	}

}