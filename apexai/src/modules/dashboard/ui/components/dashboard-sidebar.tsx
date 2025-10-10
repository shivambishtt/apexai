"use client";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { BotIcon, VideoIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Item } from "@radix-ui/react-accordion";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import DashboardUserButton from "./dashboarduserbutton";

const firstSection = [
  {
    icon: VideoIcon,
    label: "Meetings",
    href: "/meetings",
  },
  {
    icon: BotIcon,
    label: "Agents",
    href: "/agents", //list of agents availaible
  },
];
const secondSection = [
  {
    icon: StarIcon,
    label: "Upgrade",
    href: "/upgrade",
  },
];

function DashboardSidebar() {
  const pathname = usePathname();
  return (
    <div>
      <Sidebar>
        <SidebarHeader>
          <Link className="flex items-center gap-2 px-2 pt-2" href="/">
            <Image src="/logo.svg" height={36} width={36} alt="Apex AI" />
            <p className="text-2xl font-semibold">Apex.ai</p>
          </Link>
        </SidebarHeader>
        <Separator className="opacity-15 text-[#5D6B68]" />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {firstSection.map((elem) => {
                  return (
                    <div key={elem.href}>
                      <SidebarMenuButton
                        asChild // asChild property helps in aligning the sidebarmenubutton
                        className={cn(
                          "h-10 border border-transparent hover:border-[#5D6B68]/10 hover:bg-gray-200",
                          pathname === elem.href &&
                            "bg-linear-to-r/oklch border-[#5D6B68]/10"
                        )}
                        isActive={pathname === elem.href}
                      >
                        <Link
                          className="flex items-center gap-3"
                          href={elem.href}
                        >
                          <elem.icon className="size-5" />
                          <span className="font-semibold">{elem.label}</span>
                        </Link>
                      </SidebarMenuButton>
                      {/* SidebarMenuBUtton for the separate menu like UI  */}
                    </div>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <Separator className="opacity-15 text-[#5D6B68]" />
                {secondSection.map((elem) => {
                  return (
                    <div key={elem.href}>
                      <SidebarMenuButton
                        asChild // asChild property helps in aligning the sidebarmenubutton
                        className={cn(
                          "h-10 border border-transparent hover:border-[#5D6B68]/10 hover:bg-gray-200",
                          pathname === elem.href &&
                            "bg-linear-to-r/oklch border-[#5D6B68]/10"
                        )}
                        isActive={pathname === elem.href}
                      >
                        <Link
                          className="flex items-center gap-3"
                          href={elem.href}
                        >
                          <elem.icon className="size-5" />
                          <span className="font-semibold">{elem.label}</span>
                        </Link>
                      </SidebarMenuButton>
                    </div>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className=" text-white">
          <DashboardUserButton />
        </SidebarFooter>
        <SidebarMenu></SidebarMenu>
      </Sidebar>
    </div>
  );
}

export default DashboardSidebar;
