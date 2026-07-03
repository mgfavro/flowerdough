import TierCard from "./TierCard";
import { tiers } from "../../lib/catalog";

export const metadata = {
  title: "Subscriptions — FlowerDough",
  description:
    "Weekly sourdough delivered. Bagels, bread, or both — pause or cancel anytime.",
};

export default function MembershipsPage() {
  // Featured tier sits in the middle on desktop for visual weight.
  const ordered = [...tiers].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
  const [featured, ...rest] = ordered;
  const display = rest.length >= 2 ? [rest[0], featured, ...rest.slice(1)] : tiers;

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <header className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">Subscriptions</p>
        <h1 className="font-display mt-2 text-5xl leading-[1.02] sm:text-6xl">
          Fresh sourdough<span className="italic text-[var(--ink-soft)]">, every week.</span>
        </h1>
        <p className="mt-4 text-[var(--ink-soft)]">
          Set your standing order and we'll handle the rest. Bagels, bread, or the
          two together — pause or cancel whenever you like.
        </p>
      </header>

      <div className="mt-14 grid gap-6 md:grid-cols-3 md:items-center">
        {display.map((t) => (
          <TierCard key={t.id} tier={t} />
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-[var(--ink-soft)]">
        Delivery is free within our local radius. Questions about your box?{" "}
        <a href="/contact" className="text-[var(--ochre-deep)] underline underline-offset-4">
          Get in touch.
        </a>
      </p>
    </main>
  );
}
