'use strict'

import React, {Component} from 'react';
import {render} from 'react-dom'; 
import AppContainer from './components/AppContainer.jsx';

import 'react-mdl/extra/material.js';
import 'react-mdl/extra/material.css';

export default class App extends Component {

	constructor (props) {
		super(props);
	}

	render () {
		return (
			<div>
				<AppContainer/>
			</div>
		);
	}
}

render(<App/>, document.getElementById('app'));