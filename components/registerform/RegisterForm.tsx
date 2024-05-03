"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { registerSchema } from "@/schemas/index";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const RegisterForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      userAgreement: false,
    },
  });

  function onSubmit(values: z.infer<typeof registerSchema>) {
    router.push("/home");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-5"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#A8E198] text-[16px]">
                Username
              </FormLabel>
              <FormControl>
                <Input
                  className="bg-transparent border-[#A8E198] text-[#A8E198] py-7"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#A8E198] text-[16px]">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  className="bg-transparent border-[#A8E198] text-[#A8E198] py-7"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#A8E198] text-[16px]">
                Password
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  className="bg-transparent border-[#A8E198] text-[#A8E198] py-7"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="userAgreement"
          render={({ field }) => (
            <FormItem className="flex items-center mt-4 space-x-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="border-[#A8E198]"
                />
              </FormControl>
              <FormLabel className="text-[#A8E198] text-[16px] pb-2">
                I read and accept the{" "}
                <Link href={"/terms"} className="font-bold underline">
                  Terms and Conditions
                </Link>
              </FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-[#A8E198] text-[#090F0C] font-semibold text-md w-full mt-4 py-6 hover:bg-transparent hover:border hover:border-[#A8E198] hover:text-[#A8E198]"
        >
          Register
        </Button>
      </form>
      <Button
        variant={"link"}
        className="text-[14px] text-[#A8E198] ml-[-10px]"
        asChild
      >
        <Link href={"/login"}>Already have an account? Sign In</Link>
      </Button>
    </Form>
  );
};
