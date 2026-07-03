"use client";

import { useState } from "react";
import { bagelBatches, BAGEL_FLAVORS } from "../../lib/catalog";

export default function BagelCard() {
  const [batchId, setBatchId] = useState("dozen");
  const [mode, setMode] = useState("once");
  const [flavors, setFlavors] = useState(["Everything", "Plain"]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const batch = bagelBatches.find((b) => b.id === batchId);
  const price = mode === "subscribe" ? batch.subscribeDisplay : batch.oneTimeDisplay;

  function toggleFlavor(f) {
    setFlavors((cur) => (cur.includes(f) ? cur.filter((x) => x !== f) : [...cur, f]));
  }

  async function checkout() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "bagel", batchId, mode, flavors }),
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
    <div className="card-chic overflow-hidden md:grid md:grid-cols-2">
      <div className="flex h-56 items-center justify-center bg-[var(--bone)] md:h-full">
        {/* Drop your bagel photo here */}
        <span className="eyebrow">Bagel photo</span>
      </div>

      <div className="p-7 sm:p-8">
        <p className="eyebrow">Mix &amp; match</p>
        <h2 className="font-display mt-1 text-3xl">Bagels by the batch</h2>
        <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">
          Boiled and baked fresh every morning. Choose your size, pick your
          flavors, one-time or on repeat.
        </p>

        <p className="eyebrow mt-6 mb-2">Batch size</p>
        <div className="flex gap-2">
          {bagelBatches.map((b) => {
            const active = b.id === batchId;
            return (
              <button
                key={b.id}
                onClick={() => setBatchId(b.id)}
                className={
                  "flex-1 rounded-[10px] border px-2 py-2.5 text-center transition-colors " +
                  (active
                    ? "border-[var(--ink)] bg-[var(--bone)]"
                    : "border-[var(--line)] hover:border-[var(--ink-soft)]")
                }
              >
                <span className="block text-sm">{b.label}</span>
                <span className="block text-xs text-[var(--ink-soft)]">{b.count}</span>
              </button>
            );
          })}
        </div>

        <p className="eyebrow mt-6 mb-2">Purchase type</p>
        <div className="overflow-hidden rounded-[10px] border border-[var(--line)]">
          <button
            onClick={() => setMode("once")}
            className={
              "flex w-full items-center justify-between px-4 py-3 text-left transition-colors " +
              (mode === "once" ? "bg-[var(--bone)]" : "hover:bg-[var(--bone)]")
            }
          >
            <span className="text-sm">One-time</span>
            <span className="text-sm">{batch.oneTimeDisplay}</span>
          </button>
          <div className="h-px bg-[var(--line)]" />
          <button
            onClick={() => setMode("subscribe")}
            className={
              "flex w-full items-center justify-between px-4 py-3 text-left transition-colors " +
              (mode === "subscribe" ? "bg-[var(--bone)]" : "hover:bg-[var(--bone)]")
            }
          >
            <span className="flex items-center gap-2 text-sm">
              Subscribe <span className="tag-save">Save 15%</span>
            </span>
            <span className="text-sm">
              {batch.subscribeDisplay}
              <span className="text-[var(--ink-soft)]"> / wk</span>
            </span>
          </button>
        </div>

        <p className="eyebrow mt-6 mb-2">Flavors</p>
        <div className="flex flex-wrap gap-2">
          {BAGEL_FLAVORS.map((f) => {
            const active = flavors.includes(f);
            return (
              <button
                key={f}
                onClick={() => toggleFlavor(f)}
                className={
                  "rounded-full border px-3 py-1.5 text-xs transition-colors " +
                  (active
                    ? "border-[var(--ochre)] bg-[var(--ochre)] text-[#3A2812]"
                    : "border-[var(--line)] text-[var(--ink-soft)] hover:border-[var(--ink-soft)]")
                }
              >
                {f}
              </button>
            );
          })}
        </div>

        <div className="mt-7 flex items-center justify-between">
          <div>
            <span className="font-display text-3xl">{price}</span>
            {mode === "subscribe" && (
              <span className="text-sm text-[var(--ink-soft)]"> / week</span>
            )}
          </div>
          <button onClick={checkout} disabled={loading} className="btn-primary disabled:opacity-60">
            {loading ? "Starting checkout…" : mode === "subscribe" ? "Subscribe" : "Add to basket"}
          </button>
        </div>

        {error && <p className="mt-3 text-sm text-[var(--clay-deep)]">{error}</p>}
      </div>
    </div>
  );
}
