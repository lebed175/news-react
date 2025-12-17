import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IFilter, INews } from "../../interfaces/index";
import { PAGE_SIZE, TOTAL_PAGES } from "../../constants/constants";

interface State {
  news: INews[];
  filters: IFilter;
}

const initialState: State = {
  news: [],
  filters: {
    currentPage: 1,
    selectedCategory: "All",
    keywords: "",
    pageSize: PAGE_SIZE,
    totalPages: TOTAL_PAGES,
  },
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setNews: (state, action: PayloadAction<INews[]>) => {
      state.news = action.payload;
    },
    setFilters: (
      state,
      action: PayloadAction<{ key: string; value: number | string | null }>
    ) => {
      const { key, value } = action.payload;
      state.filters = { ...state.filters, [key]: value };
    },
  },
});

export const { setNews, setFilters } = newsSlice.actions;

export default newsSlice.reducer;
