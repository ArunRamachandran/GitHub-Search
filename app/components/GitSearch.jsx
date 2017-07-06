'use strict'

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/gitSearch.scss';

export default class GitSearch extends Component {

	constructor (props) {
		super(props);
		this.state = {
			option: "User"
		}
	}

	handleUserAction = (event) => {
		this.setState({
			option: event.target.value
		})
	}

	inputHandler = (event) => {
		this.refs.searchText.value && this.props.searchData(this.refs.searchText.value, this.state.option);
	}

	searchHandler = (event) => {
		if (event.key === 'Enter') {
			this.refs.searchText.value && this.props.searchData(this.refs.searchText.value, this.state.option);
		}
	}

	render () {

		return (
			<div className="searchWraper">
				<h4>.Put your searches in one place</h4>
				<div className="searchPanel">
					<span>

						<input type="text" id="search_box" 
							ref="searchText" 
							placeholder="Start searching......" 
							className="searchField"
							onKeyDown={this.searchHandler}/>

						<button className="searchButton" onClick={this.inputHandler}>
							SEARCH
						</button>

					</span>
					<span className="searchPanel_radioGroup">

						<input type="radio" name="search_option" 
							value="User" id="user" 
							checked={this.state.option === "User"} 
							onChange={this.handleUserAction}/>
						<label htmlFor="user" className="radioGroup_user">User</label>

						<input type="radio" name="search_option" 
							value="Repository" id="repository"
							checked={this.state.option === "Repository"} 
							onChange={this.handleUserAction}/>
						<label htmlFor="repository" className="radioGroup_repository">Repository</label>
					
					</span>
				</div>
			</div>
		);
	}

}