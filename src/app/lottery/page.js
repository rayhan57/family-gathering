import Lottery from "@/components/lottery/Lottery";
import { getPlayers } from "@/utils/playerApi";
import { getShakeHistory } from "@/utils/shakeHistoryApi";
import React from "react";

const LotteryPage = async () => {
  const players = await getPlayers();
  const shakeHistory = await getShakeHistory();

  return <Lottery players={players} shakeHistory={shakeHistory} />;
};

export default LotteryPage;
