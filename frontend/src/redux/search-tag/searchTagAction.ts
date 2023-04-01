import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SearchTag } from "./searchTag";

export const fetchAllSearchTag = createAsyncThunk("searchTag/getAll", async () => {
  try {
    const response = await axios.get<SearchTag[]>("http://localhost:4000/search-tag");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
