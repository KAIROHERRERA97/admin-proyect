import Header from "@/components/ui/header";
import React from "react";

export default function AdminPage() {
  return (
    <>
      <Header></Header>
      <main className="flex flex-col bg-slate-50 mt-20">
        <div className="flex justify-between items-center p-2">
          <span className="text-l font-semibold text-slate-400">
            User Profile
          </span>
          {/* <hr className="font-bold"></hr> COMO HAGO LA LINEA!*/}
        </div>
        <div className="h-dvh bg-white m-4 mb-8 flex justify-between items-center">
          holis bb
        </div>
      </main>
    </>
  );
}
