import NextTopLoader from "nextjs-toploader";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout";
import { ToastComponent } from "@/components/toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hope UI Dashboard",
  description: "Built with NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-y-scroll bg-light`}>
        <ToastComponent />
        <NextTopLoader />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
