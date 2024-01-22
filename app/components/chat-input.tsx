"use client";

import React, { useState } from "react";

interface ChatInputProps {
  onSend: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    onSend(message);
    setMessage("");
  };

  return (
    <div className="flex flex-row items-center justify-between bg-gray-200 p-2 rounded-lg absolute bottom-0 w-full">
      <input
        type="text"
        value={message}
        onChange={handleChange}
        placeholder="Escribe al chat de Codifin"
        className="w-full rounded-lg border border-slate-300 bg-slate-50 p-3 text-sm text-slate-800 focus:border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:focus:border-blue-600 sm:text-base"
      />
      <button
        onClick={handleSend}
        className="mx-1 inline-flex items-center gap-x-2 rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-medium text-slate-50 hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 sm:text-base"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M10 14l11 -11"></path>
          <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
        </svg>
      </button>
    </div>
  );
};

export default ChatInput;
