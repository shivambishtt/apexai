"use client";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { PanelLeftCloseIcon, PanelLeftIcon, SearchIcon } from "lucide-react";
import React, { useState } from "react";
import DashboardCommand from "./dashboard-command";

function DashboardNavbar() {
  const { state, toggleSidebar, isMobile } = useSidebar();
  const [commandOpen, setCommandOpen] = useState(false);

  return (
    <>
      <DashboardCommand open={commandOpen} setOpen={setCommandOpen} />
      <nav className="flex px-4 gap-x-2 items-center py-3 border-b bg-background">
        <Button onClick={toggleSidebar} className="size-9">
          {state === "collapsed" || isMobile ? (
            <PanelLeftIcon />
          ) : (
            <PanelLeftCloseIcon />
          )}
        </Button>
        <Button
          className="h-9 w-[240px] justify-start font-normal text-muted-foreground hover:text-muted-foreground"
          variant="outline"
          size="sm"
          onClick={() => {
            setCommandOpen((prev) => !prev);
          }}
        >
          <SearchIcon />
          Search
        </Button>
      </nav>
    </>
  );
}

export default DashboardNavbar;
