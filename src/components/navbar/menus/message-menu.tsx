import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Mail } from "lucide-react";
import React from "react";

export default function MessageMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Mail className="text-gray-500" />
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={30} className="w-52 text-center">
        <p>on development....</p>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
