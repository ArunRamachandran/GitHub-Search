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

export function searchGitRepository(keyword) {
	gitAPI.searchGitRepository(keyword);
}

export function fetchUserRepository(url) {
	gitAPI.fetchUserRepository(url);
}

export function fetchRepositoryOpenIssues(userName, repository) {
	gitAPI.fetchRepositoryOpenIssues(userName, repository);
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

export function gitRepositoryList(repositories) {
	AppDispatcher.dispatch({
		type: ACTIONS_CONSTANT.LOAD_GIT_REPOS,
		data: repositories
	});
}

export function gitOpenIssuesList(openIssuesList) {
	AppDispatcher.dispatch({
		type: ACTIONS_CONSTANT.LOAD_REPO_OPEN_ISSUES,
		data: openIssuesList
	})
}
