import React from "react";
import { FcBullish } from "react-icons/fc";
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from "../../lib/constants/navigation";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";

/*Sidebar component */
export const Sidebar = () => {
  return (
    <div className="flex flex-col p-3 text-white bg-neutral-900 w-60">
      <div className="flex items-center gap-2 px-1 py-3">
        <FcBullish />
        <span className="text-lg text-neutral-100">OpenShop</span>
      </div>
      <div className="flex-1 py-8 flex flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <div key={item.key}>
            <SidebarLink key={item.key} item={item} />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
            <SidebarLink key={item.key} item={item}/>
        ))}
      </div>
      <div className="flex items-center gap-2 px-3 py-2 text-red-500 cursor-pointer hover:bg-neutral-700 active:bg-neutral-600"><span><HiOutlineLogout/></span>Log out</div>
    </div>
  );
};

function SidebarLink({ item }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={
        pathname === item.path
          ? "flex items-center gap-2 px-3 py-2 text-base font-light rounded-sm bg-blue hover:bg-neutral-700 active:bg-neutral-600"
          : "flex items-center gap-2 px-3 py-2 text-base font-light rounded-sm hover:bg-neutral-700 active:bg-neutral-600"
      }
    >
      <span
        className={
          pathname === item.path ? "text-white text-xl" : "text-[#a8a29e]"
        }
      >
        {item.icon}
      </span>
      <span
        className={pathname === item.path ? "text-white" : "text-[#a8a29e]"}
      >
        {item.label}
      </span>
    </Link>
  );
}
