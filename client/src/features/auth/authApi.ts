import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { LoginResponse, LoginRequest, RegisterRequest } from './authTypes'
import { baseQueryWithAuth } from '../baseApi'

export const authApi = createApi({
    baseQuery: baseQueryWithAuth,
    endpoints: (build) => ({
        login: build.mutation<LoginResponse, LoginRequest>({
            query: (credentials) => ({
                url: 'login',
                method: 'POST',
                body: credentials,
            }),
        }),
        register: build.mutation<LoginResponse, RegisterRequest>({
            query: (userData) => ({
                url: 'register',
                method: 'POST',
                body: userData,
            }),
        }),
        protected: build.mutation<{ message: string }, void>({
            query: () => 'protected',
        }),
    }),
})

export const { useLoginMutation, useRegisterMutation } = authApi
