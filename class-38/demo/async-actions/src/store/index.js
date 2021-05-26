import { createStore, applyMiddleware } from 'redux';
import thunk from './middleware/thunk';
// import thunk from 'redux-thunk
import reducer from './reducer';

export default createStore(reducer, applyMiddleware(thunk));
