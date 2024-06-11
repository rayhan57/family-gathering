"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { IoPersonAddOutline } from "react-icons/io5";

const PlayerAddButton = ({ isAdmin }) => {
  const router = useRouter();

  const handleAddPlayer = () => {
    router.push("/players/addPlayer");
  };

  return (
    isAdmin && (
      <button
        className="mb-2 ml-10 flex items-center gap-2 rounded-xl bg-primary px-3 py-2 text-sm text-white hover:bg-opacity-70 md:ml-0 lg:text-base"
        onClick={handleAddPlayer}
      >
        <IoPersonAddOutline />
        Tambah Pemain
      </button>
    )
  );
};

export default PlayerAddButton;
