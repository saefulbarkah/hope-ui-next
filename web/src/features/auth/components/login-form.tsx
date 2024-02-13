"use client";
import { Input, Label } from "@/components/form-controls";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export const LoginForm = () => {
  return (
    <div className="lg:w-[380px] 2xl:w-[436px]">
      <div className="text-center" id="title-page">
        <h2 className="text-3xl font-semibold leading-relaxed">Sign In</h2>
        <p className="text-secondary">Sign in to stay connect</p>
      </div>
      <form className="mt-5 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className="font-normal text-secondary">
            Email
          </Label>
          <Input id="email" type="email" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className="font-normal text-secondary">
            Password
          </Label>
          <Input.Password id="email" />
        </div>
        <div className="flex items-center justify-center">
          <Button type="submit" className="w-full lg:w-44">
            Sign in
          </Button>
        </div>
      </form>
      <div className="mt-5">
        <div className="flex items-center justify-center gap-2 text-sm">
          <p>Dont have account ?</p>
          <Link href={"/ui/auth/register"} className="text-primary">
            Click here to sign up
          </Link>
        </div>
      </div>
    </div>
  );
};
