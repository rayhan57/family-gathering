import React from "react";

const SubmitButton = ({ label }) => {
  return (
    <button
      type="submit"
      className="rounded-md  bg-primary px-4 py-2 text-sm text-white hover:bg-primary/70 lg:text-base"
    >
      {label}
    </button>
  );
};

export default SubmitButton;
