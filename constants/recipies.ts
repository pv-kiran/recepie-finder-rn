export interface Recipe {
  id: string;
  name: string;
  time: string;
  likes: number;
}

export const RECEPIE_DATA: Recipe[] = [
  {
    id: "1",
    name: "Red Lentil Chicken Soup",
    time: "35 min",
    likes: 140,
  },
  {
    id: "2",
    name: "Chicken & Turnip Lentil Soup",
    time: "40 min",
    likes: 110,
  },
  {
    id: "3",
    name: "Hearty Lentil Chicken Soup",
    time: "30 min",
    likes: 95,
  },
  {
    id: "4",
    name: "Rustic Lentil Chicken Soup",
    time: "45 min",
    likes: 120,
  },
];
