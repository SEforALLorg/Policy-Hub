import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import en from "./temp/en/common.json";
import fr from "./temp/fr/common.json";
i18n
  .use(initReactI18next)
  .use(languageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "fr"],
    resources: {
      en: {
        translation: en,
      },
      fr: {
        translation: fr,
      },
    },
    lng: "en",
    keySeparator: false,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["path", "cookie", "htmlTag", "localStorage", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "public/locales/{{lng}}/translation.json",
    },
    react: { useSuspense: false },
  });
export default i18n;
