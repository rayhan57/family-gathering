import Link from "next/link";
import React from "react";

const ScheduleCard = ({ players }) => {
  const lastPlayer = players[players.length - 1];
  const { date, time, location, name: hostName } = lastPlayer;

  const formattedDate = new Date(date).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  return (
    <div className="ml-10 mt-5 rounded-xl bg-white p-4 shadow-md md:ml-0 lg:mt-10">
      <h1 className="text-lg font-semibold lg:text-xl">Jadwal Arisan</h1>

      <div className="mt-2 flex flex-col justify-between gap-2 text-sm md:flex-row lg:text-base">
        <div>
          <p>Tanggal</p>
          <p className="font-semibold">{formattedDate}</p>
        </div>

        <div>
          <p>Waktu</p>
          <p className="font-semibold">{time}</p>
        </div>

        <div className="">
          <p>Lokasi</p>
          <Link
            href={`https://www.google.com/maps/search/?api=1&query=${location}`}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-primary hover:underline"
          >
            {location}
          </Link>
        </div>

        <div>
          <p>Host</p>
          <p className="font-semibold">{hostName}</p>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
