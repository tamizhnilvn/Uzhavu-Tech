"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sprout, Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Solutions", href: "/solutions" },
    { name: "Technology", href: "/technology" },
    { name: "Impact", href: "/impact" },
    { name: "Vision", href: "/vision" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-[#0A120A]/80 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-agri-primary flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <Sprout className="w-6 h-6 text-agri-accent" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl tracking-tight text-agri-dark dark:text-white">
                UZHAVU<span className="text-agri-primary dark:text-agri-accent">.TECH</span>
              </span>
              <span className="text-[9px] text-gray-500 uppercase tracking-widest -mt-1 font-semibold">
                Smart Agriculture
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-agri-primary dark:hover:text-agri-accent transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action Buttons & Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? <Sun className="w-5 h-5 text-agri-accent" /> : <Moon className="w-5 h-5" />}
              </button>
            )}

            <Link
              href="/contact"
              className="gradient-button text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 text-gray-600 dark:text-gray-300"
              >
                {theme === "dark" ? <Sun className="w-5 h-5 text-agri-accent" /> : <Moon className="w-5 h-5" />}
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 dark:text-gray-200 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0A120A] border-b border-gray-200 dark:border-gray-800 px-4 pt-4 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-gray-700 dark:text-gray-200 hover:text-agri-primary py-2"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center gradient-button text-white py-3 rounded-xl font-semibold shadow-md mt-4"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}