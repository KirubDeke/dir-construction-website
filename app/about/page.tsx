'use client'

import { motion } from 'framer-motion'
import { 
  Building2, 
  Target, 
  Eye, 
  ShieldCheck, 
  Globe, 
  Users, 
  Award, 
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Rocket,
  Heart,
  Timer,
  Lightbulb,
  MessageSquare,
  Briefcase
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function AboutPage() {
  // Simple animation for the whole page entry
  const fadeIn: any = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  }

  const team = [
    {
      name: "TIGABU SHIGUTE CHAKISO",
      role: "GENERAL MANAGER",
      image: "/images/tigabu.jpg",
      color: "from-amber-500 to-orange-600"
    },
    {
      name: "TEWODROS ALEMAYEHU MANEBO",
      role: "ARCHITECT- III",
      image: "/images/tewedros.jpg",
      color: "from-blue-500 to-indigo-600"
    },
    {
      name: "EWUNETU WONDIMU DOLAMO",
      role: "QUANTITY SURVEYOR",
      image: "/images/ewnetu.jpg",
      color: "from-emerald-500 to-teal-600"
    },
     {
      name: "ELSA KEBEDE GEDAW ",
      role: "ACCOUNTANT",
      image: "/images/elsa.jpg",
      color: "from-amber-500 to-orange-600"
    },
    {
      name: "MELKAMU KASSIM AHMED",
      role: "ARCHITECT-II",
      image: "/images/melkamu.jpg",
      color: "from-blue-500 to-indigo-600"
    },
    {
      name: "TEKALIGN ERSIDO GETISO",
      role: "STRUCTURAL ENGINEER-III",
      image: "/images/tekalign.jpg",
      color: "from-emerald-500 to-teal-600"
    },
    {
      name: "MOHAMMED WAMOLO WOTEE",
      role: "HYDRAULIC ENGINEER",
      image: "/images/mohammed.jpg",
      color: "from-blue-500 to-indigo-600"
    }
  ]

  return (
    <div className="min-h-screen bg-white selection:bg-amber-200">
      <Navbar />
      
      <main>
        {/* Modern Hero Section */}
        <section className="relative pt-40 pb-32 overflow-hidden bg-stone-950">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-amber-500/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-orange-600/10 rounded-full blur-[120px] animate-pulse delay-700" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 text-left">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link 
                href="/" 
                className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-400 transition-all mb-12 font-bold uppercase tracking-widest text-xs group"
              >
                <div className="w-8 h-8 rounded-full border border-amber-500/30 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all">
                  <ArrowLeft className="w-4 h-4" />
                </div>
                Return Home
              </Link>
              <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
                Building <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-500">
                  Realities.
                </span>
              </h1>
              <p className="text-stone-400 text-xl md:text-2xl max-w-2xl leading-relaxed font-medium">
                We strive to realize your dream. Founded in 2025, Dir Design and Construction PLC is the heartbeat of urban transformation in Ethiopia.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Dynamic Philosophy Section */}
        <section className="py-24 relative overflow-hidden bg-white">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-50 -skew-x-6 translate-x-20 z-0" />
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full mb-6 border border-amber-100">
                  <Image 
                    src="/images/icon.png" 
                    alt="Dir Logo" 
                    width={20} 
                    height={20} 
                    unoptimized
                    className="object-contain" 
                  />
                  <span className="text-xs font-bold text-amber-800 uppercase tracking-widest">Our Philosophy</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-stone-900 mb-8 tracking-tight">
                  Design that builds <br /><span className="text-amber-600 underline decoration-amber-200 underline-offset-8">Trustworthiness.</span>
                </h2>
                <div className="space-y-6 text-stone-600 text-lg leading-relaxed">
                  <p>
                    Established on a broad field of experience and a highly skilled engineering team, we prioritize superior customer service and satisfaction. 
                    We continuously incorporate industry changes based on newly invented technologies.
                  </p>
                  <p className="font-semibold text-stone-900">
                    Our stress is on clear communication and rigorous follow-through procedures, ensuring our clients' objectives remain the absolute priority.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-50 rounded-[60px] relative overflow-hidden border border-amber-200/50 shadow-2xl flex items-center justify-center p-12">
                  <div className="relative w-full h-full">
                    <Image 
                      src="/images/icon.png" 
                      alt="Dir Construction Logo" 
                      fill
                      unoptimized
                      priority
                      className="object-contain opacity-90 group-hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                  {/* Floating badge */}
                  <div className="absolute bottom-10 left-10 right-10 bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-xl">
                    <p className="text-stone-800 italic text-lg leading-relaxed">
                      "One of our main objectives is to contribute to the development of modern infrastructure in Ethiopia."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-32 bg-stone-900 relative">
          <div className="max-w-7xl mx-auto px-6 text-left">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="group p-1 bg-gradient-to-br from-amber-400 to-orange-600 rounded-[50px] transition-transform hover:scale-[1.02]">
                <div className="bg-stone-950 p-12 rounded-[48px] h-full relative overflow-hidden">
                  <Target className="absolute -right-8 -top-8 w-48 h-48 text-amber-500/5 rotate-12" />
                  <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-amber-500/20">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-6">Our Mission</h3>
                  <p className="text-stone-400 text-xl leading-relaxed">
                    To provide aesthetic design and construction services based on current technology. We ensure growth 
                    aligned with the prosperity of our professionals and customers.
                  </p>
                </div>
              </div>
              <div className="group p-1 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-[50px] transition-transform hover:scale-[1.02]">
                <div className="bg-stone-950 p-12 rounded-[48px] h-full relative overflow-hidden">
                  <Eye className="absolute -right-8 -top-8 w-48 h-48 text-blue-500/5 rotate-12" />
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-500/20">
                    <Eye className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-6">Our Vision</h3>
                  <p className="text-stone-400 text-xl leading-relaxed">
                    Aiming for controlled growth and long-term profitability. We extend beyond design to create a 
                    tangible reality, facing obstacles without losing sight of our vision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MEET THE TEAM */}
        <section className="py-32 bg-stone-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-stone-200 rounded-full mb-6">
                <Users className="w-4 h-4 text-stone-600" />
                <span className="text-xs font-bold text-stone-800 uppercase tracking-widest">Our People</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-stone-900 mb-6 tracking-tight">Meet Our <span className="text-amber-600">Experts</span></h2>
              <p className="text-stone-500 text-xl max-w-2xl mx-auto text-center">
                Our enthusiastic team takes pride in finishing projects to the highest industry standards.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, i) => (
                <div key={i} className="group">
                  <div className="bg-white rounded-[40px] overflow-hidden border border-stone-200 shadow-sm transition-all hover:shadow-2xl hover:shadow-amber-900/10 hover:-translate-y-2">
                    <div className="aspect-[4/5] relative bg-stone-200 overflow-hidden">
                      <Image 
                        src={member.image} 
                        alt={member.name}
                        fill
                        unoptimized
                        priority={i < 3}
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${member.color} opacity-20 mix-blend-overlay group-hover:opacity-40 transition-opacity`} />
                    </div>
                    <div className="p-10 text-left">
                      <p className="text-amber-600 font-bold uppercase tracking-widest text-[10px] mb-2">{member.role}</p>
                      <h3 className="text-2xl font-black text-stone-900 mb-4">{member.name}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

              {/* Functional Coverage */}
        <section className="py-32 bg-stone-950 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.05)_0%,transparent_70%)]" />
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-left">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-left">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Functional <span className="text-amber-500">Coverage</span></h2>
                <p className="text-stone-400 text-lg">We offer expert services across every phase of civil engineering and construction management.</p>
              </div>
              <div className="flex gap-4">
                <div className="px-6 py-3 bg-white/5 rounded-2xl border border-white/10 text-white font-bold text-sm">Design</div>
                <div className="px-6 py-3 bg-amber-500 rounded-2xl text-stone-950 font-bold text-sm">Construction</div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Architectural Design", desc: "Functional and aesthetic masterpieces", icon: <CheckCircle2 /> },
                { title: "Engineering Design", desc: "Structural, electrical, and sanitary precision", icon: <CheckCircle2 /> },
                { title: "Quantity Survey", desc: "Accurate planning and hydraulic design", icon: <CheckCircle2 /> },
                { title: "Building Construction", desc: "Bringing architectural plans to life", icon: <CheckCircle2 /> },
                { title: "Bridge & Culvert", desc: "Infrastructure for connected communities", icon: <CheckCircle2 /> },
                { title: "Road Construction", desc: "Smooth paths for national growth", icon: <CheckCircle2 /> },
              ].map((item, i) => (
                <div key={i} className="p-8 bg-white border border-stone-200 rounded-3xl hover:shadow-xl transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 mb-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-stone-900 mb-2">{item.title}</h4>
                  <p className="text-stone-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety & Environment */}
        <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-stone-50 rounded-[60px] p-12 md:p-20 border border-stone-200 relative overflow-hidden text-left">
              <ShieldCheck className="absolute -right-20 -bottom-20 w-96 h-96 text-stone-100" />
              <div className="max-w-3xl relative z-10">
                <div className="w-20 h-20 bg-amber-100 rounded-3xl flex items-center justify-center text-amber-600 mb-10">
                  <ShieldCheck className="w-10 h-10" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-stone-900 mb-8 tracking-tight">Safety & <br />Environmental <span className="text-amber-600">Policy</span></h2>
                <div className="space-y-8 text-stone-600 text-lg leading-relaxed">
                  <p>
                    Dir Design and Construction PLC places a high priority on the safety and well-being of all its employees, clients, and guests. 
                    We intend to pursue excellence in the efficient health and safety management of all construction sites.
                  </p>
                  <div className="flex gap-8 border-t border-stone-200 pt-8 mt-8">
                    <div>
                      <p className="text-stone-900 font-black text-3xl mb-1">0%</p>
                      <p className="text-stone-500 text-sm uppercase tracking-widest font-bold">Incidents</p>
                    </div>
                    <div className="w-px h-12 bg-stone-200" />
                    <div>
                      <p className="text-stone-900 font-black text-3xl mb-1">100%</p>
                      <p className="text-stone-500 text-sm uppercase tracking-widest font-bold">Compliant</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
