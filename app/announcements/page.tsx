'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Megaphone, Calendar, AlertCircle, ArrowLeft, ArrowRight, Building2 } from 'lucide-react'
import { createClient } from '@/utils/supabase/client'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react'

// Component for a single announcement with its own gallery state
function AnnouncementCard({ item, i }: { item: any, i: number }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  
  const images = item.image_urls && item.image_urls.length > 0 
    ? item.image_urls 
    : item.image_url ? [item.image_url] : []

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: i * 0.1 }}
      className={`group bg-white rounded-[32px] overflow-hidden border shadow-sm transition-all hover:shadow-xl hover:shadow-stone-200/50 ${
        item.is_urgent ? 'border-amber-200 ring-1 ring-amber-100' : 'border-stone-100'
      }`}
    >
      <div className="flex flex-col lg:flex-row">
        {images.length > 0 && (
          <div className="lg:w-[45%] relative h-[350px] lg:h-auto overflow-hidden bg-stone-100 flex-shrink-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image 
                  src={images[activeImageIndex]} 
                  alt={item.title} 
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            </AnimatePresence>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-transparent pointer-events-none" />

            {/* Gallery Navigation */}
            {images.length > 1 && (
              <>
                <div className="absolute inset-x-0 bottom-6 flex justify-center gap-1.5 z-20">
                  {images.map((_: any, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`h-1.5 rounded-full transition-all ${
                        activeImageIndex === idx ? 'w-6 bg-amber-500' : 'w-1.5 bg-white/50 hover:bg-white'
                      }`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={() => setActiveImageIndex(prev => prev === 0 ? images.length - 1 : prev - 1)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all border border-white/10"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setActiveImageIndex(prev => prev === images.length - 1 ? 0 : prev + 1)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all border border-white/10"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-2 border border-white/10">
                  <ImageIcon className="w-3 h-3" />
                  {activeImageIndex + 1} / {images.length}
                </div>
              </>
            )}
          </div>
        )}
        <div className={`p-8 lg:p-12 flex-1 flex flex-col justify-center ${images.length === 0 ? 'lg:max-w-4xl' : ''}`}>
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center gap-2 text-stone-400 text-sm font-bold tracking-tight">
              <Calendar className="w-4 h-4" />
              {new Date(item.created_at).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </div>
            {item.is_urgent && (
              <span className="bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full flex items-center gap-2 border border-red-100 animate-pulse">
                <AlertCircle className="w-3.5 h-3.5" />
                Urgent Notice
              </span>
            )}
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-stone-800 mb-6 group-hover:text-amber-600 transition-colors leading-[1.1]">
            {item.title}
          </h2>
          
          <p className="text-stone-600 leading-relaxed whitespace-pre-wrap mb-8 text-lg">
            {item.content}
          </p>

          <div className="pt-8 border-t border-stone-100 flex items-center justify-between mt-auto">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-sm">
                DR
              </div>
              <div>
                <span className="text-xs font-bold text-stone-800 block">Dir Construction</span>
                <span className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">Official Press</span>
              </div>
            </div>
            <Building2 className="w-6 h-6 text-amber-600/20" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    async function fetchAnnouncements() {
      const { data, error } = await supabase
        .from('announcements')
        .select('*')
        .order('created_at', { ascending: false })
      
      if (data) setAnnouncements(data)
      setIsLoading(false)
    }
    fetchAnnouncements()
  }, [])

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      
      <main className="flex-1 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-[600px] bg-amber-100/30 -skew-x-12 translate-x-1/4 pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-yellow-100/20 rounded-full blur-3xl pointer-events-none" />

        <div className="pt-32 pb-24 px-6 max-w-6xl mx-auto relative z-10">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20"
          >
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-stone-500 hover:text-amber-600 transition-colors mb-10 font-bold text-sm group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              BACK TO HOME
            </Link>
            
            <div className="flex items-center gap-6 mb-8">
              <div className="bg-amber-600 p-4 rounded-2xl text-white shadow-xl shadow-amber-600/30">
                <Megaphone className="w-10 h-10" />
              </div>
              <div>
                <h1 className="text-5xl md:text-7xl font-bold text-stone-900 tracking-tight">
                  Company <span className="text-amber-600">News</span>
                </h1>
                <p className="text-stone-400 font-bold uppercase tracking-[0.2em] text-[10px] mt-2">
                  OFFICIAL UPDATES FROM DIR CONSTRUCTION
                </p>
              </div>
            </div>

            <p className="text-stone-600 text-xl max-w-2xl leading-relaxed">
              From project breakthroughs to company updates, here is everything happening at Dir Design and Construction PLC.
            </p>
          </motion.div>

          {/* Announcements List */}
          <div className="space-y-12">
            {isLoading ? (
              [1, 2, 3].map((i) => (
                <div key={i} className="h-96 bg-white rounded-[32px] animate-pulse shadow-sm border border-stone-100" />
              ))
            ) : announcements.map((item, i) => (
              <AnnouncementCard key={item.id} item={item} i={i} />
            ))}

            {announcements.length === 0 && !isLoading && (
              <div className="text-center py-32 bg-white rounded-[40px] border border-stone-200 border-dashed">
                <div className="w-24 h-24 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-8 text-stone-300">
                  <Megaphone className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold text-stone-800 mb-3">No News Yet</h3>
                <p className="text-stone-400 text-lg">Check back later for the latest updates from our team.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
