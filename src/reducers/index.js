import { combineReducers } from 'redux';
import postReducer from './postsReducer';


export default combineReducers({
    posts : postReducer
});