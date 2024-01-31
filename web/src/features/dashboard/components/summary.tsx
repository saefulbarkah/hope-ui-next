"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import CircularWidget, { circularColor } from "@/components/progress/circular";

type summaryProps = {
  name: string;
  progress: number;
  circular: circularColor;
};

export const Summary = () => {
  const data: summaryProps[] = [
    {
      name: "Projects",
      progress: 50,
      circular: "cyan",
    },
    {
      name: "Total cost",
      progress: 65,
      circular: "red",
    },
    {
      name: "Revenue",
      progress: 90,
      circular: "warn",
    },
    {
      name: "Revenue",
      progress: 90,
      circular: "red",
    },
    {
      name: "Revenue",
      progress: 100,
      circular: "blue",
    },
  ];

  return (
    <div className="grid gap-4 lg:grid-cols-5 2xl:grid-cols-6">
      {data.map((item, i) => (
        <Card key={i}>
          <CardContent className="flex items-center px-2 py-2">
            <CircularWidget
              percentage={item.progress}
              variant={item.circular as circularColor}
            />
            <div>
              <p className="text-sm capitalize text-gray-500">Total Sales</p>
              <p className="font-semibold">$560K</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
