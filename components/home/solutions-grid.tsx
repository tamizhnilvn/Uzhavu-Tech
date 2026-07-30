"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SOLUTIONS_DATA, Solution } from "@/lib/data";
import { 
  BrainCircuit, 
  Droplets, 
  Cpu, 
  Plane, 
  FlaskConical, 
  CloudSun, 
  Store, 
  Globe, 
  Truck, 
  LayoutDashboard,
  ArrowRight,
  X
} from "lucide-react";

const ICON_MAP: Record<string, React.ReactNode> = {
  BrainCircuit: <BrainCircuit className="w-6 h-6" />,
  Droplets: <Droplets className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Plane: <Plane className="w-6 h-6" />,
  FlaskConical: <FlaskConical className="w-6 h-6" />,
  CloudSun: <CloudSun className="w-6 h-6" />,
  Store: <Store className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  Truck: <Truck className="w-6 h-6" />,
  LayoutDashboard: <LayoutDashboard className="w-6 h-6" />,
};

export function SolutionsGrid() {
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);

  return (
    <section className="py-24 bg-white dark:bg-[#0E170E]" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-bold tracking-widest text-agri-primary dark:text-agri-accent mb-2">
            End-To-End Agritech Ecosystem
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-agri-dark dark:text-white tracking-tight">
            Comprehensive Smart Farming Solutions
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-base">
            From soil testing to harvest logistics, our integrated platform powers modern farming at every step.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOLUTIONS_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setSelectedSolution(item)}
              className="glass-card p-6 rounded-2xl hover:shadow-glass-hover transition-all cursor-pointer border border-gray-200 dark:border-gray-800 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-agri-light dark:bg-agri-dark text-agri-primary dark:text-agri-accent flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {ICON_MAP[item.iconName]}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-agri-primary dark:group-hover:text-agri-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  {item.shortDesc}
                </p>
              </div>

              <div className="flex items-center text-xs font-semibold text-agri-primary dark:text-agri-accent gap-1 pt-4 border-t border-gray-100 dark:border-gray-800">
                Learn Details
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal View */}
      {selectedSolution && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white dark:bg-[#121C13] rounded-3xl max-w-2xl w-full p-8 relative shadow-2xl border border-agri-primary/20 max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setSelectedSolution(null)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-700 dark:hover:text-white p-2 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-agri-primary text-white flex items-center justify-center">
                {ICON_MAP[selectedSolution.iconName]}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedSolution.title}
                </h3>
                <p className="text-xs text-agri-primary dark:text-agri-accent font-semibold uppercase tracking-wider">
                  Uzhavu Tech Module
                </p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {selectedSolution.fullDesc}
            </p>

            <div className="mb-6">
              <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3">
                Key Farmer Benefits
              </h4>
              <ul className="space-y-2">
                {selectedSolution.benefits.map((b, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 rounded-full bg-agri-accent" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-3">
                Underlying Technology
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedSolution.techStack.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full text-xs font-medium bg-agri-light dark:bg-agri-dark text-agri-primary dark:text-agri-accent">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setSelectedSolution(null)}
              className="w-full gradient-button text-white py-3.5 rounded-xl font-semibold shadow-md"
            >
              Close Details
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}