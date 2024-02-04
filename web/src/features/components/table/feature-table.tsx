"use client";
import { DataTable } from "@/components/data-table";
import { Table } from "@/components/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import React, { useState } from "react";

const data = [
  {
    item: "Product A",
    quantity: 10,
    price: 20.99,
  },
  {
    item: "Product B",
    quantity: 5,
    price: 15.5,
  },
  {
    item: "Product C",
    quantity: 8,
    price: 25.75,
  },
  {
    item: "Product D",
    quantity: 8,
    price: 25.75,
  },
];

const TableResponsive = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Table Responsive</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.Title>Product</Table.Title>
              <Table.Title>Quantity</Table.Title>
              <Table.Title>Price</Table.Title>
              <Table.Title>Option</Table.Title>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {data.map((item, i) => (
              <Table.Row key={i}>
                <Table.Cell>{item.item}</Table.Cell>
                <Table.Cell>{item.quantity}</Table.Cell>
                <Table.Cell>{item.price}</Table.Cell>
                <Table.Cell className="flex items-center">
                  <Button size={"icon"} withIcon={<Edit className="h-5 w-5" />}>
                    Edit
                  </Button>
                  <Button
                    size={"icon"}
                    variant={"danger"}
                    className="ml-2"
                    withIcon={<Trash2 className="h-5 w-5" />}
                  >
                    Delete
                  </Button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </CardContent>
    </Card>
  );
};

// data table usage example
const ExampleDataTable = () => {
  const columns: ColumnDef<(typeof data)[0]>[] = [
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
      accessorKey: "item",
    },
    {
      header: "Quantity",
      accessorKey: "quantity",
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
      <CardHeader>Data Table Responsive</CardHeader>
      <CardContent>
        <DataTable columns={columns} data={data} />
      </CardContent>
    </Card>
  );
};

export const FeatureTable = () => {
  return (
    <div className="flex flex-col gap-5">
      <TableResponsive />
      <ExampleDataTable />
    </div>
  );
};
