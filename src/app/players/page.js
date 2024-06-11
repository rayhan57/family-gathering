import { getPlayers } from "@/utils/playerApi";
import React from "react";
import Players from "@/components/players/Players";

const PlayersPage = async () => {
  const players = await getPlayers();

  return <Players players={players} />;
};

export default PlayersPage;
