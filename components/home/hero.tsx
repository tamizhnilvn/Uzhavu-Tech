"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Cpu, Plane, Activity, Smartphone, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-gradient-to-b from-agri-light/40 via-agri-bg to-agri-bg dark:from-agri-dark/20 dark:via-[#0A120A] dark:to-[#0A120A]">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#2E7D32_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-agri-primary/10 border border-agri-primary/20 text-agri-primary dark:text-agri-accent text-xs font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-agri-accent animate-ping" />
              Pre-Incubated Agritech Pioneer
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-agri-dark dark:text-white leading-[1.15] mb-6">
              Engineering Higher <span className="text-transparent bg-clip-text bg-gradient-to-r from-agri-primary to-emerald-500">Farmer Income</span> Through Smart Agriculture
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Uzhavu Tech empowers farmers using Artificial Intelligence, IoT Field Telemetry, Precision Smart Irrigation, Drone Services, and Direct Market Linkages to maximize productivity and profitability.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <Link
                href="/contact"
                className="gradient-button text-white px-8 py-4 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
              >
                Request Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/solutions"
                className="glass-card hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 px-8 py-4 rounded-full font-semibold text-base flex items-center justify-center transition-all"
              >
                Explore Solutions
              </Link>
            </div>

            {/* Quick Proof Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-gray-200 dark:border-gray-800 pt-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-agri-primary dark:text-agri-accent" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">100% Affordable</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-agri-primary dark:text-agri-accent" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Plug & Play IoT</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-agri-primary dark:text-agri-accent" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Local Language AI</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column Animated Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              
              {/* Central Glassmorphic Node Frame */}
              <div className="glass-card p-6 rounded-3xl shadow-2xl relative z-10 border border-agri-primary/20">
                <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-sm font-bold text-gray-800 dark:text-white">Field Hub Node #04</span>
                  </div>
                  <span className="text-xs bg-agri-light dark:bg-agri-dark text-agri-primary dark:text-agri-accent font-mono px-2.5 py-1 rounded-full">
                    ACTIVE TELEMETRY
                  </span>
                </div>

                {/* Dashboard Metrics Mockup */}
                <div className="space-y-4">
                  <div className="p-3 bg-gray-50 dark:bg-gray-800/60 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg text-blue-600">
                        <Activity className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Soil Moisture</p>
                        <p className="text-sm font-bold text-gray-800 dark:text-white">38.4% (Optimal)</p>
                      </div>
                    </div>
                    <span className="text-xs text-emerald-600 font-semibold">+2.1%</span>
                  </div>

                  <div className="p-3 bg-gray-50 dark:bg-gray-800/60 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-amber-100 dark:bg-amber-900/40 rounded-lg text-amber-600">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">NPK Nitrogen Level</p>
                        <p className="text-sm font-bold text-gray-800 dark:text-white">142 mg/kg</p>
                      </div>
                    </div>
                    <span className="text-xs text-agri-primary dark:text-agri-accent font-semibold">Healthy</span>
                  </div>

                  <div className="p-3 bg-gray-50 dark:bg-gray-800/60 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-emerald-100 dark:bg-emerald-900/40 rounded-lg text-emerald-600">
                        <Smartphone className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">AI Crop Health Scan</p>
                        <p className="text-sm font-bold text-gray-800 dark:text-white">Zero Pest Threat Detected</p>
                      </div>
                    </div>
                    <span className="text-xs text-emerald-600 font-semibold">99.2% Conf.</span>
                  </div>
                </div>
              </div>

              {/* Floating Floating Cards */}
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 glass-card p-3 rounded-2xl shadow-lg border border-agri-accent/30 flex items-center gap-3 z-20"
              >
                <div className="p-2 bg-agri-accent/20 rounded-xl text-agri-dark dark:text-agri-accent">
                  <Plane className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800 dark:text-white">Drone Fleet</p>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400">Autonomous Spraying</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}