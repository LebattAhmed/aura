import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getCategories } from "@/lib/actions/product-actions";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default async function CollectionPage() {
  const categories = await getCategories();

  // Helper for category images if they don't have one
  const categoryImages: Record<string, string> = {
    'Living Room': 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2117&auto=format&fit=crop',
    'Bedroom': 'https://images.unsplash.com/photo-1505693419148-433060e1856b?q=80&w=2070&auto=format&fit=crop',
    'Kitchen': 'https://images.unsplash.com/photo-1556911220-e15595b6a981?q=80&w=2070&auto=format&fit=crop',
    'Electronics': 'https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=2070&auto=format&fit=crop',
    'Decor': 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=2070&auto=format&fit=crop',
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-6">
          <header className="max-w-3xl mb-16">
            <span className="text-primary font-bold tracking-widest text-xs uppercase mb-4 block">Our Curation</span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Our <span className="italic font-light">Collections</span>.</h1>
            <p className="text-muted text-lg">
              Explore our meticulously curated categories, each designed to bring a specific "aura" to your living space. From modern minimalism to timeless comfort.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link 
                key={category.id} 
                href={`/shop?category=${category.id}`}
                className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-secondary"
              >
                <img 
                  src={categoryImages[category.name] || 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2067&auto=format&fit=crop'} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                  <div className="flex items-center gap-2 text-white/70 text-sm font-medium transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    View Collection <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
