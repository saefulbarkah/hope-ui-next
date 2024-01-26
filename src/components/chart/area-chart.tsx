import React from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Props<TData = any> = {
  data: TData;
};

export const AreaChartCustom = ({ data }: Props) => {
  return (
    <ResponsiveContainer height={400} width={"100%"} className={"mt-5"}>
      <AreaChart
        width={0}
        height={0}
        data={data}
        margin={{ bottom: 25, right: 0 }}
      >
        <defs>
          <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="rgba(58, 87, 232, 1)" stopOpacity={0.3} />
            <stop
              offset={"70%"}
              stopColor="rgba(58, 87, 232, 1)"
              stopOpacity={0}
            />
          </linearGradient>
          <linearGradient id="chartColor2" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#369BFF" stopOpacity={0.3} />
            <stop offset={"70%"} stopColor="#369BFF" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          tickMargin={20}
          dataKey="name"
          tickLine={{ stroke: "black" }}
          axisLine={{ strokeOpacity: 0.3 }}
        />
        <YAxis axisLine={false} tickLine={false} tickMargin={15} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#3A57E8"
          fillOpacity={1}
          fill="url(#chartColor)"
        />
        <Area
          type="monotone"
          dataKey="pv"
          stroke="#369BFF"
          fillOpacity={1}
          fill="url(#chartColor2)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
