"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function HomeView() {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const [logout, setLogout] = useState<boolean>(false);
  if (!session) {
    return <p>Loading...</p>;
  }

  const handleLogout = () => {
    setLogout(true);
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => router.push("/signin"),
      },
    });
  };
  return (
    <div>
      {!logout && (
        <>
          <p>Logged in as {session?.user.name}</p>
          <Button onClick={handleLogout}>Sign out</Button>
        </>
      )}
    </div>
  );
}

export default HomeView;
