"use client";

import React from "react";

interface AuthLayout extends React.ComponentPropsWithoutRef<"div"> {}
export const AuthLayout = ({ children, ...props }: AuthLayout) => {
  return (
    <div
      className="flex h-screen items-center justify-center bg-white"
      {...props}
    >
      {children}
    </div>
  );
};
