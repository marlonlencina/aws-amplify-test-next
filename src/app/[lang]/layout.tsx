import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import { Locale, i18n } from "../../../i18n.config";
import { getDictionary } from "../../../lib/dictionary";
import Logo from "../../assets/icon-mark.png";
import DictionaryProvider from "../../dictionary-provider";
import favicon from "../favicon.ico";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });
const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flizbar",
  description: "Seu parceiro de investimentos",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const dictionary = await getDictionary(params.lang);
  return (
    <html lang={params.lang}>
      <head>
        <link rel="icon" href={favicon.src} sizes="any" />
      </head>
      <body className={raleway.className}>
        <link rel="icon" href={Logo.src} sizes="any" />
        <DictionaryProvider dictionary={dictionary}>
          <main>{children}</main>
        </DictionaryProvider>
      </body>
    </html>
  );
}
