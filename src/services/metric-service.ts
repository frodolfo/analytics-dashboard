import RecipeType from "../types/RecipeType";

const GetTotalNumberOfRecipes: Function = (dataArray: RecipeType[]): number => {
  return dataArray.length;
};

const GetNumberOfRecipeCreators: Function = (
  dataArray: RecipeType[]
): number => {
  let numOfCreators = new Set();
  dataArray.map((data: RecipeType) => numOfCreators.add(data.created_by));

  return numOfCreators.size;
};

const GetFirstRecipeCreateDate: Function = (dataArray: RecipeType[]): string =>
  dataArray.sort(
    (prev: RecipeType, curr: RecipeType): number =>
      Date.parse(prev.created) - Date.parse(curr.created)
  )[0].created;

const GetTotalNumberOfViews: Function = (dataArray: RecipeType[]): number =>
  dataArray
    .map((data: RecipeType) => data.total_recipe_views)
    .reduce((prev: number, curr: number) => prev + curr, 0);

const GetRecipeWithMostViews: Function = (dataArray: RecipeType[]): number =>
  dataArray
    .map((data: RecipeType) => data.total_recipe_views)
    .reduce((prev: number, curr: number) => Math.max(prev, curr), -Infinity);

const GetRecipeCreatorWithMostViews: Function = (
  dataArray: RecipeType[]
): string =>
  dataArray.reduce((prev: RecipeType, curr: RecipeType) =>
    prev.total_recipe_views > curr.total_recipe_views ? prev : curr
  ).created_by;

export default {
  GetTotalNumberOfRecipes,
  GetNumberOfRecipeCreators,
  GetFirstRecipeCreateDate,
  GetTotalNumberOfViews,
  GetRecipeWithMostViews,
  GetRecipeCreatorWithMostViews,
};
