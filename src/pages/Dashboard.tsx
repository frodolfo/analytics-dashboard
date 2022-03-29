import React, { useEffect, useState } from "react";
import TableView from "../components/TableView/TableView";

// Since it's a static data source, we'll just read it in
// ahead of time and not have utilize useEffect to read the
// data in.
const DATA_SET = "../../data.json";

const METRICS = [
  {
    title: "Total number of recipes",
    value: (dataArray: Number[]): Number => {
      return dataArray.length;
    },
  },
  {
    title: "Total number of recipe creators",
    value: (dataArray: Number[]): Number => {
      let numOfCreators = new Set();
      dataArray.map((data: any) => numOfCreators.add(data.created_by));

      return numOfCreators.size;
    },
  },
  {
    title: "First recipe create date",
    value: (dataArray: any[]): Date =>
      dataArray.slice().sort((a, b) => b.created - a.created)[0],
  },
  {
    title: "Total number of recipe views",
    value: (dataArray: any[]): Number => dataArray.reduce(
      (prev: any, curr: any) => prev.total_recipe_views + curr.total_recipe_views
    ),
  },
  {
    title: "Recipe with the most views",
    value: (dataArray: any[]): Number =>
      dataArray.reduce(
        (a, b) => Math.max(a.total_recipe_views, b.total_recipe_views),
        -Infinity
      ),
  },
  {
    title: "Recipe creator with the most views",
    value: (dataArray: any[]): String =>
      dataArray.reduce((prev, curr) =>
        prev.total_recipe_views > curr.total_recipe_views ? prev : curr
      ).created_by,
  },
];

const Dashboard = (props: Object) => {
  const [dataSet, setDataSet] = useState([]);

  useEffect(() => {}, []);

  return (
    <>
      <TableView data={DATA_SET} metrics={METRICS} />
    </>
  );
};

export default Dashboard;
