"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { LogOut, Rss, User } from "lucide-react";

export default function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex h-full w-full appearance-none items-center gap-4 p-2 text-start outline-none">
          <Image
            src={`https://i.pravatar.cc/300`}
            width={45}
            height={45}
            unoptimized
            alt="avatar"
            className="select-none rounded-full"
          />
          <div className="pointer-events-none hidden flex-col lg:flex">
            <p>Saeful Barkah</p>
            <p className="text-sm text-[#8A92A6]">Software Engineer</p>
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={10} className="w-52">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <User className="mr-2 h-4 w-4" />
          Profile
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <Rss className="mr-2 h-4 w-4" />
          Subscription
        </DropdownMenuItem>
        <Separator className="my-2" />
        <DropdownMenuItem className="cursor-pointer">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
