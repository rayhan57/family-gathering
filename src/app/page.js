import Card from "@/components/dashboard/Card";
import React from "react";
import { IoWalletOutline } from "react-icons/io5";
import { IoCheckmarkDone } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import { GrMoney } from "react-icons/gr";
import ScheduleCard from "@/components/dashboard/ScheduleCard";
import CanAlreadyBe from "@/components/dashboard/CanAlreadyBe";
import { getPlayers } from "@/utils/playerApi";

const HomePage = async () => {
  const currentDate = new Date().toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const players = await getPlayers();

  const alreadyBe = players
    .filter((player) => player.lotteryStatus === "Sudah Dapat")
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const notYet = players.filter(
    (player) => player.lotteryStatus === "Belum Dapat",
  );

  const arrears = players.filter(
    (player) => player.paymentStatus === "Belum Lunas",
  );

  const infoData = [
    {
      icon: IoCheckmarkDone,
      amount: `${alreadyBe.length} Orang`,
      description: "Sudah Dapat",
    },
    {
      icon: IoCloseCircleOutline,
      amount: `${notYet.length} Orang`,
      description: "Belum Dapat",
    },
    {
      icon: GrMoney,
      amount: `${arrears.length} Orang`,
      description: "Tunggakan",
    },
    {
      icon: IoWalletOutline,
      amount: "Rp. 100.000",
      description: "Total Tabungan",
    },
  ];

  return (
    <div className="container mt-10">
      <h1 className="mb-5 pl-10 text-2xl font-semibold md:pl-0 lg:mb-10 lg:text-3xl">
        {currentDate}
      </h1>

      <div className="grid grid-cols-2 gap-2 pl-10 md:grid-cols-4 md:pl-0 lg:gap-4">
        {infoData.map((data, index) => (
          <Card key={index} {...data} />
        ))}
      </div>

      <ScheduleCard players={alreadyBe} />

      <h1 className="mb-2 mt-5 pl-10 text-lg font-semibold md:pl-0 lg:mt-10 lg:text-xl">
        Sudah Dapat
      </h1>
      <CanAlreadyBe data={alreadyBe} />
    </div>
  );
};

export default HomePage;
