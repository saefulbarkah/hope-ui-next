"use client";

import { Alert } from "@/components/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Info } from "lucide-react";
import React from "react";

const SolidAlert = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Solid alert</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Alert variant={"primary"}>
          <p>
            This is a success alert—check it out! <b>primary</b>
          </p>
        </Alert>
        <Alert variant={"success"}>
          <p>
            This is a success alert—check it out! <b>success</b>
          </p>
        </Alert>
        <Alert variant={"danger"}>
          <p>
            This is a success alert—check it out! <b>danger</b>
          </p>
        </Alert>
        <Alert variant={"info"}>
          <p>
            This is a success alert—check it out! <b>info</b>
          </p>
        </Alert>
      </CardContent>
    </Card>
  );
};

const SemiAlert = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Semi alert</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Alert variant={"semi-primary"}>
          <p>
            This is a success alert—check it out! <b>primary</b>
          </p>
        </Alert>
        <Alert variant={"semi-success"}>
          <p>
            This is a success alert—check it out! <b>success</b>
          </p>
        </Alert>
        <Alert variant={"semi-danger"}>
          <p>
            This is a success alert—check it out! <b>danger</b>
          </p>
        </Alert>
        <Alert variant={"semi-info"}>
          <p>
            This is a success alert—check it out! <b>info</b>
          </p>
        </Alert>
      </CardContent>
    </Card>
  );
};

const IconAlert = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Icon alert</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Alert variant={"primary"} icon={<Info />}>
          <p>
            This is a success alert—check it out! <b>primary</b>
          </p>
        </Alert>
        <Alert variant={"success"} icon={<Info />}>
          <p>
            This is a success alert—check it out! <b>success</b>
          </p>
        </Alert>
        <Alert variant={"danger"} icon={<Info />}>
          <p>
            This is a success alert—check it out! <b>danger</b>
          </p>
        </Alert>
        <Alert variant={"info"} icon={<Info />}>
          <p>
            This is a success alert—check it out! <b>info</b>
          </p>
        </Alert>
      </CardContent>
    </Card>
  );
};

const CloseAlert = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Close alert</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Alert variant={"semi-primary"} withClose={true}>
          <p>
            This is a success alert—check it out! <b>primary</b>
          </p>
        </Alert>
        <Alert variant={"semi-success"} withClose={true}>
          <p>
            This is a success alert—check it out! <b>success</b>
          </p>
        </Alert>
        <Alert variant={"semi-danger"} withClose={true}>
          <p>
            This is a success alert—check it out! <b>danger</b>
          </p>
        </Alert>
        <Alert variant={"semi-info"} withClose={true}>
          <p>
            This is a success alert—check it out! <b>info</b>
          </p>
        </Alert>
      </CardContent>
    </Card>
  );
};

export const FeatureAlert = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <SolidAlert />
      <SemiAlert />
      <IconAlert />
      <CloseAlert />
    </div>
  );
};
