"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/memberships", label: "Subscriptions" },
  { href: "/our-story", label: "Our Story" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkClass = (href) =>
    "text-sm transition-colors " +
    (isActive(href)
      ? "text-[var(--ink)] border-b-2 border-[var(--ochre)] pb-1"
      : "text-[var(--ink-soft)] hover:text-[var(--ink)]");

  return (
    <header
      className={
        "sticky top-0 z-50 border-b bg-[var(--bone)] transition-shadow " +
        (scrolled ? "border-[var(--line)] shadow-sm" : "border-transparent")
      }
    >
      <nav className="mx-auto flex max-w-5xl items-center gap-8 px-6 py-4">
        <Link href="/" className="font-display text-2xl text-[var(--ink)]">
          FlowerDough
        </Link>

        {/* Main links */}
        <div className="hidden items-center gap-7 md:flex">
          {mainLinks.map((l) => (
            <Link key={l.href} href={l.href} className={linkClass(l.href)}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Contact — far right, separated by a divider */}
        <Link
          href="/contact"
          className={"ml-auto hidden border-l border-[var(--line)] pl-6 md:block " + linkClass("/contact")}
        >
          Contact
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="ml-auto rounded-full border border-[var(--line)] px-3 py-2 text-sm text-[var(--ink)] md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[var(--line)] bg-[var(--bone)] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {mainLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={linkClass(l.href)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className={"mt-1 border-t border-[var(--line)] pt-3 " + linkClass("/contact")}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
