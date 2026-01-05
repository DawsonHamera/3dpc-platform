import { createApi } from "@reduxjs/toolkit/query/react";
import { LoginRequest, LoginResponse, RegisterRequest } from "./authTypes";
import { baseQuery } from "../../../shared/lib/baseApi";

export const authApi = createApi({
    baseQuery: baseQuery,
    endpoints: (build) => ({
        login: build.mutation<LoginResponse, LoginRequest>({
            query: (credentials) => ({
                url: "login",
                method: "POST",
                body: credentials,
            }),
        }),
        register: build.mutation<LoginResponse, RegisterRequest>({
            query: (userData) => ({
                url: "register",
                method: "POST",
                body: userData,
            }),
        }),
        protected: build.mutation<{ message: string }, void>({
            query: () => "protected",
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
