import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    portfolioInfo: null,
};

export const poftfolioSlice = createSlice({
    name: "portfolio",
    initialState,
    reducers: {
        addPortfolioInfo: (state, { payload }) => {
            state.portfolioInfo = payload;
        },
    },
});

export const { addPortfolioInfo } = poftfolioSlice.actions;

export default poftfolioSlice.reducer;
