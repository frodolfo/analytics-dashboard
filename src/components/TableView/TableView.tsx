import React from "react";

const TableView = (props: any) => {
  const DATA = props.data || [];
  const METRICS = props.metrics || [];

  return (
    <table>
      <thead>
        <tr>
          <th>Metric</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {React.Children.toArray(METRICS).map((metric: any) => (
          <tr>
            <td>{metric.title}</td>
            <td>{metric.value(DATA)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableView;