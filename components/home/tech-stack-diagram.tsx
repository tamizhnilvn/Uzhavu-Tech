"use client";

import { motion } from "framer-motion";
import { Cpu, Cloud, Smartphone, Plane, Database, Wifi } from "lucide-react";

export function TechStackDiagram() {
  const steps = [
    {
      title: "Field Sensing & Edge",
      desc: "ESP32, Soil NPK Sensors, Micro-Weather Arrays, LoRaWAN",
      icon: <Cpu className="w-8 h-8 text-agri-primary dark:text-agri-accent" />
    },
    {
      title: "Transmission & Cloud Engine",
      desc: "MQTT Gateway, Microservices, PyTorch AI Models",
      icon: <Cloud className="w-8 h-8 text-agri-primary dark:text-agri-accent" />
    },
    {
      title: "Multi-Source Analytics",
      desc: "Drone Multispectral NDVI + Copernicus Satellite Feeds",
      icon: <Plane className="w-8 h-8 text-agri-primary dark:text-agri-accent" />
    },
    {
      title: "Farmer Command App",
      desc: "Real-time Mobile Alerts, Voice AI Advisory, Valve Actuation",
      icon: <Smartphone className="w-8 h-8 text-agri-primary dark:text-agri-accent" />
    }
  ];

  return (
    <section className="py-24 bg-agri-bg dark:bg-[#0A120A] border-y border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-bold tracking-widest text-agri-primary dark:text-agri-accent mb-2">
            System Architecture
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-agri-dark dark:text-white">
            Built On Modern IoT & Cloud Stack
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            From hardware sensors in the dirt to real-time machine learning predictions on smartphones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-2xl border border-agri-primary/20 text-center flex flex-col items-center relative z-10"
            >
              <div className="w-16 h-16 rounded-2xl bg-agri-light dark:bg-agri-dark flex items-center justify-center mb-4 shadow-sm">
                {step.icon}
              </div>
              <span className="text-xs font-mono font-bold text-agri-primary dark:text-agri-accent mb-1">
                STEP 0{idx + 1}
              </span>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}