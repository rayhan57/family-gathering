import React, { useState } from "react";
import FloatingInput from "../players/FloatingInput";
import LoginButton from "./LoginButton";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";

const LoginForm = ({ formData, onFormChange, onSubmit }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordVisibilityToggle = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <form onSubmit={onSubmit} className="mt-5 lg:mt-10">
      <FloatingInput
        id="username"
        label="Username"
        type="text"
        value={formData.username}
        onChange={onFormChange}
      />
      <div className="relative">
        <FloatingInput
          id="password"
          label="Password"
          type={isPasswordVisible ? "text" : "password"}
          value={formData.password}
          onChange={onFormChange}
        />
        <VscEye
          size={20}
          className="absolute right-2 top-1/2 -translate-y-1/2"
          onClick={handlePasswordVisibilityToggle}
        />
        <VscEyeClosed
          size={20}
          className="absolute right-2 top-1/2 -translate-y-1/2"
          onClick={handlePasswordVisibilityToggle}
          style={{ opacity: isPasswordVisible ? 0 : 1 }}
        />
      </div>
      <LoginButton />
    </form>
  );
};

export default LoginForm;
