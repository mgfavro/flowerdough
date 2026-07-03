"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/our-story", label: "Our Story" },
  { href: "/contact", label: "Contact" },
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

  return (
    <header
      className={
        "sticky top-0 z-50 border-b bg-[var(--bone)] transition-shadow " +
        (scrolled ? "border-[var(--line)] shadow-sm" : "border-transparent")
      }
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <Link href="/" className="font-display text-2xl text-[var(--ink)]">
          FlowerDough
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-2 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={
                "rounded-full px-4 py-2 text-sm transition-colors " +
                (isActive(l.href)
                  ? "bg-[#F0EADE] text-[var(--ink)]"
                  : "text-[var(--ink-soft)] hover:bg-[#F0EADE]")
              }
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/memberships"
            className={
              "rounded-full border border-[var(--ink)] px-4 py-2 text-sm transition-colors " +
              (isActive("/memberships")
                ? "bg-[var(--ink)] text-[var(--bone)]"
                : "text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--bone)]")
            }
          >
            Subscriptions
          </Link>
          <Link
            href="/shop"
            className="rounded-full bg-[var(--ink)] px-5 py-2 text-sm text-[var(--bone)] transition-opacity hover:opacity-90"
          >
            Shop
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-[var(--line)] px-3 py-2 text-sm text-[var(--ink)] md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-[var(--line)] bg-[var(--bone)] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {[...links, { href: "/memberships", label: "Subscriptions" }, { href: "/shop", label: "Shop" }].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={
                  "rounded-full px-4 py-2.5 text-sm transition-colors " +
                  (isActive(l.href)
                    ? "bg-[#F0EADE] text-[var(--ink)]"
                    : "text-[var(--ink-soft)] hover:bg-[#F0EADE]")
                }
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
