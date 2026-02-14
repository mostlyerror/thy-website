import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { sanityFetch } from "@/sanity/lib/live";
import { SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";
import Container from "./Container";
import SocialIcons from "../ui/SocialIcons";

export default async function Footer() {
  const { data: settings } = await sanityFetch({ query: SITE_SETTINGS_QUERY });

  const name = settings?.name || "Thy Nguyen";
  const tagline = settings?.tagline || "Real Estate That Feels Personal";
  const email = settings?.email || "thy@thynguyen.com";
  const phone = settings?.phone || "(832) 555-0100";
  const address = settings?.address || "Houston, TX";
  const license = settings?.license || "TX #000000";

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
              {name}
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-paper/60">
              {tagline}
            </p>
            <SocialIcons
              className="mt-6"
              iconClassName="h-4 w-4 text-paper/60 hover:text-paper"
              linkedin={settings?.linkedin}
              facebook={settings?.facebook}
              instagram={settings?.instagram}
            />
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
                  href={`mailto:${email}`}
                  className="transition-colors hover:text-paper"
                >
                  {email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                  className="transition-colors hover:text-paper"
                >
                  {phone}
                </a>
              </li>
              <li>{address}</li>
              <li className="pt-2 text-xs text-paper/30">
                License {license}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-paper/10 pt-8 text-center text-xs text-paper/30">
          &copy; {new Date().getFullYear()} {name}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
