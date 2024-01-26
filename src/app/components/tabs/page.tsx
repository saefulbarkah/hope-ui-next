import HeaderPage from "@/components/header/header-page";
import { MainContent } from "@/components/layout";
import { FeatureTab } from "@/features/components";
import React from "react";

export default function Tabs() {
  return (
    <div>
      <HeaderPage title="Tabs Component" />
      <MainContent className="mt-20">
        <FeatureTab />
      </MainContent>
    </div>
  );
}
