"use client";
import { LineChart as LineCustom, Line } from "recharts";

type Props<TData = any> = {
  data: TData;
};

export const LineChart = ({ data }: Props) => {
  return (
    <LineCustom width={200} height={200} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineCustom>
  );
};
