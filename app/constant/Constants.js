'use strict'

import keyMirror from 'keymirror';

let AppConstants = {

	API_CONSTANT: keyMirror({
		LOAD_DATA: null,
		LOAD_ATTRIBUTES: null
	}),

	ACTIONS_CONSTANT: keyMirror({
		LOAD_GIT_USERS: null,
		LOAD_GIT_USER_REPOS: null,
		LOAD_GIT_REPOS: null
	}),

	EVENT_CONSTANT: keyMirror({
		GIT_USERS_LOADED: null,
		GIT_USER_REPOS_LOADED: null,
		GIT_REPOS_LOADED: null,
		OPEN_ISSUES_RECEIVED: null
	})

}

export default AppConstants;
