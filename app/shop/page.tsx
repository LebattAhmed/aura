import { Navbar } from "@/components/layout/Navbar";
import { ProductCard } from "@/components/products/ProductCard";
import { Footer } from "@/components/layout/Footer";
import { getAllProducts, getCategories } from "@/lib/actions/product-actions";
import Link from "next/link";
import { Pagination } from "@/components/layout/Pagination";

export default async function ShopPage({ 
  searchParams 
}: { 
  searchParams: Promise<{ category?: string, page?: string }> 
}) {
  const params = await searchParams;
  const categoryId = params.category;
  const page = parseInt(params.page || '1');
  
  const { products, totalPages, currentPage } = await getAllProducts(page, 16, categoryId);
  const categories = await getCategories();
  
  const currentCategory = categories.find(c => c.id === categoryId);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">
                {currentCategory ? currentCategory.name : 'Shop Our Collection'}
              </h1>
              <p className="text-muted text-sm">
                {currentCategory ? `Discover our ${currentCategory.name} pieces.` : 'Express your style with our premium furniture pieces.'}
              </p>
            </div>
            
            <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto">
              <Link 
                href="/shop"
                className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${!categoryId ? 'bg-primary text-primary-foreground' : 'bg-secondary text-foreground hover:bg-accent/20'}`}
              >
                All Items
              </Link>
              {categories.map((category) => (
                <Link 
                  key={category.id}
                  href={`/shop?category=${category.id}`}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-colors whitespace-nowrap ${categoryId === category.id ? 'bg-primary text-primary-foreground' : 'bg-secondary text-foreground hover:bg-accent/20'}`}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {products.length === 0 ? (
            <div className="text-center py-40 bg-white shadow-sm border border-border rounded-[3rem] uppercase tracking-[0.3em] text-[10px] font-black text-muted-foreground">
              No pieces found in this collection.
            </div>
          ) : (
            <Pagination 
              totalPages={totalPages} 
              currentPage={currentPage} 
              baseUrl="/shop" 
              searchParams={params}
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
