import HeaderPage from "@/components/header/header-page";
import { MainContent } from "@/components/layout";
import { ElementButton } from "@/features/components";
import React from "react";

export default function page() {
  return (
    <div>
      <HeaderPage title="Button Component" />
      <MainContent>
        <ElementButton />
      </MainContent>
    </div>
  );
}
