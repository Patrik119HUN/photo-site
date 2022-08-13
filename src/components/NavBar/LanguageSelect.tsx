import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { getCookieConsentValue } from "react-cookie-consent";
const Languages = [
  { id: 2, language: "English", value: "en" },
  { id: 1, language: "Magyar", value: "hu" },
];

function LanguageSelect() {
  const [language, setLanguage] = useState(Cookies.get("lan"));
  const { i18n } = useTranslation();

  const handleOnChange = (event) => {
    const { value } = event.target;
    setLanguage(value);
    if (getCookieConsentValue() === "true") {
      Cookies.set("lan", value);
    }
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  return (
    <div className="flex gap-1 items-center">
      <select
        className="bg-transparent text-white text-2xl border-0 focus:ring-0 border-spacing-0 leading-tight"
        onChange={handleOnChange}
        value={language}
      >
        {Languages.map((lan) => (
          <option className="bg-black" value={lan.value} key={lan.id}>
            {lan.language}
          </option>
        ))}
      </select>
    </div>
  );
}
export default LanguageSelect;
