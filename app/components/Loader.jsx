'use strict'

import React, {Component} from 'react';
import {Spinner} from 'react-mdl';
import '../stylesheets/customLoader.scss';

export default class Loader extends Component {

	render () {
		return (
			<div className="loader_container">
				<Spinner/>
			</div>
		);
	}
}