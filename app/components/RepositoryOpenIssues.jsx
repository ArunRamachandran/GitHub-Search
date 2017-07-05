'use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class RepositoryOpenIssues extends Component {

	constructor(props) {
		super(props);
	}

	createItems = (data) => {
		let openIssues = data.map((issue, index) => {
			return (
				<div key={index}>
					
				</div>
			);
		});

		return openIssues;
	}

	render() {
		<div>
			{this.createItems(this.props.data)}
		</div>
	}

}