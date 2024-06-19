import React from "react";
import OpenAccButton from "@/components/OpenAccButton/OpenAccButton";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function KnowCard({ languages }: { languages: any }) {
  const know = languages.page.default.know;
  return (
    <div className="flex flex-col w-full px-[20px] md:px-[60px] 2xl:px-[112px] md:mt-12 ">
      <div className="flex flex-col justify-center items-center w-full">
        <p className="text-[#C89305] font-bold text-[14px] mt-12">{know.title}</p>
        <p className="text-[30px] md:text-[40px] mb-[20px]">{know.subtitle}</p>

        <p className={`max-w-[1076px] text-[20px] mb-10 md:mb-[100px] ${inter.className} font-light`}>{know.presentationText}</p>

        <div className="flex flex-col md:flex-row w-full gap-[30px] justify-center">
          <div className="flex flex-col">
            <p className="text-[30px] mb-4">{know.firstCardTitle}</p>
            <p className={`mb-2 ${inter.className} font-light`}>{know.firstCardText}</p>
            <p className={`mb-2 ${inter.className} font-light`}>{know.firstCardSecondText}</p>
          </div>
          <div className="flex flex-col ">
            <p className="text-[30px] mb-4">{know.secondCardTitle}</p>
            <p className={`mb-2 ${inter.className} font-light`}>{know.secondCardText}</p>
            <p className={`mb-2 ${inter.className} font-light`}>{know.secondCardSecondText}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-[30px] mb-4">{know.thirdCardTitle}</p>
            <p className={`mb-2 ${inter.className} font-light`}>{know.thirdCardText}</p>
            <p className={`mb-2 ${inter.className} font-light`}>{know.thirdCardSecondText}</p>
          </div>
        </div>

        <div className="w-full flex justify-center items-center mt-12">
          <div className="flex flex-col gap-4 max-w-[432px] items-center text-center">
            <p className="text-[24px]">{know.lastText}</p>

            <div className="max-w-[260px] mb-[40px]">
              <OpenAccButton text={languages.header.buttonTxt} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
