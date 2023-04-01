import { createSlice } from "@reduxjs/toolkit";
import { SearchTagState } from "./searchTag";
import * as actions from "./searchTagAction";

const initialState: SearchTagState = {
  searchTags: [],
  status: "idle",
  error: null,
};

export const searchTagSlice = createSlice({
  name: "search-tag",
  initialState,

  extraReducers: (builder: any) => {
    builder.addCase(actions.fetchAllSearchTag.pending, (state: any) => {
      state.status = "loading";
    }),
      builder.addCase(actions.fetchAllSearchTag.fulfilled, (state: any, action: any) => {
        state.status = "succeeded";
        state.searchTags = action.payload;
      }),
      builder.addCase(actions.fetchAllSearchTag.rejected, (state: any, action: any) => {
        state.status = "failed";
        state.error = action.error.message ?? "Something went wrong.";
      });
  },
} as any);

export const { reducer: searchTagReducer, actions: searchTagActions } = searchTagSlice;

//   extraReducers: (builder: any) => {
//     builder.addCase(actions.fetchAllSearchTag.pending, (state: { status: string }) => {
//       state.status = "loading";
//     }),
//       builder.addCase(actions.fetchAllSearchTag.fulfilled, (state: { status: string; searchTags: SearchTag[] }, action: PayloadAction<SearchTag[]>) => {
//         state.status = "succeeded";
//         state.searchTags = action.payload;
//       }),
//       builder.addCase(actions.fetchAllSearchTag.rejected, (state: { status: string; error: any }, action: { error: { message: string } }) => {
//         state.status = "failed";
//         state.error = action.error.message ?? "Something went wrong.";
//       });
//   },
// } as any);
