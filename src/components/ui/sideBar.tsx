import React from "react";

export default function SideBar() {
  return (
    <>
      <div className="bg-white h-screen w-60 p-4 flex flex-col gap-6 rounded-md	shadow-md ">
        <div className="flex justify-between items-center">
          <div className="font-mediun text-md">Admin</div>
          <div>svg</div>
        </div>
        <span>Búsqueda</span>
        <div className="flex flex-col">
          <span className="font-mediun text-md mb-2">Menú</span>
          <div className="flex items-center gap-2 p-1 rounded-md bg-slate-100">
            <span>svg</span>
            <span className="text-sm text-slate-400 font-medium ">
              Dashboards
            </span>
          </div>
          <div className="flex items-center gap-2 p-1 rounded-md">
            svg
            <span className="text-sm text-slate-400 font-medium ">Admins</span>
          </div>
          <div className="flex items-center gap-2 p-1 rounded-md">
            svg
            <span className="text-sm text-slate-400 font-medium ">Client</span>
          </div>
          <div className="flex items-center gap-2 p-1 rounded-md">
            svg
            <span className="text-sm text-slate-400 font-medium ">
              Suscriptions
            </span>
          </div>
        </div>
        <hr />
        <div className="flex flex-col">
          <div className="flex items-center gap-2 p-1 rounded-md">
            svg
            <span className="text-sm text-slate-400 font-medium ">
              Settings
            </span>
          </div>
          <div className="flex items-center gap-2 p-1 rounded-md">
            svg
            <span className="text-sm text-slate-400 font-medium ">
              Auditory
            </span>
          </div>
          <div className="flex items-center gap-2 p-1 rounded-md">
            svg
            <span className="text-sm text-slate-400 font-medium ">Support</span>
          </div>
        </div>
      </div>
    </>
  );
}
