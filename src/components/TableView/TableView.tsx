import React, { useContext, useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

import RecipeType from "../../types/RecipeType";
import MetricType from "../../types/MetricType";
import RecipesContext from "../../contexts/RecipesContext";

import "./TableView.css";

const TableView = (props: any) => {
  const [recipeData, setRecipeData] = useState<RecipeType[]>([]);
  const contextValue = useContext(RecipesContext);
  const METRICS: MetricType[] = props.metrics || [];

  useEffect(() => {
    setRecipeData([...contextValue]);
  }, [contextValue]);

  const tableContent = () =>
    recipeData.length > 0
      ? METRICS.map((metric: MetricType, index: number) => (
          <TableRow key={index.toString()}>
            <TableCell>{metric.title}</TableCell>
            <TableCell>{metric.value(recipeData)}</TableCell>
          </TableRow>
        ))
      : [0, 1, 2, 3, 4, 5].map((num: number, index: number) => (
          <TableRow key={index.toString()}>
            <TableCell>Loading...</TableCell>
            <TableCell>Loading...</TableCell>
          </TableRow>
        ));

  return (
    <Table id="recipeMetrics">
      <TableHead>
        <TableRow>
          <TableCell>
            <span className="header">Metric</span>
          </TableCell>
          <TableCell>
            <span className="header">Value</span>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{tableContent()}</TableBody>
    </Table>
  );
};

export default TableView;
