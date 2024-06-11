import PlayerEdit from "@/components/players/playerEdit/PlayerEdit";
import { getPlayerById } from "@/utils/playerApi";
import React from "react";

const PlayerEditPage = async ({ params }) => {
  const player = await getPlayerById(params.id);

  return <PlayerEdit player={player} playerId={params.id} />;
};

export default PlayerEditPage;
