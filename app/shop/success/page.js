export const metadata = { title: "Order confirmed — FlowerDough" };

export default function SuccessPage() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-6 text-center">
      <div className="seal mb-8 h-20 w-20">Baked<br />fresh</div>
      <h1 className="font-display text-5xl">Thank you.</h1>
      <p className="mt-4 text-[var(--ink-soft)]">
        Your order's in — we'll be in touch with delivery details. If you
        subscribed, you can pause or cancel anytime from your confirmation email.
      </p>
      <a href="/shop" className="btn-outline mt-8">Back to the shop</a>
    </main>
  );
}
