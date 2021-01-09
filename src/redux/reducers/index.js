import {combineReducers} from "redux";
import language from "./language";
import message from "./message";
import loggedIn from "./loggedIn";

export default combineReducers({ language, message, loggedIn });
