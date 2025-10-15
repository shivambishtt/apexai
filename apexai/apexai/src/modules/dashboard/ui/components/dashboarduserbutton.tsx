"use client";
import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authClient } from "@/lib/auth-client";
import AgentAvatar from "@/components/agentAvatar";
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import { CreditCardIcon, LogOutIcon } from "lucide-react";
import { redirect } from "next/navigation";
// import { ChevronDownIcon } from "lucide-react";

function DashboardUserButton() {
  const { data, isPending } = authClient.useSession();

  const logoutUser = () => {
    authClient.signOut();
    // redirect("/signin");
  };
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="rounded-lg border border-border/10 p-3 w-full flex items-center justify-between bg-white/5 hover:bg-white/10 overflow-hidden">
          {data?.user.image ? (
            <Avatar>
              <AvatarImage src={data.user.image} />
            </Avatar>
          ) : (
            <AgentAvatar seed={data?.user.name} variant="initials" />
          )}
          <div className=" overflow-hidden text-wrap">
            <h1 className="text-sm ">{data?.user.name}</h1>
            <h2 className="text-sm ">{data?.user.email}</h2>
          </div>
          {/* <ChevronDownIcon /> */}
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" side="right">
          <DropdownMenuLabel className="w-50">
            <div className=" grid grid-cols-1 text-center ">
              <span className="text-sm">{data?.user.name}</span>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex cursor-pointer items-center justify-between">
            Billing
            <CreditCardIcon />
          </DropdownMenuItem>
          <DropdownMenuItem className="flex cursor-pointer items-center justify-between">
            Logout
            <LogOutIcon onClick={logoutUser} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default DashboardUserButton;
