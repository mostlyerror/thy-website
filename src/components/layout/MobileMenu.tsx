"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, SITE } from "@/lib/constants";
import SocialIcons from "../ui/SocialIcons";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 flex flex-col bg-paper lg:hidden"
        >
          <div className="flex flex-1 flex-col items-center justify-center gap-8">
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="font-serif text-3xl font-light text-ink transition-colors hover:text-warm"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-6 pb-12">
            <SocialIcons />
            <p className="text-xs text-stone">{SITE.tagline}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
