'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail, Instagram, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
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
              <Link href="/our-story" className="text-sm tracking-wide text-gray-600 hover:text-gray-900 transition">OUR STORY</Link>
              <Link href="/shop" className="text-sm tracking-wide text-gray-600 hover:text-gray-900 transition">SHOP</Link>
              <Link href="/memberships" className="text-sm tracking-wide text-gray-600 hover:text-gray-900 transition">MEMBERSHIPS</Link>
              <Link href="/contact" className="text-sm tracking-wide text-gray-900 border-b-2 border-gray-900 pb-1">CONTACT</Link>
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
              <Link href="/memberships" className="block text-sm tracking-wide text-gray-600">MEMBERSHIPS</Link>
              <Link href="/contact" className="block text-sm tracking-wide text-gray-900">CONTACT</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-light text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            We'd love to hear from you. Reach out to place an order or ask any questions.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div className="space-y-12">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-sm tracking-wide text-gray-500 mb-2">PHONE</h3>
                  <p className="text-gray-900">(555) 123-4567</p>
                  <p className="text-sm text-gray-600 mt-1">Monday - Saturday, 9am - 6pm</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-sm tracking-wide text-gray-500 mb-2">EMAIL</h3>
                  <p className="text-gray-900">hello@flowerdough.com</p>
                  <p className="text-sm text-gray-600 mt-1">We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center flex-shrink-0">
                  <Instagram className="h-5 w-5 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-sm tracking-wide text-gray-500 mb-2">INSTAGRAM</h3>
                  <p className="text-gray-900">@flowerdough</p>
                  <p className="text-sm text-gray-600 mt-1">Follow us for daily updates</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-sm tracking-wide text-gray-500 mb-2">LOCATION</h3>
                  <p className="text-gray-900">123 Main Street</p>
                  <p className="text-gray-900">Your City, ST 12345</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-gray-900" />
                </div>
                <div>
                  <h3 className="text-sm tracking-wide text-gray-500 mb-2">PICKUP HOURS</h3>
                  <p className="text-gray-900">Tuesday - Saturday</p>
                  <p className="text-gray-900">2pm - 6pm</p>
                  <p className="text-sm text-gray-600 mt-1">Closed Sunday & Monday</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm tracking-wide text-gray-700 mb-2">NAME</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 focus:outline-none transition"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm tracking-wide text-gray-700 mb-2">EMAIL</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 focus:outline-none transition"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm tracking-wide text-gray-700 mb-2">PHONE</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 focus:outline-none transition"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm tracking-wide text-gray-700 mb-2">MESSAGE</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="w-full px-4 py-3 border border-gray-200 focus:border-gray-900 focus:outline-none transition resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-gray-900 text-white py-4 text-sm tracking-wide hover:bg-gray-800 transition"
                >
                  SEND MESSAGE
                </button>
              </form>
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
