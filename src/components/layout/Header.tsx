"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, SITE } from "@/lib/constants";
import Container from "./Container";
import SocialIcons from "../ui/SocialIcons";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const pathname = usePathname();
  const darkHero = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "bg-paper/95 shadow-sm backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <Container>
          <div className="flex h-20 items-center justify-between">
            <Link
              href="/"
              className={`font-serif text-2xl font-light tracking-tight transition-colors duration-500 ${
                scrolled || !darkHero ? "text-ink" : "text-paper"
              }`}
            >
              {SITE.name}
            </Link>

            <nav className="hidden items-center gap-8 lg:flex">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-medium uppercase tracking-[0.15em] transition-colors hover:text-warm ${
                    scrolled || !darkHero ? "text-ink" : "text-paper/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden items-center gap-6 lg:flex">
              <SocialIcons
                iconClassName={`h-4 w-4 transition-colors duration-500 ${
                  scrolled || !darkHero ? "text-ink" : "text-paper/80"
                }`}
              />
            </div>

            <button
              className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <span
                className={`h-px w-6 transition-all duration-300 ${
                  mobileOpen || scrolled || !darkHero ? "bg-ink" : "bg-paper"
                } ${mobileOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-6 transition-all duration-300 ${
                  mobileOpen || scrolled || !darkHero ? "bg-ink" : "bg-paper"
                } ${mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
