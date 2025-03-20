import { configureStore } from "@reduxjs/toolkit";
import { kinApi } from "./api/kinApi.js";

export const store = configureStore({
    reducer: {
        [kinApi.reducerPath]: kinApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(kinApi.middleware),
});
