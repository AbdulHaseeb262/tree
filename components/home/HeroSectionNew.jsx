'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Twitter, Facebook, Linkedin } from 'lucide-react'
import Image from 'next/image'

export default function HeroSectionNew() {
  return (
    <section className="relative min-h-[90vh] bg-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-20 animate-fade-up">
            <p className="text-primary font-medium mb-2 animate-slide-in-left">
              No 1# Tree Services Company.
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6 leading-tight">
              We're Growing Better 
              <span className="text-secondary"> Neighborhood</span> One
              <br />
              Tree At A Time
            </h1>
            
            <p className="text-lg text-gray-700 mb-8 max-w-xl">
              Whether you need routine maintenance or urgent tree removal, 
              our team delivers fast, affordable, and professional solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-highlight text-primary px-8 py-6 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all"
                >
                  Schedule Your Service
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-12">
              <a href="#" className="text-primary hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Tree Image in Leaf Shape */}
          <div className="relative animate-scale-in">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Leaf shape container */}
              <div className="relative aspect-square overflow-hidden" 
                style={{
                  maskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 5 Q20 20 15 50 Q20 80 50 95 Q80 80 85 50 Q80 20 50 5' fill='black'/%3E%3C/svg%3E")`,
                  WebkitMaskImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 5 Q20 20 15 50 Q20 80 50 95 Q80 80 85 50 Q80 20 50 5' fill='black'/%3E%3C/svg%3E")`,
                  maskSize: 'cover',
                  WebkitMaskSize: 'cover',
                }}>
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070"
                  alt="Professional tree service"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative leaves */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/20 rounded-full animate-float" />
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-accent/20 rounded-full animate-float-delayed" />
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M50 5 Q20 20 15 50 Q20 80 50 95 Q80 80 85 50 Q80 20 50 5" 
            fill="currentColor" 
            className="text-primary" />
        </svg>
      </div>
    </section>
  )
}
