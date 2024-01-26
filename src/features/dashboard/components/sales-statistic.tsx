"use client";
import { AreaChartCustom } from "@/components/chart";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React from "react";

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
        <AreaChartCustom data={data} />
      </CardContent>
    </Card>
  );
};
