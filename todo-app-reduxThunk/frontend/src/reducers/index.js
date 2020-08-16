import { combineReducers } from 'redux';
import todos from './todos';
import session from './session';
import signUp from './signUp'

export default combineReducers({
    todos, 
    session,
    signUp
});