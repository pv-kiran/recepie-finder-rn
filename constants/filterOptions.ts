export interface FilterOption {
  key: string | number;
  label: string;
}

export const MEAL_TYPES: FilterOption[] = [
  { key: "breakfast", label: "Breakfast" },
  { key: "lunch", label: "Lunch" },
  { key: "dinner", label: "Dinner" },
  { key: "snack", label: "Snack" },
  { key: "dessert", label: "Dessert" },
];

// 🌍 Cuisine
export const CUISINES: FilterOption[] = [
  { key: "indian", label: "Indian" },
  { key: "italian", label: "Italian" },
  { key: "chinese", label: "Chinese" },
  { key: "mexican", label: "Mexican" },
  { key: "thai", label: "Thai" },
];

// 🥗 Diet
export const DIETS: FilterOption[] = [
  { key: "vegetarian", label: "Vegetarian" },
  { key: "vegan", label: "Vegan" },
  { key: "gluten free", label: "Gluten Free" },
  { key: "ketogenic", label: "Keto" },
  { key: "paleo", label: "Paleo" },
];

// ⏱️ Cooking Time
export const COOKING_TIME: FilterOption[] = [
  { key: 15, label: "Under 15 min" },
  { key: 30, label: "Under 30 min" },
  { key: 45, label: "Under 45 min" },
  { key: 60, label: "Under 1 hour" },
];

// 🔥 Sort
export const SORT_OPTIONS: FilterOption[] = [
  { key: "popularity", label: "Popularity" },
  { key: "healthiness", label: "Health" },
  { key: "time", label: "Time" },
  { key: "calories", label: "Calories" },
];
