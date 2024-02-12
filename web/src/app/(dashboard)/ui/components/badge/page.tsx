import { HeaderPage } from "@/components/header";
import { MainContent } from "@/components/layout";
import { FeatureBadge } from "@/features/components";
import React from "react";

export default function page() {
  return (
    <>
      <HeaderPage title="Badge Component" />
      <MainContent>
        <FeatureBadge />
      </MainContent>
    </>
  );
}
