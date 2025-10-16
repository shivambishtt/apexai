"use client";
import React from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

interface DashboardCommandProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function DashboardCommand({ open, setOpen }: DashboardCommandProps) {
  return (
    <CommandDialog className="" open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Find a meeting or an agent" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty> 
        <CommandGroup heading="Suggestions">
          <CommandItem>Test</CommandItem>
          <CommandItem>Another Option</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}

export default DashboardCommand;
