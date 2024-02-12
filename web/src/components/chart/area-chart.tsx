"use client";

import React from "react";
import {
  ResponsiveContainer,
  AreaChart as Chart,
  XAxis,
  CartesianGrid,
  YAxis,
  Area,
  Tooltip,
} from "recharts";
import { chartKeyProps } from "./chart";

interface LineProps {
  data?: any[];
  dataKey?: chartKeyProps[];
  height?: number;
  dataKeyXName: string;
}

export const AreaChart = ({
  data,
  dataKey,
  height = 300,
  dataKeyXName,
}: LineProps) => {
  return (
    <ResponsiveContainer width={"100%"} height={height}>
      <Chart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          {dataKey?.map((item, key) => (
            <linearGradient
              id={item.name}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
              key={key}
            >
              <stop
                offset="5%"
                stopColor={`${item.strokeColor}`}
                stopOpacity={0.5}
              />
              <stop
                offset="95%"
                stopColor={`${item.strokeColor}`}
                stopOpacity={0}
              />
            </linearGradient>
          ))}
        </defs>
        <XAxis dataKey={dataKeyXName} />
        <YAxis />
        <Tooltip />

        {dataKey?.map((item, i) => (
          <Area
            type="monotone"
            fillOpacity={1}
            stroke={`${item.strokeColor}`}
            fill={`url(#${item.name})`}
            dataKey={item.name}
            key={i}
          />
        ))}
      </Chart>
    </ResponsiveContainer>
  );
};
