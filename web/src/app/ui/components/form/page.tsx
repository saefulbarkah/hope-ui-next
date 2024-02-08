import HeaderPage from "@/components/header/header-page";
import { MainContent } from "@/components/layout";
import { FeatureForm } from "@/features/components";
import React from "react";

export default function page() {
  return (
    <>
      <HeaderPage title="Form Component" />
      <MainContent>
        <FeatureForm />
      </MainContent>
    </>
  );
}
