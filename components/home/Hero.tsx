'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl mx-auto"
        >
          <span className="font-bold tracking-widest text-xs uppercase mb-6 block drop-shadow-md text-primary">Curated Collection 2026</span>
          <h1 className="text-5xl md:text-8xl font-bold mb-8 text-white leading-tight drop-shadow-xl">
            Elevate Your <br />
            <span className="italic font-light text-white/90">Living</span> Space.
          </h1>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto text-balance drop-shadow-md">
            Discover our curated collection of luxury furniture pieces designed to bring elegance and comfort to your modern lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href="/shop" 
              className="w-full sm:w-auto px-10 py-5 bg-primary text-primary-foreground rounded-full font-bold flex items-center justify-center gap-2 hover:bg-primary/90 hover:scale-105 transition-all duration-300 group shadow-2xl"
            >
              Explore Shop
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/about" 
              className="text-white text-sm font-bold border-b-2 border-white/50 pb-1 hover:border-white transition-all duration-300"
            >
              Our Story
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
        <div className="w-px h-12 bg-linear-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  )
}
