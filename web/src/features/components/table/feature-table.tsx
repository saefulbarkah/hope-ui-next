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
import React from "react";
import { useDataDummy } from "@/hooks/use-data-dummy";

const TableResponsive = () => {
  const { data } = useDataDummy();
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
            {data.map((item: any, i) => (
              <Table.Row key={i}>
                <Table.Cell>{item.title}</Table.Cell>
                <Table.Cell>{item.stock}</Table.Cell>
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
  const { data } = useDataDummy();

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
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={data} rangeSizePagination={3} />
      </CardContent>
    </Card>
  );
};

export const FeatureTable = () => {
  return (
    <div className="flex flex-col gap-5">
      <ExampleDataTable />
      <TableResponsive />
    </div>
  );
};
