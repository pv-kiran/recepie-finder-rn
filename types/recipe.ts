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

export type Ingredient = {
  name: string;
  image: string;
  amount: number;
};

export type InstructionStep = {
  number: number;
  step: string;
};

export type RecipeDetails = {
  id: number;
  image: string;
  title: string;
  preparationMinutes?: number;
  cookingMinutes?: number;
  servings: number;
  summary: string;
  weightWatcherSmartPoints: number;
  pricePerServing: number;
  aggregateLikes: number;
  extendedIngredients: Ingredient[];

  analyzedInstructions: {
    steps: InstructionStep[];
  }[];
};
