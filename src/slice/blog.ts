import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import { error } from "console";

export const getPosts = createAsyncThunk(
  "blog/getPosts",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        "https://api.spaceflightnewsapi.net/v4/articles/?limit=12"
      );
      if (!response.ok) {
        throw new Error("Не удалось загрузить данные");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

export const getOnePost = createAsyncThunk(
  "blog/getOnePost",
  async function (postId: string | undefined, { rejectWithValue }) {
    try {
      const response = await fetch(
        `https://api.spaceflightnewsapi.net/v4/articles/${postId}/`
      );
      if (!response.ok) {
        throw new Error("Не удалось загрузить данные");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    posts: [],
    error: null,
    status: null,
    post: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    return (
      builder.addCase(getPosts.pending, (state: any) => {
        state.status = "loading";
        state.error = null;
      }),
      builder.addCase(
        getPosts.fulfilled,
        (state: any, { payload }: { payload: any }) => {
          state.status = "resolved";
          state.error = null;
          state.posts = payload.results;
        }
      ),
      builder.addCase(
        getPosts.rejected,
        (state: any, { payload }: { payload: any }) => {
          state.status = "rejected";
          state.error = payload;
          state.posts = [];
        }
      ),
      builder.addCase(getOnePost.pending, (state: any) => {
        state.post = null;
        state.status = "loading";
        state.error = null;
      }),
      builder.addCase(
        getOnePost.fulfilled,
        (state: any, { payload }: { payload: any }) => {
          state.status = "resolved";
          state.error = null;
          state.post = payload;
        }
      ),
      builder.addCase(
        getOnePost.rejected,
        (state: any, { payload }: { payload: any }) => {
          state.status = "rejected";
          state.error = payload;
          // state.posts = [];
        }
      )
    );
  },
});

const { actions, reducer } = blogSlice;

export default reducer;

// export const {} = actions;
