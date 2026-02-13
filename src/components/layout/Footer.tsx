import Link from "next/link";
import { SITE, CONTACT, NAV_LINKS } from "@/lib/constants";
import Container from "./Container";
import SocialIcons from "../ui/SocialIcons";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <Container className="py-20">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-serif text-2xl font-light tracking-tight"
            >
              {SITE.name}
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-paper/60">
              {SITE.tagline}
            </p>
            <SocialIcons className="mt-6" iconClassName="h-4 w-4 text-paper/60 hover:text-paper" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-paper/40">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-paper/60 transition-colors hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-paper/40">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-paper/60">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="transition-colors hover:text-paper"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phone.replace(/[^+\d]/g, "")}`}
                  className="transition-colors hover:text-paper"
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li>{CONTACT.address}</li>
              <li className="pt-2 text-xs text-paper/30">
                License {CONTACT.license}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-paper/10 pt-8 text-center text-xs text-paper/30">
          &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
