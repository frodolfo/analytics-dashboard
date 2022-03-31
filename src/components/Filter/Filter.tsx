import React, { ReactNode, useState } from "react";
import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

import "./Filter.css";

const Filter = (props: any) => {
  const [recipeCreator, setRecipeCreator] = useState("");
  const DATA: string[] = props.data || [];

  const handleChange = (event: any) => {
    event.preventDefault();

    let creator = event.target.value;

    setRecipeCreator(creator);
    props?.callback(creator);
  };

  return (
    <Box className="container">
      <FormControl fullWidth>
        <InputLabel id="recipeCreator">Recipe Creator</InputLabel>
        <Select
          labelId="recipeCreator"
          id="creatorSelect"
          value={recipeCreator}
          label="Recipe Creator"
          onChange={handleChange}
        >
          <MenuItem key="0" value="All">
            -- All --
          </MenuItem>
          {DATA.map((data: string, index: number) => (
            <MenuItem key={(index + 1).toString()} value={data}>
              {data}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>
          Select a recipe creator for individual statistics
        </FormHelperText>
      </FormControl>
    </Box>
  );
};

export default Filter;
