"use client";
import { GiCheckMark } from "react-icons/gi";
import { CiEdit } from "react-icons/ci";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

const PlayerList = ({ data, onRemove, isAdmin }) => {
  const router = useRouter();

  const handleEdit = (id) => {
    router.push(`/players/${id}`);
  };

  return (
    <div className="ml-10 overflow-x-auto rounded-xl bg-white shadow-md md:ml-0">
      <table className="w-full text-nowrap text-left text-sm text-gray-500 lg:text-base">
        <thead>
          <tr>
            <th className="px-4 py-2">No</th>
            <th className="px-4 py-2">Nama</th>
            <th className="px-4 py-2">Nomor Telpon</th>
            <th className="px-4 py-2">Jumlah Iuran</th>
            <th className="px-4 py-2">Jumlah Bayar</th>
            <th className="px-4 py-2">Status Pembayaran</th>
            <th className="px-4 py-2">Status Undian</th>
            {isAdmin && <th className="px-4 py-2">Aksi</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className="bg-white hover:bg-primary hover:text-white"
            >
              <td className="rounded-s-xl px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2">{item.phone}</td>
              <td className="px-4 py-2">{item.amount}</td>
              <td className="px-4 py-2">{item.paymentAmount}</td>
              <td className="px-4 py-2">
                <span
                  className={`${item.paymentStatus === "Belum Lunas" ? "bg-red-400" : "bg-green-400 "} rounded-lg p-1 text-white`}
                >
                  {item.paymentStatus}
                </span>
              </td>
              <td
                className={`${isAdmin ? "rounded-e-none" : "rounded-e-xl"} px-4 py-2`}
              >
                <span className="flex items-center gap-2">
                  {item.lotteryStatus}
                  {item.lotteryStatus === "Sudah Dapat" && (
                    <GiCheckMark className="text-green-500" />
                  )}
                </span>
              </td>

              {isAdmin && (
                <td className="rounded-e-xl px-4 py-2">
                  <div className="flex items-center gap-2">
                    <button
                      className="rounded-lg border border-orange-500 p-0.5 text-orange-500 hover:bg-orange-500 hover:text-white"
                      onClick={() => handleEdit(item.id)}
                    >
                      <CiEdit size={20} />
                    </button>
                    <button
                      className="rounded-lg border border-red-500 p-0.5 text-red-500 hover:bg-red-500 hover:text-white"
                      onClick={() => onRemove(item.id)}
                    >
                      <IoRemoveCircleOutline size={20} />
                    </button>
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerList;
