import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

export default function SearchMenu() {
  return (
    <div className={`relative ml-5 w-48`}>
      <Input placeholder="" className="peer h-full py-2 pl-9 lg:w-[275px]" />
      <label className="pointer-events-none absolute inset-y-0 hidden translate-x-9 items-center text-base text-[#ADB5BD] peer-placeholder-shown:flex">
        Search...
      </label>
      <div className="absolute inset-y-0 left-3 flex items-center">
        <Search className="h-5 w-5 text-[#ADB5BD]" />
      </div>
    </div>
  );
}
