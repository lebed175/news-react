import { useEffect, useState } from "react";
import { useDebounce } from "../helpers/useDebounce";

const key = "e73522c3c64d4bb8819f864f78b61c76";

import { INews } from "../interfaces";
import { IFilter } from "../interfaces";

export const useGetNews = ({
  currentPage = 1,
  pageSize = 10,
  keywords,
  selectedCategory = "All",
}: IFilter) => {
  const debouncedValue = useDebounce(keywords, 1500);

  const newsUrl = `https://newsapi.org/v2/everything?q=${
    !keywords ? selectedCategory : keywords
  }&pageSize=${pageSize}&page=${currentPage}&apiKey=${key}`;

  const [news, setNews] = useState<INews[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const response = await fetch(newsUrl);

      if (!response.ok) {
        setLoading(false);
        throw new Error("Ошибка с сервером!");
      }

      const data = await response.json();
      setNews(data.articles);
      setLoading(false);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("Неизвестная ошибка");
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [currentPage, selectedCategory, debouncedValue]);

  return { news, loading, error };
};

export const useGetLatestNews = () => {
  const latestNewsUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`;

  const [latestNews, setLatestNews] = useState<INews[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const response = await fetch(latestNewsUrl);

      if (!response.ok) {
        setLoading(false);
        throw new Error("Ошибка с сервером!");
      }

      const data = await response.json();
      setLatestNews(data.articles);
      setLoading(false);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError("Неизвестная ошибка");
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return { latestNews, loading, error };
};
