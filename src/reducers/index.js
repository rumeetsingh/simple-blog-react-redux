import { combineReducers } from 'redux';
import postReducer from './postsReducer';
import usersReducer from './usersReducer';


export default combineReducers({
    posts : postReducer,
    users : usersReducer
});