'use client'

import React from 'react'
import Link from 'next/link'
import { ShoppingCart, Eye } from 'lucide-react'
import { useCart } from '@/context/cart-context'
import { motion } from 'framer-motion'

interface ProductCardProps {
  product: {
    id: string
    name: string
    slug: string
    price: number
    images: string[]
    category: { name: string }
  }
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative aspect-4/5 bg-secondary rounded-2xl overflow-hidden mb-4">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Hover Actions */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          <button 
            onClick={() => addItem({
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.images[0],
              quantity: 1
            })}
            className="p-3 bg-white text-foreground rounded-full shadow-lg hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
          <Link 
            href={`/product/${product.slug}`}
            className="p-3 bg-white text-foreground rounded-full shadow-lg hover:bg-primary hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 delay-75 duration-300"
          >
            <Eye className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <div className="space-y-1 px-1">
        <p className="text-[10px] uppercase font-bold tracking-widest text-muted">{product.category.name}</p>
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-base group-hover:text-primary transition-colors">{product.name}</h3>
          <p className="font-bold text-lg">${product.price}</p>
        </div>
      </div>
    </motion.div>
  )
}
