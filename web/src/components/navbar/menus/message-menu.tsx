import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Mail } from "lucide-react";
import React from "react";

export default function MessageMenu() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"ghost"} size={"icon"}>
          <Mail className="h-6 w-6 text-gray-600" />
        </Button>
      </PopoverTrigger>
      <PopoverContent sideOffset={30} className="w-52 text-center">
        <p>in development....</p>
      </PopoverContent>
    </Popover>
  );
}
