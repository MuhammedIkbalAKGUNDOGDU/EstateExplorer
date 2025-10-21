import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { Menu, X, Home as HomeIcon } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  const { t } = useTranslation();

  const navLinks = [
    { path: "/", label: t("nav.home") },
    { path: "/listings?type=sale", label: t("nav.forSale") },
    { path: "/listings?type=rent", label: t("nav.forRent") },
    { path: "/about", label: t("nav.about") },
    { path: "/blog", label: t("nav.blog") },
    { path: "/contact", label: t("nav.contact") },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location === "/";
    return location.startsWith(path.split("?")[0]);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            data-testid="link-home"
            className="flex items-center gap-2 font-bold text-xl text-primary hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors"
          >
            <HomeIcon className="h-6 w-6" />
            <span>Premier Real Estate</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`px-4 py-2 rounded-md font-medium transition-colors hover-elevate active-elevate-2 ${
                  isActive(link.path) ? "text-primary" : "text-foreground"
                }`}
                data-testid={`link-nav-${link.label
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`block px-4 py-3 rounded-md font-medium hover-elevate active-elevate-2 ${
                  isActive(link.path)
                    ? "bg-primary/10 text-primary"
                    : "text-foreground"
                }`}
                onClick={() => setIsMenuOpen(false)}
                data-testid={`link-mobile-${link.label
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
