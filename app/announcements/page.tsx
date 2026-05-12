'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Megaphone, Calendar, AlertCircle, ArrowLeft, ArrowRight, Building2 } from 'lucide-react'
import { createClient } from '@/utils/supabase/client'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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

        <div className="pt-32 pb-24 px-6 max-w-5xl mx-auto relative z-10">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-stone-500 hover:text-amber-600 transition-colors mb-8 font-medium group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-amber-600 p-3.5 rounded-2xl text-white shadow-lg shadow-amber-600/20">
                <Megaphone className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold text-stone-900 tracking-tight">
                  Company <span className="text-amber-600">News</span>
                </h1>
                <p className="text-stone-400 font-bold uppercase tracking-widest text-xs mt-2">
                  Stay informed with Dir Construction
                </p>
              </div>
            </div>

            <p className="text-stone-600 text-lg max-w-2xl leading-relaxed">
              From project breakthroughs to company updates, here is everything happening at Dir Design and Construction PLC.
            </p>
          </motion.div>

          {/* Announcements List */}
          <div className="space-y-10">
            {isLoading ? (
              [1, 2, 3].map((i) => (
                <div key={i} className="h-64 bg-white rounded-3xl animate-pulse shadow-sm border border-stone-100" />
              ))
            ) : announcements.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group bg-white rounded-[32px] overflow-hidden border shadow-sm transition-all hover:shadow-xl hover:shadow-stone-200/50 ${
                  item.is_urgent ? 'border-amber-200 ring-1 ring-amber-100' : 'border-stone-100'
                }`}
              >
                <div className="flex flex-col md:flex-row min-h-[320px]">
                  {item.image_url && (
                    <div className="md:w-2/5 relative h-64 md:h-auto overflow-hidden">
                      <img 
                        src={item.image_url} 
                        alt={item.title} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  )}
                  <div className={`p-10 flex-1 flex flex-col ${!item.image_url ? 'md:max-w-3xl' : ''}`}>
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                      <div className="flex items-center gap-2 text-stone-400 text-sm font-semibold">
                        <Calendar className="w-4 h-4" />
                        {new Date(item.created_at).toLocaleDateString('en-US', { 
                          month: 'long', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </div>
                      {item.is_urgent && (
                        <span className="bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1.5 border border-red-100">
                          <AlertCircle className="w-3 h-3" />
                          Urgent Notice
                        </span>
                      )}
                    </div>
                    
                    <h2 className="text-3xl font-bold text-stone-800 mb-4 group-hover:text-amber-600 transition-colors leading-tight">
                      {item.title}
                    </h2>
                    
                    <p className="text-stone-600 leading-relaxed whitespace-pre-wrap flex-grow mb-8 text-lg">
                      {item.content}
                    </p>

                    <div className="pt-6 border-t border-stone-100 flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                        Official Announcement
                      </span>
                      <Building2 className="w-5 h-5 text-amber-600/30" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {announcements.length === 0 && !isLoading && (
              <div className="text-center py-24 bg-white rounded-[32px] border border-stone-200 border-dashed">
                <div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-6 text-stone-300">
                  <Megaphone className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-2">No News Yet</h3>
                <p className="text-stone-400">Check back later for the latest updates from our team.</p>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
