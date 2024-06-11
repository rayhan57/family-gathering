import React from "react";

const ModalConfirm = ({ isOpen, onClose, onRemove, playerName }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50">
          <div className="flex h-full w-full items-center justify-center">
            <div className="rounded-lg bg-white p-4 shadow-md">
              <h2 className=" font-medium lg:text-lg">Hapus Pemain</h2>
              <p className="mt-2 text-sm lg:text-base">
                Apakah anda yakin ingin menghapus {playerName} dari daftar
                pemain?
              </p>

              <div className="mt-4 flex justify-end gap-2">
                <button
                  className="rounded-md bg-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 lg:text-base"
                  onClick={onClose}
                >
                  Batal
                </button>
                <button
                  className="rounded-md bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700 lg:text-base"
                  onClick={onRemove}
                >
                  Hapus
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalConfirm;
