import {
  Layers2,
  LayoutDashboard,
  PieChartIcon,
  Settings2,
  StickyNote,
} from "lucide-react";
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
            label: "Alert",
            url: "/alert",
          },
          {
            label: "Badge",
            url: "/badge",
          },
          {
            label: "Button",
            url: "/button",
          },
          {
            label: "Dialog",
            url: "/dialog",
          },
          {
            label: "Form",
            url: "/form",
          },
          {
            label: "Progress",
            url: "/progress",
          },
          {
            label: "Tabs",
            url: "/tabs",
          },
          {
            label: "Table",
            url: "/table",
          },
          {
            label: "Toast",
            url: "/toast",
          },
          {
            label: "Widget",
            url: "/widget",
          },
        ],
      },
      {
        label: "Chart",
        icon: <PieChartIcon />,
        url: "/ui/chart",
      },
    ],
  },
];
