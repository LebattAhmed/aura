import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/home/Hero";
import { ProductCard } from "@/components/products/ProductCard";
import { Footer } from "@/components/layout/Footer";
import { getFeaturedProducts, getBestSellers } from "@/lib/actions/product-actions";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default async function Home() {
  const featuredProducts = await getFeaturedProducts();
  const bestSellers = await getBestSellers();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <Hero />
        
        {/* Featured Products Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <span className="text-primary font-bold tracking-widest text-[10px] uppercase mb-3 block">Selected for you</span>
                <h2 className="text-4xl font-bold tracking-tight">Our <span className="italic font-light">Featured</span> Pieces</h2>
              </div>
              <Link href="/shop" className="group flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors">
                View All Collection <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.slice(0, 8).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Categories Preview */}
        <section className="py-24 bg-secondary/50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="text-center md:text-left">
                <h2 className="text-4xl font-bold tracking-tight mb-4">Shop by <span className="italic font-light">Category</span></h2>
                <div className="w-20 h-1 bg-primary mx-auto md:mx-0" />
              </div>
              <Link href="/collection" className="group flex items-center gap-2 text-sm font-bold hover:text-primary transition-colors">
                View All Categories <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <CategoryCard name="Living Room" image="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop" link="/shop?category=living-room" />
              <CategoryCard name="Electronics" image="https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=2070&auto=format&fit=crop" link="/shop?category=electronics" />
              <CategoryCard name="Decor" image="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop" link="/shop?category=decor" />
            </div>
          </div>
        </section>

        {/* Best Sellers Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-primary font-bold tracking-widest text-[10px] uppercase mb-3 block">Popular right now</span>
              <h2 className="text-4xl font-bold leading-tight">Best <span className="italic font-light">Sellers</span></h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
              {bestSellers.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function CategoryCard({ name, image, link }: { name: string, image: string, link: string }) {
  return (
    <Link href={link} className="group relative h-80 rounded-3xl overflow-hidden shadow-lg">
      <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-6 left-6">
        <h3 className="text-white text-xl font-bold mb-1">{name}</h3>
        <p className="text-white/80 text-xs font-medium uppercase tracking-widest flex items-center gap-2">
          Explore <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </p>
      </div>
    </Link>
  )
}
