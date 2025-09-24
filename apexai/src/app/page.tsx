"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

function page() {
  const [name, setName] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  return (
    <div>
      <Input placeholder="name" value={name} onChange={((event) => setName(event.target.value))} />
      <Input placeholder=" email" value={email} onChange={((event) => setemail(event.target.value))} />
      <Input placeholder=" password" type="password" value={password} onChange={((event) => setpassword(event.target.value))} />
      <Button>
        Create User
      </Button>
    </div>
  )
}

export default page
