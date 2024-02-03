/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { ProgressBar } from "@/components/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";

const UpdateComponent = ({ progress }: { progress: number }) => {
  return (
    <div className="grid grid-cols-2 gap-5 lg:grid-cols-3">
      <Card className="rounded-none border-none shadow-xl shadow-danger/15">
        <CardContent className="flex flex-col gap-4 p-0">
          <div className="px-4 pt-5">
            <div className="flex items-center gap-2">
              <p className="text-danger">{progress}%</p>
              <p>Update in progress...</p>
              <div className="ml-auto">
                <Loader2 className="animate-spin text-danger" />
              </div>
            </div>
          </div>
          <ProgressBar variant={"danger"} value={progress} rounded={"none"} />
        </CardContent>
      </Card>
      <Card className="rounded-none border-none shadow-xl shadow-primary/15">
        <CardContent className="flex flex-col gap-4 p-0">
          <div className="px-4 pt-5">
            <div className="flex items-center gap-2">
              <p className="text-primary">{progress}%</p>
              <p>Update in progress...</p>
              <div className="ml-auto">
                <Loader2 className="animate-spin text-primary" />
              </div>
            </div>
          </div>
          <ProgressBar variant={"primary"} value={progress} rounded={"none"} />
        </CardContent>
      </Card>
      <Card className="rounded-none border-none shadow-xl shadow-warning/15">
        <CardContent className="flex flex-col gap-4 p-0">
          <div className="px-4 pt-5">
            <div className="flex items-center gap-2">
              <p className="text-warning">{progress}%</p>
              <p>Update in progress...</p>
              <div className="ml-auto">
                <Loader2 className="animate-spin text-warning" />
              </div>
            </div>
          </div>
          <ProgressBar variant={"warning"} value={progress} rounded={"none"} />
        </CardContent>
      </Card>
    </div>
  );
};

export const FeatureProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress >= 100) {
        return setProgress(0);
      }
      setProgress(progress + 20);
    }, 1000);
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className="flex flex-col gap-5">
      <Card>
        <CardHeader>
          <CardTitle>Uploading example</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p>Uploading... {progress}%</p>
          <ProgressBar variant={"primary"} value={progress} />
        </CardContent>
      </Card>
      <UpdateComponent progress={progress} />
    </div>
  );
};
