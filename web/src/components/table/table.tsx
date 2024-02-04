import { cn } from "@/lib/utils";
import React from "react";

// Table section
interface TableProps extends React.HTMLAttributes<HTMLTableElement> {}
const Table = ({ className, ...props }: TableProps) => {
  return (
    <div className="relative w-full overflow-auto">
      <table
        className={cn("w-full caption-bottom text-sm", className)}
        {...props}
      />
    </div>
  );
};

// Table Head section
interface HeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {}
const Head = ({ className, ...props }: HeadProps) => {
  return <thead className={cn("[&_tr]:border-b", className)} {...props} />;
};
Table.Head = Head;

// Table Body section
interface BodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {}
const Body = ({ className, ...props }: BodyProps) => {
  return (
    <tbody className={cn("[&_tr:last-child]:border-0", className)} {...props} />
  );
};
Table.Body = Body;

// Table Row section
interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {}
const Row = ({ className, ...props }: RowProps) => {
  return (
    <tr
      className={cn(
        "border-b transition-colors hover:bg-secondary/5 data-[state=selected]:bg-primary/5",
        className,
      )}
      {...props}
    />
  );
};
Table.Row = Row;

// Table Heading Cell section
interface TitleProps extends React.HTMLAttributes<HTMLTableCellElement> {}
const Title = ({ className, ...props }: TitleProps) => {
  return (
    <th
      className={cn(
        "h-10 px-2 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className,
      )}
      {...props}
    />
  );
};
Table.Title = Title;

// Table Item section
interface CellProps extends React.HTMLAttributes<HTMLTableCellElement> {}
const TableCell = ({ className, ...props }: CellProps) => {
  return (
    <td
      className={cn(
        "whitespace-nowrap p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className,
      )}
      {...props}
    />
  );
};
Table.Cell = TableCell;

export { Table };
