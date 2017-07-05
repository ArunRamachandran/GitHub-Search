'use strict'

import dispatcher from '../dispatcher/Dispatcher';
import {EventEmitter} from 'events';
import assign from 'object-assign';
import { createStore } from './Store';
import AppConstants from '../constant/Constants';

const {
	API_CONSTANT,
	EVENT_CONSTANT,
	ACTIONS_CONSTANT
} = AppConstants;

let _gitUsersList = [],
	 _gitReposiotryList = [],
	 _userRepositoryList = [],
	 _repositoryOpenIssues = [];


const gitStore = createStore({
	currentState () {
		return _gitUsersList;
	}
})

function updateGitOpenIssuesList(openIssues) {
	_repositoryOpenIssues = openIssues;
}

function updateUserRepositoryList(data) {
	_userRepositoryList = data;
}

function updateGitUsersList(data) {
	_gitUsersList = data;
}

function updateGitRepositoryList(data) {
	_gitReposiotryList = data;
}

gitStore.dispatchToken = dispatcher.register (action => {

	switch(action.type) {
			case ACTIONS_CONSTANT.LOAD_GIT_USERS:
				updateGitUsersList(action.data);
				gitStore.emitChange(EVENT_CONSTANT.GIT_USERS_LOADED, action.data);
				break;

			case ACTIONS_CONSTANT.LOAD_GIT_USER_REPOS:
				updateUserRepositoryList(action.data);
				gitStore.emitChange(EVENT_CONSTANT.GIT_USER_REPOS_LOADED, action.data);
				break;

			case ACTIONS_CONSTANT.LOAD_GIT_REPOS:
				updateGitRepositoryList(action.data);
				gitStore.emitChange(EVENT_CONSTANT.GIT_REPOS_LOADED, action.data);
				break;

			case ACTIONS_CONSTANT.LOAD_REPO_OPEN_ISSUES:
				updateGitOpenIssuesList(action.data);
				gitStore.emitChange(EVENT_CONSTANT.OPEN_ISSUES_RECEIVED, action.data);
				break;
		}

		
});

export default gitStore;