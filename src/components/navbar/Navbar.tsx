"use client";
import React from "react";
import SearchMenu from "./menus/search-menu";
import UserMenu from "./menus/user-menu";
import MessageMenu from "./menus/message-menu";
import NotificationMenu from "./menus/notification-menu";

export const Navbar = () => {
  return (
    <div className="fixed inset-x-0 top-0 ml-[257px] bg-white">
      <div className="flex h-[76px] items-center justify-between px-8 py-4">
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
