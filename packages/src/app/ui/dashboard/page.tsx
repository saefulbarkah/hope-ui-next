import HeaderPage from "@/components/header/header-page";
import { MainContent } from "@/components/layout";
import { SalesStatistic, Summary } from "@/features/dashboard";
import React from "react";

export default function Dashboard() {
  return (
    <div>
      <HeaderPage />
      <MainContent>
        <Summary />
        <SalesStatistic />
      </MainContent>
    </div>
  );
}
