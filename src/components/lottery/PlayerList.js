import React from "react";

const PlayerList = ({ data, title }) => {
  return (
    <div className="ml-10 rounded-xl bg-white p-4 shadow-md md:ml-0">
      <h2 className="font-semibold lg:text-lg">{title}</h2>

      <ul className="mt-4">
        {data.map((player) => (
          <li
            key={player.id}
            className="list-inside list-decimal text-sm lg:text-base"
          >
            {player.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlayerList;
