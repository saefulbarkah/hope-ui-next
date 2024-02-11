"use client";
import { Dialog } from "@/components/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const DialogSmall = () => {
  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button variant={"danger"}>Small Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Content size={"sm"}>
        <Dialog.Header>
          <Dialog.Title>Title</Dialog.Title>
          <Dialog.Description>description</Dialog.Description>
        </Dialog.Header>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint optio
          eaque neque labore recusandae, natus debitis beatae. Quasi nobis minus
          tenetur ipsum sit, quo illo tempore vel excepturi odio nisi?
        </p>
        <Dialog.Footer>
          <Dialog.Close asChild>
            <Button variant={"dark"}>Close</Button>
          </Dialog.Close>
          <Button>Submit</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  );
};

const DialogLarge = () => {
  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button variant={"warning"}>Large Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Content size={"lg"}>
        <Dialog.Header>
          <Dialog.Title>Title</Dialog.Title>
          <Dialog.Description>description</Dialog.Description>
        </Dialog.Header>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint optio
          eaque neque labore recusandae, natus debitis beatae. Quasi nobis minus
          tenetur ipsum sit, quo illo tempore vel excepturi odio nisi?
        </p>
        <Dialog.Footer>
          <Dialog.Close asChild>
            <Button variant={"dark"}>Close</Button>
          </Dialog.Close>
          <Button>Submit</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  );
};

const DialogExtraLarge = () => {
  return (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button variant={"dark"}>XL Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Content size={"xl"}>
        <Dialog.Header>
          <Dialog.Title>Title</Dialog.Title>
          <Dialog.Description>description</Dialog.Description>
        </Dialog.Header>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint optio
          eaque neque labore recusandae, natus debitis beatae. Quasi nobis minus
          tenetur ipsum sit, quo illo tempore vel excepturi odio nisi?
        </p>
        <Dialog.Footer>
          <Dialog.Close asChild>
            <Button variant={"dark"}>Close</Button>
          </Dialog.Close>
          <Button>Submit</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  );
};

export const FeatureDialog = () => {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Dialog</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-5">
            <DialogSmall />
            <DialogLarge />
            <DialogExtraLarge />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
