import React, { useEffect } from "react"
import { TableView } from "../components/"
import SMetrics from "../services/metrics"

// Since it's a static data source, we'll just read it in
// ahead of time and not have utilize useEffect to read the
// data in.
import recipeData from "../../data.json"


const Dashboard = () => {
  useEffect(() => {
    console.log('recipeData:', recipeData);
  }, [])

  return (
    <div className="container">
      <h1>Analytics Dashboard</h1>
        <TableView data={recipeData} metrics={SMetrics} />  
    </div>
  );
};

export default Dashboard
