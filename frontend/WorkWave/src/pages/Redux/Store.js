import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import authReducer from "./Auth/Reducer";
import projectReducer from "./Project/Reducer";

const rootReducer=combineReducers({
auth:authReducer,
project:projectReducer
})
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))
//here this root  reducer combine multiple reducer and centralize the reducer state
//for whole application, our application stay in steady state