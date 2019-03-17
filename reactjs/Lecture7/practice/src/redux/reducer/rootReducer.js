
import todoReducer from './reducer';
import gitHubUser from './gitHubUser';
import gitHubFollowers from './followers';
import {combineReducers} from 'redux';

export default combineReducers ({
    todoReducer,
    user:gitHubUser,
    gitHubFollowers
})