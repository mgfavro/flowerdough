'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function ShopPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const breads = [
    {
      name: "Classic Sourdough",
      description: "Our signature loaf with a crispy crust and tangy flavor. Perfect for sandwiches or toast.",
      price: "$8",
      image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600&h=600&fit=crop"
    },
    {
      name: "Whole Wheat",
      description: "Hearty and nutritious with a perfect chewy texture. Made with 100% organic whole wheat flour.",
      price: "$9",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=600&fit=crop"
    },
    {
      name: "Seeded Multigrain",
      description: "Packed with sunflower, sesame, and flax seeds. A nutrient-dense option with incredible texture.",
      price: "$10",
      image: "https://images.unsplash.com/photo-1585478259715-876acc5be8eb?w=600&h=600&fit=crop"
    },
    {
      name: "Olive & Rosemary",
      description: "Mediterranean-inspired with kalamata olives and fresh rosemary. A sophisticated flavor profile.",
      price: "$11",
      image: "https://images.unsplash.com/photo-1590005024862-6b67679a7c39?w=600&h=600&fit=crop"
    },
    {
      name: "Cranberry Walnut",
      description: "Sweet and nutty with dried cranberries and toasted walnuts. Perfect with cheese or butter.",
      price: "$11",
      image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600&h=600&fit=crop"
    },
    {
      name: "Everything Sourdough",
      description: "Topped with sesame, poppy seeds, garlic, onion, and sea salt. A crowd favorite.",
      price: "$10",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=600&fit=crop"
    }
  ];

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
              <Link href="/our-story" className="text-sm tracking-wide text-gray-600 hover:text-gray-900 transition">OUR STORY</Link>
              <Link href="/shop" className="text-sm tracking-wide text-gray-900 border-b-2 border-gray-900 pb-1">SHOP</Link>
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
              <Link href="/our-story" className="block text-sm tracking-wide text-gray-600">OUR STORY</Link>
              <Link href="/shop" className="block text-sm tracking-wide text-gray-900">SHOP</Link>
              <Link href="/memberships" className="block text-sm tracking-wide text-gray-600">MEMBERSHIPS</Link>
              <Link href="/contact" className="block text-sm tracking-wide text-gray-600">CONTACT</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">Shop</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            All breads are baked fresh daily and available for pickup or local delivery
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {breads.map((bread, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden mb-6 bg-white">
                  <img 
                    src={bread.image} 
                    alt={bread.name}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-light text-gray-900">{bread.name}</h3>
                    <span className="text-lg text-gray-900">{bread.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{bread.description}</p>
                  <button className="inline-flex items-center text-sm tracking-wide text-gray-900 border-b border-gray-300 pb-1 hover:border-gray-900 transition">
                    ORDER NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-gray-900 mb-6">How to Order</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Orders must be placed by 8pm the day before pickup. We bake fresh every morning and breads are ready for pickup starting at 2pm.
            </p>
            <p>
              Local delivery is available within 5 miles for orders over $20. Contact us for delivery scheduling.
            </p>
          </div>
          <Link 
            href="/contact"
            className="inline-flex items-center text-sm tracking-wide text-gray-900 border-b-2 border-gray-900 pb-1 hover:border-gray-600 transition mt-8"
          >
            CONTACT US TO ORDER
          </Link>
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
