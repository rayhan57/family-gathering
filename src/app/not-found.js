import Link from "next/link";
import Image from "next/image";
import React from "react";
import notFoundLogo from "../../public/not-found.png";

const NotFound = () => {
  return (
    <div className="ml-10 flex h-screen flex-col items-center justify-center space-y-4 text-center md:ml-0">
      <Image
        src={notFoundLogo}
        alt="Not Found"
        className="w-44 lg:w-72"
        priority
      />
      <h1 className="text-2xl font-bold lg:text-4xl">
        Halaman Tidak Ditemukan
      </h1>
      <p className="lg:text-lg">
        Maaf, halaman yang kamu cari tidak ditemukan. <br /> Silahkan kembali ke
        halaman utama
      </p>
      <Link
        href={"/"}
        className="rounded-xl bg-primary px-4 py-2 font-semibold text-white hover:bg-primary/70"
      >
        Kembali
      </Link>
    </div>
  );
};

export default NotFound;
