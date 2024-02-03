import HeaderPage from "@/components/header/header-page";
import { MainContent } from "@/components/layout";
import { FeatureProgress } from "@/features/components/progress/feature-progress";
import React from "react";

export default function page() {
  return (
    <>
      <HeaderPage title="Progress component" />
      <MainContent>
        <FeatureProgress />
      </MainContent>
    </>
  );
}
