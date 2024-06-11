import React from "react";

const FloatingInput = ({ id, label, type, value, onChange, disabled }) => {
  return (
    <div className="relative mb-3">
      <input
        type={type}
        id={id}
        className="peer block w-full appearance-none rounded-lg border border-primary bg-white px-2.5 pb-2.5 pt-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50 lg:text-base"
        placeholder=" "
        value={value}
        onChange={onChange}
        disabled={disabled}
        required
      />
      <label
        htmlFor={id}
        className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-sm duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-primary"
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingInput;
