'use strict'

import keyMirror from 'keymirror';

let AppConstants = {

	API_CONSTANT: keyMirror({
		LOAD_DATA: null,
		LOAD_ATTRIBUTES: null
	}),

	ACTIONS_CONSTANT: keyMirror({
		LOAD_GIT_USERS: null,
		LOAD_GIT_USER_REPOS: null
	}),

	EVENT_CONSTANT: keyMirror({
		GIT_USERS_LOADED: null
	})

}

export default AppConstants;
