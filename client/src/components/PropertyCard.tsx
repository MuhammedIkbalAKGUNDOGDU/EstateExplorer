import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import { Bed, Bath, Maximize } from "lucide-react";
import { Property } from "@/mockData";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const { t, i18n } = useTranslation();

  const getTitle = () => {
    switch (i18n.language) {
      case "tr":
        return property.title_tr;
      case "ar":
        return property.title_ar;
      default:
        return property.title_en;
    }
  };

  const getLocation = () => {
    switch (i18n.language) {
      case "tr":
        return property.location_tr;
      case "ar":
        return property.location_ar;
      default:
        return property.location;
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat(i18n.language, {
      style: "currency",
      currency: "TRY",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Link
      href={`/property/${property.id}`}
      data-testid={`card-property-${property.id}`}
    >
      <Card className="overflow-hidden hover-elevate transition-all duration-300 hover:shadow-xl">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={property.imageUrl}
            alt={getTitle()}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <Badge
            className="absolute top-4 start-4"
            variant={property.type === "sale" ? "default" : "secondary"}
            data-testid={`badge-type-${property.id}`}
          >
            {property.type === "sale"
              ? t("property.forSale")
              : t("property.forRent")}
          </Badge>
        </div>

        <CardContent className="p-6">
          <div className="mb-3">
            <h3
              className="font-semibold text-xl mb-1 line-clamp-1"
              data-testid={`text-title-${property.id}`}
            >
              {getTitle()}
            </h3>
            <p className="text-sm text-muted-foreground">{getLocation()}</p>
          </div>

          <div className="mb-4">
            <p
              className="text-2xl font-bold text-primary"
              data-testid={`text-price-${property.id}`}
            >
              {formatPrice(property.price)}
              {property.type === "rent" && (
                <span className="text-sm font-normal text-muted-foreground">
                  /{t("property.month")}
                </span>
              )}
            </p>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Bed className="h-4 w-4" />
              <span>
                {property.beds} {t("property.beds")}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="h-4 w-4" />
              <span>
                {property.baths} {t("property.baths")}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Maximize className="h-4 w-4" />
              <span>
                {property.size_sqm} {t("property.sqm")}
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
