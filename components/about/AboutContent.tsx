'use client'

import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

export function AboutContent() {
  return (
    <>
      {/* About Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=2070&auto=format&fit=crop" 
            alt="Mauritanian Desert" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            Our <span className="italic font-light">Presence</span>.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-white/80 text-lg max-w-2xl mx-auto uppercase tracking-widest font-medium"
          >
            Rooted in the heart of Mauritania.
          </motion.p>
        </div>
      </section>

      {/* The Essence Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeIn}>
              <span className="text-primary font-bold tracking-widest text-[10px] uppercase mb-4 block">The Essence</span>
              <h2 className="text-4xl font-bold mb-8 leading-tight">AURA: A Reflection of <br /><span className="italic font-light">Nouakchott</span>.</h2>
              <div className="space-y-6 text-muted leading-relaxed">
                <p>
                  Born in the vibrant coastal capital of Nouakchott, AURA is more than just a brand. It is an exploration of the subtle balance between the vast, timeless beauty of the Mauritanian landscape and the refined precision of modern design.
                </p>
                <p>
                  We believe that every space carries its own "aura"—a unique atmosphere defined by the intersection of culture, comfort, and character. Our mission is to curate pieces that resonate with this spirit, bringing a touch of serenity to your living environment.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop" 
                alt="AURA Interior Design" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Journey / Values */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4">Our Core <span className="italic font-light">Philosophy</span></h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.1 }}
              className="bg-white p-12 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <h3 className="text-xl font-bold mb-4">Mauritanian Heritage</h3>
              <p className="text-muted text-sm leading-relaxed">
                We are deeply inspired by the textures, colors, and resilience of our homeland—from the golden dunes of Adrar to the blue horizons of the Atlantic.
              </p>
            </motion.div>
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="bg-white p-12 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <h3 className="text-xl font-bold mb-4">Minimalist Luxury</h3>
              <p className="text-muted text-sm leading-relaxed">
                Luxury is not about excess; it is about the quality of the details and the quiet confidence of a well-designed space.
              </p>
            </motion.div>
            <motion.div 
              {...fadeIn}
              transition={{ delay: 0.3 }}
              className="bg-white p-12 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <h3 className="text-xl font-bold mb-4">Global Standards</h3>
              <p className="text-muted text-sm leading-relaxed">
                While our soul is in Nouakchott, our vision is global. We source and curate only the finest materials to ensure lasting excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact/Location Info */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <span className="text-primary font-bold tracking-widest text-[10px] uppercase mb-4 block">Visit Us</span>
          <h2 className="text-3xl font-bold mb-6">Nouakchott, Mauritania</h2>
          <p className="text-muted max-w-lg mx-auto mb-12">
            Our flagship studio and showroom are located in the heart of the city, where we welcome designers and enthusiasts alike.
          </p>
          <div className="flex flex-col items-center gap-2 text-sm font-medium">
            <span>contact@aura.mr</span>
            <span>+222 00 00 00 00</span>
          </div>
        </div>
      </section>
    </>
  );
}
