"use client";

import { useState } from "react";

export default function BreadCard({ bread }) {
  const [qty, setQty] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function checkout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "bread", breadId: bread.id, quantity: qty }),
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
    <div className="card-chic flex flex-col p-6">
      <div className="mb-4 flex h-40 items-center justify-center rounded-[10px] bg-[var(--bone)]">
        <span className="eyebrow">Loaf photo</span>
      </div>
      <h3 className="text-lg">{bread.name}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-[var(--ink-soft)]">{bread.blurb}</p>

      <div className="mt-auto flex items-center justify-between pt-5">
        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-full border border-[var(--line)]">
            <button
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              className="px-3 py-1 text-[var(--ink-soft)]"
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="min-w-[1.5rem] text-center text-sm">{qty}</span>
            <button
              onClick={() => setQty((q) => Math.min(12, q + 1))}
              className="px-3 py-1 text-[var(--ink-soft)]"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <span className="font-display text-2xl">{bread.priceDisplay}</span>
        </div>
        <button onClick={checkout} disabled={loading} className="btn-outline disabled:opacity-60">
          {loading ? "…" : "Add"}
        </button>
      </div>

      {error && <p className="mt-3 text-sm text-[var(--clay-deep)]">{error}</p>}
    </div>
  );
}
