import { createContext } from "react";
import RecipeType from "../types/RecipeType";

const RecipeContext = createContext<RecipeType[]>([]);

export default RecipeContext;
