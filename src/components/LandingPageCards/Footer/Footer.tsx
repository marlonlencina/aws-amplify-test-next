import OpenAccButton from "@/components/OpenAccButton/OpenAccButton";
import React from "react";
import logo from "../../../assets/logo.png";
import vector from "../../../assets/Vector.png";
import Image from "next/image";
import EmailIcon from "../../../assets/carbon_email.png";
import PhoneIcon from "../../../assets/phone.png";
import Link from "next/link";
import InstagramIcon from "../../../assets/instagram.png";
import LinkedinIcon from "../../../assets/linkedin.png";
import YoutubeIcon from "../../../assets/youtube.png";
import FacebookIcon from "../../../assets/facebook.png";
import TwitterIcon from "../../../assets/twitter.png";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Footer({ languages }: { languages: any }) {
  const footer = languages.page.default.footer;

  return (
    <div>
      <div className="flex flex-col md:flex-row w-full gap-12 md:gap-20 mt-[64px]">
        <div>
          <div className="w-[125px] h-[32px] mb-[40px]" style={{ backgroundImage: `url(${logo.src})` }}></div>
          <p className="text-[24px] max-w-[312px] mb-[32px]">{footer.title}</p>
          <button className="flex gap-[8px] border w-[154px] h-[46px] items-center justify-center rounded font-semibold text-[16px]">
            {languages.header.client} <Image alt="user-img" src={vector.src} width={20} height={20} />
          </button>
        </div>

        <div className="flex flex-col gap-6">
          <button className="text-left">{languages.header.institutional}</button>
          <button className="text-left">{languages.header.beginning}</button>
          <button className="text-left">{languages.header.advantages}</button>
          <button className="text-left">{languages.header.getToKnow}</button>
          <button className="text-left">{languages.header.plans}</button>
        </div>

        <div className="flex flex-col gap-6">
          <p>{footer.talkToUs}</p>

          <div className={`flex gap-1 items-center ${inter.className}`}>
            <Image className="w-[18px] h-[18px]" src={EmailIcon.src} width={1} height={1} alt="email" />
            <p>{footer.email}</p>
          </div>

          <div className={`flex gap-1 items-center ${inter.className}`}>
            <Image className="w-[18px] h-[18px]" src={PhoneIcon.src} width={1} height={1} alt="phone" />
            <p>{footer.number}</p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="max-w-[260px]">
            <OpenAccButton text={languages.header.buttonTxt} />
          </div>

          <p className={`max-w-[279px] ${inter.className}`}>
            {footer.address} <span>{footer.state}</span>
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full justify-between md:items-center text-center mt-[100px] font-thin">
        <p>{footer.rights}</p>

        <div className={`flex justify-center gap-x-[24px] text-[14px] font-thin mt-8 md:mt-0 text-center ${inter.className}`}>
          <p>{footer.useTerms}</p>
          <p>{footer.privacy}</p>
        </div>
      </div>

      <div className="flex w-full flex-col md:flex-row justify-between items-center mt-[40px] mb-6 font-thin">
        <div className="flex items-center gap-x-[24px] font-thin">
          <Link href="" target="_blank">
            <Image src={InstagramIcon.src} width={18} height={1} alt="instagram"></Image>
          </Link>

          <Link href="" target="_blank">
            <Image src={LinkedinIcon.src} width={18} height={1} alt="instagram"></Image>
          </Link>

          <Link href="" target="_blank">
            <Image src={YoutubeIcon.src} width={18} height={1} alt="instagram"></Image>
          </Link>

          <Link href="" target="_blank">
            <Image src={FacebookIcon.src} width={18} height={1} alt="instagram"></Image>
          </Link>

          <Link href="" target="_blank">
            <Image src={TwitterIcon.src} width={18} height={1} alt="instagram"></Image>
          </Link>
        </div>

        <p className="font-thin text-[16px] max-w-[300px] md:max-w-full text-center mt-8 md:mt-0">{footer.company}</p>
      </div>
    </div>
  );
}
