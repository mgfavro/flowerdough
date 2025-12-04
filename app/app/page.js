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
              {mobileMenuOpen ? <X className="h-6 w-6" /> :
