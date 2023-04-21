import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SearchTag, Banner, Category, Size, Color, Genre ,SubCategory} from "../type/type";

export const globalApi = createApi({
  reducerPath: "globalApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/",
  }),

  tagTypes: ["SearchTag", "Banner", "Category", "Size", "Color", "Genre","SubCategory"],
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

    //Size===============================================>
    getAllSize: builder.query<Size[], void>({
      query() {
        return {
          url: `/size`,
          // credentials: "include",
        };
      },
      providesTags: ["Size"],
    }),

    createSize: builder.mutation<Size, FormData>({
      query(data) {
        // console.log("success")
        return {
          url: "/size",
          method: "POST",
          // credentials: 'include',
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
          // credentials: 'include',
        };
      },
      invalidatesTags: ["Size"],
    }),

    //Color===============================================>
    getAllColor: builder.query<Color[], void>({
      query() {
        return {
          url: `/color`,
          // credentials: "include",
        };
      },
      providesTags: ["Color"],
    }),

    createColor: builder.mutation<Color, FormData>({
      query(data) {
        // console.log("success")
        return {
          url: "/color",
          method: "POST",
          // credentials: 'include',
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
          // credentials: 'include',
        };
      },
      invalidatesTags: ["Color"],
    }),

    //Genre===============================================>
    getAllGenre: builder.query<Genre[], void>({
      query() {
        return {
          url: `/genre`,
          // credentials: "include",
        };
      },
      providesTags: ["Color"],
    }),

    createGenre: builder.mutation<Genre, FormData>({
      query(data) {
        // console.log("success")
        return {
          url: "/genre",
          method: "POST",
          // credentials: 'include',
          body: data,
        };
      },
      invalidatesTags: ["Genre"],
    }),

    getSingleGenre: builder.query<Genre, string>({
      query(id) {
        return {
          url: `/genre/${id}`,
          // credentials: 'include',
        };
      },
      providesTags: ["Genre"],
    }),

    updateGenre: builder.mutation<Genre, { id: string; updatedData: FormData }>({
      query({ id, updatedData }) {
        return {
          url: `/genre/${id}`,
          method: "PATCH",
          // credentials: 'include',
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
          // credentials: 'include',
        };
      },
      invalidatesTags: ["Genre"],
    }),









    // subCategory
    getAllSubCategory: builder.query<SubCategory[], void>({
      query() {
        return {
          url: `/subCategory?{categoryId="642fdfed9852e894f0143280"}`,
        
          // credentials: "include",
        };
      },
      transformResponse: (res: SubCategory[]) => res.sort((a: any, b: any) => b.id - a.id),
      providesTags: ["SubCategory"],
    }),

    getSingleSubCategory: builder.query<SubCategory, number>({
      query(id) {
        return {
          url: `/subCategory/${id}`,
          // credentials: 'include',
        };
      },
      providesTags: ["SubCategory"],
    }),

  

  

   



  }),
});

export const {
  useGetAllSearchTagQuery,
  useCreateSearchTagMutation,
  useDeleteSearchTagMutation,
  useGetSingleSearchTagQuery,
  useUpdateSearchTagMutation,

  useCreateBannerMutation,
  useDeleteBannerMutation,
  useGetAllBannerQuery,
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



 useGetAllSubCategoryQuery,
 useGetSingleSubCategoryQuery

} = globalApi;
