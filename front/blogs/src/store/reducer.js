import {combineReducers} from 'redux'
import entities from "./entities";
import auth from "./account/auth";

export default combineReducers({
    entities:entities,
    auth:auth,

})