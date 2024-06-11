import React from "react";

const GetButton = ({ onClick }) => {
  return (
    <button
      className="w-full rounded-md bg-secondary px-4 py-2 font-semibold text-white hover:bg-secondary/50"
      onClick={onClick}
    >
      AMBIL
    </button>
  );
};

export default GetButton;
