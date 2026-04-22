import { fetchRecipes } from "@/api/recipes";
import { RecipesParams } from "@/types/recipe";
import { useQuery } from "@tanstack/react-query";

export const useRecipes = (params?: RecipesParams) => {
  return useQuery({
    queryKey: ["recipes", params],
    queryFn: () => fetchRecipes(params),
  });
};
