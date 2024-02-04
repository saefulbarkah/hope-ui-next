import React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Table } from "../table";

interface dataTableProp<TData, TValue> {
  data: TData[];
  columns: ColumnDef<TData, TValue>[];
}

export const DataTable = <TData, TValue>({
  data,
  columns,
}: dataTableProp<TData, TValue>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div>
      <Table>
        <Table.Head>
          {table.getHeaderGroups().map((headerGroup, i) => (
            <Table.Row key={i}>
              {headerGroup.headers.map((item, i) => {
                return (
                  <Table.Title key={item.id}>
                    {item.isPlaceholder
                      ? null
                      : flexRender(
                          item.column.columnDef.header,
                          item.getContext(),
                        )}
                  </Table.Title>
                );
              })}
            </Table.Row>
          ))}
        </Table.Head>
        <Table.Body>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <Table.Row
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <Table.Cell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))
          ) : (
            <Table.Row>
              <Table.call colSpan={columns.length} className="h-24 text-center">
                No results.
              </Table.call>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </div>
  );
};
