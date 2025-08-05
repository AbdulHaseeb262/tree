import React from "react";

import HeroSectionNew from "@/components/home/HeroSectionNew";
import ServicesSection from "@/components/home/ServicesSection";
import SafetySection from "@/components/home/SafetySection";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";
import AboutUsSection from "@/components/home/AboutUsSection";

export default function Home() {
  return (
    <div>
      <HeroSectionNew />
      <AboutUsSection />
      <ServicesSection />
      <SafetySection />
      <Testimonials />
      <CTASection />
    </div>
  );
}
