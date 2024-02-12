import type { Metadata } from "next";
import Layout from "@/components/layout";

export const metadata: Metadata = {
  title: "Hope UI Dashboard",
  description: "Built with NextJS",
};

export default function DashboardRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Layout>{children}</Layout>
    </div>
  );
}
