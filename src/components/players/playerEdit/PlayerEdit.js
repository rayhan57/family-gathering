"use client";
import {
  formatToCurrency,
  formatToNumber,
  formatToRupiah,
} from "@/utils/formatCurrency";
import { updatePlayerById } from "@/utils/playerApi";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackButton from "../BackButton";
import DropdownInput from "../DropdownInput";
import FloatingInput from "../FloatingInput";
import SubmitButton from "../SubmitButton";

const PlayerEdit = ({ player, playerId }) => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: player.name,
    phone: player.phone,
    amount: formatToNumber(player.amount),
    paymentAmount: formatToNumber(player.paymentAmount),
    paymentStatus: player.paymentStatus,
    lotteryStatus: player.lotteryStatus,
  });

  const handleChange = (e) => {
    let { id, value } = e.target;

    if (id === "amount" || id === "paymentAmount") {
      value = formatToCurrency(value);
    }

    let updatedForm = { ...form, [id]: value };

    if (id === "amount" || id === "paymentAmount") {
      const amountValue = parseInt(updatedForm.amount.replace(/\./g, ""));
      const paymentAmountValue = parseInt(
        updatedForm.paymentAmount.replace(/\./g, ""),
      );

      updatedForm.paymentStatus =
        paymentAmountValue >= amountValue ? "Sudah Lunas" : "Belum Lunas";
    }

    setForm(updatedForm);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatePlayer = {
      ...form,
      amount: formatToRupiah(form.amount),
      paymentAmount: formatToRupiah(form.paymentAmount),
    };

    updatePlayerById(playerId, updatePlayer, () => {
      toast.success("Pemain berhasil diupdate", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
      setTimeout(() => {
        router.push("/players");
      }, 3000);
    });
  };

  return (
    <div className="container mt-10">
      <h1 className="text-2xl font-semibold">Edit Pemain </h1>

      <div className="mt-5 rounded-xl bg-white p-4 shadow-md">
        <form onSubmit={handleSubmit}>
          <FloatingInput
            id="name"
            label="Nama"
            type="text"
            value={form.name}
            onChange={handleChange}
          />
          <FloatingInput
            id="phone"
            label="Nomor Telepon"
            type="number"
            value={form.phone}
            onChange={handleChange}
          />
          <FloatingInput
            id="amount"
            label="Jumlah Iuran"
            type="text"
            value={form.amount}
            onChange={handleChange}
          />
          <FloatingInput
            id="paymentAmount"
            label="Jumlah Bayar"
            type="text"
            value={form.paymentAmount}
            onChange={handleChange}
          />
          <DropdownInput
            id="paymentStatus"
            label="Pilih Status Pembayaran"
            value={form.paymentStatus}
            onChange={handleChange}
            options={["Belum Lunas", "Sudah Lunas"]}
            disabled
          />
          <DropdownInput
            id="lotteryStatus"
            label="Pilih Status Undian"
            value={form.lotteryStatus}
            onChange={handleChange}
            options={["Belum Dapat", "Sudah Dapat"]}
          />
          <div className="flex items-center gap-2">
            <SubmitButton label="Simpan" />
            <BackButton />
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
        transition={Slide}
      />
    </div>
  );
};

export default PlayerEdit;
