import { NextResponse } from "next/server";
import { stripe } from "../../../lib/stripe";
import { bagelBatches, breads, tiers } from "../../../lib/catalog";

export const runtime = "nodejs"; // Stripe needs Node, not Edge

export async function POST(req) {
  try {
    const body = await req.json();
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? new URL(req.url).origin;

    let priceId;
    let mode = "payment";
    let quantity = 1;
    const metadata = {};

    // Resolve everything server-side from the catalog — never trust the
    // client for prices or amounts.
    if (body.type === "bagel") {
      const batch = bagelBatches.find((b) => b.id === body.batchId);
      if (!batch) return NextResponse.json({ error: "Unknown batch" }, { status: 400 });
      if (body.mode === "subscribe") {
        priceId = batch.subscriptionPriceId;
        mode = "subscription";
      } else {
        priceId = batch.oneTimePriceId;
        mode = "payment";
      }
      metadata.item = `Bagels — ${batch.label}`;
      if (body.flavors?.length) metadata.flavors = body.flavors.join(", ");
    } else if (body.type === "bread") {
      const bread = breads.find((b) => b.id === body.breadId);
      if (!bread) return NextResponse.json({ error: "Unknown bread" }, { status: 400 });
      priceId = bread.oneTimePriceId;
      mode = "payment";
      quantity = Math.min(Math.max(body.quantity ?? 1, 1), 12);
      metadata.item = bread.name;
    } else if (body.type === "tier") {
      const tier = tiers.find((t) => t.id === body.tierId);
      if (!tier) return NextResponse.json({ error: "Unknown tier" }, { status: 400 });
      priceId = tier.priceId;
      mode = "subscription";
      metadata.item = tier.name;
    } else {
      return NextResponse.json({ error: "Unknown request" }, { status: 400 });
    }

    if (!priceId || priceId.includes("REPLACE")) {
      return NextResponse.json(
        { error: "This item isn't connected to Stripe yet. Add its price ID in lib/catalog.js." },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode,
      line_items: [{ price: priceId, quantity }],
      success_url: `${siteUrl}/shop/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/shop`,
      allow_promotion_codes: true,
      phone_number_collection: { enabled: true },
      shipping_address_collection: { allowed_countries: ["US"] },
      metadata,
      ...(mode === "subscription" ? { subscription_data: { metadata } } : {}),
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Checkout error:", err);
    return NextResponse.json({ error: "Could not start checkout." }, { status: 500 });
  }
}
