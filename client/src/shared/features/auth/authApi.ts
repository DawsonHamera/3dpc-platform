import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../../lib/baseApi";
import { setCredentials } from "./authSlice";
import {
    LoginRequest,
    LoginResponse,
    RegisterRequest,
    WorkstationLoginRequest,
    WorkstationLoginResponse,
} from "./authTypes";

export const authApi = createApi({
    baseQuery: baseQuery,
    endpoints: (build) => ({
        login: build.mutation<LoginResponse, LoginRequest>({
            query: (credentials) => ({
                url: "login",
                method: "POST",
                body: credentials,
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data: response } = await queryFulfilled;
                    dispatch(
                        setCredentials({
                            auth_type: "user",
                            user: response.data.user,
                            access_token: response.data.access_token,
                            stream_token: response.data.stream_token,
                            expires_at: response.data.expires_at
                                ? new Date(response.data.expires_at).getTime()
                                : undefined,
                        }),
                    );
                } catch (err) {
                    // Handle error silently - mutation will throw
                }
            },
        }),
        register: build.mutation<LoginResponse, RegisterRequest>({
            query: (userData) => ({
                url: "register",
                method: "POST",
                body: userData,
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data: response } = await queryFulfilled;
                    dispatch(
                        setCredentials({
                            auth_type: "user",
                            user: response.data.user,
                            access_token: response.data.access_token,
                            stream_token: response.data.stream_token,
                            expires_at: response.data.expires_at
                                ? new Date(response.data.expires_at).getTime()
                                : undefined,
                        }),
                    );
                } catch (err) {
                    // Handle error silently - mutation will throw
                }
            },
        }),
        protected: build.mutation<{ message: string }, void>({
            query: () => "protected",
        }),
        workstationLogin: build.mutation<
            WorkstationLoginResponse,
            WorkstationLoginRequest
        >({
            query: (credentials) => ({
                url: "login/workstation",
                method: "POST",
                body: credentials,
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data: response } = await queryFulfilled;
                    dispatch(
                        setCredentials({
                            auth_type: "workstation",
                            access_token: response.data.access_token,
                        }),
                    );
                } catch (err) {
                    // Handle error silently - mutation will throw
                }
            },
        }),
    }),
});

export const {
    useLoginMutation,
    useRegisterMutation,
    useWorkstationLoginMutation,
} = authApi;
