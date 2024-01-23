// ModalComponent.jsx
import React, { useState } from "react";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (userName: string) => void;
}

const NameModalComponent = ({ isOpen, onClose, onSubmit }: ModalProps) => {
  const [userName, setUserName] = useState("");

  const handleInputChange = (e: any) => {
    setUserName(e.target.value as string);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!userName.trim()) return;
    onSubmit(userName.trim());
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 overflow-y-auto bg-white shadow-lg rounded-lg w-full h-full flex items-center justify-center z-9999">
      <form
        onSubmit={handleSubmit}
        className="modal flex flex-col justify-center items-center gap-y-4 mx-auto p-6"
      >
        <Image
          src={
            "https://assets-global.website-files.com/63b4bdea9865273fd745b3af/63b4bdea9865273cf545b3d1_Asset%206%403x.png"
          }
          alt="Codifin"
          width={200}
          height={100}
        />
        <h2 className="text-xl">Escribe tu nombre para comenzar a chatear</h2>
        <input
          type="text"
          value={userName}
          onChange={handleInputChange}
          placeholder="Escribe tu nombre"
          className="w-full rounded-lg border border-slate-300 bg-slate-50 p-3 text-sm text-slate-800 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:focus:border-blue-600 sm:text-base"
        />
        <button
          type="submit"
          className={
            "mx-1 inline-flex flex justify-center items-center gap-x-2 w-[200px] rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-medium text-slate-50 hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 sm:text-base " +
            (userName.trim() ? "show" : "hidden")
          }
        >
          Continuar
        </button>
      </form>
    </div>
  );
};

export default NameModalComponent;
