"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";
import { CheckCircle, Star, ChevronLeft, ChevronRight } from "lucide-react";

const beforeAfterProjects = [
  {
    id: 1,
    title: "Tree Removal Project",
    before: "/services/treeRemoval1before.jpg",
    after: "/services/treeRemoval1after.jpg",
    clientName: "Sarah M.",
    praise:
      "Amazing transformation! They removed our dangerous oak tree safely and left the yard spotless.",
    rating: 5,
  },
  {
    id: 2,
    title: "Tree Trimming & Pruning",
    before: "/services/triming-bfore-1.jpg",
    after: "/services/triming-after-1.jpg",
    clientName: "John D.",
    praise:
      "Professional work! Our trees look beautiful and healthy after their expert pruning.",
    rating: 5,
  },
  {
    id: 3,
    title: "Land Clearing",
    before: "/services/land-clearing-before.jpg",
    after: "/services/land-clearing-after.jpg",
    clientName: "Mike R.",
    praise:
      "Cleared our lot perfectly for new construction. Fast, efficient, and eco-friendly!",
    rating: 5,
  },
  {
    id: 4,
    title: "Wood Chip Delivery",
    before: "/services/Wood Chips-before.jpg",
    after: "/services/Wood-Chips-after.jpg",
    clientName: "Emma L.",
    praise:
      "Free mulch delivery was fantastic! Saved us money and helped our garden thrive.",
    rating: 5,
  },
];

const services = [
  {
    title: "Tree Removal",
    image: "/services/treeRemoval1after.jpg",
    description:
      "Safe, efficient removal of hazardous or unwanted trees. Our certified arborists ensure minimal impact to your property while maximizing safety.",
    benefits: [
      "Protect your home from falling branches",
      "Increase property value and curb appeal",
      "Create space for new landscaping",
      "Eliminate safety hazards",
    ],
  },
  {
    title: "Trimming & Pruning",
    image: "/services/triming-after-1.jpg",
    description:
      "Expert pruning techniques that promote healthy growth while maintaining your tree's natural beauty. Regular trimming prevents disease and extends tree life.",
    benefits: [
      "Enhance tree health and longevity",
      "Improve property aesthetics",
      "Prevent storm damage",
      "Increase sunlight to your lawn",
    ],
  },
  {
    title: "Land Clearing",
    image: "/services/land-clearing-after.jpg",
    description:
      "Comprehensive land clearing for construction, agriculture, or fire prevention. We handle projects of all sizes with precision and environmental consciousness.",
    benefits: [
      "Prepare land for new construction",
      "Create defensible space for fire safety",
      "Improve property accessibility",
      "Maximize usable land area",
    ],
  },
  {
    title: "Stump Grinding",
    image: "/services/stump-grinding.jpg",
    description:
      "Complete stump removal below ground level, eliminating trip hazards and eyesores. Our equipment grinds stumps into mulch you can use in your garden.",
    benefits: [
      "Eliminate tripping hazards",
      "Prevent pest infestations",
      "Reclaim yard space",
      "Free organic mulch for your garden",
    ],
  },
  {
    title: "Storm Cleanup",
    image: "/services/storm-cleanup.jpg",
    description:
      "24/7 emergency response for storm-damaged trees. We quickly clear fallen trees and branches to restore safety and access to your property.",
    benefits: [
      "24/7 emergency availability",
      "Fast response times",
      "Insurance claim assistance",
      "Complete debris removal",
    ],
  },
  {
    title: "Wood Chips / Mulch Delivery",
    image: "/services/Wood-Chips-after.jpg",
    description:
      "Free or low-cost delivery of fresh wood chips from our tree services. Perfect for mulching gardens, paths, and landscaping projects.",
    benefits: [
      "Free or low-cost mulch",
      "Suppress weeds naturally",
      "Retain soil moisture",
      "Reduce landfill waste",
    ],
  },
  {
    title: "Sustainable Practices",
    image: "/services/sustainable.jpg",
    description:
      "Zero-waste approach to tree care. We compost, chip, and repurpose all organic material, contributing to a healthier ecosystem.",
    benefits: [
      "Support local ecosystem health",
      "Reduce carbon footprint",
      "Create valuable compost",
      "Promote circular economy",
    ],
  },
];

// Component for automatic before/after slider
function BeforeAfterSlider({ project }) {
  const [showAfter, setShowAfter] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAfter((prev) => !prev);
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-64 w-full">
      <Image
        src={showAfter ? project.after : project.before}
        alt={`${project.title} - ${showAfter ? "After" : "Before"}`}
        width={400}
        height={300}
        className="object-cover w-full h-full transition-opacity duration-1000"
      />
      <div className="absolute top-2 left-2 bg-black/70 text-white px-3 py-1 rounded-md text-sm font-semibold">
        {showAfter ? "AFTER" : "BEFORE"}
      </div>
    </div>
  );
}

// Component for star rating
function StarRating({ count }) {
  return (
    <div className="flex justify-center gap-1">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
      ))}
    </div>
  );
}

export default function ServicesPage() {
  return (
    // Primary page background
    <div className="bg-[#FAF5E9]">
      {/* Hero Section */}
      <section className="relative py-16 bg-[#FCEECF] text-[#114524]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Professional tree care services tailored to your needs. Every job is
            completed with attention to safety, environmental impact, and your
            complete satisfaction.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-moss-200"
              >
                <div className="grid md:grid-cols-2 h-full">
                  {/* Image */}
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={300}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-6 bg-white">
                    <h3 className="text-2xl font-bold text-moss-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-moss-700 mb-4">{service.description}</p>
                    <div className="space-y-2">
                      <p className="font-semibold text-forest-700 mb-2">
                        Benefits for you:
                      </p>
                      {service.benefits.map((b, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-forest-600 mt-0.5" />
                          <span className="text-sm text-moss-600">{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Gallery */}
      <section className="py-20 bg-[#FCEECF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-moss-900 mb-4">
              Project Highlights
            </h2>
            <p className="text-lg text-moss-600 max-w-2xl mx-auto">
              See the transformation our professional tree services can achieve
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beforeAfterProjects.map((proj) => (
              <div
                key={proj.id}
                className="group relative rounded-lg shadow-lg overflow-hidden bg-white"
              >
                {/* Slider */}
                <BeforeAfterSlider project={proj} />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="text-white p-6 w-full">
                    <StarRating count={proj.rating} />
                    <h3 className="font-bold text-lg mt-2">{proj.title}</h3>
                    <p className="text-sm italic mt-2">"{proj.praise}"</p>
                    <p className="text-sm mt-1">- {proj.clientName}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-moss-900 mb-4">
              Ready to discuss your tree care needs?
            </h3>
            <p className="text-moss-600 mb-6">
              Get a free estimate for any of our services. We'll assess your
              needs and provide a detailed quote.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 text-base font-medium rounded-md text-white bg-yellow-400 hover:bg-yellow-500 transition-colors"
            >
              Get Your Free Estimate
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
