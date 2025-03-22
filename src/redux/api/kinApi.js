import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery.js";

export const kinApi = createApi({
    reducerPath: "kinApi",
    baseQuery,
    endpoints: (build) => ({
        getAllMovies: build.query({
            query: ({ category, year, language = "ru" }) => {
                let query = `discover/movie?language=${language}`;
                if (category) query += `&with_genres=${category}`;
                if (year) query += `&primary_release_year=${year}`;
                return query;
            }
        }),

        getMovieCategories: build.query({
            query: () => `/movie/now_playing`,
        }),

        getMovieTrailer: build.query({
            query: (movieId) => `movie/${movieId}/videos`,
        }),

        getNewMovies: build.query({
            query: (movieId) => ``,
        }),

        getPopularPersons: build.query({
            query: ({ timeframe }) => `trending/person/${timeframe}?language=ru`,
        }),

        getLatestNews: build.query({
            query: () => `movie/upcoming?language=ru`,
        }),

        searchAll: build.query({
            query: (query) => `search/multi?query=${query}&language=ru`,
        }),

    }),
});

export const {
    useGetAllMoviesQuery,
    useGetMovieCategoriesQuery,
    useGetMovieTrailerQuery,
    useGetPopularPersonsQuery,
    useGetLatestNewsQuery,
    useSearchAllQuery,  // 🔹 Издөө үчүн кошулган hook
} = kinApi;