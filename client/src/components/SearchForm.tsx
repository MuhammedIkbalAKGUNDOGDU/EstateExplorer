import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Search, MapPin, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SearchForm() {
  const { t } = useTranslation();
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleSearch = () => {
    console.log("Search triggered:", { location, propertyType, priceRange });
  };

  return (
    <div className="bg-background/95 backdrop-blur rounded-xl p-6 shadow-2xl border">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <MapPin className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder={t("search.location")}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="ps-10"
            data-testid="input-location"
          />
        </div>

        <div className="relative">
          <Home className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none z-10" />
          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger className="ps-10" data-testid="select-property-type">
              <SelectValue placeholder={t("search.type")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t("search.allTypes")}</SelectItem>
              <SelectItem value="sale">{t("search.forSale")}</SelectItem>
              <SelectItem value="rent">{t("search.forRent")}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="relative">
          <span className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none z-10 flex items-center justify-center text-sm font-bold">
            ₺
          </span>
          <Select value={priceRange} onValueChange={setPriceRange}>
            <SelectTrigger className="ps-10" data-testid="select-price-range">
              <SelectValue placeholder={t("search.priceRange")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0-500000">₺0 - ₺500.000</SelectItem>
              <SelectItem value="500000-1000000">
                ₺500.000 - ₺1.000.000
              </SelectItem>
              <SelectItem value="1000000-2000000">
                ₺1.000.000 - ₺2.000.000
              </SelectItem>
              <SelectItem value="2000000+">₺2.000.000+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          onClick={handleSearch}
          className="gap-2"
          size="lg"
          data-testid="button-search"
        >
          <Search className="h-4 w-4" />
          {t("hero.search")}
        </Button>
      </div>
    </div>
  );
}
