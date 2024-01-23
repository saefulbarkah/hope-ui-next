import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell } from "lucide-react";
import React from "react";

export default function NotificationMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Bell className="h-6 w-6 text-gray-600" />
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={30} className="w-52 text-center">
        <p>on development....</p>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
