import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "./store";
import { API_USERS } from "../URLConstants";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import axios from "axios";
import { useAppSelector } from "./hooks";

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface UserState {
  loading: boolean;
  cached: boolean;
  users: Array<User>;
  error: string | undefined;
}

const initialState: UserState = {
  loading: false,
  cached: false,
  users: [],
  error: undefined,
};

export const userSlice = createSlice({
  name: "users3",
  initialState: initialState,
  reducers: {
    loadUser: (state, action) => {
      console.log("GETUSSER CALLED");
      axios.get(API_USERS).then((resp) => {
        console.log(resp.data, "axios");
      });
    },
    loadUserSuccess: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { loadUser } = userSlice.actions;

export const userSelector = (state: RootState) => state.users;

export default userSlice.reducer;
