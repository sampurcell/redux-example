import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actionCreators';
import Main from './Main';

function mapStateToProps(state) {
	return {
		posts: state.posts,
		comments: state.comments
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

// Takes Main and adds all the props and data and adds actionCreators as well
const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;