"use client";
import SubmitButton from "@/components/players/SubmitButton";
import BackButton from "@/components/players/BackButton";
import FloatingInput from "@/components/players/FloatingInput";
import { formatToCurrency, formatToRupiah } from "@/utils/formatCurrency";
import React, { useState } from "react";
import DropdownInput from "@/components/players/DropdownInput";
import { addPlayer } from "@/utils/playerApi";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const AddPlayer = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    amount: "",
    paymentAmount: "",
    paymentStatus: "Belum Lunas",
    lotteryStatus: "Belum Dapat",
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

    const player = {
      ...form,
      amount: formatToRupiah(form.amount),
      paymentAmount: formatToRupiah(form.paymentAmount),
    };

    addPlayer(player, () => {
      toast.success("Pemain berhasil ditambahkan", {
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
      <h1 className="ml-10 text-xl font-semibold md:ml-0 lg:text-2xl">
        Tambah Pemain
      </h1>

      <div className="ml-10 mt-5 rounded-xl bg-white p-4 shadow-md md:ml-0">
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
            value={form.paymentStatus}
            label="Status Pembayaran"
            options={["Belum Lunas", "Sudah Lunas"]}
            onChange={handleChange}
            disabled
          />
          <DropdownInput
            id="lotteryStatus"
            value={form.lotteryStatus}
            label="Status Undian"
            options={["Belum Dapat", "Dapat"]}
            onChange={handleChange}
            disabled
          />
          <div className="flex items-center gap-2">
            <SubmitButton label="Tambah" />
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

export default AddPlayer;
