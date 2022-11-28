import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import Reducer from "./RootReducers";
import thunk from "redux-thunk";

const middleware = [thunk, logger];

const store = createStore(Reducer, applyMiddleware(...middleware));
export default store;