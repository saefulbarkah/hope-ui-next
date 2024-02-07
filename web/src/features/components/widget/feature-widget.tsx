"use client";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import CircularWidget from "@/components/progress/circular";
import React from "react";
import { ProgressBar } from "@/components/progress/progress-bar";
import { ArrowUp, CircleDollarSign } from "lucide-react";
import { theme } from "@/theme";
import { cn } from "@/lib/utils";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";

const Circular = () => {
  return (
    <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-2 lg:grid-cols-5">
      <Card>
        <CardContent className="flex items-center px-4 py-2">
          <CircularWidget percentage={50} variant={"blue"} />
          <div className="flex flex-col gap-1">
            <p className="text-sm">Total Sales</p>
            <CardTitle>$200</CardTitle>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex items-center px-4 py-2">
          <CircularWidget percentage={50} variant={"cyan"} />
          <div className="flex flex-col gap-1">
            <p className="text-sm">Total Sales</p>
            <CardTitle>$200</CardTitle>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex items-center px-4 py-2">
          <CircularWidget percentage={50} variant={"red"} />
          <div className="flex flex-col gap-1">
            <p className="text-sm">Total Sales</p>
            <CardTitle>$200</CardTitle>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex items-center px-4 py-2">
          <CircularWidget percentage={50} variant={"blue"} />
          <div className="flex flex-col gap-1">
            <p className="text-sm">Total Sales</p>
            <CardTitle>$200</CardTitle>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex items-center px-4 py-2">
          <CircularWidget percentage={50} variant={"warn"} />
          <div className="flex flex-col gap-1">
            <p className="text-sm">Total Sales</p>
            <CardTitle>$200</CardTitle>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const Bar = () => {
  return (
    <div className="grid grid-cols-1 items-center gap-2 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardContent className="px-4 py-5">
          <h2 className="text-center">AVG Impressions</h2>
          <div className="mt-3 flex items-center justify-between">
            <div className="flex flex-col">
              <h3 className="text-3xl font-medium">2.648</h3>
              <h3 className="font-medium text-slate-500">26.84%</h3>
            </div>
            <div className={cn("rounded p-1.5", theme.colors["semi-primary"])}>
              <ArrowUp />
            </div>
          </div>
          <ProgressBar value={10} noAnimation className="mt-5" />
        </CardContent>
      </Card>
      <Card>
        <CardContent className="px-4 py-5">
          <h2 className="text-center">AVG Impressions</h2>
          <div className="mt-3 flex items-center justify-between">
            <div className="flex flex-col">
              <h3 className="text-3xl font-medium">2.648</h3>
              <h3 className="font-medium text-slate-500">26.84%</h3>
            </div>
            <div className={cn("rounded p-1.5", theme.colors["semi-danger"])}>
              <ArrowUp />
            </div>
          </div>
          <ProgressBar value={10} variant={"danger"} className="mt-5" />
        </CardContent>
      </Card>
      <Card>
        <CardContent className="px-4 py-5">
          <h2 className="text-center">AVG Impressions</h2>
          <div className="mt-3 flex items-center justify-between">
            <div className="flex flex-col">
              <h3 className="text-3xl font-medium">2.648</h3>
              <h3 className="font-medium text-slate-500">26.84%</h3>
            </div>
            <div className={cn("rounded p-1.5", theme.colors["semi-warning"])}>
              <ArrowUp />
            </div>
          </div>
          <ProgressBar value={10} variant={"info"} className="mt-5" />
        </CardContent>
      </Card>
    </div>
  );
};

const StatisticWidget = () => {
  const data = [
    {
      id: "id-1",
      label: "today gains",
      amount: "65M",
      increase: "20%",
      color: "rgb(7 154 162)",
      graph: [
        { name: "Jan", uv: 99, pv: 75 },
        { name: "Feb", uv: 50, pv: 50 },
        { name: "Mar", uv: 80, pv: 69 },
        { name: "Apr", uv: 50, pv: 40 },
        { name: "Aug", uv: 100, pv: 20 },
      ],
    },
    {
      id: "id-2",
      label: "today gains",
      amount: "65M",
      increase: "20%",
      color: "#C03221",
      graph: [
        { name: "Jan", uv: 99, pv: 75 },
        { name: "Feb", uv: 50, pv: 50 },
        { name: "Mar", uv: 80, pv: 69 },
        { name: "Apr", uv: 50, pv: 40 },
        { name: "Aug", uv: 100, pv: 20 },
      ],
    },
    {
      id: "id-3",
      label: "today gains",
      amount: "65M",
      increase: "20%",
      color: "rgba(58,87,232,1)",
      graph: [
        { name: "Jan", uv: 99, pv: 75 },
        { name: "Feb", uv: 50, pv: 50 },
        { name: "Mar", uv: 80, pv: 69 },
        { name: "Apr", uv: 50, pv: 40 },
        { name: "Aug", uv: 100, pv: 20 },
      ],
    },
  ];
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item, i) => {
        return (
          <Card key={i}>
            <CardContent className="m-0 border p-0">
              <div className="px-4 py-5">
                <div className="flex justify-between">
                  <div className={cn(`p-2.5`, theme.colors["semi-primary"])}>
                    <CircleDollarSign />
                  </div>
                  <h2 className="capitalize text-secondary">{item.label}</h2>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                  <h2 className="text-2xl font-medium">{item.amount}</h2>
                  <div className="flex items-center gap-1">
                    <ArrowUp className="h-5 w-5 text-success" />
                    <p className="text-success">{item.increase}</p>
                    <p>Increased</p>
                  </div>
                </div>
              </div>
              <ResponsiveContainer width={"100%"} height={80}>
                <AreaChart margin={{ bottom: 0, left: 0 }} data={item.graph}>
                  <defs>
                    <linearGradient id={item.id} x1={0} x2={0} y1={0} y2={1}>
                      <stop
                        offset="5%"
                        stopColor={item.color}
                        stopOpacity={0.8}
                      />
                      <stop
                        offset="95%"
                        stopColor={item.color}
                        stopOpacity={0}
                      />
                    </linearGradient>
                  </defs>
                  <Tooltip />
                  <Area
                    type={"monotone"}
                    dataKey={"uv"}
                    stroke={item.color}
                    animationDuration={1000}
                    fill={`url(#${item.id})`}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export const FeatureWidget = () => {
  return (
    <div className="flex flex-col gap-5">
      <Circular />
      <Bar />
      <StatisticWidget />
    </div>
  );
};
