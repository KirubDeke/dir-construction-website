'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Building2, Tag } from 'lucide-react'
import Image from 'next/image'
import { useEffect } from 'react'

interface ProjectModalProps {
  project: {
    id: string
    title: string
    category: string
    description: string
    image_url: string
    created_at?: string
  } | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-stone-950/90 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-5xl bg-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors border border-white/10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left: Image Side */}
            <div className="md:w-3/5 relative h-64 md:h-auto bg-stone-800">
              {project.image_url ? (
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Building2 className="w-24 h-24 text-amber-400/20" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent md:bg-gradient-to-r" />
            </div>

            {/* Right: Info Side */}
            <div className="md:w-2/5 p-8 md:p-12 overflow-y-auto">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 rounded-full px-4 py-1.5 mb-6 border border-amber-500/20">
                <Tag className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  {project.category}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {project.title}
              </h2>

              <div className="space-y-6 text-gray-300">
                <div className="prose prose-invert max-w-none">
                  <p className="leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>

                <button 
                  onClick={onClose}
                  className="w-full mt-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-2xl transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
                >
                  Close Details
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
