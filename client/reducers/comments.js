// Reducer takes two things:

// 1. the action (info about what happened)
// 2. copy of the current state

// Returns the newState
function postComments(state = [], action) {
	console.log(state, action);
	switch(action.type) {
		case 'ADD_COMMENT':
		// return the new state with the new comment.
		return [
			...state,
			{
				user: action.author,
				text: action.comment
			}
		];
		case 'REMOVE_COMMENT':
			console.log('Removing a comment');
			// we need to return new state without deleted comment
			return [
				...state.slice(0, action.i),
				...state.slice(action.di + 1),
			];
		default:
			return state;
	}

	return state;
}

// Handle update of just one comment
function comments(state=[], action) {
	if (typeof action.postId !== 'undefined') {
		return {
			// Take current state
			...state,
			// Overwrite this post with new one by passing slice to other
			[action.postId]: postComments(state[action.postId], action)
		};
	}
	return state;
}

export default comments;