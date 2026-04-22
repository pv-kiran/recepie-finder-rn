export type Recipe = {
  id: number;
  image: string;
  title: string;
  aggregateLikes: number;
  summary: string;
  readyInMinutes: number;
};

export type RecipesResponse = {
  results: Recipe[];
  offset: number;
  number: number;
  totalResults: number;
};

export type RecipesParams = {
  number?: number;
  query?: string;
};
