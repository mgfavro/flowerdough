'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function HomePage() {
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
              <Link href="/" className="text-sm tracking-wide text-gray-900 border-b-2 border-gray-900 pb-1">HOME</Link>
              <Link href="/our-story" className="text-sm tracking-wide text-gray-600 hover:text-gray-900 transition">OUR STORY</Link>
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
              <Link href="/" className="block text-sm tracking-wide text-gray-900">HOME</Link>
              <Link href="/our-story" className="block text-sm tracking-wide text-gray-600">OUR STORY</Link>
              <Link href="/shop" className="block text-sm tracking-wide text-gray-600">SHOP</Link>
              <Link href="/memberships" className="block text-sm tracking-wide text-gray-600">MEMBERSHIPS</Link>
              <Link href="/contact" className="block text-sm tracking-wide text-gray-600">CONTACT</Link>
            </div>
          )}
        </div>
      </nav>

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
