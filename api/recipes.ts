import { RecipeDetails, RecipesParams, RecipesResponse } from "@/types/recipe";
import { axiosInstance } from "./axios";

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;

export const fetchRecipes = async (
  params?: RecipesParams,
): Promise<RecipesResponse> => {
  const res = await axiosInstance.get<RecipesResponse>(
    "/recipes/complexSearch",
    {
      params: {
        apiKey: API_KEY,
        addRecipeInformation: true,
        number: params?.number ?? 6,
        query: params?.query,
      },
    },
  );

  return res.data;
};

export const fetchRecipeDetails = async (
  id: number,
): Promise<RecipeDetails> => {
  const res = await axiosInstance.get<RecipeDetails>(
    `/recipes/${id}/information`,
    {
      params: {
        apiKey: API_KEY,
      },
    },
  );

  return res.data;
};
