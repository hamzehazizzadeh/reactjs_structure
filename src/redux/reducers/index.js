import { combineReducers } from "redux";

import { isLoaderReducer } from "./isLoaderReducer/isLoaderReducer";

export const reducers = combineReducers({
  isLoader: isLoaderReducer,
});
