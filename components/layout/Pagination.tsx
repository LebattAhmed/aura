'use client'

import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
  totalPages: number
  currentPage: number
  baseUrl: string
  searchParams?: { [key: string]: string | string[] | undefined }
}

export function Pagination({ totalPages, currentPage, baseUrl, searchParams }: PaginationProps) {
  if (totalPages <= 1) return null

  const createPageUrl = (page: number) => {
    const params = new URLSearchParams()
    if (searchParams) {
      Object.entries(searchParams).forEach(([key, value]) => {
        if (value && key !== 'page') {
          params.set(key, String(value))
        }
      })
    }
    params.set('page', String(page))
    return `${baseUrl}?${params.toString()}`
  }

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  
  // Logic to show a limited window of pages if there are many
  const visiblePages = pages.filter(page => {
    if (totalPages <= 7) return true
    if (page === 1 || page === totalPages) return true
    return Math.abs(page - currentPage) <= 1
  })

  return (
    <nav className="flex items-center justify-center gap-2 mt-20" aria-label="Pagination Navigation">
      <Link
        href={createPageUrl(currentPage - 1)}
        className={`p-3 rounded-full border border-border transition-all duration-300 ${
          currentPage <= 1 
            ? 'opacity-30 cursor-not-allowed pointer-events-none' 
            : 'hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-sm'
        }`}
        aria-disabled={currentPage <= 1}
      >
        <ChevronLeft className="w-5 h-5" />
      </Link>

      <div className="flex items-center gap-1">
        {visiblePages.map((page, index) => {
          const showEllipsis = index > 0 && page - visiblePages[index - 1] > 1

          return (
            <React.Fragment key={page}>
              {showEllipsis && (
                <span className="px-3 text-muted-foreground font-bold">...</span>
              )}
              <Link
                href={createPageUrl(page)}
                className={`w-12 h-12 flex items-center justify-center rounded-full text-xs font-black transition-all duration-300 border ${
                  currentPage === page
                    ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-110'
                    : 'bg-white text-foreground border-border hover:bg-secondary hover:scale-105'
                }`}
              >
                {String(page).padStart(2, '0')}
              </Link>
            </React.Fragment>
          )
        })}
      </div>

      <Link
        href={createPageUrl(currentPage + 1)}
        className={`p-3 rounded-full border border-border transition-all duration-300 ${
          currentPage >= totalPages 
            ? 'opacity-30 cursor-not-allowed pointer-events-none' 
            : 'hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-sm'
        }`}
        aria-disabled={currentPage >= totalPages}
      >
        <ChevronRight className="w-5 h-5" />
      </Link>
    </nav>
  )
}

import React from 'react'
