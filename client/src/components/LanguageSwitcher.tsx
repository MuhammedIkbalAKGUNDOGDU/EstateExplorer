import { useTranslation } from "react-i18next";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const languages = [
  {
    code: "en",
    name: "English",
    nativeName: "English",
    flag: "/en.svg",
  },
  {
    code: "tr",
    name: "Turkish",
    nativeName: "Türkçe",
    flag: "/tr.svg",
  },
  {
    code: "ar",
    name: "Arabic",
    nativeName: "العربية",
    flag: "/ar.svg",
  },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (value: string) => {
    i18n.changeLanguage(value);
    console.log("Language changed to:", value);
  };

  const currentLanguage = languages.find((lang) => lang.code === i18n.language);

  return (
    <Select value={i18n.language} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[140px] gap-2" data-testid="select-language">
        {currentLanguage && (
          <>
            <img
              src={currentLanguage.flag}
              alt={currentLanguage.name}
              className="h-4 w-6 object-cover rounded-sm"
            />
            <span>{currentLanguage.nativeName}</span>
          </>
        )}
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem
            key={lang.code}
            value={lang.code}
            data-testid={`option-language-${lang.code}`}
          >
            <div className="flex items-center gap-2">
              <img
                src={lang.flag}
                alt={lang.name}
                className="h-4 w-6 object-cover rounded-sm"
              />
              <span>{lang.nativeName}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
