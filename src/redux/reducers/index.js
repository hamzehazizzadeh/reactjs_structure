import { combineReducers } from "redux";

import { isLoaderReducer } from "./isLoaderReducer";

export const reducers = combineReducers({
  isLoader: isLoaderReducer,
});
