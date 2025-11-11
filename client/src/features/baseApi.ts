import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout, selectAccessToken } from "./auth/authSlice";
import { RootState } from "../redux/store";
import { useDispatch } from "react-redux";

export const baseQuery = async (args: any, api: any, extraOptions: any) => {
    const rawBaseQuery = fetchBaseQuery({
        baseUrl: "/api",
        prepareHeaders: (headers, { getState }) => {
            const token = selectAccessToken(getState() as RootState);
            if (token) headers.set("Authorization", `Bearer ${token}`);
            return headers;
        },
    });

    const result = await rawBaseQuery(args, api, extraOptions);

    // Auto sign-out on token expiration / 401
    if (
        result.error &&
        (result.error.status === 401 ||
            result.error.data?.message === "token expired")
    ) {
        console.log("Signing out due to token expiration");
        const dispatch = useDispatch();
        dispatch(logout());
    }

    return result;
};
