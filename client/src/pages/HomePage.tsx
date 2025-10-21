import { useTranslation } from "react-i18next";
import { Building2, Users, MapPin, Award } from "lucide-react";
import SearchForm from "@/components/SearchForm";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/mockData";
import heroImage from "@assets/generated_images/City_skyline_hero_background_ddc57e60.png";

export default function HomePage() {
  const { t } = useTranslation();

  const featuredProperties = properties.slice(0, 6);

  const stats = [
    { icon: Building2, value: "500+", label: t("stats.properties") },
    { icon: Users, value: "1000+", label: t("stats.happyClients") },
    { icon: MapPin, value: "25+", label: t("stats.cities") },
    { icon: Award, value: "15+", label: t("stats.experience") },
  ];

  return (
    <div className="min-h-screen">
      <section
        className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full py-20">
          <div className="text-center mb-12">
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
              data-testid="text-hero-title"
            >
              {t("hero.title")}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              {t("hero.subtitle")}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <SearchForm />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center"
                  data-testid={`stat-${index}`}
                >
                  <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("featured.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("featured.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
