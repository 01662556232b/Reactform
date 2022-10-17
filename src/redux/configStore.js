import { combineReducers, createStore } from "redux";
import { QLSVReducer } from "./reducer/QLSVReducer";

const rootReducer = combineReducers({
    QLSVReducer
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

