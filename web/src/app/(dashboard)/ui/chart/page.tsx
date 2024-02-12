import { HeaderPage } from "@/components/header";
import { MainContent } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { FeatureChart } from "@/features/chart";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <>
      <HeaderPage
        title="Chart"
        description={
          <>
            Refer API documentation
            <span className="mx-1">👉</span>
            <span>
              <Link href={"https://recharts.org/en-US/api"} target="_blank">
                <Badge variant={"warning"} as={"span"}>
                  Rechart API
                </Badge>
              </Link>
            </span>
          </>
        }
      />
      <MainContent>
        <FeatureChart />
      </MainContent>
    </>
  );
}
