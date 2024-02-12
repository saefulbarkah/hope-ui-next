"use client";
import { AreaChart, BarChart, LineChart } from "@/components/chart";
import { chartKeyProps } from "@/components/chart/chart";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useDataDummy } from "@/hooks/use-data-dummy";
import { ExternalLink, Loader2 } from "lucide-react";
import Link from "next/link";
import React from "react";

type chartData<TData = []> = {
  data?: TData;
  isLoading: boolean;
};

type dataProps = "stock" | "price";

const CustomLineChart = <TData extends any[]>({
  isLoading,
  data,
}: chartData<TData>) => {
  // data key chart
  const dataKey: chartKeyProps<dataProps>[] = [
    {
      name: "price",
      strokeColor: "red",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Line Chart</CardTitle>
        <CardDescription>
          <Link
            href={"https://recharts.org/en-US/api/LineChart"}
            target="_blank"
          >
            <Badge rounded={"sm"} as={"button"}>
              API Reference <ExternalLink className="ml-1 h-4 w-4" />
            </Badge>
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex h-[300px] items-center justify-center">
            <Loader2 className="mr-1 animate-spin" />
            <p>Loading data....</p>
          </div>
        ) : (
          <LineChart
            dataKeyXName="title"
            height={300}
            data={data}
            dataKey={dataKey}
          />
        )}
      </CardContent>
    </Card>
  );
};

const CustomAreaChart = <TData extends any[]>({
  isLoading,
  data,
}: chartData<TData>) => {
  const dataKey: chartKeyProps<dataProps>[] = [
    {
      name: "stock",
      strokeColor: "blue",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Area Chart</CardTitle>
        <CardDescription>
          <Link
            href={"https://recharts.org/en-US/api/AreaChart"}
            target="_blank"
          >
            <Badge rounded={"sm"} as={"button"}>
              API Reference <ExternalLink className="ml-1 h-4 w-4" />
            </Badge>
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex h-[300px] items-center justify-center">
            <Loader2 className="mr-1 animate-spin" />
            <p>Loading data....</p>
          </div>
        ) : (
          <AreaChart
            dataKeyXName="title"
            height={300}
            data={data}
            dataKey={dataKey}
          />
        )}
      </CardContent>
    </Card>
  );
};

const CustomBarChart = <TData extends any[]>({
  isLoading,
  data,
}: chartData<TData>) => {
  const dataKey: chartKeyProps<dataProps>[] = [
    {
      name: "stock",
      strokeColor: "blue",
    },
    {
      name: "stock",
      strokeColor: "green",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Area Chart</CardTitle>
        <CardDescription>
          <Link
            href={"https://recharts.org/en-US/api/AreaChart"}
            target="_blank"
          >
            <Badge rounded={"sm"} as={"button"}>
              API Reference <ExternalLink className="ml-1 h-4 w-4" />
            </Badge>
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <div className="flex h-[300px] items-center justify-center">
            <Loader2 className="mr-1 animate-spin" />
            <p>Loading data....</p>
          </div>
        ) : (
          <BarChart
            dataKeyXName="title"
            height={300}
            data={data}
            dataKey={dataKey}
          />
        )}
      </CardContent>
    </Card>
  );
};

export const FeatureChart = () => {
  const { data, isLoading } = useDataDummy({ limit: 10 });
  return (
    <div className="grid grid-cols-1 gap-2">
      <CustomLineChart isLoading={isLoading} data={data} />
      <CustomAreaChart isLoading={isLoading} data={data} />
      <CustomBarChart isLoading={isLoading} data={data} />
    </div>
  );
};
