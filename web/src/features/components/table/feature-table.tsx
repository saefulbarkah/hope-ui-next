"use client";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, MoreHorizontal, Trash2 } from "lucide-react";
import React from "react";
import { useDataDummy } from "@/hooks/use-data-dummy";
import Link from "next/link";

// data table usage example
const ExampleDataTable = () => {
  const { data, isFetching } = useDataDummy();

  const columns: ColumnDef<typeof data | any>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => {
            table.toggleAllPageRowsSelected(!!value);
          }}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      header: "Product",
      accessorKey: "title",
    },
    {
      header: "Quantity",
      accessorKey: "stock",
    },
    {
      header: "Price",
      accessorKey: "price",
    },
    {
      header: "Options",
      cell: () => {
        return (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size={"icon"} variant={"ghost"}>
                  <MoreHorizontal />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Options</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Edit className="mr-2 h-5 w-5" />
                  Update data
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Trash2 className="mr-2 h-5 w-5" />
                  Delete data
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        );
      },
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Data Table Responsive</CardTitle>
        <CardDescription>
          For more information, please refer to the documentation 👉
          <Link
            href={"https://tanstack.com/table/v8/docs/introduction"}
            target="_blank"
            className="font-medium text-primary"
          >
            TanStack Table
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <DataTable
          columns={columns}
          data={data}
          rangeSizePagination={3}
          isLoading={isFetching}
        />
      </CardContent>
    </Card>
  );
};

export const FeatureTable = () => {
  return (
    <div className="flex flex-col gap-5">
      <ExampleDataTable />
    </div>
  );
};
