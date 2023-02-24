import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SearchTag } from "../type/type";

export const globalApi = createApi({
  reducerPath: "globalApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
  }),

  tagTypes: ["SearchTag"],
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
  }),
});

export const { useGetAllSearchTagQuery, useCreateSearchTagMutation, useDeleteSearchTagMutation, useGetSingleSearchTagQuery, useUpdateSearchTagMutation } = globalApi;
