import { Layers2, LayoutDashboard, Settings2, StickyNote } from "lucide-react";
import { LinkProps } from "next/link";

type menu = {
  pageTitle: string;
  items: {
    label: string;
    icon: React.ReactNode;
    url: LinkProps["href"] | null;
    as?: string;
    prefix?: string;
    child?: {
      label: string;
      icon?: React.ReactNode;
      url: string | URL;
    }[];
  }[];
};

export const routeMenus: menu[] = [
  {
    pageTitle: "Home",
    items: [
      {
        label: "Dashboard",
        icon: <LayoutDashboard />,
        url: "/ui/dashboard",
      },
      {
        label: "Starter page",
        icon: <StickyNote />,
        url: "/blank",
      },
      {
        label: "Menu Style",
        icon: <Settings2 />,
        url: null,
        as: "menu-style",
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
    pageTitle: "Elements",
    items: [
      {
        label: "Components",
        icon: <Layers2 />,
        url: null,
        as: "example",
        prefix: "/ui/components",
        child: [
          {
            label: "Badge",
            url: "/badge",
          },
          {
            label: "Button",
            url: "/button",
          },
          {
            label: "Tabs",
            url: "/tabs",
          },
          {
            label: "Widget",
            url: "/widget",
          },
        ],
      },
    ],
  },
];
