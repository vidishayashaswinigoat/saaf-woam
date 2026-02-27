import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  FlaskConical, 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  Star,
  Menu,
  X,
  TestTube2,
  Clock,
  Sparkles,
  ShoppingBag,
  Search,
  User,
  MapPin
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="bg-terracotta text-white text-[10px] uppercase tracking-[0.2em] py-2 text-center font-medium">
        Free Shipping on orders above ₹999 • Lab Reports in every box
      </div>
      <nav className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm py-3' : 'bg-oat py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              <Menu size={20} />
            </button>
            <div className="hidden md:flex items-center space-x-8 text-[11px] uppercase tracking-widest font-semibold text-charcoal/70">
              <a href="#shop" className="hover:text-terracotta transition-colors">Shop</a>
              <a href="#learn" className="hover:text-terracotta transition-colors">Learn</a>
              <a href="#impact" className="hover:text-terracotta transition-colors">Our Impact</a>
            </div>
          </div>

          <div className="text-3xl font-serif font-bold tracking-tight text-terracotta absolute left-1/2 -translate-x-1/2">
            SAAF
          </div>

          <div className="flex items-center space-x-6 text-charcoal/70">
            <Search size={18} className="cursor-pointer hover:text-terracotta" />
            <User size={18} className="hidden md:block cursor-pointer hover:text-terracotta" />
            <div className="relative cursor-pointer hover:text-terracotta">
              <ShoppingBag size={18} />
              <span className="absolute -top-2 -right-2 bg-terracotta text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            className="fixed inset-0 z-[60] bg-white p-8 md:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="text-2xl font-serif font-bold text-terracotta">SAAF</div>
              <button onClick={() => setIsOpen(false)}><X size={24} /></button>
            </div>
            <div className="flex flex-col space-y-8 text-xl font-serif">
              <a href="#shop" onClick={() => setIsOpen(false)}>Shop All Spices</a>
              <a href="#learn" onClick={() => setIsOpen(false)}>The SAAF Standard</a>
              <a href="#impact" onClick={() => setIsOpen(false)}>Sourcing Map</a>
              <a href="#faq" onClick={() => setIsOpen(false)}>Common Questions</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const IndiaSpiceMap = () => {
  const regions = [
    { name: 'Kashmir', spice: 'Saffron', x: '28%', y: '12%' },
    { name: 'Rajasthan', spice: 'Cumin', x: '22%', y: '35%' },
    { name: 'Kerala', spice: 'Black Pepper', x: '35%', y: '85%' },
    { name: 'Andhra', spice: 'Guntur Chilli', x: '45%', y: '65%' },
    { name: 'Sikkim', spice: 'Large Cardamom', x: '75%', y: '35%' },
    { name: 'Gujarat', spice: 'Coriander', x: '15%', y: '45%' },
  ];

  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-[4/5] md:aspect-square bg-white rounded-full flex items-center justify-center overflow-hidden border border-terracotta/5 shadow-inner">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full h-full p-8 flex items-center justify-center"
      >
        <img 
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=1000" 
          alt="India Spice Map" 
          className="w-full h-full object-contain opacity-90 mix-blend-multiply"
          style={{ 
            maskImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 240\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M60,20 L80,10 L100,20 L120,15 L140,30 L150,60 L180,80 L170,120 L150,150 L130,220 L100,230 L70,220 L50,180 L30,150 L20,100 L40,50 Z\' /%3E%3C/svg%3E")',
            maskSize: 'contain',
            maskRepeat: 'no-repeat',
            maskPosition: 'center'
          }}
          referrerPolicy="no-referrer"
        />
        
        {/* Overlaying the actual spice map image as a background for the container if possible, 
            but since I can't find the exact URL easily, I'll use a high-quality spice texture 
            masked into the India shape as requested. */}
        
        <div className="absolute inset-0">
          {regions.map((region, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 + 0.5 }}
              className="absolute flex flex-col items-center group"
              style={{ left: region.x, top: region.y }}
            >
              <div className="relative">
                <MapPin className="text-terracotta fill-terracotta/20 group-hover:scale-125 transition-transform" size={24} />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-olive rounded-full animate-pulse" />
              </div>
              <div className="mt-2 bg-white px-3 py-1 rounded-sm shadow-md border border-stone-100 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                <div className="text-[10px] font-bold uppercase tracking-tighter text-terracotta">{region.name}</div>
                <div className="text-[12px] font-serif italic">{region.spice}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="absolute bottom-12 text-center px-6">
        <h3 className="text-2xl font-serif italic text-charcoal/80">Sourced from the source.</h3>
        <p className="text-[11px] uppercase tracking-widest mt-2 text-stone-500 font-medium">Direct farm-to-kitchen transparency</p>
      </div>
    </div>
  );
};

