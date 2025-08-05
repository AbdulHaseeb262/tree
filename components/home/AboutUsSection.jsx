'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

function CountUpAnimation({ end, duration = 2000, suffix = '' }) {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime
    let animationFrame

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = (timestamp - startTime) / duration

      if (progress < 1) {
        setCount(Math.floor(end * progress))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration, isVisible])

  return (
    <span ref={countRef}>
      {count}{suffix}
    </span>
  )
}

export default function AboutUsSection() {
  const stats = [
    { value: 10, suffix: '+', label: 'Years of Experience' },
    { value: 90, suffix: '%', label: 'Clients Come From Referrals' },
    { value: 24, suffix: '/7', label: 'Emergency Tree Service' },
    { value: 100, suffix: '%', label: 'Customer Satisfaction' },
  ]

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-up">
            <p className="text-secondary font-medium mb-2 text-lg">About Us</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
              Locally Owned Professionally Trained. Passionately Driven.
            </h2>
            <p className="text-gray-700 mb-8 text-lg">
              At the heart of our work is a passion for healthy trees and happy customers. 
              Locally owned and operated, we've built a reputation for delivering top-quality 
              tree care with integrity and expertise.
            </p>
            <Link href="/about">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-highlight text-primary px-8 py-6 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all"
              >
                See The Difference
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative animate-scale-in">
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1502810365585-56ffa361fdde?q=80&w=2070"
                alt="Team planting trees"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">
                <CountUpAnimation 
                  end={stat.value} 
                  suffix={stat.suffix}
                  duration={2000}
                />
              </div>
              <p className="text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
