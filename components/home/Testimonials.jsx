"use client";
import React from "react";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, MapPin } from "lucide-react";

const testimonials = [
  {
    name: "Rhonda Rhodes",
    role: "Landscape Designer",
    rating: 5,
    text: "They helped diagnose & treat disease in two of our oldest trees and saved them. The team clearly knows what they’re doing and cares.",
    summary: "Exceptional service from start to finish",
    address: "467 Stutler Lane, Altoona, PA 16602",
  },
  {
    name: "Katie Sims",
    role: "Property Manager",
    rating: 5,
    text: "The crew arrived time explained everything clearly, & left my yard looking better than it started. The price was fair, and the quality.",
    summary: "Professional, friendly, and fast",
    address: "1406 Mattson Street, Astoria, OR 97103",
  },
  {
    name: "Samuel Jones",
    role: "Homeowner",
    rating: 5,
    text: "Prompt and efficient tree removal service after last winter’s storm—the best service we’ve had!",
    summary: "Highly recommended for emergencies",
    address: "52 Elm Drive, Woodland, TX 77220",
  },
  {
    name: "Miriam Patel",
    role: "Garden Enthusiast",
    rating: 5,
    text: "Their selective pruning really improved the look and health of our property’s old oaks. Friendly crew, too!",
    summary: "Looks better than ever!",
    address: "302 Garden Way, Springhill, VA 20121",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const display = testimonials.slice(index, index + 2);
  const prev = () =>
    setIndex((idx) => (idx === 0 ? testimonials.length - 2 : idx - 1));
  const next = () =>
    setIndex((idx) => (idx + 2 >= testimonials.length ? 0 : idx + 1));
  // Auto slide
  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((idx) => (idx + 2 >= testimonials.length ? 0 : idx + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex flex-col items-center justify-center gap-y-0.5 mb-3">
            <span className="flex items-center text-[15px] text-[#41513a] font-semibold">
              <span className="mr-2 inline-block h-3 w-3 rounded-full bg-secondary"></span>
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-normal text-primary font-serif mb-4">
            What Our Customers Are Saying
          </h2>
        </div>

        <div className="flex items-center gap-6 justify-center max-w-5xl mx-auto">
          {/* Left Arrow */}
          <button
            className="rounded-full bg-[#f9f4e0] flex items-center justify-center w-10 h-10 hover:bg-secondary/20 transition"
            aria-label="prev"
            onClick={prev}
          >
            <ChevronLeft className="text-highlight w-6 h-6" />
          </button>

          {/* Cards (2 up at a time) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
            {display.map((t, i) => (
              <div
                key={i}
                className="bg-[#fff8e4] rounded-xl shadow px-7 py-7 text-primary flex flex-col gap-4 min-h-[300px] border border-[#f4eac1]"
              >
                <div className="flex items-center gap-x-2 mb-1">
                  <span className="font-bold font-serif text-lg text-primary">
                    {t.name}
                  </span>
                  <span className="ml-2 text-sm font-medium text-accent">
                    {t.role}
                  </span>
                  <span className="flex ml-auto">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star
                        key={idx}
                        className="w-4 h-4 inline-block text-secondary fill-secondary"
                      />
                    ))}
                  </span>
                </div>
                <div className="text-primary text-base leading-7 mb-2">
                  “{t.text}”
                </div>
                <div className="flex flex-col gap-2 mt-2">
                  <span className="text-primary font-semibold text-sm border-b border-[#e9dfbb] pb-1">
                    {t.summary}
                  </span>
                  <div className="flex items-center gap-2 text-accent text-xs">
                    <MapPin className="w-4 h-4" />
                    <span>{t.address}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className="rounded-full bg-[#f9f4e0] flex items-center justify-center w-10 h-10 hover:bg-secondary/20 transition"
            aria-label="next"
            onClick={next}
          >
            <ChevronRight className="text-highlight w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
