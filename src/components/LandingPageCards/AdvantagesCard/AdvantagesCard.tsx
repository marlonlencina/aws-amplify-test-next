import React, { useState } from "react";
import SelectCard from "./SelectCard";
import Image from "next/image";
import OpenAccButton from "@/components/OpenAccButton/OpenAccButton";
import img from "../../../assets/frame373.png";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function AdvantagesCard({ languages }: { languages: any }) {
  const [selectedCard, setSelectedCard] = useState("first-card");
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col justify-center items-center w-full">
        <p className="text-[#C89305] font-semibold text-[14px] mt-12">{languages.page.default.advantages.title}</p>
        <p className="text-[40px] mb-[20px]">{languages.page.default.advantages.subtitle}</p>

        <div className="flex w-full h-[100px] bg-[#161412] mb-8 md:mb-4 overflow-x-auto">
          <SelectCard
            title={languages.page.default.advantages.menu.first.btnText}
            subtitle={languages.page.default.advantages.menu.first.btnSub}
            selected={selectedCard === "first-card"}
            onClick={() => setSelectedCard("first-card")}
          />
          <SelectCard
            title={languages.page.default.advantages.menu.second.btnText}
            subtitle={languages.page.default.advantages.menu.second.btnSub}
            selected={selectedCard === "second-card"}
            onClick={() => setSelectedCard("second-card")}
          />
          <SelectCard
            title={languages.page.default.advantages.menu.third.btnText}
            subtitle={languages.page.default.advantages.menu.third.btnSub}
            selected={selectedCard === "third-card"}
            onClick={() => setSelectedCard("third-card")}
          />
          <SelectCard
            title={languages.page.default.advantages.menu.fourth.btnText}
            subtitle={languages.page.default.advantages.menu.fourth.btnSub}
            selected={selectedCard === "fourth-card"}
            onClick={() => setSelectedCard("fourth-card")}
          />
        </div>

        <div className="flex flex-col-reverse md:flex-row w-full lg:justify-between 2xl:mt-[100px]">
          <div className="flex flex-col 2xl:justify-between">
            {selectedCard === "first-card" && (
              <div>
                <p className="max-w-[727px] text-[32px] md:text-[40px] 2xl:text-[48px] mb-[20px] mt-10 md:mt-0 leading-[40px] md:leading-[55px]">
                  {languages.page.default.advantages.menu.first.title}
                </p>
                <p className={`max-w-[727px] text-[16px] md:text-[18px] 2xl:text-[20px] ${inter.className}`}>
                  {languages.page.default.advantages.menu.first.subtitle}
                </p>
              </div>
            )}

            {selectedCard === "second-card" && (
              <div>
                <p className="max-w-[727px] text-[32px] md:text-[40px] 2xl:text-[48px] mb-[20px] mt-10 md:mt-0 leading-[40px] md:leading-[55px]">
                  {languages.page.default.advantages.menu.second.title}
                </p>
                <p className={`max-w-[727px] text-[16px] md:text-[18px] 2xl:text-[20px] ${inter.className}`}>
                  {languages.page.default.advantages.menu.second.subtitle}
                </p>
              </div>
            )}

            {selectedCard === "third-card" && (
              <div>
                <p className="max-w-[727px] text-[32px] md:text-[40px] 2xl:text-[48px] mb-[20px] mt-10 md:mt-0 leading-[40px] md:leading-[55px]">
                  {languages.page.default.advantages.menu.third.title}
                </p>
                <p className={`max-w-[727px] text-[16px] md:text-[18px] 2xl:text-[20px] ${inter.className}`}>
                  {languages.page.default.advantages.menu.third.subtitle}
                </p>
              </div>
            )}

            {selectedCard === "fourth-card" && (
              <div>
                <p className="max-w-[727px] text-[32px] md:text-[40px] 2xl:text-[48px] mb-[20px] mt-10 md:mt-0 leading-[40px] md:leading-[55px]">
                  {languages.page.default.advantages.menu.fourth.title}
                </p>
                <p className={`max-w-[727px] text-[16px] md:text-[18px] 2xl:text-[20px] ${inter.className}`}>
                  {languages.page.default.advantages.menu.fourth.subtitle}
                </p>
              </div>
            )}

            <div className="flex items-start w-full mt-12 mb-12 md:mb-0 md:mt-8 2xl:mt-0">
              <OpenAccButton text={languages.header.buttonTxt} />
            </div>
          </div>

          <Image src={img.src} alt="img" width={384} height={90} className="2xl:w-[384px] 2xl:h-[384px] md:w-[324px] md:h-[324px]" />
        </div>
      </div>
    </div>
  );
}
