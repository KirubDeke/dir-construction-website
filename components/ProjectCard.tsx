'use client'

import { motion } from 'framer-motion'
import { Building2, ArrowRight } from 'lucide-react'
import Image from 'next/image'

interface ProjectCardProps {
  project: {
    id: string
    title: string
    category: string
    description: string
    image_url: string
  }
  index: number
  onViewDetails: (project: any) => void
}

export default function ProjectCard({ project, index, onViewDetails }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group h-full cursor-pointer"
      onClick={() => onViewDetails(project)}
    >
      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-amber-500/30 transition-all duration-300 h-full flex flex-col">
        {/* Project Image */}
        <div className="relative h-56 w-full overflow-hidden bg-stone-800">
          {project.image_url ? (
            <img 
              src={project.image_url} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <Building2 className="w-16 h-16 text-amber-400/30" />
            </div>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

          {/* Category Badge */}
          <span className="absolute top-4 right-4 bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
            {project.category}
          </span>
        </div>

        {/* Project Info */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors text-left">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 text-left">
            {project.description}
          </p>

          {/* Project Details */}
          <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
            <button className="flex items-center gap-2 text-amber-400 text-sm font-semibold hover:text-amber-300 transition-colors">
              <span>View Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <span className="text-[10px] text-gray-500 font-medium uppercase">DIR CONSTRUCTION</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
