import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SearchTag, Banner, Category, Size, Color, Genre } from "../type/type";

export const globalApi = createApi({
  reducerPath: "globalApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
  }),

  tagTypes: ["SearchTag", "Banner", "Category", "Size", "Color", "Genre"],
  endpoints: (builder) => ({
    getAllSearchTag: builder.query<SearchTag[], void>({
      query() {
        return {
          url: `/search-tag`,
          // credentials: "include",
        };
      },
      providesTags: ["SearchTag"],
    }),

    getSingleSearchTag: builder.query<SearchTag, number>({
      query(id) {
        return {
          url: `/search-tag/${id}`,
          // credentials: 'include',
        };
      },
      providesTags: ["SearchTag"],
    }),

    getAllBanner: builder.query<Banner[], void>({
      query() {
        return {
          url: `/banner`,
          // credentials: "include",
        };
      },
      providesTags: ["Banner"],
    }),

    getSingleBanner: builder.query<Banner, number>({
      query(id) {
        return {
          url: `/banner/${id}`,
          // credentials: 'include',
        };
      },
      providesTags: ["Banner"],
    }),

    getAllCategory: builder.query<Category[], void>({
      query() {
        return {
          url: `/category`,
          // credentials: "include",
        };
      },
      providesTags: ["Category"],
    }),

    getSingleCategory: builder.query<Category, number>({
      query(id) {
        return {
          url: `/category/${id}`,
          // credentials: 'include',
        };
      },
      providesTags: ["Category"],
    }),

    getAllSize: builder.query<Size[], void>({
      query() {
        return {
          url: `/size`,
          // credentials: "include",
        };
      },
      providesTags: ["Size"],
    }),

    getAllColor: builder.query<Color[], void>({
      query() {
        return {
          url: `/color`,
          // credentials: "include",
        };
      },
      providesTags: ["Color"],
    }),

    getAllGenre: builder.query<Genre[], void>({
      query() {
        return {
          url: `/genre`,
          // credentials: "include",
        };
      },
      providesTags: ["Color"],
    }),
  }),
});

export const { useGetAllSearchTagQuery, useGetSingleSearchTagQuery, useGetAllBannerQuery, useGetAllCategoryQuery, useGetSingleCategoryQuery, useGetAllSizeQuery, useGetAllColorQuery, useGetAllGenreQuery } = globalApi;