const SectionHeader = ({ title, subtitle, centered = true }: { title: string, subtitle?: string, centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    <h2 className="text-4xl md:text-5xl font-serif mb-4 text-charcoal">{title}</h2>
    {subtitle && <p className="text-stone-500 max-w-2xl mx-auto text-lg leading-relaxed">{subtitle}</p>}
  </div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-stone-200 py-6">
      <button 
        className="w-full flex items-center justify-between text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-xl font-serif text-charcoal group-hover:text-terracotta transition-colors">{question}</span>
        <ChevronDown className={`text-stone-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} size={20} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-stone-600 leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- Page Sections ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-terracotta/10">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 px-6 overflow-hidden bg-oat">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 mb-6">
              <div className="flex text-terracotta">
                {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-charcoal/60">2,000+ 5-Star Reviews</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8 text-charcoal max-w-4xl mx-auto">
              Michelin-standard purity, <br />
              <span className="italic">directly from the source.</span>
            </h1>
            <button className="btn-primary">Shop Now</button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { name: 'Kashmiri Saffron', img: 'https://images.unsplash.com/photo-1615485290382-441e4d019cb0?auto=format&fit=crop&q=80&w=400' },
              { name: 'Guntur Chilli', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=400' },
              { name: 'Alleppey Pepper', img: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=400' },
              { name: 'Lakadong Turmeric', img: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?auto=format&fit=crop&q=80&w=400' },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden bg-stone-200 mb-4 rounded-sm">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-sm font-serif italic text-charcoal/80 text-center">{item.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Map Section */}
      <section id="impact" className="py-32 px-6 bg-white border-y border-stone-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <div className="text-terracotta font-bold text-[10px] uppercase tracking-[0.3em] mb-6">The Origin Story</div>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight text-charcoal">We don't buy spices. <br /><span className="italic">We source them.</span></h2>
            <p className="text-lg text-stone-600 mb-10 leading-relaxed">
              Every SAAF spice is traced back to a specific farm and a specific harvest. We work directly with farmers across India to ensure that the aroma, potency, and purity are preserved from the soil to your kitchen.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-serif text-terracotta mb-2">100%</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Traceable Sourcing</div>
              </div>
              <div>
                <div className="text-3xl font-serif text-terracotta mb-2">Small</div>
                <div className="text-[10px] uppercase tracking-widest font-bold text-stone-400">Batch Grinding</div>
              </div>
            </div>
            <button className="mt-12 btn-secondary">Explore Our Farms</button>
          </div>
          <IndiaSpiceMap />
        </div>
      </section>

      {/* Press / Trust Bar */}
      <section className="py-12 border-b border-stone-100 bg-oat-dark">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale">
          {['VOGUE', 'TIME', 'Forbes', 'bon appétit', 'BBC'].map(brand => (
            <span key={brand} className="text-xl font-serif font-bold tracking-tighter">{brand}</span>
          ))}
        </div>
      </section>

      {/* Problem Framing Section */}
      <section className="py-32 bg-oat px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader 
            title="The Trust Deficit" 
            subtitle="In an industry built on mass-production, purity has become a luxury. We're making it a standard."
          />
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {[
              "Adulteration is a silent, growing concern in modern kitchens.",
              "Generic 'purity' claims have lost their meaning without proof.",
              "Essential oils fade long before the spice reaches your pantry.",
              "Most sourcing remains a black box for the urban consumer."
            ].map((text, i) => (
              <div key={i} className="flex items-start space-x-4 p-8 bg-white rounded-sm border border-stone-100 shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2.5 shrink-0" />
                <p className="text-charcoal/80 text-lg leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="learn" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Why Choose SAAF?" 
            subtitle="Our standards are high because your health is non-negotiable."
          />
          
          <div className="grid md:grid-cols-3 gap-16">
            <div className="text-center group">
              <div className="w-20 h-20 bg-oat rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-terracotta group-hover:text-white transition-all duration-500">
                <TestTube2 size={32} />
              </div>
              <h3 className="text-2xl font-serif mb-4">Lab-Tested Purity</h3>
              <p className="text-stone-500 leading-relaxed mb-6">Batch-level testing for 20+ contaminants. QR codes on every pack for instant reports.</p>
              <div className="text-[10px] uppercase tracking-widest font-bold text-terracotta">Confidence you can verify</div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-oat rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-terracotta group-hover:text-white transition-all duration-500">
                <Clock size={32} />
              </div>
              <h3 className="text-2xl font-serif mb-4">Small-Batch Freshness</h3>
              <p className="text-stone-500 leading-relaxed mb-6">Ground in limited quantities to retain oils. Direct farm-to-kitchen transparency.</p>
              <div className="text-[10px] uppercase tracking-widest font-bold text-terracotta">Aroma that fills the room</div>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-oat rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-terracotta group-hover:text-white transition-all duration-500">
                <Sparkles size={32} />
              </div>
              <h3 className="text-2xl font-serif mb-4">Modern Standards</h3>
              <p className="text-stone-500 leading-relaxed mb-6">Designed for the intentional cook. Minimalist, moisture-lock glass packaging.</p>
              <div className="text-[10px] uppercase tracking-widest font-bold text-terracotta">An upgrade for your kitchen</div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-32 bg-charcoal text-oat px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-terracotta/5 -skew-x-12 translate-x-1/4" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif mb-12 leading-tight">Thousands of homes <br /><span className="italic">love SAAF Spice.</span></h2>
              <div className="space-y-12">
                {[
                  { name: "Ananya R.", city: "Mumbai", text: "Finally, a brand that doesn't just say it's pure but shows me the report. The Haldi aroma is unlike anything I've used before." },
                  { name: "Vikram S.", city: "Bangalore", text: "Small-batch makes a huge difference. You can actually taste the complexity of the spices in simple dal." }
                ].map((t, i) => (
                  <div key={i} className="border-l-2 border-terracotta pl-10">
                    <div className="flex text-terracotta mb-4">
                      {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <p className="text-xl italic text-stone-300 mb-6 leading-relaxed">"{t.text}"</p>
                    <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-500">{t.name} — {t.city}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:block">
              <div className="aspect-[4/5] bg-stone-800 rounded-sm overflow-hidden border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=1000" 
                  alt="Spice Sourcing" 
                  className="w-full h-full object-cover opacity-50"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <SectionHeader title="Still wondering?" centered={false} />
          <div className="space-y-2">
            <FAQItem 
              question="Why pay a premium for spices?" 
              answer="Most commercial spices are processed in massive quantities, often sitting in warehouses for months. We grind in small batches and source directly, ensuring higher essential oil content and zero adulteration. You're paying for potency, purity, and peace of mind."
            />
            <FAQItem 
              question="How do I know it's really pure?" 
              answer="Every single pack of SAAF Masale comes with a unique batch code and a QR code. Scanning it takes you directly to the lab report for that specific batch, showing results for pesticides, heavy metals, and fillers."
            />
            <FAQItem 
              question="Will it taste different from my regular spices?" 
              answer="Yes, it likely will. Because our spices are fresher and purer, they are often more potent. You might find yourself using slightly less to achieve a deeper, more authentic flavor profile."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-terracotta text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-serif mb-8 italic">Cook with sukoon.</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of modern Indian homes that have upgraded to a standard of purity they can actually see.
          </p>
          <div className="flex flex-col items-center space-y-8">
            <button className="bg-white text-terracotta px-12 py-5 rounded-sm text-sm font-bold uppercase tracking-widest hover:bg-oat transition-all shadow-2xl">
              Upgrade Your Kitchen
            </button>
            <div className="flex items-center space-x-8 text-[10px] uppercase tracking-[0.3em] font-bold text-white/60">
              <span>Transparent</span>
              <span>•</span>
              <span>Tested</span>
              <span>•</span>
              <span>Delivered</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-oat-dark border-t border-stone-200 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="text-3xl font-serif font-bold text-terracotta mb-6">SAAF</div>
            <p className="text-stone-500 text-sm leading-relaxed">Premium, lab-tested spices for the modern Indian kitchen. Sourced directly, delivered with certainty.</p>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold mb-6 text-charcoal">Shop</h4>
            <div className="flex flex-col space-y-4 text-sm text-stone-500">
              <a href="#" className="hover:text-terracotta transition-colors">All Spices</a>
              <a href="#" className="hover:text-terracotta transition-colors">Gift Sets</a>
              <a href="#" className="hover:text-terracotta transition-colors">Subscriptions</a>
            </div>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold mb-6 text-charcoal">Learn</h4>
            <div className="flex flex-col space-y-4 text-sm text-stone-500">
              <a href="#" className="hover:text-terracotta transition-colors">The SAAF Standard</a>
              <a href="#" className="hover:text-terracotta transition-colors">Lab Reports</a>
              <a href="#" className="hover:text-terracotta transition-colors">Recipes</a>
            </div>
          </div>
          <div>
            <h4 className="text-[10px] uppercase tracking-widest font-bold mb-6 text-charcoal">Connect</h4>
            <div className="flex flex-col space-y-4 text-sm text-stone-500">
              <a href="#" className="hover:text-terracotta transition-colors">Instagram</a>
              <a href="#" className="hover:text-terracotta transition-colors">Contact Us</a>
              <a href="#" className="hover:text-terracotta transition-colors">Wholesale</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-12 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-[10px] uppercase tracking-widest font-bold text-stone-400">
          <div>© 2026 SAAF Masale. All Rights Reserved.</div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-terracotta transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-terracotta transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
