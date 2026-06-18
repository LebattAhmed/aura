import prisma from '@/lib/prisma'

async function main() {
  // Clear existing data
  await prisma.product.deleteMany()
  await prisma.category.deleteMany()

  // Create Categories
  const livingRoom = await prisma.category.create({
    data: {
      name: 'Living Room',
      slug: 'living-room',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop',
    },
  })

  const bedroom = await prisma.category.create({
    data: {
      name: 'Bedroom',
      slug: 'bedroom',
      image: 'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=2070&auto=format&fit=crop',
    },
  })

  const office = await prisma.category.create({
    data: {
      name: 'Office',
      slug: 'office',
      image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop',
    },
  })

  const electronics = await prisma.category.create({
    data: {
      name: 'Electronics',
      slug: 'electronics',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=2070&auto=format&fit=crop',
    },
  })

  const kitchen = await prisma.category.create({
    data: {
      name: 'Kitchen',
      slug: 'kitchen',
      image: 'https://images.unsplash.com/photo-1556911220-e15224bbafb0?q=80&w=2070&auto=format&fit=crop',
    },
  })

  const decor = await prisma.category.create({
    data: {
      name: 'Decor',
      slug: 'decor',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop',
    },
  })

  // Create Products
  const products = [
    // Living Room
    {
      name: 'Velvet Sofa',
      slug: 'velvet-sofa',
      description: 'A luxurious velvet sofa that adds elegance to any living room.',
      price: 1200,
      images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop'],
      categoryId: livingRoom.id,
      stock: 5,
      isFeatured: true,
      isBestSeller: true,
    },
    {
      name: 'Scandinavian Armchair',
      slug: 'scandinavian-armchair',
      description: 'Minimalist armchair with premium oak legs and soft fabric.',
      price: 450,
      images: ['https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=1974&auto=format&fit=crop'],
      categoryId: livingRoom.id,
      stock: 12,
      isFeatured: true,
      isBestSeller: false,
    },
    {
      name: 'Modern Coffee Table',
      slug: 'modern-coffee-table',
      description: 'Sleek glass and metal coffee table for a contemporary look.',
      price: 280,
      images: ['https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2070&auto=format&fit=crop'],
      categoryId: livingRoom.id,
      stock: 15,
      isFeatured: false,
      isBestSeller: true,
    },
    {
      name: 'Marble Side Table',
      slug: 'marble-side-table',
      description: 'Elegant side table with a solid marble top and gold-finished legs.',
      price: 350,
      images: ['https://images.unsplash.com/photo-1532372320978-9b4d1a128559?q=80&w=1974&auto=format&fit=crop'],
      categoryId: livingRoom.id,
      stock: 8,
      isFeatured: false,
      isBestSeller: false,
    },
    {
      name: 'Leather Ottoman',
      slug: 'leather-ottoman',
      description: 'Handcrafted leather ottoman that doubles as a footrest or extra seating.',
      price: 220,
      images: ['https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1974&auto=format&fit=crop'],
      categoryId: livingRoom.id,
      stock: 10,
      isFeatured: false,
      isBestSeller: true,
    },

    // Bedroom
    {
      name: 'Minimalist Bed Frame',
      slug: 'minimalist-bed-frame',
      description: 'Clean lines and sturdy construction for a restful sleep.',
      price: 850,
      images: ['https://images.unsplash.com/photo-1505691938895-1758d7eaa511?q=80&w=2070&auto=format&fit=crop'],
      categoryId: bedroom.id,
      stock: 8,
      isFeatured: false,
      isBestSeller: true,
    },
    {
      name: 'Oak Nightstand',
      slug: 'oak-nightstand',
      description: 'Handcrafted oak nightstand with two spacious drawers.',
      price: 180,
      images: ['https://images.unsplash.com/photo-1532372320978-9b4d1a128559?q=80&w=1974&auto=format&fit=crop'],
      categoryId: bedroom.id,
      stock: 20,
      isFeatured: true,
      isBestSeller: false,
    },
    {
      name: 'Tufted Headboard',
      slug: 'tufted-headboard',
      description: 'A plush, tufted headboard that adds a touch of class to your bedroom.',
      price: 380,
      images: ['https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop'],
      categoryId: bedroom.id,
      stock: 6,
      isFeatured: false,
      isBestSeller: false,
    },
    {
      name: 'Cotton Bedding Set',
      slug: 'cotton-bedding-set',
      description: 'Ultra-soft, 1000 thread count Egyptian cotton bedding for ultimate comfort.',
      price: 150,
      images: ['https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop'],
      categoryId: bedroom.id,
      stock: 25,
      isFeatured: false,
      isBestSeller: true,
    },
    {
      name: 'Walnut Wardrobe',
      slug: 'walnut-wardrobe',
      description: 'Spacious walnut wardrobe with integrated mirrors and soft-close doors.',
      price: 1400,
      images: ['https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1974&auto=format&fit=crop'],
      categoryId: bedroom.id,
      stock: 3,
      isFeatured: true,
      isBestSeller: false,
    },

    // Office
    {
      name: 'Oak Desk',
      slug: 'oak-desk',
      description: 'Solid oak desk with a spacious surface for maximum productivity.',
      price: 600,
      images: ['https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop'],
      categoryId: office.id,
      stock: 10,
      isFeatured: true,
      isBestSeller: true,
    },
    {
      name: 'Ergonomic Office Chair',
      slug: 'ergonomic-office-chair',
      description: 'High-back ergonomic chair with lumbar support and adjustable armrests.',
      price: 320,
      images: ['https://images.unsplash.com/photo-1589384273441-c5aa2e63ef0e?q=80&w=2070&auto=format&fit=crop'],
      categoryId: office.id,
      stock: 25,
      isFeatured: false,
      isBestSeller: true,
    },
    {
      name: 'Bookshelf Unit',
      slug: 'bookshelf-unit',
      description: 'Large modular bookshelf unit with adjustable heights for all your books.',
      price: 450,
      images: ['https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1974&auto=format&fit=crop'],
      categoryId: office.id,
      stock: 12,
      isFeatured: false,
      isBestSeller: false,
    },
    {
      name: 'Desk Lamp',
      slug: 'desk-lamp',
      description: 'Modern LED desk lamp with adjustable brightness and color temperature.',
      price: 85,
      images: ['https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=1974&auto=format&fit=crop'],
      categoryId: office.id,
      stock: 30,
      isFeatured: false,
      isBestSeller: false,
    },
    {
      name: 'File Cabinet',
      slug: 'file-cabinet',
      description: 'Sturdy 3-drawer file cabinet with a built-in lock for security.',
      price: 210,
      images: ['https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=1974&auto=format&fit=crop'],
      categoryId: office.id,
      stock: 15,
      isFeatured: false,
      isBestSeller: false,
    },

    // Electronics
    {
      name: 'Smartphone Pro Max',
      slug: 'smartphone-pro-max',
      description: 'The ultimate smartphone with a stunning display and advanced camera system.',
      price: 1099,
      images: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2080&auto=format&fit=crop'],
      categoryId: electronics.id,
      stock: 20,
      isFeatured: true,
      isBestSeller: true,
    },
    {
      name: 'Laptop Ultra Slim',
      slug: 'laptop-ultra-slim',
      description: 'Powerful and portable laptop for professionals on the go.',
      price: 1499,
      images: ['https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop'],
      categoryId: electronics.id,
      stock: 15,
      isFeatured: true,
      isBestSeller: false,
    },
    {
      name: 'Wireless Noise-Canceling Headphones',
      slug: 'wireless-noise-canceling-headphones',
      description: 'Immersive sound quality with industry-leading noise cancellation.',
      price: 349,
      images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop'],
      categoryId: electronics.id,
      stock: 40,
      isFeatured: false,
      isBestSeller: true,
    },
    {
      name: 'Smartwatch Series 8',
      slug: 'smartwatch-series-8',
      description: 'Track your health and stay connected with this advanced smartwatch.',
      price: 399,
      images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop'],
      categoryId: electronics.id,
      stock: 30,
      isFeatured: false,
      isBestSeller: false,
    },
    {
      name: 'Mirrorless Camera 4K',
      slug: 'mirrorless-camera-4k',
      description: 'Capture stunning photos and videos with this high-resolution camera.',
      price: 1200,
      images: ['https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1964&auto=format&fit=crop'],
      categoryId: electronics.id,
      stock: 10,
      isFeatured: true,
      isBestSeller: true,
    },

    // Kitchen
    {
      name: 'Espresso Machine',
      slug: 'espresso-machine',
      description: 'Professional-grade espresso machine for the perfect morning cup.',
      price: 599,
      images: ['https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop'],
      categoryId: kitchen.id,
      stock: 12,
      isFeatured: true,
      isBestSeller: true,
    },
    {
      name: 'Digital Air Fryer',
      slug: 'digital-air-fryer',
      description: 'Cook healthy and delicious meals with this versatile air fryer.',
      price: 129,
      images: ['https://images.unsplash.com/photo-1584949514123-474cfa705df3?q=80&w=1964&auto=format&fit=crop'],
      categoryId: kitchen.id,
      stock: 25,
      isFeatured: false,
      isBestSeller: true,
    },
    {
      name: 'Professional Blender',
      slug: 'professional-blender',
      description: 'High-speed blender for smoothies, soups, and more.',
      price: 189,
      images: ['https://images.unsplash.com/photo-1570222094114-d054a817e56b?q=80&w=2005&auto=format&fit=crop'],
      categoryId: kitchen.id,
      stock: 18,
      isFeatured: false,
      isBestSeller: false,
    },
    {
      name: 'Stainless Steel Toaster',
      slug: 'stainless-steel-toaster',
      description: 'Sleek 4-slice toaster with multiple browning settings.',
      price: 65,
      images: ['https://images.unsplash.com/photo-1626202340576-9613eb5442f9?q=80&w=1974&auto=format&fit=crop'],
      categoryId: kitchen.id,
      stock: 35,
      isFeatured: false,
      isBestSeller: false,
    },
    {
      name: 'Electric Kettle',
      slug: 'electric-kettle',
      description: 'Fast-boiling electric kettle with temperature control.',
      price: 79,
      images: ['https://images.unsplash.com/photo-1594212699903-ec8a3eea50f5?q=80&w=2071&auto=format&fit=crop'],
      categoryId: kitchen.id,
      stock: 40,
      isFeatured: true,
      isBestSeller: false,
    },

    // Decor
    {
      name: 'Ceramic Vase Set',
      slug: 'ceramic-vase-set',
      description: 'Set of three handcrafted ceramic vases in neutral tones.',
      price: 95,
      images: ['https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&w=1974&auto=format&fit=crop'],
      categoryId: decor.id,
      stock: 50,
      isFeatured: false,
      isBestSeller: false,
    },
    {
      name: 'Abstract Wall Art',
      slug: 'abstract-wall-art',
      description: 'Original abstract painting that adds a pop of color to any room.',
      price: 240,
      images: ['https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1974&auto=format&fit=crop'],
      categoryId: decor.id,
      stock: 5,
      isFeatured: true,
      isBestSeller: true,
    },
    {
      name: 'Large Gold Mirror',
      slug: 'large-gold-mirror',
      description: 'Round wall mirror with a sleek gold-finished frame.',
      price: 180,
      images: ['https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1974&auto=format&fit=crop'],
      categoryId: decor.id,
      stock: 15,
      isFeatured: true,
      isBestSeller: false,
    },
    {
      name: 'Geometric Wool Rug',
      slug: 'geometric-wool-rug',
      description: 'Soft wool rug with a modern geometric pattern.',
      price: 420,
      images: ['https://images.unsplash.com/photo-1531835551805-16d864c8d311?q=80&w=1974&auto=format&fit=crop'],
      categoryId: decor.id,
      stock: 10,
      isFeatured: false,
      isBestSeller: true,
    },
    {
      name: 'Modern Wall Clock',
      slug: 'modern-wall-clock',
      description: 'Minimalist wall clock with a silent movement.',
      price: 55,
      images: ['https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?q=80&w=2070&auto=format&fit=crop'],
      categoryId: decor.id,
      stock: 25,
      isFeatured: false,
      isBestSeller: false,
    },
  ]

  for (const product of products) {
    await prisma.product.create({
      data: product,
    })
  }

  console.log('Seed data created successfully')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
