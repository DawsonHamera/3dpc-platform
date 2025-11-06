import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import { authApi } from "../features/auth/authApi"
import { tasksApi } from "../features/crud/tasksApi"
import { materialsApi } from "../features/crud/materialsApi"
import { modelsApi } from "../features/crud/modelsApi"
import { printersApi } from "../features/crud/printersApi"
import { requestsApi } from "../features/crud/requestsApi"
import { usersApi } from "../features/crud/users/usersApi"
import authReducer from '../features/auth/authSlice'
import { workflowStepsApi } from "../features/crud/workflowStepsApi"
import { filesApi } from "../features/crud/filesApi"
import { processApi } from "../features/crud/processApi"
import { workflowApi } from "../features/crud/workflowApi"
import { stepsApi } from "../features/crud/steps/stepsApi"
import { processTemplatesApi } from "../features/crud/ProcessTemplates/processTemplatesApi"
import { processInstancesApi } from "../features/crud/processInstancesApi"
import { eventsApi } from "../features/crud/events/eventsApi"
import { shopApi } from "../features/crud/shop/shopApi"


const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  [materialsApi.reducerPath]: materialsApi.reducer,
  [printersApi.reducerPath]: printersApi.reducer,
  [modelsApi.reducerPath]: modelsApi.reducer,
  [tasksApi.reducerPath]: tasksApi.reducer,
  [requestsApi.reducerPath]: requestsApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
  [workflowStepsApi.reducerPath]: workflowStepsApi.reducer,
  [filesApi.reducerPath]: filesApi.reducer,
  [processApi.reducerPath]: processApi.reducer,
  [workflowApi.reducerPath]: workflowApi.reducer,
  [stepsApi.reducerPath]: stepsApi.reducer,
  [processTemplatesApi.reducerPath]: processTemplatesApi.reducer,
  [processInstancesApi.reducerPath]: processInstancesApi.reducer,
  [eventsApi.reducerPath]: eventsApi.reducer,
  [shopApi.reducerPath]: shopApi.reducer,
  auth: authReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware, 
      materialsApi.middleware, 
      printersApi.middleware, 
      modelsApi.middleware,
      tasksApi.middleware,
      requestsApi.middleware,
      usersApi.middleware,
      workflowStepsApi.middleware,
      filesApi.middleware,
      processApi.middleware,
      workflowApi.middleware,
      stepsApi.middleware,
      processTemplatesApi.middleware,
      processInstancesApi.middleware,
      eventsApi.middleware,
      shopApi.middleware
    ),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
