import { call, put } from "redux-saga/effects";
import { API_TRG } from "../URLConstants";
import { ErrorInfo } from "react";

export function* helloSaga() {
  console.log("Hello Saga");
}

// function* fetchUser(action: any) {
//   try {
//     const user: any = call(API_TRG, action.payload.id);
//     yield put({ type: "", user: user });
//   } catch (error: any) {
//     yield put({ type: "USER_FETCH_FAILED", message: error.message });
//   }
// }
