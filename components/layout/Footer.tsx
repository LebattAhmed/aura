import React from 'react'
import Link from 'next/link'
import { Mail, Globe, Share2 } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-3xl font-bold tracking-tighter mb-6 block">
              AURA<span className="text-primary">.</span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              We create luxury living spaces with curated furniture pieces that blend timeless elegance with modern comfort.
            </p>
            <div className="flex gap-4 text-zinc-400">
              <Globe className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
              <Share2 className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/shop" className="hover:text-white transition-colors">Shop All</Link></li>
              <li><Link href="/collection" className="hover:text-white transition-colors">Collections</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">Our Story</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs">Support</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li><Link href="/shipping" className="hover:text-white transition-colors">Shipping Info</Link></li>
              <li><Link href="/returns" className="hover:text-white transition-colors">Returns & Exchanges</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-xs">Join our Newsletter</h4>
            <p className="text-sm text-zinc-400 mb-6">Receive design inspiration and exclusive offers.</p>
            <div className="flex border-b border-zinc-700 pb-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-none outline-none text-sm w-full"
              />
              <button className="text-primary font-bold"><Mail className="w-5 h-5" /></button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-zinc-500 uppercase tracking-widest">
          <p>© 2026 AURA. All Rights Reserved.</p>
          <div className="flex gap-8">
            <span className="cursor-pointer hover:text-white">Privacy Policy</span>
            <span className="cursor-pointer hover:text-white">Terms of Service</span>
            <span className="cursor-pointer hover:text-white">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
