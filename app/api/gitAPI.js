'use strict'

import Request from './RequestWebUtils';
import * as GitActionCreator from '../actions/GitActionCreator';

const git_user_api = "https://api.github.com/search/users";
const git_repo_api = "https://api.github.com/search/repositories";

export function searchGitUser(keyword) {	
	const url = `${git_user_api}?q=${keyword}+in:login`;

	return Request.get(url)
		.then((body, res) => {
			GitActionCreator.gitUsersList(body);
		});
}

export function fetchUserRepository(url) {
	return Request.get(url)
		.then((body, res) => {
			GitActionCreator.gitUserRepositoryList(body);
		});
}

export function searchGitRepository(keyword) {
	const url = `${git_repo_api}?q=${keyword}+in:name`;

	return Request.get(url)
		.then((body, res) => {
			GitActionCreator.gitRepositoryList(body);
		});
}