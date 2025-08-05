"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, TreePine, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-secondary text-primary shadow-md sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <TreePine className="h-8 w-8 text-primary group-hover:text-darkGreen transition-colors" />
            <div>
              <span className="text-xl font-bold text-highlight">
                Landsynergy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-primary hover:text-darkGreen px-3 py-2 text-base font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button size="sm" className="ml-4 bg-accent hover:bg-highlight">
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-primary hover:bg-muted hover:text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-moss-700 hover:bg-moss-100 hover:text-moss-900"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="w-full mt-4 bg-forest-600 hover:bg-forest-700">
                <Phone className="h-4 w-4 mr-2" />
                +111 1374 3634
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
