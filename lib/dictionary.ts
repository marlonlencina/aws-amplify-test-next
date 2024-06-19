import "server-only";
import type { Locale } from "../i18n.config";

const dictionaries = {
  "pt-BR": {
    import: () =>
      import("../dictionaries/pt.json").then((module) => module.default),
  },
  "es-ES": {
    import: () =>
      import("../dictionaries/es.json").then((module) => module.default),
  },
  en: {
    import: () =>
      import("../dictionaries/en.json").then((module) => module.default),
  },
};

//@ts-ignore
export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]
    ? dictionaries[locale].import()
    : dictionaries["pt-BR"].import();
