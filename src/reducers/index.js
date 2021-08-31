import { combineReducers } from "../core/combineReducers.js";
import counter from "./counter.js"
import post from "./posts.js"

export default combineReducers({
    counter,
    post
})