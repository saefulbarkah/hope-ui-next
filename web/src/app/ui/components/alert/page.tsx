import HeaderPage from "@/components/header/header-page";
import { MainContent } from "@/components/layout";
import { FeatureAlert } from "@/features/components/alert/feature-alert";
import React from "react";

export default function page() {
  return (
    <>
      <HeaderPage title="Alert component" />
      <MainContent>
        <FeatureAlert />
      </MainContent>
    </>
  );
}
