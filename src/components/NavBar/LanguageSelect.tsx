import { useTranslation } from "react-i18next";
import { useState } from 'react'

const Languages = [
  { id: 2, language: "English", value: "en" },
  { id: 1, language: "Magyar", value: "hu" },
];

function MyListbox() {
  const [language, setLanguage] = useState("id");
  const { t, i18n } = useTranslation();

  const handleLangChange = evt => {
    const lang = evt.target.value;
    console.log(lang);
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };
  return (

    <div className="flex gap-1 items-center">
      {/* <p className=" text-2xl text-white ">{t("Language")}:</p> */}
      <select className="bg-transparent text-white text-2xl border-0 focus:ring-0 border-spacing-0 leading-tight" onChange={handleLangChange} value={language}>
        {Languages.map((lan)=>(
          <option className="bg-black" value={lan.value} key={lan.id}>{lan.language}</option>
        ))}
      </select>
    </div>
  );
}
export default MyListbox;
