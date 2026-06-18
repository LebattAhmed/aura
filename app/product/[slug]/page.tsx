import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getProductBySlug } from "@/lib/actions/product-actions";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { AddToCartButton } from "./add-to-cart-button";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-muted mb-12">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/shop" className="hover:text-primary transition-colors">
              Shop
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground">{product.name}</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-4/5 bg-secondary rounded-3xl overflow-hidden shadow-sm">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.slice(1).map((img: string, i: number) => (
                  <div
                    key={i}
                    className="aspect-square bg-secondary rounded-xl overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <img
                      src={img}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col h-full py-4">
              <div className="mb-8">
                <span className="text-primary font-bold tracking-widest text-[10px] uppercase mb-4 block">
                  {product.category.name}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {product.name}
                </h1>
                <p className="text-2xl font-bold text-primary">
                  ${product.price}
                </p>
              </div>

              <div className="flex-1 space-y-8">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-4">
                    Description
                  </h3>
                  <p className="text-muted leading-relaxed text-balance">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-4 pt-8 border-t border-border">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest">
                    <span>Availability</span>
                    <span
                      className={
                        product.stock > 0 ? "text-green-600" : "text-red-500"
                      }
                    >
                      {product.stock > 0
                        ? `In Stock (${product.stock})`
                        : "Out of Stock"}
                    </span>
                  </div>

                  <AddToCartButton product={product} />

                  <p className="text-[10px] text-center text-muted uppercase tracking-widest">
                    Secure payment & Free Shipping on orders over $1,500
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
