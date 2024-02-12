import { HeaderPage } from "@/components/header";
import { MainContent } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

export default function page() {
  return (
    <>
      <HeaderPage title="Starter Page" description="This is a starter page" />
      <MainContent>
        <Card>
          <CardHeader>
            <CardTitle>Title Section</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
              sequi beatae provident ullam! Adipisci, animi voluptatum itaque
              corrupti sint tenetur quae distinctio in enim eum eligendi
              voluptatibus vel. Quo, delectus. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Ipsa, deleniti saepe? Voluptas
              dolorum, esse cum sit reiciendis omnis sequi ex itaque quia nam
              similique explicabo dolorem enim dicta numquam aliquid?
            </p>
          </CardContent>
        </Card>
      </MainContent>
    </>
  );
}
