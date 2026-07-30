import { Hero } from "@/components/home/hero";
import { SolutionsGrid } from "@/components/home/solutions-grid";
import { TechStackDiagram } from "@/components/home/tech-stack-diagram";
import { FounderSection } from "@/components/home/founder-section";
import { FAQAccordion } from "@/components/home/faq-accordion";
import Link from "next/link";
import { ArrowRight, TrendingUp, Droplet, DollarSign, Award } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Key Stats Section */}
      <section className="py-16 bg-agri-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-agri-accent mb-1">120M+</p>
              <p className="text-xs sm:text-sm text-gray-300 uppercase tracking-wider">Smallholder Farmers in India</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-agri-accent mb-1">145M+</p>
              <p className="text-xs sm:text-sm text-gray-300 uppercase tracking-wider">Hectares Cultivated</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-agri-accent mb-1">100%</p>
              <p className="text-xs sm:text-sm text-gray-300 uppercase tracking-wider">Affordable Tech Mission</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold text-agri-accent mb-1">24x7</p>
              <p className="text-xs sm:text-sm text-gray-300 uppercase tracking-wider">AI Field Advisory</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid Section */}
      <SolutionsGrid />

      {/* Architecture Section */}
      <TechStackDiagram />

      {/* Founder Section */}
      <FounderSection />

      {/* FAQ Section */}
      <FAQAccordion />

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-agri-primary to-agri-dark text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Ready to Transform Your Farm's Yield & Profitability?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Join pilot clusters, test IoT nodes, or partner with Uzhavu Tech to usher in the next era of precision farming.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-agri-accent text-agri-dark font-bold px-8 py-4 rounded-full hover:bg-yellow-400 transition-colors shadow-lg"
            >
              Request Field Demo
            </Link>
            <Link
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-full border border-white/30 transition-colors"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}