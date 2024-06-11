import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const SidebarToggleButton = ({ isExpanded, onClick }) => {
  return (
    <button
      className="absolute -right-4 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white text-black shadow-md"
      onClick={onClick}
    >
      {isExpanded ? (
        <IoIosArrowBack size={20} />
      ) : (
        <IoIosArrowForward size={20} />
      )}
    </button>
  );
};

export default SidebarToggleButton;
