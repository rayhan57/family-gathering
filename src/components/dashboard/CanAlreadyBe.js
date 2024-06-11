import React from "react";

const CanAlreadyBe = ({ data }) => {
  const formattedDate = (timestamp) => {
    const date = new Date(timestamp);
    const options = { year: "numeric", month: "long", day: "2-digit" };
    const formattedDate = date.toLocaleDateString("id-ID", options);
    return formattedDate;
  };

  return (
    <div className="ml-10 overflow-x-auto rounded-xl bg-white shadow-md md:ml-0">
      <table className="w-full text-nowrap text-left text-sm text-gray-500 lg:text-base">
        <thead>
          <tr>
            <th className="px-4 py-2">No</th>
            <th className="px-4 py-2">Nama</th>
            <th className="px-4 py-2">Nomor Telpon</th>
            <th className="px-4 py-2">Tanggal Arisan</th>
            <th className="px-4 py-2">Lokasi</th>
            <th className="px-4 py-2">Jumlah</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-primary hover:text-white">
              <td className="rounded-s-xl px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2">{item.phone}</td>
              <td className="px-4 py-2">{formattedDate(item.date)}</td>
              <td className="px-4 py-2">{item.location}</td>
              <td className="rounded-e-xl px-4 py-2">{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CanAlreadyBe;
