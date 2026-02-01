import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
    authApi,
    usersApi,
    eventsApi,
    filesApi,
    recyclingLogsApi,
    tasksApi,
    modelsApi,
    materialsApi,
    ordersApi,
    printersApi,
    productsApi,
} from "../../member-app";
import authReducer  from "../../member-app/features/auth/authSlice";
import { activityApi } from "../../member-app/features/activity/activityApi";

const rootReducer = combineReducers({
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [eventsApi.reducerPath]: eventsApi.reducer,
    [filesApi.reducerPath]: filesApi.reducer,
    [recyclingLogsApi.reducerPath]: recyclingLogsApi.reducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
    [modelsApi.reducerPath]: modelsApi.reducer,
    [materialsApi.reducerPath]: materialsApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    [printersApi.reducerPath]: printersApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [activityApi.reducerPath]: activityApi.reducer,
    auth: authReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authApi.middleware,
            usersApi.middleware,
            eventsApi.middleware,
            filesApi.middleware,
            recyclingLogsApi.middleware,
            tasksApi.middleware,
            modelsApi.middleware,
            materialsApi.middleware,
            ordersApi.middleware,
            printersApi.middleware,
            productsApi.middleware,
            activityApi.middleware
        ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
