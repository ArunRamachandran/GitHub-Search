'use strict'

import AppDispatcher from '../dispatcher/Dispatcher';
import * as gitAPI from '../api/gitAPI';
import AppConstants from '../constant/Constants';

const {
	ACTIONS_CONSTANT,
	API_CONSTANT
} = AppConstants;

export function searchGitUser(keyword) {
	gitAPI.searchGitUser(keyword);
}

export function fetchGitRepositories(url) {
	gitAPI.fetchGitRepositories(url);
}

export function gitUsersList(list) {
	AppDispatcher.dispatch({
		type: ACTIONS_CONSTANT.LOAD_GIT_USERS,
		data: list
	});
}

export function gitUserRepositoryList(repositories) {
	AppDispatcher.dispatch({
		type: ACTIONS_CONSTANT.LOAD_GIT_USER_REPOS,
		data: repositories
	})
}
