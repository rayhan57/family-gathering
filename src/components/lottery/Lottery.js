"use client";
import { updatePlayerById } from "@/utils/playerApi";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import PlayerList from "./PlayerList";
import LotteryControl from "./LotteryControl";
import SelectedPlayer from "./SelectedPlayer";
import { formatTime } from "@/utils/formatTimestamp";
import { formatToRupiah } from "@/utils/formatCurrency";
import { getSessionType } from "@/utils/session";

const Lottery = ({ players, shakeHistory }) => {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);
  const canAlreadyBe = players.filter(
    (player) => player.lotteryStatus === "Sudah Dapat",
  );
  const canNotBe = players.filter(
    (player) => player.lotteryStatus === "Belum Dapat",
  );
  const [lotteryResult, setLotteryResult] = useState("");
  const [selectedPlayerId, setSelectedPlayerId] = useState("");
  const [selectedPlayer, setSelectedPlayer] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    location: "",
    amount: "",
    paymentStatus: "",
    paymentAmount: "",
  });

  const getLotteryResult = () => {
    const selected = canNotBe.find((player) => player.name === lotteryResult);
    const { name, phone, paymentStatus, paymentAmount } = selected;
    setSelectedPlayer({
      ...selectedPlayer,
      name,
      phone,
      paymentStatus,
      paymentAmount,
    });
    setSelectedPlayerId(selected.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isAdmin) return alert("Anda bukan admin");

    const player = {
      ...selectedPlayer,
      date: new Date(selectedPlayer.date).getTime(),
      time: formatTime(selectedPlayer.time),
      amount: formatToRupiah(selectedPlayer.amount),
      lotteryStatus: "Sudah Dapat",
    };

    updatePlayerById(selectedPlayerId, player, () => {
      router.push("/");
    });
  };

  useEffect(() => {
    const isUserAdmin = getSessionType("user") === "admin1234";
    setIsAdmin(isUserAdmin);
  }, []);

  return (
    <div className="container mt-10">
      <h1 className="mb-5 pl-10 text-xl font-semibold md:pl-0 lg:mb-10 lg:text-2xl">
        Kocok Pemain
      </h1>

      <div className="grid gap-4 md:grid-cols-2">
        <PlayerList data={canAlreadyBe} title="Sudah Dapat" />
        <PlayerList data={canNotBe} title="Belum Dapat" />
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2 lg:mt-10">
        <LotteryControl
          candidates={canNotBe}
          result={lotteryResult}
          setResult={setLotteryResult}
          shakeHistory={shakeHistory}
          getLotteryResult={getLotteryResult}
          isAdmin={isAdmin}
        />
        <SelectedPlayer
          selectedPlayer={selectedPlayer}
          setSelectedPlayer={setSelectedPlayer}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Lottery;
