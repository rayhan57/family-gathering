"use client";
import LoginForm from "@/components/login/LoginForm";
import { setSession } from "@/utils/session";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginPage = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const router = useRouter();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = form;
    const isAdmin =
      username === "admin" && password === process.env.NEXT_PUBLIC_ADMIN_KEY;
    const isUser =
      username === "user" && password === process.env.NEXT_PUBLIC_USER_KEY;

    if (isAdmin || isUser) {
      setSession("user", form);
      router.push("/");
    } else {
      alert("Username atau Password salah");
    }
  };

  return (
    <div className="ml-10 flex h-screen items-center justify-center md:ml-0">
      <div className="rounded-xl bg-white p-10 shadow-md">
        <h1 className="mb-1 text-xl font-semibold lg:text-2xl">
          Selamat Datang
        </h1>
        <p className="text-sm lg:text-base">
          Nikmati kemudahan dalam mengelola arisan dan acara keluarga Anda.
        </p>

        <LoginForm
          formData={form}
          onFormChange={handleChange}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default LoginPage;
