"use client";

import { motion } from "framer-motion";
import { HardHat, Building2, Ruler, Truck, Hammer, ShieldCheck, Award, Clock, FileText, PenTool, Wrench, ArrowRight, Link, Users, Trophy, MapPin, Calendar, Printer, Monitor, Mail, Phone } from "lucide-react";
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
              unoptimized
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
            <span className="text-sm font-medium text-amber-400">Welcome to Dir Construction</span>
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
                features: ["Architectural Design", "Interior Design", "Interior Design", "Sanity Design", "Structural Design", "Electrical Design", "Environmental and Landscape Design", "Feasibility Study of Projects"]
              },
              {
                icon: <Ruler className="w-8 h-8" />,
                title: "Civil Work Design",
                description: "Comprehensive civil engineering design and structural planning for all project types.",
                features: ["Bridgge Design", "Culvert Design", "Drainage Design", "Irrigation System Design"]
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
                features: ["AutoCAD", "Revit"]
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

      {/* Projects Section - Dark Mode */}
      <section id="projects" className="relative px-6 py-24 overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-black">

        {/* Dark Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="project-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="#F59E0B" strokeWidth="0.5" />
                <circle cx="30" cy="30" r="1.5" fill="#FBBF24" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#project-pattern)" />
          </svg>
        </div>

        {/* Golden Glow Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-amber-500/20">
              <Building2 className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-400">Our Portfolio</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Featured Projects
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto rounded-full" />

            <p className="text-gray-400 max-w-2xl mx-auto mt-6">
              Showcasing our finest work demonstrating quality, innovation, and excellence
            </p>
          </motion.div>

          {/* Project Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {["All", "Residential", "Commercial", "Industrial", "Infrastructure"].map((filter, i) => (
              <button
                key={i}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${i === 0
                  ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-white shadow-lg shadow-amber-500/30"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10"
                  }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Residential Complex",
                category: "Residential",
                description: "Luxury apartment complex with 50+ units featuring modern amenities",
                image: "/images/project1.jpg",
                icon: <Building2 className="w-6 h-6" />
              },
              {
                title: "Corporate Headquarters",
                category: "Commercial",
                description: "12-story commercial building with sustainable design elements",
                image: "/images/project2.jpg",
                icon: <Building2 className="w-6 h-6" />
              },
              {
                title: "Industrial Warehouse",
                category: "Industrial",
                description: "Large-scale industrial facility with advanced logistics systems",
                image: "/images/project3.jpg",
                icon: <Building2 className="w-6 h-6" />
              },
              {
                title: "Highway Bridge Project",
                category: "Infrastructure",
                description: "Major bridge infrastructure connecting two economic zones",
                image: "/images/project4.jpg",
                icon: <Building2 className="w-6 h-6" />
              },
              {
                title: "Shopping Mall",
                category: "Commercial",
                description: "Modern retail space with innovative architectural design",
                image: "/images/project5.jpg",
                icon: <Building2 className="w-6 h-6" />
              },
              {
                title: "Residential Villa",
                category: "Residential",
                description: "Luxury custom villa with premium finishes and landscaping",
                image: "/images/project6.jpg",
                icon: <Building2 className="w-6 h-6" />
              }
            ].map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/30 transition-all duration-300 h-full">

                  {/* Project Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-amber-500/20 to-yellow-500/20 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-amber-400/50">
                        <Building2 className="w-16 h-16" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* Category Badge */}
                    <span className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Project Details */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-amber-400 text-sm font-semibold">
                        <span>View Project</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                      <div className="flex gap-2">
                        <span className="text-xs text-gray-500">2024</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <button className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-amber-500 text-amber-400 font-semibold rounded-xl hover:bg-amber-500 hover:text-white transition-all duration-300 group">
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

        </div>
      </section>
      {/* Light Theme Transition Section - Between Projects & Contact */}
      <section className="relative px-6 py-28 overflow-hidden bg-gradient-to-b from-stone-100 via-amber-50/30 to-white">

        {/* Subtle Geometric Pattern */}
        <div className="absolute inset-0 opacity-30">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="light-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="#D97706" strokeWidth="0.3" />
                <circle cx="30" cy="30" r="1" fill="#D97706" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#light-pattern)" />
          </svg>
        </div>

        {/* Soft Golden Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-r from-amber-500/5 via-yellow-500/10 to-amber-500/5 blur-3xl rounded-full" />

        {/* Floating Light Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: -100, y: Math.random() * 100 + "%", opacity: 0 }}
              animate={{ x: "100vw", opacity: [0, 0.5, 0] }}
              transition={{ duration: Math.random() * 6 + 4, repeat: Infinity, delay: Math.random() * 3 }}
              className="absolute w-1 h-1 bg-amber-400/40 rounded-full"
            />
          ))}
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">

          {/* Animated Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="mb-8"
          >
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/10">
              <Building2 className="w-10 h-10 text-amber-600" />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-stone-800 mb-4"
          >
            Ready to Bring Your
            <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent block mt-2">
              Vision to Life?
            </span>
          </motion.h2>

          {/* Divider */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: "80px", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto rounded-full mb-6"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-stone-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Let's discuss your project. Whether it's a new build, renovation, or consultation,
            our team is ready to help you every step of the way.
          </motion.p>

          {/* Dual CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-5 justify-center"
          >
          </motion.div>

          {/* Trust Badges - Light Theme */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap justify-center gap-6 mt-12 pt-6 border-t border-stone-200"
          >
            {[
              { icon: <ShieldCheck className="w-4 h-4" />, text: "Licensed & Insured" },
              { icon: <Award className="w-4 h-4" />, text: "Quality Guaranteed" },
              { icon: <Clock className="w-4 h-4" />, text: "On-Time Delivery" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-stone-500 text-sm">
                <span className="text-amber-500">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Us Section - Premium Design */}
      <section id="contact" className="relative px-6 py-24 overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-black">

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="contact-pattern-premium" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M40 0 L80 40 L40 80 L0 40 Z" fill="none" stroke="#F59E0B" strokeWidth="0.5" />
                <path d="M40 20 L60 40 L40 60 L20 40 Z" fill="none" stroke="#FBBF24" strokeWidth="0.3" />
                <circle cx="40" cy="40" r="2" fill="#FBBF24" />
              </pattern>
            </defs>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#contact-pattern-premium)" />
          </svg>
        </div>

        {/* Golden Glow Orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-amber-500/5 via-yellow-500/5 to-amber-500/5 blur-3xl rotate-12" />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: "100vh", x: `${Math.random() * 100}vw`, opacity: 0 }}
              animate={{ y: "-20vh", opacity: [0, 1, 0] }}
              transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, delay: Math.random() * 5 }}
              className="absolute w-1 h-1 bg-amber-400/50 rounded-full"
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-sm rounded-full px-5 py-2 mb-6 border border-amber-500/30">
              <Phone className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-400">Get In Touch</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Let's Talk About
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent block">
                Your Next Project
              </span>
            </h2>

            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto rounded-full mt-6" />

            <p className="text-gray-300 max-w-2xl mx-auto mt-6 text-lg">
              Ready to bring your vision to life? Contact us today for a free consultation.
            </p>
          </motion.div>

          {/* Main Contact Grid */}
          <div className="grid lg:grid-cols-5 gap-8">

            {/* Left Side - Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Call Card */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-500/40 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">Call Us</h3>
                    <p className="text-gray-300 text-sm">Monday to Friday, 8am - 6pm</p>
                    <p className="text-amber-400 font-semibold mt-2 text-lg">+251 926344361</p>
                    <p className="text-amber-400 font-semibold mt-2 text-lg">+251 912439350</p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-500/40 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">Email Us</h3>
                    <p className="text-gray-300 text-sm">We'll respond within 24 hours</p>
                    <p className="text-amber-400 font-semibold mt-2">info@dirconstruction.com</p>
                    <p className="text-amber-400/80">contact@dirconstruction.com</p>
                  </div>
                </div>
              </div>

              {/* Visit Card */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-500/40 transition-all duration-300 hover:transform hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">Visit Us</h3>
                    <p className="text-gray-300 text-sm">Monday to Friday, 8am - 6pm</p>
                    <p className="text-gray-200 mt-2">
                      Hosanna, Central Ethiopia<br />
                      Regional State, Ethiopia
                    </p>
                  </div>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-500/40 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-3">Working Hours</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Monday - Friday:</span>
                        <span className="text-white font-medium">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Saturday:</span>
                        <span className="text-white font-medium">9:00 AM - 2:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Sunday:</span>
                        <span className="text-amber-400 font-medium">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Send Us a Message</h3>
                  <p className="text-gray-400">Fill out the form below and we'll get back to you shortly</p>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-amber-500 to-yellow-500 mt-3 rounded-full" />
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all text-white placeholder:text-gray-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all text-white placeholder:text-gray-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+251 XXX XXX XXX"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all text-white placeholder:text-gray-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Service Interest *</label>
                      <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-amber-500 text-white">
                        <option value="" className="text-stone-800">Select a service</option>
                        <option value="building-design" className="text-stone-800">Building Design</option>
                        <option value="civil-work" className="text-stone-800">Civil Work Design</option>
                        <option value="construction" className="text-stone-800">Construction Work</option>
                        <option value="printing" className="text-stone-800">Printing Services</option>
                        <option value="training" className="text-stone-800">Software Training</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                    <input
                      type="text"
                      placeholder="How can we help you?"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your project, requirements, or any questions..."
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 transition-all text-white placeholder:text-gray-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-amber-600 to-yellow-600 text-white font-semibold py-4 rounded-xl hover:from-amber-700 hover:to-yellow-700 transition-all duration-300 shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transform hover:scale-[1.02]"
                  >
                    Send Message
                    <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* FAQ Hint */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400">
              Have questions? Check out our <button className="text-amber-400 hover:text-amber-300 font-semibold">FAQ page</button>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-6 h-6 text-amber-500" />
              <span className="text-white font-bold text-xl">Dir<span className="text-amber-500">Construction</span></span>
            </div>
            <p className="text-sm">Licensed consulting architects, engineering consultants, and general contractors.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-amber-500 transition">About Us</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">Our Projects</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">Services</a></li>
              <li><a href="#" className="hover:text-amber-500 transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Licenses</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-amber-500 transition">Consulting Architects</li>
              <li className="hover:text-amber-500 transition">Engineering Consultants</li>
              <li className="hover:text-amber-500 transition">General Contractors</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li>Hosanna, Central Ethiopia
                Regional State, Ethiopia</li>
              <li className="text-amber-500">dirdcplc@gmail.com</li>
              <li>+251 926344361</li>
            </ul>
          </div>
        </div>
        <div className="text-center pt-8 mt-8 border-t border-stone-800 text-sm">
          © {new Date().getFullYear()} Dir Design and Construction PLC. All rights reserved.
        </div>
      </footer>
    </div>
  );
}