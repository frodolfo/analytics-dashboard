import React from "react"
import "./TableView.css"

type metricType = {
  title: number,
  value: string | Date | number | any
}

const TableView = (props: any) => {
  const DATA = props.data || []
  const METRICS = props.metrics || []

  return (
    <table>
      <thead>
        <tr>
          <th>Metric</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {METRICS.map((metric: metricType, index: number) => (
          <tr key={index}>
            <td>{metric.title}</td>
            <td>{metric.value(DATA)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableView