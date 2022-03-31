import RecipeItem from "../types/RecipeType";

const METRICS = [
  {
    title: "Total number of recipes",
    value: (dataArray: RecipeItem[]): number => {
      return dataArray.length;
    },
  },
  {
    title: "Total number of recipe creators",
    value: (dataArray: RecipeItem[]): number => {
      let numOfCreators = new Set();
      dataArray.map((data: RecipeItem) => numOfCreators.add(data.created_by));

      return numOfCreators.size;
    },
  },
  {
    title: "First recipe create date",
    value: (dataArray: RecipeItem[]): string =>
      dataArray.sort(
        (prev: RecipeItem, curr: RecipeItem): number =>
          Date.parse(prev.created) - Date.parse(curr.created)
      )[0].created,
  },
  {
    title: "Total number of recipe views",
    value: (dataArray: RecipeItem[]): number =>
      dataArray
        .map((data: RecipeItem) => data.total_recipe_views)
        .reduce((prev: number, curr: number) => prev + curr, 0),
  },
  {
    title: "Recipe with the most views",
    value: (dataArray: RecipeItem[]): number =>
      dataArray
        .map((data: RecipeItem) => data.total_recipe_views)
        .reduce(
          (prev: number, curr: number) => Math.max(prev, curr),
          -Infinity
        ),
  },
  {
    title: "Recipe creator with the most views",
    value: (dataArray: RecipeItem[]): string =>
      dataArray.reduce((prev: RecipeItem, curr: RecipeItem) =>
        prev.total_recipe_views > curr.total_recipe_views ? prev : curr
      ).created_by,
  },
];

export default METRICS;
