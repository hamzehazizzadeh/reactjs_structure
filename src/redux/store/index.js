import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";

import { reducers } from "./../reducers";

export const store = createStore(reducers, compose(applyMiddleware(thunk)));
