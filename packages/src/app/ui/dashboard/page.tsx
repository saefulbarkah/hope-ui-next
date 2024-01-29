import HeaderPage from "@/components/header/header-page";
import { MainContent } from "@/components/layout";
import { SalesStatistic, Summary } from "@/features/dashboard";
import React from "react";

export default function Dashboard() {
  return (
    <div>
      <HeaderPage
        title="Dashboard"
        description="amet consectetur adipisicing elit. Quo explicabo aliquam error perferendis aliquid veritatis accusamus aperiam"
      />
      <MainContent>
        <Summary />
        <SalesStatistic />
      </MainContent>
    </div>
  );
}
