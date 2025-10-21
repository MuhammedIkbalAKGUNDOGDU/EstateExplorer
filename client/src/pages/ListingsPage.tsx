import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "wouter";
import { SlidersHorizontal } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/mockData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

export default function ListingsPage() {
  const { t } = useTranslation();
  const [location] = useLocation();
  const urlParams = new URLSearchParams(location.split("?")[1] || "");
  const typeFromUrl = urlParams.get("type");

  const [filters, setFilters] = useState({
    type: typeFromUrl || "all",
    minPrice: 0,
    maxPrice: 3000000,
    beds: "all",
    baths: "all",
  });

  const [sortBy, setSortBy] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredProperties = useMemo(() => {
    let filtered = [...properties];

    if (filters.type !== "all") {
      filtered = filtered.filter((p) => p.type === filters.type);
    }

    filtered = filtered.filter(
      (p) => p.price >= filters.minPrice && p.price <= filters.maxPrice
    );

    if (filters.beds !== "all") {
      filtered = filtered.filter((p) => p.beds >= parseInt(filters.beds));
    }

    if (filters.baths !== "all") {
      filtered = filtered.filter((p) => p.baths >= parseInt(filters.baths));
    }

    switch (sortBy) {
      case "priceLowHigh":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "priceHighLow":
        filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return filtered;
  }, [filters, sortBy]);

  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const paginatedProperties = filteredProperties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const clearFilters = () => {
    setFilters({
      type: "all",
      minPrice: 0,
      maxPrice: 3000000,
      beds: "all",
      baths: "all",
    });
    console.log("Filters cleared");
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h1
          className="text-3xl md:text-4xl font-bold mb-8"
          data-testid="text-listings-title"
        >
          {t("listings.title")}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <SlidersHorizontal className="h-5 w-5" />
                  {t("listings.filters")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    {t("listings.propertyType")}
                  </label>
                  <Select
                    value={filters.type}
                    onValueChange={(value) =>
                      setFilters({ ...filters, type: value })
                    }
                  >
                    <SelectTrigger data-testid="select-filter-type">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">
                        {t("search.allTypes")}
                      </SelectItem>
                      <SelectItem value="sale">
                        {t("search.forSale")}
                      </SelectItem>
                      <SelectItem value="rent">
                        {t("search.forRent")}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-3 block">
                    {t("listings.priceRange")}
                  </label>
                  <Slider
                    min={0}
                    max={3000000}
                    step={50000}
                    value={[filters.maxPrice]}
                    onValueChange={([value]) =>
                      setFilters({ ...filters, maxPrice: value })
                    }
                    data-testid="slider-price"
                  />
                  <div className="text-sm text-muted-foreground mt-2">
                    Up to ₺{(filters.maxPrice / 1000).toFixed(0)}k
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    {t("listings.bedrooms")}
                  </label>
                  <Select
                    value={filters.beds}
                    onValueChange={(value) =>
                      setFilters({ ...filters, beds: value })
                    }
                  >
                    <SelectTrigger data-testid="select-filter-beds">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any</SelectItem>
                      <SelectItem value="1">1+</SelectItem>
                      <SelectItem value="2">2+</SelectItem>
                      <SelectItem value="3">3+</SelectItem>
                      <SelectItem value="4">4+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    {t("listings.bathrooms")}
                  </label>
                  <Select
                    value={filters.baths}
                    onValueChange={(value) =>
                      setFilters({ ...filters, baths: value })
                    }
                  >
                    <SelectTrigger data-testid="select-filter-baths">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Any</SelectItem>
                      <SelectItem value="1">1+</SelectItem>
                      <SelectItem value="2">2+</SelectItem>
                      <SelectItem value="3">3+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={clearFilters}
                  data-testid="button-clear-filters"
                >
                  {t("listings.clearFilters")}
                </Button>
              </CardContent>
            </Card>
          </aside>

          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
              <p
                className="text-muted-foreground"
                data-testid="text-results-count"
              >
                {filteredProperties.length} {t("listings.results")}
              </p>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[200px]" data-testid="select-sort">
                  <SelectValue placeholder={t("listings.sortBy")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">
                    {t("listings.featured")}
                  </SelectItem>
                  <SelectItem value="priceLowHigh">
                    {t("listings.priceLowHigh")}
                  </SelectItem>
                  <SelectItem value="priceHighLow">
                    {t("listings.priceHighLow")}
                  </SelectItem>
                  <SelectItem value="newest">{t("listings.newest")}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {paginatedProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

            {totalPages > 1 && (
              <div className="flex justify-center gap-2">
                <Button
                  variant="outline"
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((p) => p - 1)}
                  data-testid="button-prev-page"
                >
                  {t("common.previous")}
                </Button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      onClick={() => setCurrentPage(page)}
                      data-testid={`button-page-${page}`}
                    >
                      {page}
                    </Button>
                  )
                )}

                <Button
                  variant="outline"
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((p) => p + 1)}
                  data-testid="button-next-page"
                >
                  {t("common.next")}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
