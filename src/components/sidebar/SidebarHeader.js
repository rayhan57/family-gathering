import React from "react";
import logo from "../../app/favicon.ico";
import Image from "next/image";

const SidebarHeader = ({ isExpanded }) => {
  const title = isExpanded ? "Family Gathering" : "";

  return (
    <h1 className="flex gap-2 font-primary text-xl font-bold tracking-widest lg:text-2xl">
      <Image src={logo} alt="Logo" className="w-7 md:w-9" /> {title}
    </h1>
  );
};

export default SidebarHeader;
