import {combineReducers} from 'redux'
import bugReducer from './bugs'
import projectReducer from './project'
import postReducer from './post'

export default combineReducers({
    posts: postReducer,
    bugs: bugReducer
    ,
    project: projectReducer
})