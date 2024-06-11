import React from "react";

const DropdownInput = ({ id, value, onChange, label, options, disabled }) => (
  <div>
    <select
      className="mb-3 w-full rounded-lg border border-primary p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50 lg:text-base"
      id={id}
      value={value}
      onChange={onChange}
      disabled={disabled}
      required
    >
      <option value="">{label}</option>
      {options?.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default DropdownInput;
