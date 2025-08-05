'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Leaf } from 'lucide-react'

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact-form')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-cream">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(47, 56, 39, 0.7), rgba(56, 132, 66, 0.8)), url('https://images.unsplash.com/photo-1609762372824-4ffc9fb07c04?q=80&w=2070')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Floating leaves animation */}
      <div className="absolute inset-0 z-10">
        <Leaf className="absolute top-20 left-10 w-8 h-8 text-forest-300/30 animate-float" />
        <Leaf className="absolute top-40 right-20 w-6 h-6 text-forest-300/20 animate-float-delayed" />
        <Leaf className="absolute bottom-32 left-1/4 w-10 h-10 text-forest-300/25 animate-float" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Tree Work with Purpose.
          <span className="block text-forest-300">Stewardship You Can Trust.</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-sand-100 mb-8 max-w-3xl mx-auto">
          Professional tree services rooted in care, safety, and sustainability. 
          We treat every tree and every property with the respect it deserves.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-forest-600 hover:bg-forest-700 text-white px-8 py-6 text-lg"
            onClick={scrollToContact}
          >
            Get a Free Estimate
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <Link href="/services">
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-forest-700 px-8 py-6 text-lg"
            >
              View Our Services
            </Button>
          </Link>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="var(--background)"/>
        </svg>
      </div>
    </section>
  )
}
