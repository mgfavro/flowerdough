'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Check } from 'lucide-react';

export default function MembershipsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const plans = [
    {
      name: "Weekly",
      price: "$28",
      frequency: "per week",
      description: "Perfect for bread lovers who want fresh sourdough throughout the week",
      features: [
        "1 loaf per week",
        "Choose from our daily selection",
        "Priority pickup times",
        "10% off additional purchases",
        "Cancel anytime"
      ]
    },
    {
      name: "Bi-Weekly",
      price: "$50",
      frequency: "per month",
      description: "Ideal for smaller households or occasional bread enthusiasts",
      features: [
        "2 loaves per month",
        "Choose from our daily selection",
        "Flexible pickup schedule",
        "10% off additional purchases",
        "Cancel anytime"
      ]
    },
    {
      name: "Monthly",
      price: "$100",
      frequency: "per month",
      description: "Our most popular plan for families and serious bread lovers",
      features: [
        "4 loaves per month",
        "Choose from our daily selection",
        "Priority pickup times",
        "15% off additional purchases",
        "Free delivery within 5 miles",
        "Cancel anytime"
      ]
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
              <Link href="/shop" className="text-sm tracking-wide text-gray-600 hover:text-gray-900 transition">SHOP</Link>
              <Link href="/memberships" className="text-sm tracking-wide text-gray-900 border-b-2 border-gray-900 pb-1">MEMBERSHIPS</Link>
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
              <Link href="/shop" className="block text-sm tracking-wide text-gray-600">SHOP</Link>
              <Link href="/memberships" className="block text-sm tracking-wide text-gray-900">MEMBERSHIPS</Link>
              <Link href="/contact" className="block text-sm tracking-wide text-gray-600">CONTACT</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">Bread Memberships</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Never run out of fresh sourdough. Choose a plan that fits your lifestyle and save on every loaf.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className="bg-gray-50 p-8 border border-gray-200">
                <div className="mb-8">
                  <h3 className="text-2xl font-light text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-light text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.frequency}</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-gray-900 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full border-2 border-gray-900 text-gray-900 py-3 text-sm tracking-wide hover:bg-gray-900 hover:text-white transition">
                  SUBSCRIBE
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-light text-gray-900 mb-2">How do memberships work?</h3>
              <p className="text-gray-600 leading-relaxed">
                Choose your plan and you'll receive your allotted loaves each week or month. You can select from our daily bread menu and schedule your pickup times in advance.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-light text-gray-900 mb-2">Can I pause or cancel my membership?</h3>
              <p className="text-gray-600 leading-relaxed">
                Yes! All memberships can be paused or cancelled at any time. Simply contact us at least 48 hours before your next scheduled pickup.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-light text-gray-900 mb-2">Can I change my bread selection each week?</h3>
              <p className="text-gray-600 leading-relaxed">
                Absolutely! You can choose different breads each time based on what we're baking that day. We'll send you our weekly menu every Monday.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-light text-gray-900 mb-2">What if I need extra bread?</h3>
              <p className="text-gray-600 leading-relaxed">
                Members receive a discount on all additional purchases beyond their membership allotment. Simply add extra loaves when you place your weekly order.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/contact"
              className="inline-flex items-center text-sm tracking-wide text-gray-900 border-b-2 border-gray-900 pb-1 hover:border-gray-600 transition"
            >
              HAVE MORE QUESTIONS? CONTACT US
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
