import React from "react";

export default function OpenAccButton({ text, className }: { text: string; className?: string }) {
  return (
    <button className={`flex items-center gap-2 bg-[#A06A08] h-[46px] text-white py-2 px-4 rounded font-bold text-[16px] ${className}`}>
      {text}
      <svg className="fill-current h-6 w-6 transform -rotate-90 stroke-1" viewBox="0 0 20 20">
        <path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7z"></path>
      </svg>
    </button>
  );
}
