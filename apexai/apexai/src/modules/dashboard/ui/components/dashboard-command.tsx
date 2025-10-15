"use client";
import { CommandDialog, CommandInput } from "cmdk";
import React from "react";

function DashboardCommand() {
  return (
    <div>
      <CommandDialog>
        <CommandInput />
      </CommandDialog>
    </div>
  );
}

export default DashboardCommand;
