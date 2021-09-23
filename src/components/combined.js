import {  combineReducers } from "redux"

import {Last,Head,Reduce,Text} from "./Reduce"


export const combine = combineReducers({
    first:Reduce,
    last:Last,
    head:Head,
    text:Text
})