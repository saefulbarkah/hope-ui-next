"use client";
import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { LogOut, Rss, User } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { create } from "zustand";
import { cn } from "@/lib/utils";

const menusRouting = [
  {
    name: "Profile",
    icon: <User className="mr-2 h-4 w-4" />,
    url: "/profile",
  },
  {
    name: "Subscription",
    icon: <Rss className="mr-2 h-4 w-4" />,
    url: "/subscriptions",
  },
];

type useMenuType = {
  isOpen: boolean;
  setOpen: (val: boolean) => void;
};

const useMenu = create<useMenuType>((set) => ({
  isOpen: false,
  setOpen: (val) => set({ isOpen: val }),
}));

export default function UserMenu() {
  const menuState = useMenu((state) => state);
  return (
    <Popover open={menuState.isOpen} onOpenChange={menuState.setOpen}>
      <PopoverTrigger asChild>
        <button
          className={cn(
            '"relative active:bg-slate-50" flex items-center justify-center gap-4 p-2 text-start outline-none transition-colors',
            menuState.isOpen && "bg-slate-50",
          )}
        >
          <Image
            src={`https://i.pravatar.cc/300`}
            width={45}
            height={45}
            quality={50}
            unoptimized
            alt="avatar"
            className="select-none rounded-full"
          />
          <div className="pointer-events-none relative hidden flex-col lg:flex">
            <p>Saeful Barkah</p>
            <p className="text-sm text-[#8A92A6]">Software Engineer</p>
          </div>
        </button>
      </PopoverTrigger>
      <PopoverContent sideOffset={10} className="w-52 px-[unset] py-[unset]">
        <div className="">
          <div className="p-3">
            <h2 className="text-sm font-bold">My Account</h2>
          </div>
          <Separator />
          <div className="mb-2 mt-2">
            {menusRouting.map((item, i) => (
              <MenuItem
                key={i}
                onClick={() => {
                  menuState.setOpen(false);
                }}
              >
                {item.icon}
                {item.name}
              </MenuItem>
            ))}
            <Separator className="my-2" />
            <MenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </MenuItem>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}

const MenuItem = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) => {
  const setOpen = useMenu((state) => state.setOpen);

  return (
    <button
      className="flex w-full items-center justify-start px-3 py-1.5 text-sm font-medium transition hover:bg-gray-100"
      {...props}
    >
      {children}
    </button>
  );
};
