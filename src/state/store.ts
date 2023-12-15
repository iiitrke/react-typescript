import { createStore, applyMiddleware } from "redux";
import { Tuple, configureStore } from "@reduxjs/toolkit";

import { thunk } from "redux-thunk";
import reducers from "./reducers";

// export const store = createStore(reducers, {}, applyMiddleware(thunk));

export const store = configureStore({
  reducer: reducers,
  middleware: () => new Tuple(thunk),
});
