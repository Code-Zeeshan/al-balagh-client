import { combineReducers } from "redux";
import cartReducer from "./cart/CartReducers";

export default combineReducers({
    cart: cartReducer,
});