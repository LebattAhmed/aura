'use server'

import prisma from '@/lib/prisma'
import { Product, Category } from "../../app/generated/prisma/client"

export type ProductWithCategory = Product & {
  category: Pick<Category, 'name'>
}

export async function getFeaturedProducts(): Promise<ProductWithCategory[]> {
  try {
    return await prisma.product.findMany({
      where: { isFeatured: true },
      include: { category: true },
    }) as unknown as ProductWithCategory[]
  } catch (error) {
    console.error('Error fetching featured products:', error)
    return []
  }
}

export async function getBestSellers(): Promise<ProductWithCategory[]> {
  try {
    return await prisma.product.findMany({
      where: { isBestSeller: true },
      include: { category: true },
      take: 8,
    }) as unknown as ProductWithCategory[]
  } catch (error) {
    console.error('Error fetching best sellers:', error)
    return []
  }
}

export async function getAllProducts(page: number = 1, limit: number = 16, categoryId?: string) {
  try {
    const skip = (page - 1) * limit;
    
    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where: categoryId ? { categoryId } : {},
        include: { category: true },
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      prisma.product.count({
        where: categoryId ? { categoryId } : {},
      })
    ]);

    return {
      products: products as unknown as ProductWithCategory[],
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: page
    }
  } catch (error) {
    console.error('Error fetching products:', error)
    return { products: [], total: 0, totalPages: 0, currentPage: 1 }
  }
}

export async function getProductBySlug(slug: string): Promise<ProductWithCategory | null> {
  try {
    return await prisma.product.findUnique({
      where: { slug },
      include: { category: true },
    }) as unknown as ProductWithCategory | null
  } catch (error) {
    console.error('Error fetching product by slug:', error)
    return null
  }
}

export async function getCategories() {
  try {
    return await prisma.category.findMany()
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}
