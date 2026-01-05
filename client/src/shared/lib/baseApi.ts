import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useDispatch } from "react-redux";
import { logout, selectAccessToken } from "../../member-app";
import { RootState } from "../redux/store";

// Helper function to recursively convert date strings to Date objects
function parseDates(obj: any): any {
    if (obj === null || obj === undefined) return obj;

    if (typeof obj === "string") {
        // Check if string matches ISO date format
        const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z?$/;
        if (dateRegex.test(obj)) {
            return new Date(obj);
        }
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.map(parseDates);
    }

    if (typeof obj === "object") {
        const parsed: any = {};
        for (const key in obj) {
            parsed[key] = parseDates(obj[key]);
        }
        return parsed;
    }

    return obj;
}

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
        result.error.status === 401 &&
        (result.error.data as any)?.message === "token expired"
    ) {
        console.log("Signing out due to token expiration");
        const dispatch = useDispatch();
        dispatch(logout());
    }

    // Transform date strings to Date objects
    if (result.data) {
        result.data = parseDates(result.data);
    }

    return result;
};
