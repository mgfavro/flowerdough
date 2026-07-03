import BagelCard from "./BagelCard";
import BreadCard from "./BreadCard";
import { breads } from "../../lib/catalog";

export const metadata = {
  title: "Shop — FlowerDough",
  description:
    "Small-batch sourdough bagels and bread, baked fresh. One-time or by subscription.",
};

export default function ShopPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <header className="max-w-2xl">
        <p className="eyebrow">The bakery</p>
        <h1 className="font-display mt-2 text-5xl leading-[1.02] sm:text-6xl">
          Shop the bake<span className="italic text-[var(--ink-soft)]">, fresh daily.</span>
        </h1>
        <p className="mt-4 text-[var(--ink-soft)]">
          Everything's boiled or baked the morning it goes out. Order once, or set
          it and forget it with a weekly subscription.
        </p>
      </header>

      <section className="mt-14" aria-labelledby="bagels">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 id="bagels" className="font-display text-3xl">Sourdough bagels</h2>
          <span className="text-sm text-[var(--ink-soft)]">Mix &amp; match, 6–13</span>
        </div>
        <BagelCard />
      </section>

      <section className="mt-16" aria-labelledby="bread">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 id="bread" className="font-display text-3xl">Bread</h2>
          <span className="text-sm text-[var(--ink-soft)]">Baked to order</span>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {breads.map((b) => (
            <BreadCard key={b.id} bread={b} />
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-[12px] bg-[var(--ink)] px-8 py-12 text-center text-[var(--bone)]">
        <p className="eyebrow" style={{ color: "#D8C08A" }}>Never run out</p>
        <h2 className="font-display mt-2 text-4xl text-[var(--bone)]">
          Bread &amp; bagels, delivered weekly
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-[#C9C1B3]">
          The Farmhouse Box pairs a loaf with a half dozen bagels every week — our
          best value, on your doorstep.
        </p>
        <a href="/memberships" className="btn-primary mt-7 bg-[var(--ochre)] text-[#3A2812] hover:opacity-90">
          See subscriptions
        </a>
      </section>
    </main>
  );
}
