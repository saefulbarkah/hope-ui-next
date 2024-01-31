"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "Jan", uv: 99, pv: 75 },
  { name: "Feb", uv: 70, pv: 50 },
  { name: "Mar", uv: 80, pv: 69 },
  { name: "Apr", uv: 60, pv: 40 },
  { name: "Jun", uv: 70, pv: 35 },
  { name: "Jul", uv: 60, pv: 50 },
  { name: "Aug", uv: 80, pv: 20 },
];

export const SalesStatistic = () => {
  return (
    <Card className="mt-5">
      <CardContent className="p-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium">$855.8K</h2>
            <h2 className=" text-gray-500">Gross Sales</h2>
          </div>
          <div>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant={"ghost"} className="p-2">
                  This week
                </Button>
              </PopoverTrigger>
              <PopoverContent
                sideOffset={10}
                alignOffset={0}
                align="end"
                className="p-2"
              >
                <p> on development...</p>
              </PopoverContent>
            </Popover>
          </div>
        </div>
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
              animationDuration={1000}
            />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#369BFF"
              fillOpacity={1}
              fill="url(#chartColor2)"
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
