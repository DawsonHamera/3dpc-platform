import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../shared/redux/store";
import { AuthState } from "./authTypes";

const storedAuth = localStorage.getItem("auth");
const initialState: AuthState = storedAuth
    ? JSON.parse(storedAuth)
    : {
          auth_type: null,
          user: null,
          access_token: null,
          stream_token: null,
          expires_at: null,
      };

const slice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setCredentials: (
            state,
            {
                payload,
            }: PayloadAction<{
                auth_type: "user" | "workstation";
                user?: any;
                access_token: string;
                stream_token?: string;
                expires_at?: number;
            }>,
        ) => {
            state.auth_type = payload.auth_type;
            state.access_token = payload.access_token;

            // Only set user-specific fields if it's a user login
            if (payload.auth_type === "user") {
                state.user = payload.user || null;
                state.expires_at = payload.expires_at || null;
                state.stream_token = payload.stream_token || null;
            } else {
                // Workstation login - clear user-specific data
                state.user = null;
                state.expires_at = null;
                state.stream_token = null;
            }

            localStorage.setItem("auth", JSON.stringify(state)); // Persist to localStorage
        },
        logout: (state) => {
            state.auth_type = null;
            state.user = null;
            state.expires_at = null;
            state.access_token = null;
            state.stream_token = null;
            localStorage.removeItem("auth"); // Clear localStorage on logout
        },
    },
});

export const { setCredentials, logout } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;

export const selectAccessToken = (state: RootState) => state.auth.access_token;

export const selectStreamToken = (state: RootState) => state.auth.stream_token;

export const selectAuthType = (state: RootState) => state.auth.auth_type;

export const selectIsAuthenticated = (state: RootState) =>
    !!state.auth.access_token;

export const selectIsUserAuth = (state: RootState) =>
    state.auth.auth_type === "user";

export const selectIsWorkstationAuth = (state: RootState) =>
    state.auth.auth_type === "workstation";
