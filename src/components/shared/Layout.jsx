import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import Header from "./Header";

export const Layout = () => {
  return (
    <div className="flex flex-row w-screen h-screen overflow-hidden bg-neutral-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div>{<Outlet />}</div>
      </div>
    </div>
  );
};
