"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Menu, X, Phone, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 bg-gradient-to-br from-amber-50 via-stone-50 to-yellow-50"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative">
                <Building2 className="w-8 h-8 text-amber-600 group-hover:text-amber-700 transition-colors" />
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity" />
              </div>
              <div>
                <span className="text-xl font-bold text-stone-800">
                  Dir<span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">Construction</span>
                </span>
                <span className="hidden lg:inline-block text-xs text-stone-400 ml-1">est. 2025</span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-stone-700 hover:text-amber-600 transition-colors font-medium"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="tel:+251XXXXXXXXX"
                className="flex items-center gap-2 text-stone-700 hover:text-amber-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+251 926344361</span>
              </Link>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="relative group overflow-hidden rounded-xl bg-gradient-to-r from-amber-600 to-yellow-600 px-6 py-2.5 text-white font-semibold shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transition-all">
                <span className="relative z-10">Contact</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-700 to-yellow-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-stone-700 hover:bg-amber-100/50 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />

            {/* Menu Panel */}
            <div className="absolute right-0 top-0 h-full w-80 bg-gradient-to-br from-amber-50 via-stone-50 to-yellow-50 shadow-2xl">
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-amber-200/50">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <Building2 className="w-7 h-7 text-amber-600" />
                    <span className="text-xl font-bold text-stone-800">
                      Dir<span className="text-amber-600">Construction</span>
                    </span>
                  </Link>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-stone-600 hover:bg-amber-100/50 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <div className="flex-1 overflow-y-auto py-6">
                  {navLinks.map((link) => (
                    <div key={link.name} className="px-6 py-2">
                      <Link
                        href={link.href}
                        className="block py-2 text-stone-700 hover:text-amber-600 font-medium transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Mobile Footer with CTA */}
                <div className="p-6 border-t border-amber-200/50 space-y-4">
                  <Link
                    href="tel:+251926344361"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-amber-600/30 text-amber-700 font-medium hover:bg-amber-50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Phone className="w-4 h-4" />
                    Call +251 926344361
                  </Link>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full rounded-xl bg-gradient-to-r from-amber-600 to-yellow-600 py-3 text-white font-semibold shadow-lg shadow-amber-500/30">
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from hiding under navbar */}
      <div className="h-20" />
    </>
  );
}