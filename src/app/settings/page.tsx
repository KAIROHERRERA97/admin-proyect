import Header from "@/components/ui/header";
import React from "react";
import SideBar from "@/components/ui/sideBar";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  return (
    <main className="flex flex-row gap-1">
      <SideBar />
      <article className="flex flex-col bg-slate-100 h-screen w-full">
        <Header />
        <section className="w-full px-8 flex flex-col gap-6 ">
          <div className="flex flex-row justify-between items-center p-2 ">
            <span className="text-lg font-semibold text-blue-500 mr-6">
              Settings
            </span>
            <div className="w-full h-0.5 rounded-md bg-slate-400"></div>
          </div>
          <div className="h-auto bg-white  p-4 flex flex-col w-auto rounded-md gap-6 ">
            <div className="font-semibold text-sm">Configure session</div>
            <form className="flex flex-col gap-4 ">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="text-sm text-slate-500 font-medium"
                >
                  Enter your token:
                </label>
                <input
                  type="email"
                  placeholder=" rzxhcgjvkhcgfzfygjkvhcgxfdgkjvcgxfzxfjkjvhcgxfgzdfxhdfj"
                  className="w-full rounded-md border-2 p-1 outline-none "
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="text-sm text-slate-500 font-medium"
                >
                  Time in Login
                </label>
                <input
                  type="email"
                  placeholder=" 1000min"
                  className="w-full rounded-md border-2 p-1 outline-none"
                />
              </div>
            </form>
            <Button className="bg-blue-500 h-7 w-1/6 ">Save Changes</Button>
          </div>
          <div className="h-auto bg-white  p-4 flex flex-col w-full rounded-md gap-6">
            {" "}
            Otros
          </div>
        </section>
      </article>
    </main>
  );
}
