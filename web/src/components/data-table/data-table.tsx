import React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Table } from "../table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { usePagination } from "@/hooks/use-pagination";
import { Loader2 } from "lucide-react";

interface dataTableProp<TData, TValue> {
  data: TData[];
  pageSize?: number;
  columns: ColumnDef<TData, TValue>[];
  rangeSizePagination?: number;
  isLoading?: boolean;
}

export const DataTable = <TData, TValue>({
  data,
  columns,
  pageSize = 5,
  rangeSizePagination = 3,
  isLoading,
}: dataTableProp<TData, TValue>) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: pageSize,
      },
    },
  });
  const { getVisibleRange } = usePagination();

  const visibleRange = getVisibleRange({
    currentPage: table.getState().pagination.pageIndex,
    pageCount: table.getPageCount(),
    rangeSize: rangeSizePagination,
  });

  return (
    <div>
      <Table>
        <Table.Head>
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Row key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <Table.Title key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </Table.Title>
                );
              })}
            </Table.Row>
          ))}
        </Table.Head>
        <Table.Body>
          {isLoading ? (
            <Table.Row>
              <Table.Cell colSpan={columns.length}>
                <div className="flex h-44 items-center justify-center">
                  <Loader2 className="h-7 w-7 animate-spin" />
                </div>
              </Table.Cell>
            </Table.Row>
          ) : table.getRowModel().rows?.length ? (
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
              <Table.Cell colSpan={columns.length} className="h-24 text-center">
                No results.
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="text-muted-foreground flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  className={cn(
                    `select-none hover:bg-dark/10 ${table.getCanPreviousPage() ? "cursor-pointer" : "cursor-not-allowed text-secondary/80"}`,
                  )}
                  onClick={() => {
                    if (table.getCanPreviousPage()) {
                      table.previousPage();
                    }
                  }}
                />
              </PaginationItem>
              {visibleRange.map((item, index) => (
                <React.Fragment key={index}>
                  {index === 0 && table.getState().pagination.pageIndex > 1 && (
                    <>
                      <PaginationItem>
                        <PaginationLink
                          className="cursor-pointer px-3 shadow-none transition-none"
                          onClick={() => table.setPageIndex(0)}
                          isActive={
                            table.getState().pagination.pageIndex + 1 === item
                              ? true
                              : false
                          }
                        >
                          1
                        </PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                    </>
                  )}
                  <PaginationItem>
                    <PaginationLink
                      className="cursor-pointer px-3 shadow-none transition-none"
                      onClick={() => table.setPageIndex(item - 1)}
                      isActive={
                        table.getState().pagination.pageIndex + 1 === item
                          ? true
                          : false
                      }
                    >
                      {item}
                    </PaginationLink>
                  </PaginationItem>
                  {index === visibleRange.length - 1 &&
                    table.getState().pagination.pageIndex + 1 <
                      table.getPageCount() && (
                      <>
                        <PaginationItem>
                          <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink
                            className="cursor-pointer px-3 shadow-none transition-none"
                            onClick={() =>
                              table.setPageIndex(table.getPageCount() - 1)
                            }
                            isActive={
                              table.getState().pagination.pageIndex === item
                                ? true
                                : false
                            }
                          >
                            {table.getPageCount()}
                          </PaginationLink>
                        </PaginationItem>
                      </>
                    )}
                </React.Fragment>
              ))}
              <PaginationItem>
                <PaginationNext
                  className={cn(
                    `select-none hover:bg-dark/10 ${table.getCanNextPage() ? "cursor-pointer" : "cursor-not-allowed text-secondary/80"}`,
                  )}
                  onClick={() => {
                    if (table.getCanNextPage()) {
                      table.nextPage();
                    }
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};
