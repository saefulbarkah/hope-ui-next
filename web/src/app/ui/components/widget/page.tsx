import { HeaderPage } from "@/components/header";
import { MainContent } from "@/components/layout";
import { FeatureWidget } from "@/features/components";
import React from "react";

export default function Page() {
  return (
    <>
      <HeaderPage title="Widget Components" />
      <MainContent>
        <FeatureWidget />
      </MainContent>
    </>
  );
}
