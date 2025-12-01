import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { authApi } from "../features/auth/authApi";
import authReducer from "../features/auth/authSlice";
import { usersApi } from "../features/users/usersApi";
import { eventsApi } from "../features/events/eventsApi";
import { filesApi } from "../features/files/filesApi";
import { recyclingLogsApi } from "../features/recycling/recyclingApi";
import { tasksApi } from "../features/tasks/tasksApi";
import { modelsApi } from "../features/models/modelsApi";
import { materialsApi } from "../features/materials/materialsApi";
import { productTemplatesApi } from "../features/productTemplates/productTemplatesApi";
import { ordersApi } from "../features/orders/ordersApi";
import { printersApi } from "../features/printers/printersApi";

const rootReducer = combineReducers({
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [eventsApi.reducerPath]: eventsApi.reducer,
    [filesApi.reducerPath]: filesApi.reducer,
    [recyclingLogsApi.reducerPath]: recyclingLogsApi.reducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
    [modelsApi.reducerPath]: modelsApi.reducer,
    [materialsApi.reducerPath]: materialsApi.reducer,
    [productTemplatesApi.reducerPath]: productTemplatesApi.reducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
    [printersApi.reducerPath]: printersApi.reducer,
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
            productTemplatesApi.middleware,
            ordersApi.middleware,
            printersApi.middleware
        ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
