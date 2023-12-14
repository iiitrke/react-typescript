import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

// const sagaMiddleware = createSagaMiddleware();

/// store
export const store = configureStore({ reducer: { users: userReducer } });

/// types
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

/// hooks
