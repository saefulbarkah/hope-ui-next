import HeaderPage from "@/components/header/header-page";
import { MainContent } from "@/components/layout";
import { FeatureDialog } from "@/features/components";
import React from "react";

export default function page() {
  return (
    <>
      <HeaderPage title="Dialog Component" />
      <MainContent>
        <FeatureDialog />
      </MainContent>
    </>
  );
}
