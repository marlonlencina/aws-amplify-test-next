import Header from "@/components/Header/Header";
import AdvantagesCard from "@/components/LandingPageCards/AdvantagesCard/AdvantagesCard";
import BegginPresentationCard from "@/components/LandingPageCards/BegginPresentationCard/BegginPresentationCard";
import ContactCard from "@/components/LandingPageCards/ContactCard/ContactCard";
import KnowCard from "@/components/LandingPageCards/KnowCard/KnowCard";
import PlansCard from "@/components/LandingPageCards/PlansCard/PlansCard";
import { TickerTape } from "react-ts-tradingview-widgets";
import { Locale } from "../../../i18n.config";
import bg from "../../assets/background_hero.png";
import { useDictionary } from "../../dictionary-provider";

export default function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = useDictionary();

  return (
    <>
      <div
        id="beginning"
        className="w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bg.src})` }}
      >
        <div className="w-full max-w-[1216px] mx-auto">
          <Header
            lang={lang}
            languages={dictionary.header}
            btn={dictionary.languages}
          />
          <BegginPresentationCard languages={dictionary} />
        </div>
        <TickerTape isTransparent colorTheme="dark"></TickerTape>
      </div>

      <div className="flex flex-col px-[20px] md:px-[60px] 2xl:px-[112px] mt-[124px]">
        <div id="advantages">
          <div className="w-full max-w-[1216px] mx-auto">
            <AdvantagesCard languages={dictionary} />
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-[124px] py-[72px] bg-[#1E1C1B] ">
        <div id="know">
          <div className="w-full max-w-[1216px] mx-auto">
            <KnowCard languages={dictionary} />
          </div>
        </div>
      </div>

      <div className="flex flex-col px-[20px] md:px-[60px] 2xl:px-[112px] py-0 mt-[124px] ">
        <div id="plans">
          <div className="w-full max-w-[1216px] mx-auto ">
            <PlansCard languages={dictionary} />
          </div>
        </div>
        <div id="contact">
          <ContactCard languages={dictionary} />
        </div>
      </div>
    </>
  );
}
