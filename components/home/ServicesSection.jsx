import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: "🎯",
    title: "Tree Trimming & Pruning",
    description:
      "Our expert trimming pruning services remove de branches, shape overgrowth, & promote",
    link: "/services#trimming",
  },
  {
    icon: "🌿",
    title: "Stump Grinding & Removal",
    description:
      "We grind remove tree stumps completely, clearing space for landscaping, preventing pest",
    link: "/services#stump",
  },
  {
    icon: "🌱",
    title: "Emergency Tree Services",
    description:
      "We're ready around the clock to safely clear debris protect your home and property",
    link: "/services#emergency",
  },
  {
    icon: "🌲",
    title: "Tree Health & Maintenance",
    description:
      "We diagnose tree issue early & provide solutions such as deep root feeding, disease",
    link: "/services#health",
  },
  {
    icon: "🍃",
    title: "Hedge & Shrub Trimming",
    description:
      "Our precision trimming service enhances curb appeal and the encourages healthy growth",
    link: "/services#hedge",
  },
  {
    icon: "🌳",
    title: "Tree Cabling & Bracing",
    description:
      "We use industry-approved cabling and bracing systems to stabilize trees structura",
    link: "/services#cabling",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-secondary font-medium mb-2 text-lg animate-fade-in">
            Our Tree Services
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4 animate-fade-up">
            Quality Tree Services You Can Count On
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Image */}
          <div className="relative animate-slide-in-left">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="/quality-service.jpg"
                alt="Professional arborist at work"
                className="w-full h-[830px] object-cover"
              />
            </div>
          </div>

          {/* Right - Services Grid */}
          <div className="grid sm:grid-cols-2 gap-6 animate-slide-in-right">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="inline-flex items-center text-secondary hover:text-highlight font-medium transition-colors"
                >
                  Learn More
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
