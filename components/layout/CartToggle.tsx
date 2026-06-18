'use client'

import React, { useState } from 'react'
import { ShoppingBag, X } from 'lucide-react'
import { useCart } from '@/context/cart-context'
import { motion, AnimatePresence } from 'framer-motion'

export function CartToggle() {
  const { totalItems, items, totalPrice } = useCart()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button 
        onClick={() => setIsCartOpen(true)}
        className="flex items-center gap-3 px-4 py-2 bg-secondary/50 hover:bg-secondary border border-border/50 rounded-full transition-all duration-300 group shadow-sm active:scale-95"
      >
        <div className="relative">
          <ShoppingBag className="w-5 h-5 group-hover:text-primary transition-colors duration-300" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-primary text-primary-foreground text-[8px] font-bold flex items-center justify-center rounded-full animate-in zoom-in duration-300">
              {totalItems}
            </span>
          )}
        </div>
        <span className="text-xs font-bold uppercase tracking-widest hidden sm:block">Cart</span>
      </button>

      {/* Hover Preview Card */}
      <AnimatePresence>
        {isHovered && !isCartOpen && totalItems > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full right-0 pt-4 z-[60] w-80 hidden md:block"
          >
            <div className="bg-white border border-border shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-2xl p-5 overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Quick View</span>
                <span className="text-[10px] text-muted font-bold uppercase tracking-widest">{totalItems} Items</span>
              </div>
              
              <div className="space-y-4 mb-6">
                {items.slice(0, 3).map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <div className="w-12 h-14 bg-secondary/30 rounded-lg overflow-hidden shrink-0 border border-border/20">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0 py-1">
                      <h4 className="text-[11px] font-bold truncate leading-tight uppercase tracking-tight">{item.name}</h4>
                      <p className="text-[10px] text-muted-foreground font-medium mt-0.5">${item.price}</p>
                    </div>
                  </div>
                ))}
                {items.length > 3 && (
                  <p className="text-[10px] text-muted-foreground text-center italic mt-2">+ {items.length - 3} more items</p>
                )}
              </div>

              <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-muted font-bold uppercase tracking-widest leading-none mb-1">Total</p>
                  <p className="text-sm font-bold">${totalPrice}</p>
                </div>
                <button 
                  onClick={() => setIsCartOpen(true)}
                  className="px-6 py-2 bg-foreground text-background text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  View Cart
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  )
}

function CartDrawer({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const { items, removeItem, updateQuantity, totalPrice } = useCart()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-screen w-screen max-w-md bg-white z-[100] shadow-[-20px_0_60px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden"
          >
            <div className="p-8 border-b border-border bg-white flex items-center justify-between sticky top-0 z-10">
              <div>
                <h2 className="text-2xl font-black uppercase tracking-tighter">Your <span className="italic font-light text-primary">Cart</span></h2>
                <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold mt-1">Curated Selection</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2.5 hover:bg-secondary rounded-full transition-all duration-300 hover:rotate-90"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar bg-white">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <ShoppingBag className="w-12 h-12 text-muted mb-6 opacity-10" />
                  <p className="text-muted text-xs px-12 leading-relaxed uppercase tracking-widest font-medium">Your sanctuary is waiting to be filled.</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="group flex gap-5 items-center">
                    <div className="w-20 h-24 bg-secondary/30 rounded-2xl overflow-hidden shrink-0 border border-border/10 shadow-sm group-hover:shadow-md transition-all duration-500">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-between h-24 py-1">
                      <div>
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="text-xs font-black uppercase tracking-tight group-hover:text-primary transition-colors truncate">{item.name}</h3>
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-muted hover:text-red-500 transition-colors p-1"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <p className="text-[10px] text-muted-foreground font-bold tracking-wide">${item.price}</p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 bg-secondary/50 rounded-full px-3 py-1 border border-border/10">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="text-muted hover:text-primary transition-colors font-bold text-sm"
                          >-</button>
                          <span className="text-[10px] font-black w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="text-muted hover:text-primary transition-colors font-bold text-sm"
                          >+</button>
                        </div>
                        <p className="text-sm font-black tracking-tighter">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-8 bg-zinc-50 border-t border-border shadow-[0_-10px_30px_rgba(0,0,0,0.03)] space-y-6 sticky bottom-0">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    <span>Subtotal</span>
                    <span className="text-foreground tracking-normal text-xs font-black">${totalPrice}</span>
                  </div>
                  <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    <span>Shipping</span>
                    <span className="text-primary tracking-widest text-[10px] font-black italic">Free</span>
                  </div>
                  <div className="pt-4 flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-[0.1em]">Total Order</span>
                    <span className="text-3xl font-black tracking-tighter">${totalPrice}</span>
                  </div>
                </div>

                <button className="w-full py-5 bg-foreground text-background rounded-full font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-primary hover:text-primary-foreground transition-all duration-500 shadow-xl shadow-foreground/10 hover:shadow-primary/20 hover:scale-[1.02] active:scale-[0.98]">
                  Proceed to Checkout
                </button>
                
                <div className="flex items-center justify-center gap-2 text-[8px] text-muted-foreground uppercase tracking-[0.2em] font-bold opacity-60">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  Free shipping worldwide
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
