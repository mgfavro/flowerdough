"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const mainLinks = [
  { href: "/", label: "Home" },
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

  const pill = (href) =>
    "rounded-full px-4 py-2 text-sm transition-colors " +
    (isActive(href)
      ? "bg-[#F0EADE] text-[var(--ink)]"
      : "text-[var(--ink-soft)] hover:bg-[#F0EADE]");

  return (
    <header
      className={
        "sticky top-0 z-50 border-b bg-[var(--bone)] transition-shadow " +
        (scrolled ? "border-[var(--line)] shadow-sm" : "border-transparent")
      }
    >
      <nav className="mx-auto flex max-w-5xl items-center gap-4 px-6 py-3">
        <Link href="/" className="font-display text-2xl text-[var(--ink)]">
          FlowerDough
        </Link>

        {/* Main pills */}
        <div className="hidden items-center gap-2 md:flex">
          {mainLinks.map((l) => (
            <Link key={l.href} href={l.href} className={pill(l.href)}>
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

        {/* Contact — far right, separated by a divider */}
        <Link
          href="/contact"
          className={"ml-auto hidden border-l border-[var(--line)] pl-4 md:block " + pill("/contact")}
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
          <div className="flex flex-col gap-1">
            {mainLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className={pill(l.href)}>
                {l.label}
              </Link>
            ))}
            <Link href="/memberships" onClick={() => setOpen(false)} className={pill("/memberships")}>
              Subscriptions
            </Link>
            <Link href="/shop" onClick={() => setOpen(false)} className={pill("/shop")}>
              Shop
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className={"mt-1 border-t border-[var(--line)] pt-3 " + pill("/contact")}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
