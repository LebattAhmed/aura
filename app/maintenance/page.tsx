import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function MaintenancePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex items-center justify-center py-28 px-6 bg-secondary/5">
        <div className="max-w-3xl rounded-[3rem] border border-border bg-white shadow-xl p-12 text-center">
          <span className="text-sm uppercase tracking-[0.4em] text-primary font-bold mb-6 inline-block">
            Service en maintenance
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Nous sommes en cours de maintenance
          </h1>
          <p className="text-lg text-muted mb-10 leading-relaxed">
            Cette page est temporairement indisponible. Nous travaillons
            actuellement à améliorer le service. Revenez bientôt pour découvrir
            les nouveautés.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition hover:bg-primary/90"
          >
            Retour à l’accueil
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
