// Increment a like on a photo
export function increment(index) {
	return {
		type: 'INCREMENT_LIKES',
		index
	};
}

// Add comment to a photo
export function addComment(postId, author, comment) {
	return {
		type: 'ADD_COMMENT',
		postId,
		author,
		comment
	};
}

// Remove a comment from a photo
export function removeComment(postId, i) {
	return {
		type: 'REMOVE_COMMENT',
		i,
		postId
	};
}