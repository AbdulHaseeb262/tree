import Image from "next/image";

const photos = [
  {
    src: "/gallery/kala.jpg",
    alt: "Trees near power lines requiring careful trimming",
    title: "Power Line Clearance",
    description: "Safe tree trimming near utilities",
  },
  {
    src: "/gallery/kolo.jpg",
    alt: "Cut firewood logs neatly stacked",
    title: "Wood Processing",
    description: "Sustainable wood processing and stacking",
  },
  {
    src: "/gallery/cutting.jpg",
    alt: "Professional tree care worker with equipment",
    title: "Professional Equipment",
    description: "Our team uses modern, safe equipment",
  },
  {
    src: "/gallery/tree-climbing.jpg",
    alt: "Tree climber working in tree canopy",
    title: "Expert Tree Climbing",
    description: "Skilled arborists working at height",
  },
  {
    src: "/gallery/land-clearing.jpg",
    alt: "Tree cutting and land clearing project",
    title: "Land Clearing",
    description: "Efficient land clearing with minimal impact",
  },
];

export default function GalleryPage() {
  return (
    <section className="py-20 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-moss-900 mb-4">
            Our Work Gallery
          </h1>
          <p className="text-lg text-moss-600 max-w-2xl mx-auto">
            Explore our recent projects showcasing professional tree care, land
            clearing, and sustainable practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={500}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-moss-900 mb-1">
                  {photo.title}
                </h3>
                <p className="text-sm text-moss-600">{photo.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-moss-700 mb-6">
            Every project is completed with attention to safety, environmental
            impact, and customer satisfaction.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-forest-600 hover:bg-forest-700 transition-colors"
          >
            Discuss Your Project
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
  );
}
