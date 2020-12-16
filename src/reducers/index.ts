import { combineReducers } from "redux";
import issues from "./issues";
import feeds from "./feeds";

export default combineReducers({ issues, feeds });
