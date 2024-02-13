"use client";
import { Input, Label } from "@/components/form-controls";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock, Mail, User } from "lucide-react";
import React from "react";

// input element
const InputElement = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Input Component</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Input sizes={"lg"} placeholder="Input Large" />
        <Input placeholder="Input Default" />
        <Input sizes={"md"} placeholder="Input medium" />
        <Input sizes={"md"} placeholder="Input small" />
      </CardContent>
    </Card>
  );
};

// Input with icon
const InputElementWithIcon = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Input Component With Icon</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <Input
          sizes={"lg"}
          placeholder="Username"
          Icon={<User className="h-5 w-5" />}
          type="email"
        />
        <Input
          sizes={"lg"}
          placeholder="Email"
          Icon={<Mail className="h-5 w-5" />}
          type="email"
        />
        <Input.Password
          sizes={"lg"}
          placeholder="Passowrd"
          Icon={<Lock className="h-5 w-5" />}
        />
      </CardContent>
    </Card>
  );
};

// Input with label
const InputElementWithLabel = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Input component with label</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Label>Username</Label>
          <Input placeholder="Type username here" type="text" />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Email</Label>
          <Input placeholder="Type username here" type="email" />
        </div>
      </CardContent>
    </Card>
  );
};

export const FeatureForm = () => {
  return (
    <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-2">
      <InputElement />
      <InputElementWithIcon />
      <InputElementWithLabel />
    </div>
  );
};
