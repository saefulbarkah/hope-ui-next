import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Bell } from "lucide-react";
import React from "react";

export default function NotificationMenu() {
  return (
    <Popover>
      <PopoverTrigger>
        <Bell className="h-6 w-6 text-gray-600" />
      </PopoverTrigger>
      <PopoverContent sideOffset={30} className="w-52 text-center">
        <p>on development....</p>
      </PopoverContent>
    </Popover>
  );
}
