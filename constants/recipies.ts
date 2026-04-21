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
  {
    id: "5",
    name: "Chicken & Turnip Lentil Soup",
    time: "40 min",
    likes: 110,
  },
];

export const recepie = {
  title: "Red Lentil Soup with Chicken and Turnips",
  description:
    'Red Lentil Soup with Chicken and Turnips might be a good recipe to expand your main course repertoire. This recipe serves 8 and costs $3.0 per serving. One serving contains <b>477 calories</b>, <b>27g of protein</b>, and <b>20g of fat</b>. It is brought to you by Pink When. 1866 people have tried and liked this recipe. It can be enjoyed any time, but it is especially good for <b>Autumn</b>. From preparation to the plate, this recipe takes approximately <b>55 minutes</b>. It is a good option if you\'re following a <b>gluten free and dairy free</b> diet. Head to the store and pick up salt and pepper, canned tomatoes, flat leaf parsley, and a few other things to make it today. Overall, this recipe earns a <b>spectacular spoonacular score of 99%</b>. If you like this recipe, you might also like recipes such as <a href="https://spoonacular.com/recipes/red-lentil-and-chicken-soup-682185">Red Lentil and Chicken Soup</a>, <a href="https://spoonacular.com/recipes/red-lentil-and-chicken-soup-1058971">Red Lentil and Chicken Soup</a>, and <a href="https://spoonacular.com/recipes/red-lentil-soup-34121">Red-Lentil Soup</a>.',
};
