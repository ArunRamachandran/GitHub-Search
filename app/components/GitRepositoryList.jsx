use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class GitRepositoryList extends Component {

	constructor(props) {
		super(props);
	}

	createRepositoryList = (data) => {
		let repositories = data.map((repo, index) => {

			

			return (
				<div>
					<img src="./app/assets/git_repo.png"/>
					<h5>{repo.name}</h5>
					<p></p>
				</div>
			);
		})
	}

	render() {
		return (
			<div>
				{/*this.createRepositoryList(this.props.data)*/}
			</div>
		);
	}

}