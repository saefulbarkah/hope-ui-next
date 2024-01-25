"use client";
import React from "react";
import SearchMenu from "./menus/search-menu";
import UserMenu from "./menus/user-menu";
import MessageMenu from "./menus/message-menu";
import NotificationMenu from "./menus/notification-menu";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { useLayoutStore } from "@/store/layout";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const layout = useLayoutStore((state) => state);

  return (
    <div
      className={cn(
        `fixed inset-x-0 top-0 z-50 bg-white transition-[margin] ease-in-out motion-reduce:transition-none`,
        `${layout.sidebarOpen ? "ml-0 lg:ml-[257px]" : "ml-0"}`,
      )}
    >
      <div className="relative flex h-[76px] items-center justify-between px-8 py-4">
        <div
          className={cn(
            `absolute left-2 z-50 transition motion-reduce:transition-none`,
            `${layout.sidebarOpen ? "-translate-x-7" : "translate-x-0"}`,
          )}
        >
          <Button
            size={"icon"}
            className="h-8 w-8 rounded-full"
            onClick={() => layout.toggleSidebar()}
          >
            <ArrowLeft
              className={`${!layout.sidebarOpen && "rotate-180"} h-5 w-5`}
            />
          </Button>
        </div>
        <SearchMenu />
        <div className="flex items-center gap-4">
          <NotificationMenu />
          <MessageMenu />
          <UserMenu />
        </div>
      </div>
    </div>
  );
};
