"use client";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      type="button"
      className="rounded-md bg-gray-400 px-4 py-2 text-sm text-white hover:bg-gray-500 lg:text-base"
      onClick={handleBack}
    >
      Kembali
    </button>
  );
};

export default BackButton;
