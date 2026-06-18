'use client'

import React, { useState } from 'react'
import { ShoppingCart, Minus, Plus } from 'lucide-react'
import { useCart } from '@/context/cart-context'
import { motion } from 'framer-motion'

interface AddToCartButtonProps {
  product: {
    id: string
    name: string
    price: number
    images: string[]
  }
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: quantity
    })
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-6">
        <div className="flex items-center border border-border rounded-xl px-4 py-2">
          <button 
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-1 hover:text-primary transition-colors"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-12 text-center font-bold">{quantity}</span>
          <button 
            onClick={() => setQuantity(quantity + 1)}
            className="p-1 hover:text-primary transition-colors"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
        
        <button 
          onClick={handleAdd}
          className="flex-1 py-4 bg-primary text-primary-foreground rounded-xl font-bold flex items-center justify-center gap-3 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 active:scale-95"
        >
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>
      </div>
    </div>
  )
}
