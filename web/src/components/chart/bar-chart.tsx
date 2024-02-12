"use client";

import React from "react";
import {
  ResponsiveContainer,
  BarChart as Chart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  CartesianGrid,
  Legend,
} from "recharts";
import { chartKeyProps } from "./chart";
import { chartColorvariant } from "./constant-chart";

interface LineProps {
  data?: any[];
  dataKey?: chartKeyProps[];
  height?: number;
  dataKeyXName: string;
}

export const BarChart = ({
  data,
  dataKey,
  height = 300,
  dataKeyXName,
}: LineProps) => {
  return (
    <ResponsiveContainer width={"100%"} height={height}>
      <Chart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={dataKeyXName} />
        <YAxis />
        <Tooltip />
        {dataKey?.map((item, i) => (
          <Bar
            fillOpacity={1}
            fill={chartColorvariant[item.strokeColor]}
            dataKey={item.name}
            key={i}
          />
        ))}
        <Legend />
      </Chart>
    </ResponsiveContainer>
  );
};
