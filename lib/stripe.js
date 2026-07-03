import Stripe from "stripe";

// Server-only Stripe client. STRIPE_SECRET_KEY lives in your env
// (.env.local locally, Vercel settings in prod) — never commit it.
//
// The client is created lazily on first use so that importing this module
// (which Next.js does while collecting page data at build time) doesn't throw
// before the secret key is set. Real requests still use the live key.
let _stripe;

function getStripe() {
  if (!_stripe) {
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  }
  return _stripe;
}

export const stripe = new Proxy(
  {},
  {
    get(_target, prop) {
      const client = getStripe();
      const value = client[prop];
      return typeof value === "function" ? value.bind(client) : value;
    },
  }
);
