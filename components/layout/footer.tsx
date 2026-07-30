import Link from "next/link";
import { Sprout, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A120A] text-white border-t border-gray-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-agri-primary flex items-center justify-center text-white">
                <Sprout className="w-6 h-6 text-agri-accent" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight">
                UZHAVU<span className="text-agri-accent">.TECH</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Engineering Higher Farmer Income Through Smart Agriculture. Empowering Indian agriculture with IoT, AI, and precision technologies.
            </p>
            <p className="text-xs text-agri-accent font-mono font-semibold">
              Pre-Incubated Startup Initiative
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-agri-accent mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link></li>
              <li><Link href="/technology" className="hover:text-white transition-colors">Technology</Link></li>
              <li><Link href="/impact" className="hover:text-white transition-colors">Impact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-agri-accent mb-4">Legal</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-agri-accent mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p className="flex items-center gap-2"><Mail className="w-4 h-4 text-agri-primary" /> contact@uzhavu.tech</p>
              <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-agri-primary" /> +91 98765 43210</p>
              <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-agri-primary" /> Tamil Nadu, India</p>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Uzhavu Tech. All rights reserved. Founded by Tamizh Nilavan.</p>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Github className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}