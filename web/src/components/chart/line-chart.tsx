"use client";

import React from "react";
import {
  ResponsiveContainer,
  LineChart as Chart,
  XAxis,
  CartesianGrid,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import { chartKeyProps } from "./chart";

interface LineProps {
  data?: any[];
  dataKey?: chartKeyProps[];
  height?: number;
  dataKeyXName: string;
  withGrid?: boolean;
}

export const LineChart = ({
  data,
  dataKey,
  height = 300,
  dataKeyXName,
  withGrid = true,
}: LineProps) => {
  return (
    <ResponsiveContainer width={"100%"} height={height}>
      <Chart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        {withGrid && <CartesianGrid strokeDasharray={"3 3"} />}
        <XAxis dataKey={dataKeyXName} />
        <YAxis />
        <Tooltip />
        <Legend />
        {dataKey?.map((item, i) => (
          <Line
            type="monotone"
            dataKey={item.name}
            stroke={`${item.strokeColor}`}
            key={i}
          />
        ))}
      </Chart>
    </ResponsiveContainer>
  );
};
