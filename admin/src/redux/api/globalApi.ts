import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SearchTag, Banner, Category } from "../type/type";

export const globalApi = createApi({
  reducerPath: "globalApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
  }),

  tagTypes: ["SearchTag", "Banner", "Category"],
  endpoints: (builder) => ({
    getAllSearchTag: builder.query<SearchTag[], void>({
      query() {
        return {
          url: `/search-tag`,
          // credentials: "include",
        };
      },
      transformResponse: (res: SearchTag[]) => res.sort((a: any, b: any) => b.id - a.id),
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

    createSearchTag: builder.mutation<SearchTag, FormData>({
      query(newSearchTag) {
        // console.log("success")
        return {
          url: "/search-tag",
          method: "POST",
          // credentials: 'include',
          body: newSearchTag,
        };
      },
      invalidatesTags: ["SearchTag"],
    }),

    updateSearchTag: builder.mutation<SearchTag, { id: number; updatedData: FormData }>({
      query({ id, updatedData }) {
        return {
          url: `/search-tag/${id}`,
          method: "PATCH",
          // credentials: 'include',
          body: updatedData,
        };
      },
      invalidatesTags: ["SearchTag"],
    }),

    deleteSearchTag: builder.mutation<SearchTag, number>({
      query(id) {
        return {
          url: `/search-tag/${id}`,
          method: "Delete",
          // credentials: 'include',
        };
      },
      invalidatesTags: ["SearchTag"],
    }),

    //Banner============================================>
    getAllBanner: builder.query<Banner[], void>({
      query() {
        return {
          url: `/banner`,
          // credentials: "include",
        };
      },
      transformResponse: (res: Banner[]) => res.sort((a: any, b: any) => b.id - a.id),
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

    createBanner: builder.mutation<Banner, FormData>({
      query(newBanner) {
        // console.log("success")
        return {
          url: "/banner",
          method: "POST",
          // credentials: 'include',
          body: newBanner,
        };
      },
      invalidatesTags: ["Banner"],
    }),

    updateBanner: builder.mutation<Banner, { id: number; updatedData: FormData }>({
      query({ id, updatedData }) {
        return {
          url: `/banner/${id}`,
          method: "PATCH",
          // credentials: 'include',
          body: updatedData,
        };
      },
      invalidatesTags: ["Banner"],
    }),

    deleteBanner: builder.mutation<Banner, number>({
      query(id) {
        return {
          url: `/banner/${id}`,
          method: "Delete",
          // credentials: 'include',
        };
      },
      invalidatesTags: ["Banner"],
    }),

    //Category=============================================>
    getAllCategory: builder.query<Category[], void>({
      query() {
        return {
          url: `/category`,
          // credentials: "include",
        };
      },
      transformResponse: (res: Category[]) => res.sort((a: any, b: any) => b.id - a.id),
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

    createCategory: builder.mutation<Category, FormData>({
      query(newCategory) {
        // console.log("success")
        return {
          url: "/category",
          method: "POST",
          // credentials: 'include',
          body: newCategory,
        };
      },
      invalidatesTags: ["Category"],
    }),

    updateCategory: builder.mutation<Category, { id: number; updatedData: FormData }>({
      query({ id, updatedData }) {
        return {
          url: `/category/${id}`,
          method: "PATCH",
          // credentials: 'include',
          body: updatedData,
        };
      },
      invalidatesTags: ["Category"],
    }),

    deleteCategory: builder.mutation<Category, number>({
      query(id) {
        return {
          url: `/category/${id}`,
          method: "Delete",
          // credentials: 'include',
        };
      },
      invalidatesTags: ["Category"],
    }),
  }),
});

export const { useGetAllSearchTagQuery, useCreateSearchTagMutation, useDeleteSearchTagMutation, useGetSingleSearchTagQuery, useUpdateSearchTagMutation, useCreateBannerMutation, useDeleteBannerMutation, useGetAllBannerQuery, useUpdateBannerMutation, useCreateCategoryMutation, useDeleteCategoryMutation, useGetAllCategoryQuery, useUpdateCategoryMutation, useGetSingleCategoryQuery } = globalApi;
