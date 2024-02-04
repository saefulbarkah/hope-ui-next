import { cn } from "@/lib/utils";
import React from "react";

// Table section
interface TableProps extends React.HTMLAttributes<HTMLTableElement> {}
const Table = ({ className, children, ...props }: TableProps) => {
  return (
    <div className="h-full w-full overflow-x-auto">
      <table
        className={cn(
          "w-full table-auto border-collapse border md:table-fixed",
          className,
        )}
        {...props}
      >
        {children}
      </table>
    </div>
  );
};

// Table Head section
interface HeadProps extends React.HTMLAttributes<HTMLTableSectionElement> {}
const Head = ({ className, children, ...props }: HeadProps) => {
  return (
    <thead className={cn("w-full p-2.5", className)} {...props}>
      {children}
    </thead>
  );
};
Table.Head = Head;

// Table Row section
interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {}
const Row = ({ className, children, ...props }: RowProps) => {
  return (
    <tr className={cn("", className)} {...props}>
      {children}
    </tr>
  );
};
Table.Row = Row;

// Table Heading Cell section
interface TitleProps extends React.HTMLAttributes<HTMLTableCellElement> {}
const Title = ({ className, children, ...props }: TitleProps) => {
  return (
    <th
      className={cn(
        "w-full whitespace-nowrap border p-2.5 text-start",
        className,
      )}
      {...props}
    >
      {children}
    </th>
  );
};
Table.Title = Title;

// Table Body section
interface BodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {}
const Body = ({ className, children, ...props }: BodyProps) => {
  return (
    <tbody className={cn("w-full", className)} {...props}>
      {children}
    </tbody>
  );
};
Table.Body = Body;

// Table Item section
interface CellProps extends React.HTMLAttributes<HTMLTableCellElement> {}
const TableCell = ({ className, children, ...props }: CellProps) => {
  return (
    <td
      className={cn(
        "h-full w-full whitespace-nowrap border p-2.5 text-start",
        className,
      )}
      {...props}
    >
      {children}
    </td>
  );
};
Table.Cell = TableCell;

export { Table };
