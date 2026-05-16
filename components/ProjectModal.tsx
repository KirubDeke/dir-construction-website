'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Building2, Tag, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface ProjectModalProps {
  project: {
    id: string
    title: string
    category: string
    description: string
    image_url: string
    image_urls?: string[]
    created_at?: string
  } | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  // Reset image index when modal opens or project changes
  useEffect(() => {
    setActiveImageIndex(0)
  }, [project, isOpen])

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

  const images = project.image_urls && project.image_urls.length > 0 
    ? project.image_urls 
    : project.image_url ? [project.image_url] : []

  return (
    <AnimatePresence mode="wait">
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
            className="relative w-full max-w-6xl bg-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors border border-white/10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left: Image Side */}
            <div className="md:w-3/5 lg:w-2/3 relative h-80 md:h-auto bg-stone-800 flex flex-col">
              <div className="relative flex-grow">
                {images.length > 0 ? (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeImageIndex}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <Image 
                        src={images[activeImageIndex]} 
                        alt={`${project.title} - Image ${activeImageIndex + 1}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 66vw"
                        className="object-cover"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building2 className="w-24 h-24 text-amber-400/20" />
                  </div>
                )}
                
                {/* Navigation Arrows for Slider */}
                {images.length > 1 && (
                  <>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation()
                        setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/60 text-white rounded-full backdrop-blur-sm transition-all border border-white/10 z-10"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation()
                        setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/60 text-white rounded-full backdrop-blur-sm transition-all border border-white/10 z-10"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="p-4 bg-stone-950/50 backdrop-blur-md border-t border-white/5 flex gap-2 overflow-x-auto no-scrollbar">
                  {images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 h-14 rounded-lg overflow-hidden flex-shrink-0 transition-all border-2 ${
                        activeImageIndex === idx ? 'border-amber-500 scale-105 shadow-lg shadow-amber-500/20' : 'border-transparent opacity-50 hover:opacity-100'
                      }`}
                    >
                      <Image 
                        src={img} 
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Info Side */}
            <div className="md:w-2/5 lg:w-1/3 p-8 md:p-10 overflow-y-auto bg-stone-900">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 rounded-full px-4 py-1.5 mb-6 border border-amber-500/20">
                <Tag className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  {project.category}
                </span>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6 leading-tight">
                {project.title}
              </h2>

              <div className="space-y-6 text-gray-300">
                <div className="prose prose-invert max-w-none">
                  <p className="leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>

                <div className="pt-8 mt-8 border-t border-white/10 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Project Type</span>
                    <span className="text-white font-medium">{project.category}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Industry</span>
                    <span className="text-white font-medium">Construction & Design</span>
                  </div>
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
