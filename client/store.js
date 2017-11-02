import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Import the root reducer
import rootReducer from './reducers/index';

// Import your initial data
import comments from './data/comments';
import posts from './data/posts';

// Create the default state for your store
const defaultState = {
	posts,
	comments
};

// Setup Redux Dev Tools if extension is enabled
const enhancers = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
);

// Create the store with a root reducer and default state and optionally enhancers
const store = createStore(rootReducer, defaultState, enhancers);


// Create the history as a sync between history and state
export const history = syncHistoryWithStore(browserHistory, store);

// Accept the hot reload and then rerequire the rootReducer to update it
if (module.hot) {
	module.hot.accept('./reducers/', () => {
		// Can't import inside a function so use require
		const nextRootReducer = require('./reducers/index').default;

		// Built in method to replace the root reducer that you used with createStore
		store.replaceReducer(nextRootReducer);
	});
}

export default store;