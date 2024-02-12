import { HeaderPage } from "@/components/header";
import { MainContent } from "@/components/layout";
import { FeatureTable } from "@/features/components";
import React from "react";

export default function page() {
  return (
    <div>
      <HeaderPage title="Table Component" />
      <MainContent>
        <FeatureTable />
      </MainContent>
    </div>
  );
}
