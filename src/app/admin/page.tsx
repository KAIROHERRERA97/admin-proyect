import Header from "@/components/ui/header";
import React from "react";
import SideBar from "@/components/ui/sideBar";

export default function AdminPage() {
  return (
    <main className="flex flex-row gap-1">
      <SideBar />
      <article className="flex flex-col bg-slate-50 h-screen w-full ">
        <Header />
        <section className="w-full px-4">
          <div className="flex flex-row justify-between items-center p-2 ">
            <span className="text-l font-semibold text-blue-500 mr-6">
              Profile
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
