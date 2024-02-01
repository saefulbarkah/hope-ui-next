import HeaderPage from "@/components/header/header-page";
import { MainContent } from "@/components/layout";
import { FeatureButton } from "@/features/components";
import React from "react";

export default function page() {
  return (
    <div>
      <HeaderPage title="Button Component" />
      <MainContent>
        <FeatureButton />
      </MainContent>
    </div>
  );
}
