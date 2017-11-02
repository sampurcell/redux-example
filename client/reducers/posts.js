// Reducer takes two things:

// 1. the action (info about what happened)
// 2. copy of the current state

// Returns the newState
function posts(state = [], action) {
	switch(action.type) {
		case 'INCREMENT_LIKES' :
			// Return array of all the likes and just change likes for correct post
			console.log('incrementing likes');
			const i = action.index;
			return [
				...state.slice(0,i),
				{...state[i], likes: state[i].likes + 1},
				...state.slice(i + 1)
			];
		default:
			return state;
	}
}

export default posts;