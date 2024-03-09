import Header from "@/components/ui/header";
import React from "react";
import SideBar from "@/components/ui/sideBar";
import { Button } from "@/components/ui/button";

export default function AuditoryPage() {
  return (
    <main className="flex flex-row gap-1">
      <SideBar />
      <article className="flex flex-col bg-slate-100 h-screen w-full">
        <Header />
        <section className="w-full px-8 flex flex-col gap-6 ">
          <div className="flex flex-row justify-between items-center p-2 ">
            <span className="text-lg font-semibold text-blue-500 mr-6">
              Auditory
            </span>
            <hr className="w-full mr-2 " />
          </div>
          <div className="h-96 bg-white  p-4 flex flex-col w-full rounded-md gap-6 relative">
            <div className="flex flex-row justify-between">
              <div className="font-semibold text-sm">Sistem Activities</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-dots-vertical"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              </svg>
            </div>
            <div className="flex flex-col gap-6">
              <div className="bg-blue-100 w-full h-auto rounded-md p-2 flex flex-col gap-1">
                <span className="text-xs font-semibold">
                  Eliminación de Usuario
                </span>
                <span className="text-xs text-slate-400">
                  {" "}
                  lorem impsum bla bla bla bla blablablbalbal balbalbalbabalabla
                  blablablablablablablablaba lbalablabalbalbalba lbalablablabab
                  lablabalbalalbax dxdxdxdxdxdxddxdxd xdxdxd xddxdxdx xdxd xdxdx
                  bkabkababa xdxdx bakaaa
                </span>
              </div>
              <div className="bg-blue-200 w-full h-auto rounded-md p-2 flex flex-col gap-1">
                <span className="text-xs font-semibold">
                  Modificación de Usuario
                </span>
                <span className="text-xs text-slate-400">
                  {" "}
                  lorem impsum bla bla bla bla blablablbalbal balbalbalbabalabla
                  blablablablablablablablaba lbalablabalbalbalba lbalablablabab
                  lablabalbalalbax dxdxdxdxdxdxddxdxd xdxdxd xddxdxdx xdxd xdxdx
                  bkabkababa xdxdx bakaaa
                </span>
              </div>
            </div>
            <div className="w-24 absolute bottom-10 right-5 bg-slate-50 shadow-md p-2 flex flex-col gap-2 rounded-md">
              <div className="flex flex-row gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-cloud-download"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#000000"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4" />
                  <path d="M12 13l0 9" />
                  <path d="M9 19l3 3l3 -3" />
                </svg>
                <span className="text-xs">Download</span>
              </div>
              <div className="flex flex-row gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-checklist"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#000000"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8" />
                  <path d="M14 19l2 2l4 -4" />
                  <path d="M9 8h4" />
                  <path d="M9 12h2" />
                </svg>
                <span className="text-xs">List</span>
              </div>
            </div>
          </div>

          <div className="h-auto bg-white  p-4 flex flex-col w-full rounded-md gap-6 relative">
            <div className="flex flex-row justify-between">
              <div className="font-semibold text-sm">Sistem Activities</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-dots-vertical"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#000000"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              </svg>
            </div>
            {/* <div className="flex flex-col gap-6">
              <div className="bg-blue-100 w-full h-auto rounded-md p-2 flex flex-col gap-1">
                <span className="text-xs font-semibold">
                  Eliminación de Usuario
                </span>
                <span className="text-xs text-slate-400">
                  {" "}
                  lorem impsum bla bla bla bla blablablbalbal balbalbalbabalabla
                  blablablablablablablablaba lbalablabalbalbalba lbalablablabab
                  lablabalbalalbax dxdxdxdxdxdxddxdxd xdxdxd xddxdxdx xdxd xdxdx
                  bkabkababa xdxdx bakaaa
                </span>
              </div>
              <div className="bg-blue-200 w-full h-auto rounded-md p-2 flex flex-col gap-1">
                <span className="text-xs font-semibold">
                  Modificación de Usuario
                </span>
                <span className="text-xs text-slate-400">
                  {" "}
                  lorem impsum bla bla bla bla blablablbalbal balbalbalbabalabla
                  blablablablablablablablaba lbalablabalbalbalba lbalablablabab
                  lablabalbalalbax dxdxdxdxdxdxddxdxd xdxdxd xddxdxdx xdxd xdxdx
                  bkabkababa xdxdx bakaaa
                </span>
              </div>
            </div>
            <div className="w-24 absolute bottom-10 right-5 bg-slate-50 shadow-md p-2 flex flex-col gap-2 rounded-md">
              <div className="flex flex-row gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-cloud-download"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#000000"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M19 18a3.5 3.5 0 0 0 0 -7h-1a5 4.5 0 0 0 -11 -2a4.6 4.4 0 0 0 -2.1 8.4" />
                  <path d="M12 13l0 9" />
                  <path d="M9 19l3 3l3 -3" />
                </svg>
                <span className="text-xs">Download</span>
              </div>
              <div className="flex flex-row gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-checklist"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#000000"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9.615 20h-2.615a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8" />
                  <path d="M14 19l2 2l4 -4" />
                  <path d="M9 8h4" />
                  <path d="M9 12h2" />
                </svg>
                <span className="text-xs">List</span>
              </div>
            </div> */}
          </div>
        </section>
      </article>
    </main>
  );
}
