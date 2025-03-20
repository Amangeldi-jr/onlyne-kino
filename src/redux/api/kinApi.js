import {createApi} from "@reduxjs/toolkit/query/react";
import {baseQuery} from "./baseQuery.js";


export const kinApi = createApi({
    reducerPath: "kinApi",
    baseQuery,
    endpoints: (build) => ({
        getAllMovies: build.query({
            query: ({ category, language = "ru" }) =>
                category
                    ? `discover/movie?with_genres=${category}&language=${language}`
                    : `discover/movie?language=${language}`,
        }),
        getMovieCategories: build.query({
            query: () => `/movie/now_playing`,
        }),
        getMovieTrailer: build.query({
            query: (movieId) =>
                `movie/${movieId}/videos`,
        }),
        getNewMovies: build.query({
            query: (movieId) =>
                ``,
        }),
        getPopularPersons: build.query({
            query: ({ timeframe }) => `person/popular?timeframe=${timeframe}&language=ru`,
        }),
        getLatestNews: build.query({
            query: () => `movie/upcoming?language=ru`,
        }),

    }),
});

export const {
    useGetAllMoviesQuery,
    useGetMovieCategoriesQuery,
    useGetMovieTrailerQuery,
    useGetPopularPersonsQuery,
    useGetLatestNewsQuery,} = kinApi;
