"use client";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { authClient } from "@/lib/auth-client"

function Page() {
  const [name, setName] = useState<string>("")
  const [email, setemail] = useState<string>("")
  const [password, setpassword] = useState<string>("")

  const onSubmit = () => {
    authClient.signUp.email({
      name,
      email,
      password
    }, {
      onError: () => {
        window.alert("Something went wrong");
      },
      onSuccess: () => {
        window.alert("Success ")
      }
    }
    )
  }

  return (
    <div className="p-4 flex flex-col gap-y-4">
      <Input
        placeholder="name"
        value={name}
        onChange={((event) => setName(event.target.value))} />

      <Input
        placeholder=" email"
        value={email}
        onChange={((event) => setemail(event.target.value))} />

      <Input
        placeholder=" password"
        type="password"
        value={password}
        onChange={((event) => setpassword(event.target.value))} />

      <Button onClick={onSubmit}>
        Signup
      </Button>
    </div>
  )
}

export default Page
