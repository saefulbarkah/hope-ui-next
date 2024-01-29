"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs } from "@/components/tabs";
import React from "react";

// example usage tab underline
const TabUnderLine = () => {
  return (
    <Card>
      <CardHeader className="text-xl font-semibold">Tab Underline</CardHeader>
      <CardContent>
        <Tabs defaultValue="tab-1">
          <Tabs.List>
            <Tabs.Item value="tab-1" label="tab-1" />
            <Tabs.Item value="tab-2" label="tab-2" />
            <Tabs.Item value="tab-3" label="tab-3" />
          </Tabs.List>
          <Tabs.Content value="tab-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            unde sed beatae placeat eum ratione quaerat vero, quia recusandae
            sint maiores est vitae reprehenderit magnam quidem ipsa, vel quod?
            Possimus?
          </Tabs.Content>
          <Tabs.Content value="tab-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            unde sed beatae placeat eum ratione quaerat vero, quia recusandae
            sint maiores est vitae reprehenderit magnam quidem ipsa, vel quod?
            Possimus? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Sapiente culpa ullam ea eligendi, totam quam iusto. Cum, deleniti.
            Beatae est voluptatibus nostrum quisquam iure maiores inventore
            atque itaque cupiditate minus?
          </Tabs.Content>
        </Tabs>
      </CardContent>
    </Card>
  );
};

// example usage tab badge
const TabBadge = () => {
  return (
    <Card>
      <CardHeader className="text-xl font-semibold">Tab Badge</CardHeader>
      <CardContent>
        <Tabs defaultValue="tab-1" type="badge">
          <Tabs.List>
            <Tabs.Item value="tab-1" label="tab-1" />
            <Tabs.Item value="tab-2" label="tab-2" />
            <Tabs.Item value="tab-3" label="tab-3" />
          </Tabs.List>
          <Tabs.Content value="tab-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            unde sed beatae placeat eum ratione quaerat vero, quia recusandae
            sint maiores est vitae reprehenderit magnam quidem ipsa, vel quod?
            Possimus?
          </Tabs.Content>
          <Tabs.Content value="tab-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            unde sed beatae placeat eum ratione quaerat vero, quia recusandae
            sint maiores est vitae reprehenderit magnam quidem ipsa, vel quod?
            Possimus? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Sapiente culpa ullam ea eligendi, totam quam iusto. Cum, deleniti.
            Beatae est voluptatibus nostrum quisquam iure maiores inventore
            atque itaque cupiditate minus?
          </Tabs.Content>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export const FeatureTab = () => {
  return (
    <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-2">
      <TabUnderLine />
      <TabBadge />
    </div>
  );
};
