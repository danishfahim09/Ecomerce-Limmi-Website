"use client";
import React, { useState } from "react";
import Sidebar from "../../components/backoffice/Sidebar";
import Navbare from "../../components/backoffice/Navbare";

function Layout({ children }) {
  const [showSideBar, setshowSideBar] = useState(false);
  return (
    <div className="flex w-full">
      {/*SideBar*/}
      <Sidebar showSideBar={showSideBar} />
      <div className="w-full">
        {/*Navbare*/}
        <Navbare showSideBar={showSideBar} setshowSideBar={setshowSideBar} />
        {/*Main*/}
        <main
          className={`mt-20 bg-background text-foreground min-h-screen overflow-x-hidden ${showSideBar ? "p-6 sm:p-10" : "sm:ml-64 p-6 sm:p-10"}`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;
