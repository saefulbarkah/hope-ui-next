"use client";
import React from "react";
import SearchMenu from "./menus/search-menu";
import UserMenu from "./menus/user-menu";
import MessageMenu from "./menus/message-menu";
import NotificationMenu from "./menus/notification-menu";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { useLayoutStore } from "@/store/layout";
import { Variants, motion } from "framer-motion";

export const Navbar = () => {
  const { sidebarOpen, screentype, toggleSidebar } = useLayoutStore(
    (state) => state,
  );
  const navbarVariant: Variants = {
    open:
      screentype === "DESKTOP"
        ? {
            marginLeft: "257px",
          }
        : {
            marginLeft: 0,
          },
    close: { marginLeft: 0 },
  };

  const openMenuVariant: Variants = {
    open:
      screentype === "DESKTOP" ? { translateX: "-28px" } : { translateX: 0 },
    close: screentype === "DESKTOP" ? { translateX: 0 } : { translateX: 0 },
  };

  return (
    <motion.div
      initial={
        screentype === "MOBILE"
          ? {
              marginLeft: 0,
            }
          : {
              marginLeft: "257px",
            }
      }
      animate={sidebarOpen ? "open" : "close"}
      variants={navbarVariant}
      transition={{
        bounce: 0,
        type: "spring",
        duration: 0.5,
      }}
      className={"fixed inset-x-0 top-0 z-50 bg-white ease-in-out"}
    >
      <div className="relative flex h-[76px] items-center justify-between px-8 py-4">
        <motion.div
          variants={openMenuVariant}
          initial={
            screentype === "MOBILE"
              ? {
                  translateX: 0,
                }
              : {
                  translateX: "-28px",
                }
          }
          animate={sidebarOpen ? "open" : "close"}
          transition={{
            bounce: 0,
            type: "spring",
            duration: 0.5,
          }}
          className={`absolute left-2 z-50`}
        >
          <Button
            size={"icon"}
            className="h-8 w-8 rounded-full"
            onClick={() => toggleSidebar()}
          >
            <ArrowLeft className={`h-5 w-5`} />
          </Button>
        </motion.div>
        <SearchMenu />
        <div className="flex items-center gap-4">
          <NotificationMenu />
          <MessageMenu />
          <UserMenu />
        </div>
      </div>
    </motion.div>
  );
};
