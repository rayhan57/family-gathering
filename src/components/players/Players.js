"use client";
import React, { useEffect, useState } from "react";
import PlayerAddButton from "./PlayerAddButton";
import PlayerList from "./PlayerList";
import ModalConfirm from "./ModalConfirm";
import { deletePlayerById } from "@/utils/playerApi";
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { getSessionType } from "@/utils/session";

const Players = ({ players }) => {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [playerId, setPlayerId] = useState("");
  const [playerName, setPlayerName] = useState("");

  const openRemoveModal = (id) => {
    setShowModal(true);
    setPlayerId(id);
    setPlayerName(players.find((player) => player.id === id).name);
  };

  const removePlayer = () => {
    deletePlayerById(playerId, () => {
      setShowModal(false);
      router.refresh();
      toast.success(`${playerName} berhasil dihapus`, {
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
    });
  };

  useEffect(() => {
    router.refresh();
    const isUserAdmin = getSessionType("user") === "admin1234";
    setIsAdmin(isUserAdmin);
  }, []);

  return (
    <div className="container mt-10">
      <h1 className="mb-5 pl-10 text-xl font-semibold md:pl-0 lg:mb-10 lg:text-2xl">
        Daftar Pemain
      </h1>

      <PlayerAddButton isAdmin={isAdmin} />
      <PlayerList data={players} onRemove={openRemoveModal} isAdmin={isAdmin} />
      <ModalConfirm
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onRemove={removePlayer}
        playerName={playerName}
      />
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

export default Players;
