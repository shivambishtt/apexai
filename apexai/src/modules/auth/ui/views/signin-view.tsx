"use client";
import { Card, CardContent } from "@/components/ui/card";
import { z as zod } from "zod";
import { OctagonAlertIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle } from "@/components/ui/alert";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";

const formSchema = zod.object({
  email: zod.string().email(),
  password: zod
    .string()
    .min(8, { message: "Length of password must be more than 8 characters" })
    .max(16),
});

function SigninView() {
  const form = useForm<zod.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <div className="flex flex-col ">
      <Card className="overflow-hidden  bg-gray-200 ">
        <CardContent className="grid md:grid-cols-2 ">
          <Form {...form}>
            <form className="p-2">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold md:text-3xl">
                    Welcome back
                  </h1>
                  <p className="text-muted-foreground text-balance">
                    Login to your account !
                  </p>
                </div>
                <div className="grid gap-3">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="example@123.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="password" // reads from defaultvalues of resolver
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="********"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {true && (
                  <Alert className="bg-destructive/10 border-none">
                    <OctagonAlertIcon className="h-4 w-4 !text-destructive" />
                    <AlertTitle>Error</AlertTitle>
                  </Alert>
                )}
                <Button className="w-full" type="submit">
                  Sign in
                </Button>
                <div className="relative text-center text-sm after:content-[''] after:absolute after:inset-0 after:top-1/2 after:z-0 after:border-t after:border-border">
                  <span className="relative z-10 px-2 bg-card text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>
            </form>
          </Form>
          <div className="bg-radial bg-green-700 relative hidden md:flex flex-col gap-y-4 items-center justify-center">
            <img src="/logo.svg" alt="Image" className="h-[92px] w-[92px]" />
            <p className="text-2xl  font-semibold text-white">Apex.ai</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default SigninView;
