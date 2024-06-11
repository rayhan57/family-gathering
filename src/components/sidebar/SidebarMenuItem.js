import Link from "next/link";
import React from "react";

const SidebarMenu = ({ href, icon: Icon, label, isExpanded, isActive }) => {
  return (
    <Link
      href={href}
      className={`flex items-center space-x-4 border-l-4 py-2 pl-2 text-sm hover:bg-secondary hover:text-white lg:pl-4 lg:text-lg ${isActive ? "border-white" : "border-transparent"}`}
    >
      <Icon size={20} />
      {isExpanded && <span>{label}</span>}
    </Link>
  );
};

export default SidebarMenu;
