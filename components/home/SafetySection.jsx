"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Shield, Smile, Users } from "lucide-react";
import Image from "next/image";

const differentiators = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Our top priority is safety for our team and your property. Certified professionals with state-of-the-art equipment",
  },
  {
    icon: Smile,
    title: "Rooted in Stewardship",
    description:
      "Commitment to sustainable and ethical practices ensuring healthy trees and vibrant communities",
  },
  {
    icon: Users,
    title: "Family-Owned, Locally Grounded",
    description:
      "Serving our community with dedication and integrity rooted in family values",
  },
];

export default function SafetySection() {
  return (
    <section className="bg-[#fceecf] py-16 px-6 md:px-12 lg:flex lg:items-center lg:justify-between lg:gap-8">
      {/* Text & Cards Block */}
      <div className="max-w-2xl lg:flex-1 left-[118px] relative">
        <div className="flex items-center gap-2 text-yellow-500 text-sm font-semibold mb-4">
          <span>➡</span>
          <span>Why Choose Us</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#14442D] leading-tight mb-4">
          A Reputation Built on Safety <br />
          Quality, and Integrity
        </h2>

        <p className="text-[#5a5a5a] mb-6">
          We're not just tree experts—we're your neighbors. As a locally owned &
          operated business, we take pride in serving our community with
          reliable, affordable, and high-quality tree services.
        </p>

        <button className="inline-flex items-center bg-yellow-400 text-black font-semibold px-5 py-2 rounded-full hover:bg-yellow-500 transition">
          Get To Know Us
          <svg
            className="ml-2 w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>

        {/* Bottom Info Box */}
        <div className="mt-10 flex flex-col gap-6 bg-white bg-opacity-70 p-6 rounded-lg shadow-md md:flex-row md:justify-start md:gap-8">
          <div className="max-w-xs">
            <h3 className="font-serif font-semibold text-[#14442D] mb-2">
              Handpicked, Healthy Plants
            </h3>
            <p className="text-[#5a5a5a] text-sm">
              Choose us for a greener home, expert advice, and a seamless
              plant-buying experience you can trust!
            </p>
          </div>
          <div className="max-w-xs">
            <h3 className="font-serif font-semibold text-[#14442D] mb-2">
              Hassle-Free Delivery
            </h3>
            <p className="text-[#5a5a5a] text-sm">
              With a focus on sustainability, quality, and customer
              satisfaction, we make plant shopping simple and enjoyable.
            </p>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="mt-10 lg:mt-0 flex-shrink-0 rounded-xl overflow-hidden max-w-lg shadow-lg">
        <Image
          src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/00ba6fd5-e414-4b55-bf53-3015a9fa73ec.png"
          alt="Tree expert wearing green overalls and safety gear working with a chainsaw next to a large tree trunk in dense forest"
          width={600}
          height={400}
          className="object-cover w-full h-full"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/70083beb-48d8-4517-8d82-d29366b0d9c0.png";
          }}
        />
      </div>
    </section>
  );
}
