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
	 _userRepositoryList = [];


const gitStore = createStore({
	currentState () {
		return _gitUsersList;
	}
})

function updateUserRepositoryList(data) {
	_userRepositoryList = data;
}

function updateGitUsersList(data) {
	_gitUsersList = data;
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
		}

		
});

export default gitStore;