import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
          <div className="max-w-2xl">
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6 leading-tight">
              Artisan Sourdough<br />Baked Daily
            </h1>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Traditional, naturally-leavened bread crafted with time-honored techniques and the finest organic ingredients.
            </p>
            <Link 
              href="/shop" 
              className="inline-flex items-center text-sm tracking-wide text-gray-900 border-b-2 border-gray-900 pb-1 hover:border-gray-600 transition group"
            >
              EXPLORE OUR BREADS
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <img 
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&h=600&fit=crop"
            alt="Artisan bread"
            className="w-full h-96 object-cover"
          />
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <Link href="/shop" className="group">
              <div className="mb-6 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=400&fit=crop"
                  alt="Shop"
                  className="w-full aspect-square object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-2">Shop</h3>
              <p className="text-gray-600 text-sm mb-4">Browse our daily selection of handcrafted sourdough</p>
              <span className="inline-flex items-center text-sm tracking-wide text-gray-900 border-b border-gray-300 group-hover:border-gray-900 pb-1 transition">
                SHOP NOW
                <ChevronRight className="ml-2 h-4 w-4" />
              </span>
            </Link>

            <Link href="/memberships" className="group">
              <div className="mb-6 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop"
                  alt="Memberships"
                  className="w-full aspect-square object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-2">Memberships</h3>
              <p className="text-gray-600 text-sm mb-4">Weekly or monthly bread delivery subscriptions</p>
              <span className="inline-flex items-center text-sm tracking-wide text-gray-900 border-b border-gray-300 group-hover:border-gray-900 pb-1 transition">
                LEARN MORE
                <ChevronRight className="ml-2 h-4 w-4" />
              </span>
            </Link>

            <Link href="/our-story" className="group">
              <div className="mb-6 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556909190-d1d82d2562d2?w=400&h=400&fit=crop"
                  alt="Our Story"
                  className="w-full aspect-square object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <h3 className="text-xl font-light text-gray-900 mb-2">Our Story</h3>
              <p className="text-gray-600 text-sm mb-4">Learn about our passion for traditional baking</p>
              <span className="inline-flex items-center text-sm tracking-wide text-gray-900 border-b border-gray-300 group-hover:border-gray-900 pb-1 transition">
                READ MORE
                <ChevronRight className="ml-2 h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
