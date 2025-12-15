export interface INews {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  title: string;
  urlToImage: ImageUrlType;
  source: SourceType;
}

type SourceType = {
  id: string;
  name: string;
};
type ImageUrlType = string | undefined;

export interface IFilter {
  currentPage: number;
  selectedCategory: CategoriesType;
  keywords: string;
  pageSize: number;
  totalPages: number;
}

export interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  handleNextPage: () => void;
  handlePrevPage: () => void;
  handlePageClick: (currentPage: number) => void;
}

export type CategoriesType =
  | "All"
  | "business"
  | "entertainment"
  | "general"
  | "health"
  | "science"
  | "sports"
  | "technology"
  | "regional"
  | "lifestyle"
  | "programming"
  | "world"
  | "finance";

export type SkeletonType = "banner" | "item";
export type DirectionType = "row" | "column";
