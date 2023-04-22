import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SearchTag, Banner, Category, Size, Color, Genre } from "../type/type";

export const globalApi = createApi({
  reducerPath: "globalApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/",
  }),

  tagTypes: ["SearchTag", "Banner", "Category", "Size", "Color", "Genre"],
  endpoints: (builder) => ({
    getAllSearchTag: builder.query<SearchTag[], void>({
      query() {
        return {
          url: `/search-tag`,
        };
      },
      transformResponse: (res: SearchTag[]) => res.sort((a: any, b: any) => b.id - a.id),
      providesTags: ["SearchTag"],
    }),

    getSingleSearchTag: builder.query<SearchTag, number>({
      query(id) {
        return {
          url: `/search-tag/${id}`,
        };
      },
      providesTags: ["SearchTag"],
    }),

    createSearchTag: builder.mutation<SearchTag, FormData>({
      query(newSearchTag) {
        return {
          url: "/search-tag",
          method: "POST",

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
        };
      },
      invalidatesTags: ["SearchTag"],
    }),

    // Banner
    getAllBanners: builder.query<Banner[], void>({
      query() {
        return {
          url: `/banner`,
        };
      },
      providesTags: ["Banner"],
    }),

    getSingleBanner: builder.query<Banner, string>({
      query(id) {
        return {
          url: `/banner/${id}`,
        };
      },
      providesTags: ["Banner"],
    }),


    createBanner: builder.mutation<Banner, FormData>({
      query(newBanner) {
        return {
          url: "/banner",
          method: "POST",

          body: newBanner,
        };
      },
      invalidatesTags: ["Banner"],
    }),

    updateBanner: builder.mutation<Banner, { id: string; updatedData: FormData }>({
      query({ id, updatedData }) {
        return {
          url: `/banner/${id}`,
          method: "PATCH",

          body: updatedData,
        };
      },
      invalidatesTags: ["Banner"],
    }),

    deleteBanner: builder.mutation<Banner, string>({
      query(id) {
        return {
          url: `/banner/${id}`,
          method: "Delete",
        };
      },
      invalidatesTags: ["Banner"],
    }),

    //Category=============================================>
    getAllCategory: builder.query<Category[], void>({
      query() {
        return {
          url: `/category`,
        };
      },
      transformResponse: (res: Category[]) => res.sort((a: any, b: any) => b.id - a.id),
      providesTags: ["Category"],
    }),

    getSingleCategory: builder.query<Category, number>({
      query(id) {
        return {
          url: `/category/${id}`,
        };
      },
      providesTags: ["Category"],
    }),

    createCategory: builder.mutation<Category, FormData>({
      query(newCategory) {
        return {
          url: "/category",
          method: "POST",

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
        };
      },
      invalidatesTags: ["Category"],
    }),

    //Size===============================================>
    getAllSize: builder.query<Size[], void>({
      query() {
        return {
          url: `/size`,
        };
      },
      providesTags: ["Size"],
    }),

    createSize: builder.mutation<Size, FormData>({
      query(data) {
        return {
          url: "/size",
          method: "POST",

          body: data,
        };
      },
      invalidatesTags: ["Size"],
    }),

    deleteSize: builder.mutation<Size, string>({
      query(id) {
        return {
          url: `/size/${id}`,
          method: "Delete",
        };
      },
      invalidatesTags: ["Size"],
    }),

    //Color===============================================>
    getAllColor: builder.query<Color[], void>({
      query() {
        return {
          url: `/color`,
        };
      },
      providesTags: ["Color"],
    }),

    createColor: builder.mutation<Color, FormData>({
      query(data) {
        return {
          url: "/color",
          method: "POST",

          body: data,
        };
      },
      invalidatesTags: ["Color"],
    }),

    deleteColor: builder.mutation<Color, number>({
      query(id) {
        return {
          url: `/color/${id}`,
          method: "Delete",
        };
      },
      invalidatesTags: ["Color"],
    }),

    //Genre===============================================>
    getAllGenre: builder.query<Genre[], void>({
      query() {
        return {
          url: `/genre`,
        };
      },
      providesTags: ["Color"],
    }),

    createGenre: builder.mutation<Genre, FormData>({
      query(data) {
        return {
          url: "/genre",
          method: "POST",

          body: data,
        };
      },
      invalidatesTags: ["Genre"],
    }),

    getSingleGenre: builder.query<Genre, string>({
      query(id) {
        return {
          url: `/genre/${id}`,
        };
      },
      providesTags: ["Genre"],
    }),

    updateGenre: builder.mutation<Genre, { id: string; updatedData: FormData }>({
      query({ id, updatedData }) {
        return {
          url: `/genre/${id}`,
          method: "PATCH",

          body: updatedData,
        };
      },
      invalidatesTags: ["Genre"],
    }),

    deleteGenre: builder.mutation<Genre, string>({
      query(id) {
        return {
          url: `/genre/${id}`,
          method: "Delete",
        };
      },
      invalidatesTags: ["Genre"],
    }),
  }),
});

export const {
  useGetAllSearchTagQuery,
  useCreateSearchTagMutation,
  useDeleteSearchTagMutation,
  useGetSingleSearchTagQuery,
  useUpdateSearchTagMutation,

  useGetAllBannersQuery,
  useGetSingleBannerQuery,
  useCreateBannerMutation,
  useDeleteBannerMutation,
  useUpdateBannerMutation,

  useCreateCategoryMutation,
  useDeleteCategoryMutation,
  useGetAllCategoryQuery,
  useUpdateCategoryMutation,
  useGetSingleCategoryQuery,

  useCreateSizeMutation,
  useDeleteSizeMutation,
  useGetAllSizeQuery,

  useCreateColorMutation,
  useDeleteColorMutation,
  useGetAllColorQuery,

  useGetAllGenreQuery,
  useCreateGenreMutation,
  useDeleteGenreMutation,
  useGetSingleGenreQuery,
  useUpdateGenreMutation,
} = globalApi;
