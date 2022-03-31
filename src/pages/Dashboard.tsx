import React, { useEffect, useState } from "react";
import { Paper, Typography } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { TableView, Filter } from "../components/";

import RecipeType from "../types/RecipeType";
import Metrics from "../services/metrics";
import RecipesContext from "../contexts/RecipesContext";

// Since it's a static data source, we'll just read it in
// ahead of time and not have utilize useEffect to read the
// data in.
import recipeData from "../../data.json";

const Dashboard = () => {
  const [recipeCreators, setRecipeCreators] = useState<string[]>([]);
  const [recipeItems, setRecipeItems] = useState<RecipeType[]>([]);

  const filterRecipeDataByCreator = (creator: string): void => {
    let filteredRecipes: RecipeType[] = [];

    if (!creator || creator.toUpperCase() === "ALL") {
      filteredRecipes = [...recipeData];
    } else {
      filteredRecipes = recipeData.filter((recipe: RecipeType) => {
        if (recipe.created_by === creator) {
          return recipe;
        }
      });
    }
    setRecipeItems([...filteredRecipes]);
  };

  useEffect(() => {
    let creators: Set<string> = new Set();

    setRecipeItems([...recipeData]);

    recipeData.map((recipe: RecipeType) => {
      creators.add(recipe.created_by);
    });

    setRecipeCreators([...creators].sort());
  }, []);

  return (
    <RecipesContext.Provider value={recipeItems}>
      <Paper className="container">
        <Typography variant="h3" gutterBottom component="div" px={2}>
          Account Analytics Dashboard
        </Typography>
        <Filter data={recipeCreators} callback={filterRecipeDataByCreator} />
        <TableView metrics={Metrics} />
      </Paper>
    </RecipesContext.Provider>
  );
};

export default Dashboard;
