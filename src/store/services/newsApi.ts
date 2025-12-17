import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { INews } from "../../interfaces";

const key = "e73522c3c64d4bb8819f864f78b61c76";

interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: INews[];
}

type NewsParamsType = {
  currentPage?: number;
  pageSize?: number;
  keywords?: string;
  selectedCategory?: string;
};

type LatestNewsParamsType = {
  country?: string;
};

const baseUrl = `https://newsapi.org/v2`;

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getNews: builder.query<NewsApiResponse, NewsParamsType>({
      query: (params) => {
        const {
          currentPage = 1,
          pageSize = 10,
          keywords,
          selectedCategory,
        } = params;

        return {
          url: "/everything",
          params: {
            apiKey: key,
            page: currentPage,
            pageSize: pageSize,
            q: !keywords ? selectedCategory : keywords,
          },
        };
      },
    }),

    getLatestNews: builder.query<NewsApiResponse, LatestNewsParamsType>({
      query: (params) => {
        const { country = "us" } = params;

        return {
          url: "/top-headlines",
          params: {
            apiKey: key,
            country: country,
          },
        };
      },
    }),
  }),
});

export const { useGetNewsQuery, useGetLatestNewsQuery } = newsApi;
