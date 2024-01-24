"use client";
import React, { PropsWithChildren } from "react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { ArrowLeft, Dot, LayoutDashboard, OptionIcon } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

type menu = {
  pageTitle: string;
  items: {
    label: string;
    icon: React.ReactNode;
    url: LinkProps["href"] | null;
    child?: {
      label: string;
      icon?: React.ReactNode;
      url: string | URL;
    }[];
  }[];
};

const menus: menu[] = [
  {
    pageTitle: "Home",
    items: [
      {
        label: "Dashboard",
        icon: <LayoutDashboard />,
        url: "/dashboardd",
      },
      {
        label: "Menu Style",
        icon: <OptionIcon />,
        url: null,
        child: [
          {
            label: "Example style 1",
            url: "/#example-1",
          },
          {
            label: "Example style 2",
            url: "/#example-2",
          },
        ],
      },
    ],
  },
  {
    pageTitle: "Home",
    items: [
      {
        label: "Example",
        icon: <OptionIcon />,
        url: null,
        child: [
          {
            label: "Example style 1",
            url: "/#example-1",
          },
          {
            label: "Example style 2",
            url: "/#example-2",
          },
        ],
      },
    ],
  },
];

export const Sidebar = () => {
  return (
    <div className="fixed bottom-0 left-0 top-0 w-[257px] bg-white">
      <div className="relative flex items-center justify-center gap-2 px-8 pb-4 pt-6">
        <Logo />
        <h2 className="text-3xl">Hope UI</h2>
        <div className="absolute -right-3">
          <Button size={"icon"} className="h-8 w-8 rounded-full">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <Separator />
      <div className="mt-5 px-2">
        {menus.map((item, i) => {
          return (
            <div key={i} className="mt-2">
              <MenuTitle>Home</MenuTitle>
              {item.items.map((item, index) => {
                return (
                  <div key={index}>
                    {item.child ? (
                      <MenuItemChild
                        icon={item.icon}
                        label={item.label}
                        data={item.child}
                      />
                    ) : (
                      <MenuItem
                        href={`${item.url}`}
                        label="Dashboard"
                        icon={<LayoutDashboard />}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
        <Separator />
      </div>
    </div>
  );
};

const MenuTitle = ({ children }: PropsWithChildren) => {
  return (
    <div className="pb-2 pl-5 pt-4">
      <p className="text-sm font-semibold text-[#ADB5BD]">{children}</p>
    </div>
  );
};

type menuChildProps = {
  data: {
    label: string;
    icon?: React.ReactNode;
    url: string | URL;
  }[];
  label: string;
  icon?: React.ReactNode;
};
const MenuItemChild = ({ data, icon, label }: menuChildProps) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="h-0 rounded px-6 py-6 no-underline hover:bg-light/10 hover:no-underline data-[state=open]:bg-primary data-[state=closed]:text-[#8A92A6] data-[state=open]:text-white data-[state=closed]:hover:text-black">
          <div className="flex items-center">
            <i className="mr-2">{icon}</i>
            <p className="text-base">{label}</p>
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col items-center">
            {data?.map((item, i) => (
              <div className="w-full" key={i}>
                <MenuItem
                  className="pl-10"
                  href={item.url}
                  label={item.label}
                  icon={<Dot />}
                />
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

type menuProps = LinkProps &
  React.HTMLAttributes<HTMLAnchorElement> & {
    icon?: React.ReactNode;
    label: string;
  };
const MenuItem = ({
  children,
  href,
  icon,
  label,
  className,
  ...props
}: menuProps) => {
  const router = usePathname();
  return (
    <Link href={href} {...props}>
      <Button
        size={"default"}
        variant={router === href ? "primary" : "ghost"}
        className={cn(
          `flex w-full items-center justify-start py-3 text-start capitalize ${router === href ? "text-white" : "text-[#8A92A6]"}`,
          className,
        )}
      >
        <i className="mr-2">{icon}</i>
        {label}
        {children}
      </Button>
    </Link>
  );
};

const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
    >
      <rect
        x="-0.757812"
        y="19.2422"
        width="28"
        height="4"
        rx="2"
        transform="rotate(-45 -0.757812 19.2422)"
        fill="#3A57E8"
      />
      <rect
        x="7.72656"
        y="27.7266"
        width="28"
        height="4"
        rx="2"
        transform="rotate(-45 7.72656 27.7266)"
        fill="#3A57E8"
      />
      <rect
        x="10.5352"
        y="16.3945"
        width="16"
        height="4"
        rx="2"
        transform="rotate(45 10.5352 16.3945)"
        fill="#3A57E8"
      />
      <rect
        x="10.5566"
        y="-0.554688"
        width="28"
        height="4"
        rx="2"
        transform="rotate(45 10.5566 -0.554688)"
        fill="#3A57E8"
      />
    </svg>
  );
};
