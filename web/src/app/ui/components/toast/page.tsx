import HeaderPage from "@/components/header/header-page";
import { MainContent } from "@/components/layout";
import { FeatureToast } from "@/features/components";
import React from "react";

export default function page() {
  return (
    <>
      <HeaderPage title="Toast Component" />
      <MainContent>
        <FeatureToast />
      </MainContent>
    </>
  );
}
