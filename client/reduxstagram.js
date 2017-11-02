import React from 'react';
import ReactDOM from 'react-dom';

// Import css
import css from './styles/style.styl';

// Import components
import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

// Import React router dependencies
import { Router, Route, IndexRoute } from 'react-router';

// Import Binding between redux and react
import { Provider } from 'react-redux';
import store, { history } from './store';

// Import dependencies for logging errors with Sentry
import Raven from 'raven-js';
import { sentry_url, logException } from './data/config';

// Using a custom error handling
// logException(new Error('download failed!'), {
// 	email: 'sampurcell@test.com'
// })

// Sets up the loggin to Sentry
Raven.config(sentry_url).install();


const router = (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={PhotoGrid}></IndexRoute>
				<Route path="/view/:postId" component={Single}></Route>
			</Route>
		</Router>
	</Provider>
)

// Render main element on root element in index.html
ReactDOM.render(router, document.getElementById('root'));
