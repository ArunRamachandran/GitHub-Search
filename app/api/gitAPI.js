'use strict'

import Request from './RequestWebUtils';
import * as GitActionCreator from '../actions/GitActionCreator';

const git_user_api = "https://api.github.com/search/users";

export function searchGitUser (keyword) {
	
	const url = `${git_user_api}?q=${keyword}+in:login`;

	return Request.get(url)
		.then((body, res) => {
			GitActionCreator.gitUsersList(body);
		});
}

export function fetchGitRepositories (url) {
	return Request.get(url)
		.then((body, res) => {
			console.log("body : ", body, "res : ", res);
			GitActionCreator.gitUserRepositoryList(body);
		})
}