import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-forest-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl font-bold mb-6">
          Let's Take Care of Your Trees — The Right Way.
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-sand-500 hover:bg-sand-600 text-sand-900"
            >
              Request a Free Quote
            </Button>
          </Link>
          <Link href="tel:+1111373634">
            <Button
              size="lg"
              variant="outline"
              className="border-sand-300 text-sand-100 hover:bg-sand-100 hover:text-forest-800"
            >
              Call Us: +1 704-977-4795
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
