type RecipeItem = {
  recipe_id: number;
  created: Date;
  modified: Date;
  name: string;
  created_by: string;
  total_recipe_views: number;
};

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
  // {
  //   title: "First recipe create date",
  //   value: (dataArray: RecipeItem[]): Date =>
  //     dataArray.map<Date>(data: RecipeItem => dataArray.created).slice().sort((a: Date, b: Date) => b - a)

  //     // dataArray.map(data: RecipeItem => dataArray.created).sort((a: Date, b: Date) => b - a)
  //     //   .slice()
  //     //   .sort(
  //     //     (a: RecipeItem, b: RecipeItem) =>
  //     //       b.created - a.created
  //     //   )[0].created,
  // },
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
