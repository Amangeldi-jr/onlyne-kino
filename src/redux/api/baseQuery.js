import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = import.meta.env.VITE_API_KEY;

export const baseQuery = fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
    prepareHeaders: (headers) => {
        headers.set("Authorization", `Bearer ${API_KEY}`);
        return headers;
    }
});
