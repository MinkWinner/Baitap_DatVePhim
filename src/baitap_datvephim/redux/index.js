import { combineReducers } from "redux";
import { bookingReducer } from "./storeReducer/reducers";

export const rootReducer = combineReducers({ bookingReducer });
