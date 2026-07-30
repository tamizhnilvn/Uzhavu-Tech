"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Award, GraduationCap, Cpu, Code } from "lucide-react";

export function FounderSection() {
  return (
    <section className="py-24 bg-white dark:bg-[#0E170E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-card p-8 lg:p-12 rounded-3xl border border-agri-primary/20 shadow-xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Avatar Column */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="w-40 h-40 rounded-3xl bg-gradient-to-tr from-agri-primary to-agri-accent p-1 shadow-lg mb-4">
                <div className="w-full h-full rounded-[22px] bg-agri-dark flex flex-col items-center justify-center text-white">
                  <span className="text-4xl font-extrabold tracking-widest text-agri-accent">TN</span>
                  <span className="text-xs text-gray-300 mt-1">Tamizh Nilavan</span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-agri-primary/10 text-agri-primary dark:text-agri-accent">
                Founder & Lead Architect
              </span>
            </div>

            {/* Content Column */}
            <div className="md:col-span-8">
              <h2 className="text-3xl font-extrabold text-agri-dark dark:text-white mb-2">
                Tamizh Nilavan
              </h2>
              <p className="text-sm font-semibold text-agri-primary dark:text-agri-accent mb-4">
                Final Year ECE Student | President - IEI Student Chapter
              </p>

              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                A passionate hardware and software engineer specializing in Embedded Systems, IoT, and Artificial Intelligence. Leading Uzhavu Tech to engineer practical, affordable technologies that solve real ground challenges faced by rural Indian farmers.
              </p>

              {/* Badges */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300">
                  <GraduationCap className="w-4 h-4 text-agri-primary dark:text-agri-accent" />
                  ECE Senior Engineer
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300">
                  <Award className="w-4 h-4 text-agri-primary dark:text-agri-accent" />
                  IEI Student Chapter President
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300">
                  <Cpu className="w-4 h-4 text-agri-primary dark:text-agri-accent" />
                  Embedded Systems & IoT
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300">
                  <Code className="w-4 h-4 text-agri-primary dark:text-agri-accent" />
                  AI & Computer Vision
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 border-t border-gray-200 dark:border-gray-800 pt-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-200 hover:text-agri-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-600" />
                  LinkedIn Profile
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-gray-700 dark:text-gray-200 hover:text-agri-primary transition-colors"
                >
                  <Github className="w-4 h-4 text-gray-900 dark:text-white" />
                  GitHub Codebase
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}