"use client";

import { motion } from "framer-motion";
import { HardHat, Building2, Ruler, Award, PenTool, ArrowRight, Users, Calendar, Printer, Monitor } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ConstructionLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-stone-50 to-yellow-50 text-stone-900 overflow-x-hidden">

      {/* Hero Section */}
      <section id="#home" className="px-6 py-20 lg:py-28 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative">

        {/* Golden Beam Background for Image */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full hidden lg:block pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-l from-amber-200/30 via-amber-300/20 to-transparent blur-3xl" />
        </div>

        {/* Left Content */}
        <div className="text-center lg:text-left z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-amber-100/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
          >
            <HardHat className="w-4 h-4 text-amber-700" />
            <span className="text-sm font-medium text-amber-800">Licensed & Certified </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl lg:text-7xl font-bold tracking-tight"
          >
            Dir Design and
            <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent"> Construction PLC.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 max-w-xl text-lg text-stone-600"
          >
            Premier construction services delivering excellence in every project. From foundation to finishing, we build quality that lasts generations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 flex gap-4 justify-center lg:justify-start flex-wrap"
          >
            <button
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-xl px-8 py-3 text-lg font-semibold bg-gradient-to-r from-amber-600 to-yellow-600 text-white hover:from-amber-700 hover:to-yellow-700 transition shadow-lg shadow-amber-500/30">
              Our Services
            </button>
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-xl px-8 py-3 text-lg font-semibold border-2 border-amber-600 text-amber-700 hover:bg-amber-50 transition">
              View Projects
            </button>
          </motion.div>

          {/* Professional Licenses Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex flex-wrap gap-4 justify-center lg:justify-start"
          >
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <PenTool className="w-4 h-4 text-amber-600" />
              <span className="text-xs font-medium text-stone-700">Consulting Architects License</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <Ruler className="w-4 h-4 text-amber-600" />
              <span className="text-xs font-medium text-stone-700">Engineering Consultant License</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm">
              <HardHat className="w-4 h-4 text-amber-600" />
              <span className="text-xs font-medium text-stone-700">General Contractor License</span>
            </div>
          </motion.div>
        </div>

        {/* Right PNG Image with Golden Beam Effect - No Frame/Borders */}
        <div className="flex justify-center relative">
          {/* Main Glowing Beam - Pulsing */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1.3, opacity: 0.7 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="absolute w-[130%] h-[130%] rounded-full bg-gradient-to-r from-amber-400/30 via-yellow-500/25 to-amber-600/30 blur-3xl"
          />

          {/* Secondary Golden Beam */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.4, opacity: 0.5 }}
            transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
            className="absolute w-[150%] h-[150%] rounded-full bg-gradient-to-t from-yellow-500/20 via-amber-400/20 to-transparent blur-3xl"
          />

          {/* Rotating Golden Rings - Creative touch behind PNG */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[140%] h-[140%] rounded-full border-2 border-dashed border-amber-400/40"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute w-[160%] h-[160%] rounded-full border border-dotted border-yellow-500/30"
          />

          {/* Pulse Ring Effect */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute w-[135%] h-[135%] rounded-full border-2 border-amber-500/20"
          />

          {/* Soft Golden Glow Directly Behind PNG */}
          <motion.div
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute w-full h-full rounded-full bg-gradient-radial from-amber-400/40 via-yellow-500/20 to-transparent blur-2xl"
            style={{ filter: "blur(30px)" }}
          />

          {/* The PNG Image - Clean, no borders or frames */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            <Image
              src="/images/twelve.png"
              alt="Construction Project"
              width={550}
              height={850}
              className="w-full max-w-md object-contain drop-shadow-2xl"
              priority
              sizes="(max-width: 768px) 100vw, 550px"
            />
          </motion.div>
        </div>
      </section>

      {/* About Us Section - Minimal & Clean with Read More */}
      <section id="about" className="relative px-6 py-32 overflow-hidden bg-black">

        {/* Subtle Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="minimal-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="#F59E0B" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#minimal-pattern)" />
          </svg>
        </div>

        {/* Subtle Golden Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-amber-500/10 blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8"
          >
            <Building2 className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-medium text-amber-400">Welcome to Dir Design and Construction</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            We Strive To
            <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent block">
              Realize Your Dream
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto mb-12"
          >
            Dir Design and Construction PLC is an Ethiopian based consultancy and construction service company and is newly emerged company in Central
            Ethiopian Regional state of Ethiopia, Hosanna. The company is established according to the provisions of a proclamation number 1243/2013
            Article 495 up to 533 and it was founded on 20 October, 2025. The company has earned recognition for undertaking large projects in designing,
            consulting and guiding clients.
            With the staff of more than 6 employees and shareholders, the company have plan to offers the qualified designs and service for the community.
          </motion.p>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-12"
          >
            {[
              { value: "2025", label: "Launch Year", icon: <Calendar className="w-6 h-6" /> },
              { value: "6+", label: "Team Members", icon: <Users className="w-6 h-6" /> },
              { value: "3", label: "Licenses", icon: <Award className="w-6 h-6" /> },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-500/30 transition-all duration-300"
              >
                <div className="text-amber-400 mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Read More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-semibold rounded-xl hover:from-amber-700 hover:to-yellow-700 transition-all duration-300 shadow-lg shadow-amber-500/30 group"
            >
              <span>Read More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative px-6 py-24 overflow-hidden bg-gradient-to-b from-stone-50 to-white">

        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="service-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M20 0 L40 20 L20 40 L0 20 Z" fill="none" stroke="#D97706" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#service-pattern)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-amber-100 rounded-full px-4 py-2 mb-6">
              <HardHat className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-medium text-amber-700">What We Do</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stone-800 mb-4">
              Our Services
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto rounded-full" />

            <p className="text-stone-600 max-w-2xl mx-auto mt-6">
              We provide comprehensive construction and design solutions tailored to your needs
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <PenTool className="w-8 h-8" />,
                title: "Building Design",
                description: "Professional architectural design services for residential and commercial buildings.",
                features: ["Architectural Design", "Interior Design", "Sanity Design", "Structural Design", "Electrical Design", "Environmental and Landscape Design", "Feasibility Study of Projects"]
              },
              {
                icon: <Ruler className="w-8 h-8" />,
                title: "Civil Work Design",
                description: "Comprehensive civil engineering design and structural planning for all project types.",
                features: ["Bridge Design", "Culvert Design", "Drainage Design", "Irrigation System Design"]
              },
              {
                icon: <HardHat className="w-8 h-8" />,
                title: "Construction Work",
                description: "Full-service construction execution from foundation to finishing touches.",
                features: ["Building Construction", "Finishing Work", "Bridge and Culvert Construction", "Electromechanical Work", "Supervision", "Contract Administration", "Bid Document Preparation", "Contract Administration", "Quantity Surveying"]
              },
              {
                icon: <Printer className="w-8 h-8" />,
                title: "Printing Services",
                description: "High-quality printing services for architectural plans, blueprints, and documents.",
                features: ["Blue Print", "Plan Copy", "Color Print", "Scan"]
              },
              {
                icon: <Monitor className="w-8 h-8" />,
                title: "Software Training",
                description: "Professional training for construction and design software applications.",
                features: ["AutoCAD", "Revit", "Archicad", "Civil 3D", "3ds Max", "Lumion", "Twinmotion ", "Artlantis", "Enscape", "ETABS", "Safe", "Eagle paint", "D5"]
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md">
                    <div className="text-white">{service.icon}</div>
                  </div>
                  

                  {/* Title */}
                  <h3 className="text-xl font-bold text-stone-800 mb-3">{service.title}</h3>

                  {/* Description */}
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Learn More Link
                  <div className="mt-6">
                    <span className="inline-flex items-center gap-1 text-amber-600 text-sm font-semibold group-hover:gap-2 transition-all cursor-pointer">
                      Learn More
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
        </section>

        </div>
        );
        }