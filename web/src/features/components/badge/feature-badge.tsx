import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const BadgeSolid = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Badge Solid</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <Badge>primary</Badge>
          <Badge variant={"danger"}>danger</Badge>
          <Badge variant={"success"}>success</Badge>
          <Badge variant={"warning"}>warning</Badge>
          <Badge variant={"info"}>info</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

const BadgeSemi = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Badge Semi</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <Badge variant={"semi-primary"}>primary</Badge>
          <Badge variant={"semi-danger"}>danger</Badge>
          <Badge variant={"semi-success"}>success</Badge>
          <Badge variant={"semi-warning"}>warning</Badge>
          <Badge variant={"semi-info"}>info</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

const BadgeOutline = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Badge Outline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2">
          <Badge variant={"outline-primary"}>primary</Badge>
          <Badge variant={"outline-danger"}>danger</Badge>
          <Badge variant={"outline-success"}>success</Badge>
          <Badge variant={"outline-warning"}>warning</Badge>
          <Badge variant={"outline-info"}>info</Badge>
        </div>
      </CardContent>
    </Card>
  );
};

export const FeatureBadge = () => {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      <BadgeSolid />
      <BadgeSemi />
      <BadgeOutline />
    </div>
  );
};
