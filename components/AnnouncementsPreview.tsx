'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Megaphone, ArrowRight, Calendar, AlertCircle } from 'lucide-react'
import { createClient } from '@/utils/supabase/client'
import Link from 'next/link'

export default function AnnouncementsPreview() {
  const [latest, setLatest] = useState<any>(null)
  const supabase = createClient()

  useEffect(() => {
    async function fetchLatest() {
      const { data } = await supabase
        .from('announcements')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1)
        .single()
      
      if (data) setLatest(data)
    }
    fetchLatest()
  }, [])

  if (!latest) return null

  return (
    <section id="announcements" className="relative px-6 py-24 overflow-hidden bg-white">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-50/50 -skew-x-12 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Section Header Side */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-amber-100 rounded-full px-4 py-2 mb-6">
                <Megaphone className="w-4 h-4 text-amber-600" />
                <span className="text-sm font-medium text-amber-700">Stay Updated</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">
                Latest News & 
                <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent block">
                  Announcements
                </span>
              </h2>

              <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                Keep up with our latest project milestones, company news, and important updates from the field.
              </p>

              <Link 
                href="/announcements"
                className="inline-flex items-center gap-2 px-8 py-3 bg-stone-900 text-white font-semibold rounded-xl hover:bg-stone-800 transition-all shadow-lg group"
              >
                <span>View All News</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          {/* Latest Announcement Card Side */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className={`relative bg-white rounded-3xl p-8 md:p-10 shadow-xl border ${latest.is_urgent ? 'border-amber-200 ring-4 ring-amber-50' : 'border-stone-100'}`}>
                
                {/* Decoration */}
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Megaphone className="w-32 h-32 text-amber-600 rotate-12" />
                </div>

                <div className="relative z-10">
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-stone-400 text-sm font-medium">
                      <Calendar className="w-4 h-4" />
                      {new Date(latest.created_at).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </div>
                    {latest.is_urgent && (
                      <span className="bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full flex items-center gap-1.5 border border-red-100 animate-pulse">
                        <AlertCircle className="w-3 h-3" />
                        Urgent
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-stone-800 mb-4 group-hover:text-amber-600 transition-colors">
                    {latest.title}
                  </h3>

                  <p className="text-stone-600 text-lg leading-relaxed mb-8 line-clamp-3">
                    {latest.content}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-stone-100">
                    <Link 
                      href="/announcements"
                      className="text-amber-600 font-bold hover:text-amber-700 transition-colors inline-flex items-center gap-2"
                    >
                      Read Full Story
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <span className="text-[10px] text-stone-400 font-bold uppercase tracking-widest">
                      Latest Entry
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
