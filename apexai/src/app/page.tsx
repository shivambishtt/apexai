"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

function Page() {
  const { data: session } = authClient.useSession();
  const [name, setName] = useState<string>("");
  const [email, setemail] = useState<string>("");
  const [password, setpassword] = useState<string>("");

  const onSubmit = () => {
    authClient.signUp.email(
      {
        name,
        email,
        password,
      },
      {
        onError: () => {
          window.alert("Something went wrong");
        },
        onSuccess: () => {
          window.alert("Success");
        },
      }
    );
    if (session) {
      return (
        <div className="flex flex-col  gap-y-4">
          <p>Logged in as {session?.user.name}</p>
          <Button onClick={() => authClient.signOut()}>Sign Out</Button>
        </div>
      );
    }
  };

  return (
    <div className=" flex flex-col gap-y-4">
      <Input
        placeholder="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <Input
        placeholder=" email"
        value={email}
        onChange={(event) => setemail(event.target.value)}
      />

      <Input
        placeholder=" password"
        type="password"
        value={password}
        onChange={(event) => setpassword(event.target.value)}
      />

      <Button onClick={onSubmit}>Signup</Button>
    </div>
  );
}

export default Page;
