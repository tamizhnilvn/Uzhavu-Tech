"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sprout, Target, Eye, Compass, Rocket, Award, Users, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const milestones = [
    {
      year: "Phase 1 - 2024",
      title: "Research & Problem Discovery",
      desc: "Conducted extensive field surveys across rural farm clusters in South India to identify core pain points: water wastage, high fertilizer costs, and lack of real-time market linkage."
    },
    {
      year: "Phase 2 - 2025",
      title: "Pre-Incubation & Hardware Prototypes",
      desc: "Developed initial ESP32-based soil telemetry nodes and PyTorch computer vision models under the leadership of Tamizh Nilavan and IEI Student Chapter members."
    },
    {
      year: "Phase 3 - 2026 (Current)",
      title: "Pilot Testing & Platform Integration",
      desc: "Actively deploying sensor arrays across pilot farms, testing LoRaWAN long-range communications, and building B2B buyer integration."
    },
    {
      year: "Phase 4 - 2027",
      title: "Full Launch & Regional Expansion",
      desc: "Scaling operations to cover 10,000+ smallholder farmers across Tamil Nadu, Puducherry, and neighboring agricultural belts."
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-agri-bg dark:bg-[#0A120A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-agri-primary/10 text-agri-primary dark:text-agri-accent text-xs font-bold mb-4">
            <Sprout className="w-4 h-4" />
            About Uzhavu Tech
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-agri-dark dark:text-white mb-6">
            Pioneering Digital Transformation in Indian Agriculture
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Uzhavu Tech was built on a simple conviction: high-tech precision farming tools shouldn't be reserved only for large industrial farms. We engineer affordable, accessible, and intelligent tech for smallholder farmers.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl border border-agri-primary/20 shadow-lg"
          >
            <div className="w-12 h-12 rounded-2xl bg-agri-primary text-white flex items-center justify-center mb-6">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              Empower every farmer with affordable technology, intelligent insights, and seamless market access to maximize crop productivity and net household income.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-3xl border border-agri-primary/20 shadow-lg"
          >
            <div className="w-12 h-12 rounded-2xl bg-agri-accent text-agri-dark flex items-center justify-center mb-6">
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Our Vision</h2>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              Become India’s most trusted technology partner for sustainable, climate-resilient, and profitable agriculture.
            </p>
          </motion.div>
        </div>

        {/* Journey Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-agri-dark dark:text-white mb-2">Startup Roadmap & Journey</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">From academic innovation to field-tested enterprise</p>
          </div>

          <div className="space-y-6">
            {milestones.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 rounded-2xl border border-gray-200 dark:border-gray-800 flex flex-col md:flex-row md:items-center gap-4"
              >
                <div className="md:w-44 flex-shrink-0">
                  <span className="text-xs font-mono font-bold text-agri-primary dark:text-agri-accent bg-agri-light dark:bg-agri-dark px-3 py-1 rounded-full">
                    {item.year}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="gradient-button text-white px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
          >
            Connect With Our Team
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </div>
  );
}