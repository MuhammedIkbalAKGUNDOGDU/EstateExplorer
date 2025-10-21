import { useState } from "react";
import { useParams } from "wouter";
import { useTranslation } from "react-i18next";
import {
  Bed,
  Bath,
  Maximize,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { properties } from "@/mockData";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function PropertyDetailsPage() {
  const params = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const property = properties.find((p) => p.id === params.id);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-muted-foreground">Property not found</p>
      </div>
    );
  }

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

  const getDescription = () => {
    switch (i18n.language) {
      case "tr":
        return property.description_tr;
      case "ar":
        return property.description_ar;
      default:
        return property.description_en;
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

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-8">
          <div className="relative aspect-video md:aspect-[16/10] rounded-xl overflow-hidden mb-4">
            <img
              src={property.images[currentImageIndex]}
              alt={getTitle()}
              className="w-full h-full object-cover"
              data-testid="img-main-property"
            />

            <Button
              variant="secondary"
              size="icon"
              className="absolute top-1/2 start-4 -translate-y-1/2"
              onClick={prevImage}
              data-testid="button-prev-image"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="secondary"
              size="icon"
              className="absolute top-1/2 end-4 -translate-y-1/2"
              onClick={nextImage}
              data-testid="button-next-image"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            <Badge
              className="absolute top-4 start-4"
              variant={property.type === "sale" ? "default" : "secondary"}
            >
              {property.type === "sale"
                ? t("property.forSale")
                : t("property.forRent")}
            </Badge>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {property.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`aspect-video rounded-lg overflow-hidden hover-elevate ${
                  currentImageIndex === index ? "ring-2 ring-primary" : ""
                }`}
                data-testid={`button-thumbnail-${index}`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1
                className="text-3xl md:text-4xl font-bold mb-2"
                data-testid="text-property-title"
              >
                {getTitle()}
              </h1>
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <MapPin className="h-5 w-5" />
                <span>{getLocation()}</span>
              </div>
              <p
                className="text-3xl md:text-4xl font-bold text-primary"
                data-testid="text-property-price"
              >
                {formatPrice(property.price)}
                {property.type === "rent" && (
                  <span className="text-lg font-normal text-muted-foreground">
                    /{t("property.month")}
                  </span>
                )}
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">
                  {t("property.overview")}
                </h2>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <Bed className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold">{property.beds}</div>
                    <div className="text-sm text-muted-foreground">
                      {t("property.beds")}
                    </div>
                  </div>
                  <div className="text-center">
                    <Bath className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold">{property.baths}</div>
                    <div className="text-sm text-muted-foreground">
                      {t("property.baths")}
                    </div>
                  </div>
                  <div className="text-center">
                    <Maximize className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold">{property.size_sqm}</div>
                    <div className="text-sm text-muted-foreground">
                      {t("property.sqm")}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div>
              <h2 className="text-2xl font-semibold mb-4">
                {t("property.description")}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {getDescription()}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">
                {t("property.amenities")}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {property.amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 rounded-lg bg-card border"
                    data-testid={`amenity-${index}`}
                  >
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-sm">{t(`amenities.${amenity}`)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ContactForm propertyTitle={getTitle()} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
