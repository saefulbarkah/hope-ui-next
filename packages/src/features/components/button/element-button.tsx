"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const SolidButton = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Solid Button</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap items-center gap-2">
          <Button>Primary</Button>
          <Button variant={"danger"}>Danger</Button>
          <Button variant={"warning"}>Warning</Button>
          <Button variant={"info"}>Info</Button>
          <Button variant={"ghost"}>Ghost</Button>
          <Button variant={"link"}>Link</Button>
          <Button variant={"secondary"}>Secondary</Button>
          <Button variant={"dark"}>Dark</Button>
        </div>
      </CardContent>
    </Card>
  );
};

const OutlineButton = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Outline Button</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          <Button variant={"outline-primary"}>Primary</Button>
          <Button variant={"outline-danger"}>Danger</Button>
          <Button variant={"outline-warning"}>Warning</Button>
          <Button variant={"outline-info"}>Info</Button>
          <Button variant={"outline-dark"}>Dark</Button>
        </div>
      </CardContent>
    </Card>
  );
};

const SemiButton = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Semi Button</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          <Button variant={"semi-primary"}>Primary</Button>
          <Button variant={"semi-danger"}>Danger</Button>
          <Button variant={"semi-warning"}>Warning</Button>
          <Button variant={"semi-info"}>Info</Button>
        </div>
      </CardContent>
    </Card>
  );
};

const SizesButton = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Size Button</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant={"semi-primary"} size={"xs"}>
            extra small
          </Button>
          <Button variant={"semi-danger"} size={"sm"}>
            Small
          </Button>
          <Button variant={"semi-info"} size={"default"}>
            Default
          </Button>
          <Button variant={"semi-warning"} size={"lg"}>
            Large
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export const ElementButton = () => {
  return (
    <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
      <SolidButton />
      <OutlineButton />
      <SemiButton />
      <SizesButton />
    </div>
  );
};
