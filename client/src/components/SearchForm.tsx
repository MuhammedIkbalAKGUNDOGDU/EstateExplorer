import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "wouter";
import { Search, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SearchForm() {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleSearch = () => {
    // URL parametrelerini oluştur
    const params = new URLSearchParams();

    if (propertyType && propertyType !== "all") {
      params.set("type", propertyType);
    }

    if (priceRange) {
      const [minPrice, maxPrice] = priceRange.split("-");
      if (maxPrice && maxPrice !== "+") {
        params.set("maxPrice", maxPrice);
      }
    }

    // ListingsPage'e yönlendir
    const queryString = params.toString();
    setLocation(`/listings${queryString ? `?${queryString}` : ""}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="bg-background/95 backdrop-blur rounded-xl p-6 shadow-2xl border">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative">
          <Home className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none z-10" />
          <Select
            value={propertyType}
            onValueChange={(value) => {
              setPropertyType(value);
              setPriceRange(""); // Mülk tipi değiştiğinde fiyat aralığını sıfırla
            }}
          >
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
              {propertyType === "rent" ? (
                <>
                  <SelectItem value="0-5000">₺0 - ₺5.000/ay</SelectItem>
                  <SelectItem value="5000-10000">
                    ₺5.000 - ₺10.000/ay
                  </SelectItem>
                  <SelectItem value="10000-15000">
                    ₺10.000 - ₺15.000/ay
                  </SelectItem>
                  <SelectItem value="15000+">₺15.000+/ay</SelectItem>
                </>
              ) : (
                <>
                  <SelectItem value="0-1000000">₺0 - ₺1.000.000</SelectItem>
                  <SelectItem value="1000000-1500000">
                    ₺1.000.000 - ₺1.500.000
                  </SelectItem>
                  <SelectItem value="1500000-2000000">
                    ₺1.500.000 - ₺2.000.000
                  </SelectItem>
                  <SelectItem value="2000000+">₺2.000.000+</SelectItem>
                </>
              )}
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
