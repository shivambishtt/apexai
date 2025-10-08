"use client";
import { Card, CardContent } from "@/components/ui/card";
import { OctagonAlertIcon } from "lucide-react";
import { z as zod } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { authClient } from "../../../../lib/auth-client";
import { useForm } from "react-hook-form";
import { Spinner } from "@/components/ui/spinner";
import { FaGithub, FaGoogle } from "react-icons/fa";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { useState } from "react";

const formSchema = zod
  .object({
    name: zod.string().min(1, { message: "Name is required" }),
    email: zod.string().email(),
    password: zod
      .string()
      .min(8, { message: "Length of password must be more than 8 characters" })
      .max(16),
    confirmPassword: zod.string().min(1, { message: "Password is required" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"], // field to display error
  });

function SignupView() {
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState<boolean>(false);

  const form = useForm<zod.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // when using onsubmit with ts + zod always mention the schema type for better safety
  const onsubmit = async (data: zod.infer<typeof formSchema>) => {
    setPending(true);
    setError(null); //ensures no error
    await authClient.signUp.email(
      {
        name: data.name,
        email: data.email,
        password: data.password,
        callbackURL: "/",
      },
      {
        onSuccess: () => {
          setPending(false);
        },
        onError: ({ error }) => {
          setError(error?.message);
        },
      }
    );
    setPending(false);
  };

  const onSocial = async (provider: "google" | "github") => {
    setError(null); //ensures no error
    authClient.signIn.social(
      {
        provider: provider,
        callbackURL: "/",
      },
      {
        onSuccess: () => {},
        onError: ({ error }) => {
          setError(error.message);
        },
      }
    );
  };
  return (
    <div className="flex flex-col">
      <Card className="overflow-hidden flex justify-between w-auto">
        <CardContent className="grid md:grid-cols-2 gap-8  ">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onsubmit)}
              className="overflow-hidden"
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold md:text-3xl">
                    Hey There !
                  </h1>
                  <p className="text-muted-foreground text-balance">
                    Let&apos;s Begin
                  </p>
                </div>

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name -</FormLabel>
                      <FormControl>
                        <Input
                          className="bg-transparent"
                          type="text"
                          // placeholder="example@123.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid gap-3">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email -</FormLabel>
                        <FormControl>
                          <Input
                            className="bg-transparent"
                            type="email"
                            // placeholder="example@123.com"
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
                        <FormLabel>Password -</FormLabel>
                        <FormControl>
                          <Input
                            className="bg-transparent"
                            type="password"
                            // placeholder="********"
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
                    name="confirmPassword" // reads from defaultvalues of resolver
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password -</FormLabel>
                        <FormControl>
                          <Input
                            className="bg-transparent"
                            type="password"
                            // placeholder="********"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {error && (
                  <Alert className="bg-destructive/10 border-none">
                    <OctagonAlertIcon className="h-4 w-4 !text-destructive" />
                    <AlertTitle>{error}</AlertTitle>
                  </Alert>
                )}
                <Button
                  disabled={pending}
                  className="w-full text-white"
                  type="submit"
                >
                  {pending && <Spinner />}
                  Sign in
                </Button>
                <div className="relative text-center text-sm after:content-[''] after:absolute after:inset-0 after:top-1/2 after:z-0 after:border-t after:border-border flex items-center justify-center gap-4">
                  <span className="relative bottom-2 z-10 bg-card text-muted-foreground">
                    Or continue with
                  </span>
                </div>
                <div className="flex items-center justify-center gap-3 relative bottom-3">
                  <Button
                    onClick={() => onSocial("google")}
                    disabled={pending}
                    variant="outline"
                    type="button"
                  >
                    <FaGoogle />
                  </Button>
                  <Button
                    disabled={pending}
                    onClick={() => onSocial("github")}
                    variant="outline"
                    type="button"
                  >
                    <FaGithub />
                  </Button>
                </div>
                <span className="flex items-center justify-center gap-2 relative bottom-4 ">
                  Already have an account? <br />{" "}
                  <Link
                    className="underline underline-offset-4 text-sm"
                    href="/signin"
                  >
                    Signin
                  </Link>
                </span>
              </div>
            </form>
          </Form>
          <div className="bg-radial bg-green-700 relative overflow-hidden  md:flex flex-col gap-2 items-center justify-center">
            {/* <img src="/logo.svg" alt="Image" className="h-[92px] w-[92px]" /> */}
            <p className="text-2xl  font-semibold text-white">Apex.ai</p>
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of service</a>{" "}
        and <a href="#">Privacy Policy</a>
      </div>
    </div>
  );
}

export default SignupView;
