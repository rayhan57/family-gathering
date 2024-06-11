import { formatTimestamp } from "@/utils/formatTimestamp";
import React from "react";

const LotteryHistory = ({ history }) => {
  return (
    <div className="mt-4">
      <h2 className="font-semibold lg:text-lg">Riwayat Kocok</h2>

      <div className="mt-2 max-h-80 overflow-y-auto">
        <table className="w-full text-nowrap text-left text-sm text-gray-500 lg:text-base">
          <thead>
            <tr>
              <th className="px-3 py-1.5">No</th>
              <th className="px-3 py-1.5">Nama</th>
              <th className="px-3 py-1.5">Waktu</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, index) => (
              <tr key={index}>
                <td className="px-3 py-1.5">{index + 1}</td>
                <td className="px-3 py-1.5">{item.name}</td>
                <td className="px-3 py-1.5">
                  {formatTimestamp(item.timestamp)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LotteryHistory;
