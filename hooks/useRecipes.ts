import { fetchRecipeDetails, fetchRecipes } from "@/api/recipes";
import { RecipesParams } from "@/types/recipe";
import { useQuery } from "@tanstack/react-query";

export const useRecipes = (params?: RecipesParams) => {
  return useQuery({
    queryKey: ["recipes", params],
    queryFn: () => fetchRecipes(params),
  });
};

export const useRecipeDetails = (id: number) => {
  return useQuery({
    queryKey: ["recipeDetails", id],
    queryFn: () => fetchRecipeDetails(id),
    enabled: !!id,
  });
};
