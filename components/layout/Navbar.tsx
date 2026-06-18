import React from 'react'
import Link from 'next/link'
import { Menu, ChevronDown } from 'lucide-react'
import { getCategories } from '@/lib/actions/product-actions'
import { CartToggle } from './CartToggle'

export async function Navbar() {
  const categories = await getCategories()

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-foreground">
          AURA<span className="text-primary">.</span>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
          <Link href="/shop" className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-widest text-[11px] font-bold">Shop All</Link>
          
          {/* Categories Dropdown */}
          <div className="relative group">
            <button className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1 uppercase tracking-widest text-[11px] font-bold">
              Categories <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="bg-white border border-border shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl p-6 min-w-[240px] flex flex-col gap-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/60 px-2">Browse by Category</span>
                {categories.map((category) => (
                  <Link 
                    key={category.id} 
                    href={`/shop?category=${category.id}`}
                    className="text-xs font-bold uppercase tracking-widest text-muted hover:text-primary transition-colors"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
        </div>

        <div className="flex items-center gap-4">
          <CartToggle />
          <button className="md:hidden p-2 hover:bg-secondary rounded-full">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  )
}
