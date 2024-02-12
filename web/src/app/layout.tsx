import NextTopLoader from "nextjs-toploader";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastComponent } from "@/components/toast";
import { QueryProvider } from "@/providers/query-provider";

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
      <body className={`${inter.className} !mr-0 !overflow-y-auto bg-light`}>
        <QueryProvider>
          <ToastComponent />
          <NextTopLoader />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
