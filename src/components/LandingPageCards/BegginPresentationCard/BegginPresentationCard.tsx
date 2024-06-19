"use client";
import OpenAccButton from "@/components/OpenAccButton/OpenAccButton";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function BegginPresentationCard({ languages }: { languages: any }) {
  return (
    <div className="flex flex-col relative w-full h-[calc(100vh-165px)] justify-end md:mt-[0px] px-[20px] md:px-[0px]">
      <div className="w-full max-w-[727px]">
        <div className="flex items-center bg-[#1E1C1B] mb-[37px] max-w-[280px] md:max-w-[322px] h-[38px] border-l-2 border-[#A06A08] pl-4 text-[12px] md:text-[14px] ">
          {languages.page.default.beginning.openAcc}
        </div>
        <p className="max-w-[591px] text-[32px] leading-[35px] md:text-[48px] font-semibold mb-[24px] md:leading-[55px]">
          {languages.page.default.beginning.title}
        </p>
        <p className={`text-[16px] md:text-[20px] mb-[64px] ${inter.className}`}>{languages.page.default.beginning.text}</p>
        <div className="flex flex-col md:flex-row gap-8 2xl:mb-[160px] w-full md:mb-[60px]">
          <OpenAccButton className="max-w-[232px] md:max-w-full h-[46px]" text={languages.page.default.beginning.button} />

          <p className="text-[25px] md:text-[14px] md:max-w-[221px] text-center md:text-start w-full md:mb-0 mb-8">
            {languages.page.default.beginning.presentation}
            <span className="text-[#C89305] ml-[5px] font-bold">{languages.page.default.beginning.presentationSpan}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
