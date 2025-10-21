import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// GoogleMap import'u kaldırıldı

export default function ContactPage() {
  const { t } = useTranslation();
  const mapRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  // Google Maps'i yükle
  useEffect(() => {
    const loadGoogleMaps = () => {
      if (window.google && window.google.maps && mapRef.current) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: { lat: 38.8847, lng: 40.4986 }, // Bingöl il merkezi
          zoom: 16,
          mapTypeId: window.google.maps.MapTypeId.ROADMAP,
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
          ],
        });

        // Marker ekle
        new window.google.maps.Marker({
          position: { lat: 38.8847, lng: 40.4986 },
          map: map,
          title: "Bingöl Merkez - Premier Real Estate",
          icon: {
            url:
              "data:image/svg+xml;charset=UTF-8," +
              encodeURIComponent(`
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" fill="#3B82F6" stroke="white" stroke-width="4"/>
                <path d="M20 8C14.477 8 10 12.477 10 18C10 25 20 32 20 32C20 32 30 25 30 18C30 12.477 25.523 8 20 8Z" fill="white"/>
                <circle cx="20" cy="18" r="4" fill="#3B82F6"/>
              </svg>
            `),
            scaledSize: new window.google.maps.Size(40, 40),
          },
        });

        setMapLoaded(true);
      }
    };

    // Google Maps script'ini yükle
    if (!window.google) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBvOkBw3cJ3n2qE8vF7gH9iK1lM4nO6pQ8&libraries=marker`;
      script.async = true;
      script.defer = true;
      script.onload = loadGoogleMaps;
      document.head.appendChild(script);
    } else {
      loadGoogleMaps();
    }
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      title: t("contact.info.phone.title"),
      value: "+1 (234) 567-890",
      description: t("contact.info.phone.description"),
    },
    {
      icon: Mail,
      title: t("contact.info.email.title"),
      value: "info@premierrealestate.com",
      description: t("contact.info.email.description"),
    },
    {
      icon: MapPin,
      title: t("contact.info.address.title"),
      value: t("footer.addressLine"),
      description: t("contact.info.address.description"),
    },
    {
      icon: Clock,
      title: t("contact.info.hours.title"),
      value: t("contact.info.hours.value"),
      description: t("contact.info.hours.description"),
    },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("contact.hero.title")}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("contact.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover-elevate transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                    <p className="text-primary font-medium mb-2">
                      {info.value}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                {t("contact.form.title")}
              </h2>
              <p className="text-muted-foreground mb-8">
                {t("contact.form.subtitle")}
              </p>

              {isSubmitted ? (
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-green-800 mb-2">
                      {t("contact.form.success.title")}
                    </h3>
                    <p className="text-green-700">
                      {t("contact.form.success.message")}
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">{t("contact.form.name")}</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          handleInputChange("name", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">{t("contact.form.email")}</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">{t("contact.form.phone")}</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">
                        {t("contact.form.subject")}
                      </Label>
                      <Select
                        onValueChange={(value) =>
                          handleInputChange("subject", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue
                            placeholder={t("contact.form.subjectPlaceholder")}
                          />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">
                            {t("contact.form.subjects.general")}
                          </SelectItem>
                          <SelectItem value="property">
                            {t("contact.form.subjects.property")}
                          </SelectItem>
                          <SelectItem value="valuation">
                            {t("contact.form.subjects.valuation")}
                          </SelectItem>
                          <SelectItem value="investment">
                            {t("contact.form.subjects.investment")}
                          </SelectItem>
                          <SelectItem value="other">
                            {t("contact.form.subjects.other")}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">{t("contact.form.message")}</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      placeholder={t("contact.form.messagePlaceholder")}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full gap-2">
                    <Send className="h-4 w-4" />
                    {t("contact.form.send")}
                  </Button>
                </form>
              )}
            </div>

            {/* Google Maps */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                {t("contact.map.title")}
              </h2>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border">
                {!mapLoaded ? (
                  <div className="flex items-center justify-center h-full bg-muted/20">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                      <p className="text-muted-foreground">
                        Harita yükleniyor...
                      </p>
                    </div>
                  </div>
                ) : (
                  <div ref={mapRef} className="w-full h-full" />
                )}
              </div>
              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{t("contact.map.location")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
