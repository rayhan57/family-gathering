"use client";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { GoPeople } from "react-icons/go";
import { LuDices } from "react-icons/lu";
import { MdOutlineDashboard } from "react-icons/md";
import SidebarMenuItem from "./SidebarMenuItem";
import SidebarToggleButton from "./SidebarToggleButton";
import SidebarHeader from "./SidebarHeader";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const isActive = (path) => path === pathname;

  return (
    <div
      className={`fixed left-0 top-0 z-50 flex h-screen flex-col items-center bg-primary py-10 text-white shadow-md transition-all ${
        isExpanded ? "w-[200px] lg:w-[250px]" : "w-12 lg:w-16 "
      }`}
    >
      <SidebarToggleButton isExpanded={isExpanded} onClick={handleToggle} />

      <SidebarHeader isExpanded={isExpanded} />

      <ul className="mt-10 w-full space-y-3">
        <SidebarMenuItem
          href="/"
          icon={MdOutlineDashboard}
          label="Dashboard"
          isExpanded={isExpanded}
          isActive={isActive("/")}
        />
        <SidebarMenuItem
          href="/players"
          icon={GoPeople}
          label="Pemain"
          isExpanded={isExpanded}
          isActive={isActive("/players")}
        />
        <SidebarMenuItem
          href="/lottery"
          icon={LuDices}
          label="Kocok"
          isExpanded={isExpanded}
          isActive={isActive("/lottery")}
        />
      </ul>
    </div>
  );
};

export default Sidebar;
