"use client";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import CircularWidget from "@/components/progress/circular";
import React from "react";
import { ProgressBar } from "@/components/progress/progress-bar";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { theme } from "@/theme";
import { cn } from "@/lib/utils";

const Circular = () => {
  return (
    <div className="grid grid-cols-5 items-center gap-2">
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
    <div className="grid grid-cols-3 items-center gap-2">
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

export const FeatureWidget = () => {
  return (
    <div className="flex flex-col gap-5">
      <Circular />
      <Bar />
    </div>
  );
};
