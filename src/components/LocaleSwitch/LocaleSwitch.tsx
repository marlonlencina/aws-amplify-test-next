"use client";
import { useWindowSize } from "@uidotdev/usehooks";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Locale, i18n } from "../../../i18n.config";
import Br from "../../assets/br.png";
import Es from "../../assets/es.png";
import Eua from "../../assets/eua.png";

const flagMap: { [key in Locale]: StaticImageData } = {
  "pt-BR": Br,
  en: Eua,
  "es-ES": Es,
};

const languagesTitles = {
  "pt-BR": "Português",
  en: "English",
  "es-ES": "Espanhõl",
};

export default function LocaleSwitch({
  lang,
  languages,
}: {
  lang: Locale;
  languages: any;
}) {
  const [selectedLocale, setSelectedLocale] = useState<Locale>(
    lang
  );
  const [isOpen, setIsOpen] = useState(false);
  console.log(lang);

  const size = useWindowSize();
  const isMobile = useMemo(() => {
    if (size && size.width) {
      return size.width < 600;
    }
    return false;
  }, [size]);

  const handleSelect = (newLocale: Locale) => {
    console.log(selectedLocale);
    console.log(newLocale);
    setSelectedLocale(newLocale);
    setIsOpen(false);
    /* window.location.assign(`/${newLocale}`); */
    /* redirect(`/${newLocale}`); */
  };

  return (
    <div className="relative w-[140px] md:max-w-[60px]">
      <div
        className="rounded-full w-full h-[40px] px-[4px] py-[5px] text-sm bg-black cursor-pointer flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <Image
            src={flagMap[selectedLocale].src}
            alt={selectedLocale}
            width={26}
            height={26}
            className="mr-2"
          />
          {/* {isMobile && <span>{selectedLanguage}</span>} */}
        </div>
        <span className="ml-2">&#9660;</span>
      </div>
      {isOpen && (
        <ul className="absolute w-full bg-black rounded-lg mt-1 z-10">
          <li
            className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-700 flex items-center"
            /* onClick={() => handleSelect("pt-BR" as Locale)} */
          >
            <Link href={"/pt-BR"}>
              <Image
                src={Br.src}
                alt="Portuguese"
                width={26}
                height={26}
                className="mr-2"
              />
              {isMobile && languages.portuguese}
            </Link>
          </li>
          <li
            className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-700 flex items-center"
            /* onClick={() => handleSelect("en" as Locale)} */
          >
            <Link href={"/en"}>
              <Image
                src={Eua.src}
                alt="English"
                width={26}
                height={26}
                className="mr-2"
              />
              {isMobile && languages.english}
            </Link>
          </li>
          <li
            className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-700 flex items-center"
          >
            <Link href={'/es-ES'}>
            <Image
              src={Es.src}
              alt="Spanish"
              width={26}
              height={26}
              className="mr-2"
            />
            {isMobile && languages.spanish}
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
