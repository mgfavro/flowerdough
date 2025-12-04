import React, { useState } from 'react';
import { ShoppingBag, Heart, Clock, Wheat, Mail, Phone, MapPin, Instagram, Menu, X } from 'lucide-react';

export default function SourdoughWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const breads = [
    {
      name: "Classic Sourdough",
      description: "Our signature loaf with a crispy crust and tangy flavor",
      price: "$8",
      image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=300&fit=crop"
    },
    {
      name: "Whole Wheat",
      description: "Hearty and nutritious with a perfect chewy texture",
      price: "$9",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop"
    },
    {
      name: "Seeded Multigrain",
      description: "Packed with sunflower, sesame, and flax seeds",
      price: "$10",
      image: "https://images.unsplash.com/photo-1585478259715-876acc5be8eb?w=400&h=300&fit=crop"
    },
    {
      name: "Olive & Rosemary",
      description: "Mediterranean-inspired with kalamata olives",
      price: "$11",
      image: "https://images.unsplash.com/photo-1590005024862-6b67679a7c39?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Wheat className="h-8 w-8 text-amber-700" />
              <span className="text-2xl font-bold text-amber-900">Flower Dough</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-stone-700 hover:text-amber-700 transition">Home</a>
              <a href="#breads" className="text-stone-700 hover:text-amber-700 transition">Our Breads</a>
              <a href="#about" className="text-stone-700 hover:text-amber-700 transition">About</a>
              <a href="#contact" className="text-stone-700 hover:text-amber-700 transition">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-stone-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3">
              <a href="#home" className="block text-stone-700 hover:text-amber-700">Home</a>
              <a href="#breads" className="block text-stone-700 hover:text-amber-700">Our Breads</a>
              <a href="#about" className="block text-stone-700 hover:text-amber-700">About</a>
              <a href="#contact" className="block text-stone-700 hover:text-amber-700">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&h=800&fit=crop')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Handcrafted with Love</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Traditional sourdough bread baked fresh daily using time-honored techniques
          </p>
          <a 
            href="#breads" 
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition transform hover:scale-105"
          >
            View Our Selection
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-stone-900">Made with Passion</h3>
              <p className="text-stone-600">Every loaf is crafted with care and dedication to quality</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-stone-900">Slow Fermentation</h3>
              <p className="text-stone-600">48-hour cold fermentation for maximum flavor and nutrition</p>
            </div>
            <div className="text-center">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wheat className="h-8 w-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-stone-900">Organic Ingredients</h3>
              <p className="text-stone-600">Only the finest organic flour, water, and sea salt</p>
            </div>
          </div>
        </div>
      </section>

      {/* Breads Section */}
      <section id="breads" className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">Our Daily Breads</h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Each loaf is handmade and baked to perfection in our stone oven
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {breads.map((bread, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                <img 
                  src={bread.image} 
                  alt={bread.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-stone-900 mb-2">{bread.name}</h3>
                  <p className="text-stone-600 mb-4">{bread.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-700">{bread.price}</span>
                    <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition">
                      <ShoppingBag className="h-4 w-4" />
                      <span>Order</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556909190-d1d82d2562d2?w=600&h=400&fit=crop"
                alt="Baking process"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-stone-900 mb-6">Our Story</h2>
              <p className="text-stone-600 mb-4 text-lg leading-relaxed">
                What started as a weekend hobby in our home kitchen has grown into a passion for sharing authentic, naturally-leavened bread with our community.
              </p>
              <p className="text-stone-600 mb-4 text-lg leading-relaxed">
                We use only organic flour, filtered water, and sea salt—nothing else. Our wild yeast starter has been lovingly maintained for years, creating bread that's not only delicious but easier to digest.
              </p>
              <p className="text-stone-600 text-lg leading-relaxed">
                Every loaf is shaped by hand and baked in small batches to ensure the highest quality. We believe bread should be simple, honest, and made with care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-stone-600">Place your order or reach out with questions</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Phone className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="font-bold text-stone-900 mb-2">Phone</h3>
              <p className="text-stone-600">(555) 123-4567</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Mail className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="font-bold text-stone-900 mb-2">Email</h3>
              <p className="text-stone-600">hello@flowerdough.com</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Instagram className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="font-bold text-stone-900 mb-2">Instagram</h3>
              <p className="text-stone-600">@flowerdough</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Wheat className="h-6 w-6 text-amber-500" />
            <span className="text-xl font-bold">Flower Dough</span>
          </div>
          <p className="text-stone-400 mb-4">Handcrafted bread, baked with love</p>
          <p className="text-stone-500 text-sm">© 2024 Flower Dough. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
