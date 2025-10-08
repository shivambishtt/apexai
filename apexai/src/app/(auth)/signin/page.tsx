import { auth } from "@/lib/auth";
import SigninView from "@/modules/auth/ui/views/signin-view";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import React from "react";

async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!!session) {
    redirect("/");
  }
  return (
    <>
      <SigninView />
    </>
  );
}

export default Page;
