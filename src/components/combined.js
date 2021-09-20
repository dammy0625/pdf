import {  combineReducers } from "redux"
import {Reduce} from "./Reduce"
import {Last} from "./Reduce"

export const combine = combineReducers({
    first:Reduce,
    last:Last
})