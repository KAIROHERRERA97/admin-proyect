import Header from "@/components/ui/header";
import React from "react";
import SideBar from "@/components/ui/sideBar";

export default function SettingsPage() {
  return (
    <main className="flex flex-row gap-1">
      <SideBar />
      <article className="flex flex-col bg-slate-100 h-screen w-full ">
        <Header />
        <section className="w-full p-8">
          <div className="flex flex-row justify-between items-center p-2 ">
            <span className="text-lg font-semibold text-blue-500 mr-6">
              Dashboard
            </span>
            <hr className="w-full mr-2 " />
          </div>
          <div className="h-96 bg-white m-4 mb-4 flex justify-between w-full items-center">
            holis bb
          </div>
        </section>
      </article>
    </main>
  );
}