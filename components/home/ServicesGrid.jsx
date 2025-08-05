import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { TreePine, Scissors, Trees, Zap, Truck, Leaf } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    icon: TreePine,
    title: 'Tree Removal',
    description: 'Safe and efficient removal of hazardous or unwanted trees with minimal impact to your property.',
    color: 'text-forest-600'
  },
  {
    icon: Scissors,
    title: 'Tree Trimming & Pruning',
    description: 'Expert pruning to enhance tree health, safety, and aesthetics while preserving natural beauty.',
    color: 'text-moss-600'
  },
  {
    icon: Trees,
    title: 'Land Clearing',
    description: 'Comprehensive land clearing services for construction, landscaping, or fire prevention.',
    color: 'text-earth-600'
  },
  {
    icon: Zap,
    title: 'Emergency Storm Work',
    description: '24/7 emergency response for storm-damaged trees and hazardous situations.',
    color: 'text-sand-700'
  },
  {
    icon: Truck,
    title: 'Wood Chip Delivery',
    description: 'Free or low-cost wood chip delivery for mulching and sustainable landscaping.',
    color: 'text-forest-700'
  },
  {
    icon: Leaf,
    title: 'Sustainable Land Management',
    description: 'Eco-friendly practices that respect the land and promote long-term ecosystem health.',
    color: 'text-moss-700'
  }
]

export default function ServicesGrid() {
  return (
    <section className="py-20 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-moss-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-moss-600 max-w-2xl mx-auto">
            Professional tree care services designed to enhance safety, beauty, and sustainability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card 
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-moss-200"
              >
                <CardHeader>
                  <div className={`${service.color} mb-4`}>
                    <Icon className="h-12 w-12" />
                  </div>
                  <CardTitle className="text-xl text-moss-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-moss-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/services">
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-forest-600 hover:bg-forest-700 transition-colors">
              View All Services
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
