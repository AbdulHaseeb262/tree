import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#114524] text-[#eef2e6]">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-16 flex flex-col md:flex-row md:justify-between">
        {/* Left Section */}
        <div className="md:w-1/3 mb-8 md:mb-0">
          <h1 className="text-2xl font-bold flex items-center gap-2 mb-4 select-none">
            <span aria-hidden="true" className="text-3xl">
              🌿
            </span>
            <span>Landsynergy</span>
          </h1>
          <p className="text-sm leading-relaxed max-w-xs">
            Our licensed and insured crew provides reliable tree care with
            honest pricing and friendly service—because your property deserves
            nothing less.
          </p>

          <div className="mt-8 text-sm font-serif select-none max-w-xs">
            <h3 className="mb-2 text-base font-semibold">Working Hours</h3>
            <div className="flex justify-between mb-1">
              <span>Every Day</span>
              <span className="font-semibold">8:00 AM - 8:00 PM</span>
            </div>
          </div>
        </div>

        {/* Center and Right Section */}
        <div className="md:w-2/3 bg-[#f6f1d1] text-[#114524] rounded-lg p-8 flex flex-col md:flex-row md:justify-between relative">
          {/* Headline */}
          <div className="hidden md:block absolute -top-8 left-16 text-2xl font-serif font-semibold max-w-xs tracking-tight select-none">
            Your Property Deserves
            <br />
            the Best Tree Care
          </div>

          <div className="flex flex-col md:flex-row w-full justify-between">
            {/* Top Links */}
            <div className="mb-6 md:mb-0">
              <h4 className="mb-4 font-semibold font-serif text-lg">
                Top Links
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Home Page
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Our Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Recent Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Services */}
            <div className="mb-6 md:mb-0">
              <h4 className="mb-4 font-semibold font-serif text-lg">
                Our Services
              </h4>
              <ul className="space-y-2 text-sm">
                <li>Fertilizat &amp; Weed Control</li>
                <li>Aeration &amp; Overseeding</li>
                <li>Pest &amp; Disease Control</li>
                <li>Mowing &amp; Maintenance</li>
                <li>Seasonal Cleanup</li>
                <li>Lawn Renovation</li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="mb-4 font-semibold font-serif text-lg">
                Contact Us
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  {/* Phone Icon */}
                  <svg
                    className="w-5 h-5 text-[#114524]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 16.92v3a2 2 0..."></path>
                  </svg>
                  +1 704-977-4795
                </li>
                <li className="flex items-center gap-2">
                  {/* Map Icon */}
                  <svg
                    className="w-5 h-5 text-[#114524]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  Charlotte &amp; Surrounding Areas
                </li>
                <li className="flex items-center gap-2">
                  {/* Mail Icon */}
                  <svg
                    className="w-5 h-5 text-[#114524]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 4h16v16H4z"></path>
                    <path d="M22 6l-10 7L2 6"></path>
                  </svg>
                  info@landsynergy.com
                </li>
                <li className="flex items-center gap-2">
                  {/* Globe Icon */}
                  <svg
                    className="w-5 h-5 text-[#114524]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                  www.Landsynergy.org
                </li>
              </ul>

              {/* Social Icons */}
              <div className="mt-6 flex gap-3 items-center">
                {/* LinkedIn */}
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="p-2 rounded bg-white text-[#114524] shadow-md hover:shadow-lg transition"
                >
                  {/* ...svg */}
                </a>
                {/* YouTube */}
                <a
                  href="#"
                  aria-label="YouTube"
                  className="p-2 rounded bg-white text-[#114524] shadow-md hover:shadow-lg transition"
                >
                  {/* ...svg */}
                </a>
                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="p-3 rounded-full bg-[#F6D012] text-[#114524] shadow-md hover:shadow-lg transition"
                >
                  {/* ...svg */}
                </a>
                {/* X Platform */}
                <a
                  href="#"
                  aria-label="X Platform"
                  className="p-2 rounded text-[#114524] shadow-md hover:shadow-lg transition"
                >
                  {/* ...svg */}
                </a>
              </div>
            </div>
          </div>

          {/* Call-to-Action Button */}
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-2 bg-[#F6D012] text-[#114524] font-semibold rounded-full px-6 py-3 ml-auto absolute top-10 right-16 hover:brightness-110 transition select-none"
            aria-label="Let's get started today"
          >
            Let's Get Started Today!
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>

      <div className="bg-[#f6f1d1] text-[#114524] flex justify-between text-xs px-6 py-4 select-none">
        <span>© Copyright 2025 – Lawnc. All Rights Reserved.</span>
        <span className="underline cursor-pointer hover:text-[#d0a900]">
          Privacy &amp; Policy
        </span>
      </div>

      {/* Mobile CTA Button */}
      <a
        href="#"
        className="fixed bottom-8 right-6 bg-[#F6D012] text-[#114524] font-semibold rounded-full px-5 py-3 flex items-center gap-2 md:hidden shadow-lg hover:brightness-110 transition select-none"
        aria-label="Let's get started today"
      >
        Let's Get Started Today!
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </footer>
  );
};

export default Footer;
