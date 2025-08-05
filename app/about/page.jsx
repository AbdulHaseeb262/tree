"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { TreePine, Heart, Shield, Users } from "lucide-react";

const values = [
  {
    icon: TreePine,
    title: "Environmental Stewardship",
    description:
      "We believe in caring for the land and preserving our natural heritage for future generations.",
  },
  {
    icon: Heart,
    title: "Intentional Labor",
    description:
      "Every cut, every decision is made with purpose and care, respecting both the trees and the communities we serve.",
  },
  {
    icon: Shield,
    title: "Safety & Excellence",
    description:
      "We maintain the highest standards of safety and professionalism in all our work.",
  },
  {
    icon: Users,
    title: "Community Connection",
    description:
      "As a family-owned business, we're deeply rooted in our community and committed to its wellbeing.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#FAF5E9]">
      {/* Hero Section (primary bg) */}
      <section className="relative py-20 bg-[#FCEECF] text-[#114524]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            About Landsynergy Tree Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Professional tree services rooted in care, intentionality, and deep
            respect for the land
          </p>
        </div>
      </section>

      {/* Story Section (secondary bg) */}
      <section className="py-20 bg-[#FCEECF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#14442D] mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-[#14442D]">
                <p>
                  Landsynergy Tree Services was born from a deep connection to
                  the land and a vision for sustainable tree care. Founded by
                  Leo and his family, our company emerged from years of
                  experience working on the family farm and a genuine passion
                  for arboriculture.
                </p>
                <p>
                  What started as helping neighbors with their tree care needs
                  has grown into a full-service tree company that maintains the
                  same values we began with: respect for the land, commitment to
                  safety, and dedication to our community.
                </p>
                <p>
                  Our name, Landsynergy, reflects our belief that proper tree
                  care creates a harmonious relationship between people and the
                  natural world. Every service we provide is designed to enhance
                  this synergy, ensuring healthy trees, safe properties, and
                  thriving ecosystems.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-forest-600 bg-opacity-20"></div>
              <Image
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070"
                alt="Tree care professional at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section (secondary bg) */}
      <section className="py-20 bg-[#FCEECF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#14442D] mb-4">
              Our Values
            </h2>
            <p className="text-lg text-[#5a5a5a] max-w-2xl mx-auto">
              These core principles guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <Card key={idx} className="border-[#14442D]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Icon className="h-12 w-12 text-yellow-400" />
                      <div>
                        <h3 className="text-xl font-semibold text-[#14442D] mb-2">
                          {value.title}
                        </h3>
                        <p className="text-[#5a5a5a]">{value.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section (primary bg) */}
      <section className="py-20 bg-[#FAF5E9] text-[#114524]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed">
            To provide exceptional tree care services that honor the natural
            world while meeting the practical needs of our clients. We strive to
            be stewards of the land, educators in our community, and leaders in
            sustainable arboriculture practices.
          </p>
          <button className="mt-8 inline-flex items-center bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-500 transition">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
}
