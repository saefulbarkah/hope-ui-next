"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { ToastComponent, toast } from "@/components/toast";
import Link from "next/link";
import { Info } from "lucide-react";

export const FeatureToast = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Info /> Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <p>
              For additional details and customization options, please refer to
              the documentation.
              <span className="ml-1 ">👉</span>
              <span className="ml-1">
                <Link
                  className="text-primary hover:underline"
                  href={"https://react-hot-toast.com/docs/toast"}
                  target="_blank"
                >
                  https://react-hot-toast.com/
                </Link>
              </span>
            </p>
          </div>
        </CardContent>
      </Card>
      <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Toast Default</CardTitle>
          </CardHeader>
          <CardContent className="flex gap-2">
            <Button onClick={() => toast.success("Success")}>
              Toast success
            </Button>
            <Button variant={"danger"} onClick={() => toast.error("Error")}>
              Toast Error
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
