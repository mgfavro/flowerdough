"use client";

import { useState } from "react";

export default function TierCard({ tier }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function subscribe() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "tier", tierId: tier.id }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
      else {
        setError(data.error ?? "Something went wrong.");
        setLoading(false);
      }
    } catch {
      setError("Couldn't reach checkout. Try again.");
      setLoading(false);
    }
  }

  return (
    <div
      className={
        "card-chic flex flex-col p-8 " +
        (tier.featured ? "border-[var(--ink)] md:-my-3 md:shadow-sm" : "")
      }
    >
      {tier.featured && <span className="tag-save mb-4 self-start">Most loved</span>}
      <h3 className="font-display text-2xl">{tier.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">{tier.blurb}</p>

      <div className="mt-5 flex items-baseline gap-1.5">
        <span className="font-display text-4xl">{tier.priceDisplay}</span>
        <span className="text-sm text-[var(--ink-soft)]">{tier.cadence}</span>
      </div>

      <ul className="mt-6 space-y-2.5">
        {tier.features.map((f) => (
          <li key={f} className="flex gap-2.5 text-sm text-[var(--ink-soft)]">
            <span className="text-[var(--ochre-deep)]">—</span>
            {f}
          </li>
        ))}
      </ul>

      <button
        onClick={subscribe}
        disabled={loading}
        className={"mt-8 disabled:opacity-60 " + (tier.featured ? "btn-primary" : "btn-outline")}
      >
        {loading ? "Starting checkout…" : "Subscribe"}
      </button>

      {error && <p className="mt-3 text-sm text-[var(--clay-deep)]">{error}</p>}
    </div>
  );
}
