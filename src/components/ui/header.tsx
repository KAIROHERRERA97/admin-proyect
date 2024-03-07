import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Header() {
  return (
    <header className="w-full bg-white p-2 h- flex justify-end items-center fixed top-0">
      {/* <h1 className="text-xl font-semibold">Clínica Los Mata Sanos 2.0</h1> */}
      <div className="flex justify-between  items-center ">
        <span className="mr-4 text-md font-medium">Rick Melchor</span>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
