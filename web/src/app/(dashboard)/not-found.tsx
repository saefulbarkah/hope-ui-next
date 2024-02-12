import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex h-[calc(100vh-76px)] flex-col items-center justify-center">
      <Image src={"/errors/404.svg"} width={300} height={300} alt="404" />
      <div className="mt-10 flex flex-col items-center gap-2">
        <h2 className="text-3xl font-bold">Oops! This Page is Not Found.</h2>
        <p>The requested page dose not exist</p>
        <Button>
          <Link href={"/ui/dashboard"}>Back to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
}
