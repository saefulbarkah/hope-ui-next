"use client";
import { TabUnderLine } from "@/components/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";

export const FeatureTab = () => {
  return (
    <div className="grid grid-cols-2 items-start gap-5">
      <Card>
        <CardHeader className="text-xl font-semibold">Tab Underline</CardHeader>
        <CardContent>
          <TabUnderLine.Tabs defaultValue="tab-1">
            <TabUnderLine.List>
              <TabUnderLine.Item value="tab-1" label="tab-1" />
              <TabUnderLine.Item value="tab-2" label="tab-2" />
              <TabUnderLine.Item value="tab-3" label="tab-3" />
            </TabUnderLine.List>
            <TabUnderLine.Content value="tab-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, unde sed beatae placeat eum ratione quaerat vero, quia
              recusandae sint maiores est vitae reprehenderit magnam quidem
              ipsa, vel quod? Possimus?
            </TabUnderLine.Content>
            <TabUnderLine.Content value="tab-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, unde sed beatae placeat eum ratione quaerat vero, quia
              recusandae sint maiores est vitae reprehenderit magnam quidem
              ipsa, vel quod? Possimus? Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Sapiente culpa ullam ea eligendi, totam quam
              iusto. Cum, deleniti. Beatae est voluptatibus nostrum quisquam
              iure maiores inventore atque itaque cupiditate minus?
            </TabUnderLine.Content>
          </TabUnderLine.Tabs>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="text-xl font-semibold">Tab Underline</CardHeader>
        <CardContent>
          <TabUnderLine.Tabs defaultValue="tab-22">
            <TabUnderLine.List>
              <TabUnderLine.Item value="tab-22" label="tab-1" />
              <TabUnderLine.Item value="tab-12" label="tab-2" />
              <TabUnderLine.Item value="tab-34" label="tab-3" />
            </TabUnderLine.List>
            <TabUnderLine.Content value="tab-1">Welcome</TabUnderLine.Content>
          </TabUnderLine.Tabs>
        </CardContent>
      </Card>
    </div>
  );
};
