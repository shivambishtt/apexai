"use client";
import { Card } from "@/components/ui/card";
import SigninView from "@/modules/auth/ui/views/signin-view";
import React from "react";

function Page() {
  return (
    <div>
      <div>
        <Card>
          <SigninView />
        </Card>
      </div>
    </div>
  );
}

export default Page;
