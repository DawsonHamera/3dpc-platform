import { RootState } from "@react-three/fiber";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { selectAccessToken } from "./auth/authSlice";


export const baseQueryWithAuth = fetchBaseQuery({
    baseUrl: "/api",
    prepareHeaders: (headers, { getState }) => {
        const token = selectAccessToken(getState() as RootState);
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    },
});
