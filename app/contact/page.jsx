"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your API call here
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-moss-900 mb-4">Contact Us</h1>
          <p className="text-lg text-moss-600 max-w-2xl mx-auto">
            Get in touch for a free estimate or to discuss your tree care needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-moss-200">
            <CardHeader>
              <CardTitle>Request a Free Estimate</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                id="contact-form"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-moss-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-moss-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-moss-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-moss-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-moss-700 mb-1"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-moss-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-moss-700 mb-1"
                  >
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-moss-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="tree-removal">Tree Removal</option>
                    <option value="trimming">Tree Trimming & Pruning</option>
                    <option value="land-clearing">Land Clearing</option>
                    <option value="emergency">Emergency Storm Work</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-moss-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-3 py-2 border border-moss-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500"
                    required
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-forest-600 hover:bg-forest-700"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-moss-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-forest-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-moss-900 mb-1">Phone</h3>
                    <p className="text-moss-600">704-977-4795</p>
                    <p className="text-sm text-moss-500 mt-1">
                      Available for emergency calls 24/7
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-moss-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-forest-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-moss-900 mb-1">Email</h3>
                    <p className="text-moss-600">info@landsynergy.com</p>
                    <p className="text-sm text-moss-500 mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-moss-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-forest-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-moss-900 mb-1">
                      Service Area
                    </h3>
                    <p className="text-moss-600">
                      Charlotte & Surrounding Areas
                    </p>
                    <p className="text-sm text-moss-500 mt-1">
                      We provide services within the greater Charlotte region
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-moss-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-forest-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-moss-900 mb-1">
                      Business Hours
                    </h3>
                    <p className="text-moss-600">
                      Every Day: 8:00 AM – 8:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-moss-900 mb-6 text-center">
            Find Us
          </h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508825!2d144.9537353155047!3d-37.81627984202126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f70846d%3A0x5045675218ce670!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1648184539221!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Landsynergy Tree Services Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
