"use client";
import { Table } from "@/components/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit, Trash2 } from "lucide-react";
import React from "react";

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
                <Table.Cell>
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

export const FeatureTable = () => {
  return (
    <div className="flex flex-col gap-5">
      <TableResponsive />
    </div>
  );
};
