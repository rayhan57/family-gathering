import React, { useState } from "react";
import FloatingInput from "../players/FloatingInput";
import { formatToCurrency } from "@/utils/formatCurrency";
import GetButton from "./GetButton";
import ModalConfirm from "./ModalConfirm";

const SelectedPlayer = ({ selectedPlayer, setSelectedPlayer, onSubmit }) => {
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    let { id, value } = e.target;

    if (id === "amount") {
      value = formatToCurrency(value);
    }

    setSelectedPlayer({ ...selectedPlayer, [id]: value });
  };

  const openModalConfirm = (e) => {
    const { name, phone, date, time, location, amount } = selectedPlayer;
    const isMissingInfo = [name, phone, date, time, location, amount].some(
      (value) => !value,
    );

    if (isMissingInfo) {
      return;
    }

    e.preventDefault();
    setShowModal(true);
  };

  return (
    <div className="ml-10 rounded-xl bg-white p-4 shadow-md md:ml-0">
      <h2 className="font-semibold lg:text-lg">Pemain Terpilih</h2>

      <form className="mt-4">
        <FloatingInput
          id="name"
          label="Nama"
          type="text"
          value={selectedPlayer.name}
          onChange={handleChange}
          disabled
        />
        <FloatingInput
          id="phoneNumber"
          label="Nomor HP"
          type="text"
          value={selectedPlayer.phone}
          onChange={handleChange}
          disabled
        />
        <FloatingInput
          id="date"
          label="Tanggal"
          type="date"
          value={selectedPlayer.date}
          onChange={handleChange}
        />
        <FloatingInput
          id="time"
          label="Waktu"
          type="time"
          value={selectedPlayer.time}
          onChange={handleChange}
        />
        <FloatingInput
          id="location"
          label="Lokasi"
          type="text"
          value={selectedPlayer.location}
          onChange={handleChange}
        />
        <FloatingInput
          id="amount"
          label="Jumlah"
          type="text"
          value={selectedPlayer.amount}
          onChange={handleChange}
        />
        <GetButton onClick={openModalConfirm} />
      </form>

      <ModalConfirm
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        playerName={selectedPlayer.name}
        onConfirm={onSubmit}
      />
    </div>
  );
};

export default SelectedPlayer;
