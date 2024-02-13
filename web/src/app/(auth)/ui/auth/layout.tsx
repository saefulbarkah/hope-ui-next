import { AuthLayout } from "@/components/auth-layout";
import React from "react";

export default function RootAuthLayout({ children }: React.PropsWithChildren) {
  return <AuthLayout>{children}</AuthLayout>;
}
