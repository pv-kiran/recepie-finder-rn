import { images } from "@/assets/images";

import { ImageSourcePropType } from "react-native";

export interface RecipeItem {
  id: string;
  image: ImageSourcePropType;
}

export const DATA: RecipeItem[] = [
  { id: "1", image: images.feautred },
  { id: "2", image: images.feautred },
  { id: "3", image: images.feautred },
  { id: "4", image: images.feautred },
];
