import MetricType from "../types/MetricType";
import MetricService from "./metric-service";

const METRICS: MetricType[] = [
  {
    title: "Total number of recipes",
    value: MetricService.GetTotalNumberOfRecipes,
  },
  {
    title: "Total number of recipe creators",
    value: MetricService.GetNumberOfRecipeCreators,
  },
  {
    title: "First recipe create date",
    value: MetricService.GetFirstRecipeCreateDate,
  },
  {
    title: "Total number of recipe views",
    value: MetricService.GetTotalNumberOfViews,
  },
  {
    title: "Recipe with the most views",
    value: MetricService.GetRecipeWithMostViews,
  },
  {
    title: "Recipe creator with the most views",
    value: MetricService.GetRecipeCreatorWithMostViews,
  },
];

export default METRICS;
