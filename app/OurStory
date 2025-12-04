'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function OurStoryPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-light tracking-wider text-gray-900">FLOWER DOUGH</span>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-10">
              <Link href="/" className="text-sm tracking-wide text-gray-600 hover:text-gray-900 transition">HOME</Link>
              <Link href="/our-story" className="text-sm tracking-wide text-gray-900 border-b-2 border-gray-900 pb-1">OUR STORY</Link>
              <Link href="/shop" className="text-sm tracking-wide text-gray-600 hover:text-gray-900 transition">SHOP</Link>
              <Link href="/memberships" className="text-sm tracking-wide text-gray-600 hover:text-gray-900 transition">MEMBERSHIPS</Link>
              <Link href="/contact" className="text-sm tracking-wide text-gray-600 hover:text-gray-900 transition">CONTACT</Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-6 space-y-4">
              <Link href="/" className="block text-sm tracking-wide text-gray-600">HOME</Link>
              <Link href="/our-story" className="block text-sm tracking-wide text-gray-900">OUR STORY</Link>
              <Link href="/shop" className="block text-sm tracking-wide text-gray-600">SHOP</Link>
              <Link href="/memberships" className="block text-sm tracking-wide text-gray-600">MEMBERSHIPS</Link>
              <Link href="/contact" className="block text-sm tracking-wide text-gray-600">CONTACT</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">Our Story</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            A passion for traditional baking and authentic, naturally-leavened bread
          </p>
        </div>
      </section>

      {/* Story Content */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556909190-d1d82d2562d2?w=700&h=700&fit=crop"
                alt="Baking"
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-light text-gray-900">The Beginning</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  What started as weekend experiments in our home kitchen has grown into a full-fledged passion for bringing authentic sourdough to our community. We believe bread should be simple, honest, and made with care.
                </p>
                <p>
                  After years of perfecting our craft and sharing loaves with friends and family, we decided to make Flower Dough our life's work. Every loaf we bake carries the same dedication and love that went into those first experimental batches.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 md:order-2">
              <h2 className="text-3xl font-light text-gray-900">Our Philosophy</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  We use only three ingredients: organic flour, filtered water, and sea salt. Our wild yeast starter has been cultivated over years, creating bread that's not only delicious but naturally easier to digest.
                </p>
                <p>
                  Each loaf undergoes a 48-hour fermentation process, shaped by hand, and baked in small batches. We never rush the process because we believe the best bread can't be hurried.
                </p>
                <p>
                  This slow, traditional approach results in bread with complex flavor, better nutrition, and a crust and crumb that simply can't be replicated by modern shortcuts.
                </p>
              </div>
            </div>
            <div className="md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=700&h=700&fit=crop"
                alt="Fresh bread"
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm tracking-wider text-gray-900 mb-2">FLOWER DOUGH</p>
          <p className="text-sm text-gray-500">© 2024 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
