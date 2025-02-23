import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    blogInfo: null,
};

export const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        addBlogInfo: (state, { payload }) => {
            state.blogInfo = payload;
        },
    },
});

export const { addBlogInfo } = blogSlice.actions;

export default blogSlice.reducer;
