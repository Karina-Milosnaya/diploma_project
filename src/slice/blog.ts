import { createSlice, current } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blog: [],
  },
  reducers: {},
});

const { actions, reducer } = blogSlice;

export default reducer;

export const {} = actions;
