import { applyMiddleware, createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { helloSaga } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({ reducer: {} });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
