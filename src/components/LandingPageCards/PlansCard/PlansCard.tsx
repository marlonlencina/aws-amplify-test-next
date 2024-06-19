"use client";
import React, { useState } from "react";
import PlansDetails from "./PlansDetails";
import Image from "next/image";
import Star from "../../../assets/material-symbols_star.png";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

interface PlanType {
  trader: boolean;
  high: boolean;
  private: boolean;
  ultraHigh: boolean;
}

export default function PlansCard({ languages }: { languages: any }) {
  const [selected, setSelected] = useState<PlanType>({ trader: true, high: false, private: false, ultraHigh: false });
  const [plan, setPlan] = useState<"trader" | "high" | "private" | "ultraHigh">("trader");

  const plansLanguages = languages.page.default.plans;

  return (
    <div className="mt-12">
      <p className="text-[#C89305] font-bold text-[14px] mt-4">{plansLanguages.initialText}</p>
      <p className="text-[32px] md:text-[40px] max-w-[590px] my-[16px] leading-[55px]">{plansLanguages.title}</p>
      <p className={`text-[16px] md:text-[18px] max-w-[619px] font-light mb-[60px] ${inter.className}`}>{plansLanguages.subtitle}</p>

      <div className="flex flex-col md:flex-row gap-x-[32px]">
        <div className="flex md:flex-col gap-y-[24px] md:max-w-[384px] w-full overflow-auto">
          <div
            className={`flex items-center h-[80px] bg-[#161412] px-[26px] min-w-[260px] w-full cursor-pointer border-b ${
              selected.trader ? "border-b-[#C89305]" : "border-b-[#7E7873]"
            }`}
            onClick={() => {
              setSelected({
                trader: true,
                high: false,
                private: false,
                ultraHigh: false,
              });
              setPlan("trader");
            }}
          >
            <div className="flex">
              <p className="font-thin mr-1">{plansLanguages.plan}</p> <p>{plansLanguages.plansTitles.trader}</p>
            </div>
          </div>
          <div
            className={`flex items-center h-[80px] bg-[#161412] px-[26px] min-w-[300px] w-full cursor-pointer border-b ${
              selected.high ? "border-b-[#C89305]" : "border-b-[#7E7873]"
            }`}
            onClick={() => {
              setSelected({
                trader: false,
                high: true,
                private: false,
                ultraHigh: false,
              });
              setPlan("high");
            }}
          >
            <div className="flex w-full justify-between items-center">
              <div className="flex">
                <p className="font-thin mr-1">{plansLanguages.plan}</p> <p>{plansLanguages.plansTitles.high}</p>
              </div>
              <div className="flex gap-1">
                <Image className="h-[16px] w-[16px]" src={Star.src} height={18} width={18} alt="star" />
                <Image className="h-[16px] w-[16px]" src={Star.src} height={18} width={18} alt="star" />
                <Image className="h-[16px] w-[16px]" src={Star.src} height={18} width={18} alt="star" />
              </div>
            </div>
          </div>
          <div
            className={`flex items-center h-[80px] bg-[#161412] px-[26px] min-w-[300px] w-full cursor-pointer border-b ${
              selected.private ? "border-b-[#C89305]" : "border-b-[#7E7873]"
            }`}
            onClick={() => {
              setSelected({
                trader: false,
                high: false,
                private: true,
                ultraHigh: false,
              });
              setPlan("private");
            }}
          >
            <div className="flex w-full justify-between items-center">
              <div className="flex">
                <p className="font-thin mr-1">{plansLanguages.plan}</p> <p>{plansLanguages.plansTitles.private}</p>
              </div>
              <div className="flex gap-1">
                <Image className="h-[16px] w-[16px]" src={Star.src} height={18} width={18} alt="star" />
                <Image className="h-[16px] w-[16px]" src={Star.src} height={18} width={18} alt="star" />
                <Image className="h-[16px] w-[16px]" src={Star.src} height={18} width={18} alt="star" />
                <Image className="h-[16px] w-[16px]" src={Star.src} height={18} width={18} alt="star" />
              </div>
            </div>
          </div>
          <div
            className={`flex items-center h-[80px] bg-[#161412] px-[26px] min-w-[300px] w-full cursor-pointer border-b ${
              selected.ultraHigh ? "border-b-[#C89305]" : "border-b-[#7E7873]"
            }`}
            onClick={() => {
              setSelected({
                trader: false,
                high: false,
                private: false,
                ultraHigh: true,
              });
              setPlan("ultraHigh");
            }}
          >
            <div className="flex w-full justify-between items-center">
              <div className="flex">
                <p className="font-thin mr-1">{plansLanguages.plan}</p> <p>{plansLanguages.plansTitles.ultraHigh}</p>
              </div>
              <div className="flex gap-1">
                <Image className="h-[16px] w-[16px]" src={Star.src} height={18} width={18} alt="star" />
                <Image className="h-[16px] w-[16px]" src={Star.src} height={18} width={18} alt="star" />
                <Image className="h-[16px] w-[16px]" src={Star.src} height={18} width={18} alt="star" />
                <Image className="h-[16px] w-[16px]" src={Star.src} height={18} width={18} alt="star" />
                <Image className="h-[16px] w-[16px]" src={Star.src} height={18} width={18} alt="star" />
              </div>
            </div>
          </div>
        </div>

        <PlansDetails languages={languages} plan={plan} />
      </div>
    </div>
  );
}
