import React, { useCallback, useState } from "react";
import LotteryHistory from "./LotteryHistory";
import { addShakeHistory } from "@/utils/shakeHistoryApi";
import { useRouter } from "next/navigation";

const LotteryControl = ({
  candidates,
  result,
  setResult,
  shakeHistory,
  getLotteryResult,
  isAdmin,
}) => {
  const [history, setHistory] = useState(shakeHistory);

  const shuffleResult = useCallback(() => {
    let shuffleCount = 0;
    const maxShuffles = 20;

    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * candidates.length);
      const shuffledResult = candidates[randomIndex].name;
      setResult(shuffledResult);

      shuffleCount++;
      if (shuffleCount >= maxShuffles) {
        clearInterval(intervalId);
        const shakeHistory = {
          name: shuffledResult,
          timestamp: new Date().getTime(),
        };
        addShakeHistory(shakeHistory, () =>
          setHistory([...history, shakeHistory]),
        );
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [candidates, setResult]);

  return (
    <div className="ml-10 rounded-xl bg-white p-4 shadow-md md:ml-0">
      <input
        type="text"
        className="w-full rounded-xl border border-primary p-2 text-center text-lg font-semibold focus:outline-none lg:text-xl"
        placeholder="Hasil Kocok"
        value={result}
        readOnly
      />
      <div className="mt-2 flex justify-center gap-2 text-sm lg:text-base">
        <button
          className="w-full rounded-xl bg-red-500 p-2 text-white hover:bg-red-600"
          onClick={isAdmin ? shuffleResult : () => alert("Anda bukan admin")}
        >
          Kocok
        </button>
        <button
          className="w-full rounded-xl bg-green-500 p-2 text-white hover:bg-green-600"
          onClick={isAdmin ? getLotteryResult : () => alert("Anda bukan admin")}
        >
          Ambil
        </button>
      </div>
      <LotteryHistory history={history} />
    </div>
  );
};

export default LotteryControl;
