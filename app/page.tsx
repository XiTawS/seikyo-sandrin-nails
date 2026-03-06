"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useCMS } from "@/components/cms/CMSProvider";
import EditableText from "@/components/cms/EditableText";
import EditableImage from "@/components/cms/EditableImage";
import EditableButton from "@/components/cms/EditableButton";
import LightboxProvider, { useLightbox } from "@/components/Lightbox";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, Sparkles, Heart, Pen } from "lucide-react";

/* ─── Fade ─── */
function Fade({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}>
      {children}
    </motion.div>
  );
}

/* ─── HERO — Plein écran image avec texte superposé en bas ─── */
function Hero() {
  const ref = useRef<HTMLInputElement>(null);
  const { isAdmin } = useCMS();

  return (
    <section className="relative min-h-screen overflow-hidden bg-[var(--color-bg)]">
      {/* Full background image */}
      <EditableImage contentKey="home.hero.bg"
        defaultSrc="https://res.cloudinary.com/dxcudyuno/image/upload/v1772835682/sandrin-nails/hero.jpg"
        alt="Sandr'in Nails" fill sizes="100vw" priority
        className="object-cover" hideButton inputRef={ref} />
      {isAdmin && (
        <button onClick={() => ref.current?.click()}
          className="absolute top-20 right-6 z-[50] bg-white/80 text-[var(--color-text)] p-2 rounded-full">
          <Pen className="w-4 h-4" />
        </button>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-bg)]" />

      {/* Contenu centré */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2 }}>
          <img src="https://res.cloudinary.com/dxcudyuno/image/upload/v1772835519/sandrin-nails/logo.jpg" alt="SN" className="w-24 h-24 mx-auto mb-8" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}>
          <EditableText contentKey="home.hero.title" defaultValue="Sandr'in Nails" tag="h1"
            className="font-display text-6xl md:text-8xl text-white leading-[0.9] mb-3" />
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          <EditableText contentKey="home.hero.subtitle" defaultValue="Chaque détail compte." tag="p"
            className="font-display italic text-xl md:text-2xl text-white/80 mb-3" />
          <EditableText contentKey="home.hero.label" defaultValue="Prothésiste ongulaire — Saint-Donat-sur-l'Herbasse" tag="p"
            className="text-white/50 text-xs tracking-[0.3em] uppercase mb-10" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
          className="flex flex-wrap justify-center gap-3">
          <EditableButton contentKeyText="home.hero.cta1.text" contentKeyUrl="home.hero.cta1.url"
            defaultText="Réserver sur Planity" defaultUrl="https://www.planity.com/sandrin-nails-26260-saint-donat-sur-lherbasse"
            className="bg-[var(--color-rose-dark)] hover:bg-[var(--color-text)] text-white px-8 py-3.5 text-xs tracking-[0.2em] uppercase transition-all duration-500" />
          <EditableButton contentKeyText="home.hero.cta2.text" contentKeyUrl="home.hero.cta2.url"
            defaultText="Découvrir" defaultUrl="#prestations"
            className="border border-white/30 text-white hover:bg-white/10 px-8 py-3.5 text-xs tracking-[0.2em] uppercase transition-all duration-500 backdrop-blur-sm" />
        </motion.div>
      </div>
    </section>
  );
}

/* ─── PRESTATIONS — carte tarifs élégante ─── */
function Prestations() {
  const categories = [
    {
      title: "Pose Gel / Résine",
      items: [
        { name: "Ongles naturels", price: "60€" },
        { name: "Capsules / Chablon", price: "65€" },
        { name: "French reverse", price: "65€" },
        { name: "Remplissage", price: "50€" },
        { name: "Dépose", price: "30€" },
        { name: "Réparation", price: "5€" },
      ],
    },
    {
      title: "Semi-permanent",
      items: [
        { name: "Mains", price: "35€" },
        { name: "Pieds", price: "35€" },
        { name: "Supplément capsules", price: "+5€" },
      ],
    },
    {
      title: "Nail Art",
      items: [
        { name: "Strass / paillettes (2 ongles)", price: "2€" },
        { name: "Décoration 2 ongles", price: "4€" },
        { name: "Décoration 5 ongles", price: "8€" },
        { name: "Longueur > taille M", price: "+5€/taille" },
      ],
    },
  ];

  return (
    <section id="prestations" className="py-16 md:py-20 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-10 items-start">
        {/* Left — title + image */}
        <Fade className="md:col-span-4">
          <EditableText contentKey="home.prestations.label" defaultValue="Prestations" tag="p"
            className="text-[var(--color-rose)] text-xs tracking-[0.4em] uppercase mb-3" />
          <EditableText contentKey="home.prestations.title" defaultValue="Nos tarifs" tag="h2"
            className="font-display text-4xl md:text-5xl text-[var(--color-text)] mb-6" />
          <EditableImage contentKey="home.prestations.image"
            defaultSrc="https://res.cloudinary.com/dxcudyuno/image/upload/v1772836053/sandrin-nails/produits.png"
            alt="Produits Alessandro" width={500} height={600}
            className="w-full aspect-[3/4] object-cover hidden md:block" />
        </Fade>

        {/* Right — price list */}
        <Fade delay={0.1} className="md:col-span-8">
          <div className="space-y-8">
            {categories.map((cat) => (
              <div key={cat.title}>
                <h3 className="font-display text-xl text-[var(--color-rose-dark)] mb-4">{cat.title}</h3>
                <div className="space-y-0">
                  {cat.items.map((item) => (
                    <div key={item.name}
                      className="flex items-baseline justify-between py-2.5 border-b border-[var(--color-rose)]/10 last:border-b-0">
                      <span className="text-[var(--color-text)] text-sm">{item.name}</span>
                      <span className="text-[var(--color-rose-dark)] text-sm font-medium ml-4 flex-shrink-0">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
}

/* ─── IMAGE BREAK ─── */
function ImageBreak() {
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { isAdmin } = useCMS();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative h-[35vh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 scale-[1.2]">
        <EditableImage contentKey="home.break.image"
          defaultSrc="https://res.cloudinary.com/dxcudyuno/image/upload/v1772835748/sandrin-nails/avant-apres.jpg"
          alt="Nail art" fill sizes="100vw" className="object-cover" hideButton inputRef={inputRef} />
      </motion.div>
      <div className="absolute inset-0 bg-[var(--color-bg-deep)]/40" />
      {isAdmin && (
        <button onClick={() => inputRef.current?.click()}
          className="absolute top-6 right-6 z-[50] bg-white/80 text-[var(--color-text)] p-2 rounded-full">
          <Pen className="w-4 h-4" />
        </button>
      )}
      <div className="absolute inset-0 flex items-center justify-center">
        <EditableText contentKey="home.break.quote"
          defaultValue="Chaque détail compte."
          tag="p" className="font-display italic text-3xl md:text-5xl text-white text-center max-w-xl px-8 leading-[1.3]" />
      </div>
    </section>
  );
}

/* ─── GALERIE — mosaïque ─── */
function Gallery() {
  const { isAdmin } = useCMS();
  const { openLightbox } = useLightbox();

  const images = [
    { key: "p1", src: "https://res.cloudinary.com/dxcudyuno/image/upload/v1772835750/sandrin-nails/emeraude.jpg", bento: "col-span-2 row-span-2" },
    { key: "p2", src: "https://res.cloudinary.com/dxcudyuno/image/upload/v1772835968/sandrin-nails/lavande.jpg", bento: "col-span-1 row-span-1" },
    { key: "p3", src: "https://res.cloudinary.com/dxcudyuno/image/upload/v1772835749/sandrin-nails/coeurs-gold.jpg", bento: "col-span-1 row-span-1" },
    { key: "p4", src: "https://res.cloudinary.com/dxcudyuno/image/upload/v1772835751/sandrin-nails/rouge-blanc.jpg", bento: "col-span-2 row-span-1" },
    { key: "p5", src: "https://res.cloudinary.com/dxcudyuno/image/upload/v1772835917/sandrin-nails/blanc-paillettes.jpg", bento: "col-span-1 row-span-1" },
    { key: "p6", src: "https://res.cloudinary.com/dxcudyuno/image/upload/v1772835747/sandrin-nails/noel-rouge.jpg", bento: "col-span-1 row-span-1" },
    { key: "p7", src: "https://res.cloudinary.com/dxcudyuno/image/upload/v1772835918/sandrin-nails/noir-bleu.jpg", bento: "col-span-1 row-span-1" },
    { key: "p8", src: "https://res.cloudinary.com/dxcudyuno/image/upload/v1772835873/sandrin-nails/nude.jpg", bento: "col-span-1 row-span-1" },
  ];
  const srcs = images.map(i => i.src);

  return (
    <section id="galerie" className="bg-[var(--color-bg-blush)]">
      <div className="px-6 md:px-12 py-14 text-center">
        <EditableText contentKey="home.gallery.label" defaultValue="Nos créations" tag="p"
          className="text-[var(--color-rose)] text-xs tracking-[0.4em] uppercase mb-3" />
        <EditableText contentKey="home.gallery.title" defaultValue="L'art au bout des doigts" tag="h2"
          className="font-display text-4xl md:text-5xl text-[var(--color-text)]" />
      </div>

      {/* Full-width bento — edge to edge */}
      <div className="grid grid-cols-3 md:grid-cols-4 grid-rows-[180px_180px_180px] md:grid-rows-[280px_280px_280px]">
        {images.map((img, i) => (
          <div key={img.key} className={`relative overflow-hidden group cursor-pointer ${img.bento}`}
            onClick={() => !isAdmin && openLightbox(img.src, srcs)}>
            <EditableImage contentKey={`home.gallery.${img.key}`} defaultSrc={img.src} alt="Création nail art"
              fill sizes="(max-width:768px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
            <div className="absolute inset-0 bg-[var(--color-rose-dark)]/0 group-hover:bg-[var(--color-rose-dark)]/15 transition-all duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── ABOUT — asymétrique ─── */
function About() {
  return (
    <section className="py-16 md:py-20 px-6 md:px-12 bg-[var(--color-bg)]">
      <div className="max-w-5xl mx-auto grid md:grid-cols-12 gap-8 md:gap-12 items-center">
        <Fade className="md:col-span-5">
          <EditableImage contentKey="home.about.image"
            defaultSrc="https://res.cloudinary.com/dxcudyuno/image/upload/v1772835709/sandrin-nails/sandrin.jpg"
            alt="Sandrin" width={500} height={600}
            className="w-full aspect-[4/5] object-cover" />
        </Fade>
        <Fade delay={0.1} className="md:col-span-7">
          <EditableText contentKey="home.about.label" defaultValue="À propos" tag="p"
            className="text-[var(--color-rose)] text-xs tracking-[0.4em] uppercase mb-3" />
          <EditableText contentKey="home.about.title" defaultValue="Sandrin, votre prothésiste" tag="h2"
            className="font-display text-3xl md:text-5xl text-[var(--color-text)] leading-[1.1] mb-6" />
          <EditableText contentKey="home.about.text"
            defaultValue="Passionnée par le nail art et la beauté des mains, je vous accueille dans mon espace à Saint-Donat-sur-l'Herbasse. Je travaille avec les produits Nailco — pose gel, semi-permanent, nail art créatif — chaque cliente repart avec des ongles qui lui ressemblent. Recommandée à 100% par mes clientes."
            tag="p" className="text-[var(--color-text-dim)] leading-relaxed mb-6" />
          <EditableButton contentKeyText="home.about.cta.text" contentKeyUrl="home.about.cta.url"
            defaultText="Réserver sur Planity" defaultUrl="https://www.planity.com/sandrin-nails-26260-saint-donat-sur-lherbasse"
            className="bg-[var(--color-rose-dark)] hover:bg-[var(--color-text)] text-white px-6 py-3 text-xs tracking-[0.2em] uppercase transition-all duration-500" />
        </Fade>
      </div>
    </section>
  );
}

/* ─── CONTACT — split ─── */
function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20 bg-[var(--color-bg-dark)]">
      <div className="max-w-5xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-10">
        <Fade className="md:col-span-5">
          <EditableText contentKey="home.contact.label" defaultValue="Contact" tag="p"
            className="text-[var(--color-rose)] text-xs tracking-[0.4em] uppercase mb-3" />
          <EditableText contentKey="home.contact.title" defaultValue="Envie de prendre soin de vos mains ?" tag="h2"
            className="font-display text-3xl md:text-4xl text-[var(--color-text-light)] leading-[1.1] mb-8" />

          <div className="space-y-4 mb-8">
            {[
              { Icon: MapPin, key: "home.contact.address", def: "2 Av. Georges Bert, 26260 Saint-Donat-sur-l'Herbasse" },
              { Icon: Phone, key: "home.contact.phone", def: "06 21 57 56 48" },
              { Icon: Mail, key: "home.contact.email", def: "sandrin_nails@icloud.com" },
              { Icon: Clock, key: "home.contact.hours", def: "Sur rendez-vous" },
            ].map(({ Icon, key, def }) => (
              <div key={key} className="flex items-start gap-3">
                <Icon className="w-4 h-4 text-[var(--color-rose)]/60 mt-0.5 flex-shrink-0" />
                <EditableText contentKey={key} defaultValue={def} tag="p" className="text-[var(--color-text-light)]/60 text-sm" />
              </div>
            ))}
          </div>

          <EditableButton contentKeyText="home.contact.cta.text" contentKeyUrl="home.contact.cta.url"
            defaultText="Appeler Sandrin" defaultUrl="tel:0621575648"
            className="border border-[var(--color-rose)]/40 text-[var(--color-rose)] hover:bg-[var(--color-rose)] hover:text-white px-8 py-3 text-xs tracking-[0.2em] uppercase transition-all duration-500" />
        </Fade>

        <Fade delay={0.15} className="md:col-span-7">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2834.2!2d4.9847!3d45.1231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSandr%27in+Nails!5e0!3m2!1sfr!2sfr"
            className="w-full h-[250px] md:h-full md:min-h-[300px] border-0 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </Fade>
      </div>
    </section>
  );
}

/* ─── MAIN ─── */
export default function Home() {
  const { loaded } = useCMS();

  if (!loaded) {
    return (
      <div className="fixed inset-0 bg-[var(--color-bg)] z-[99999] flex items-center justify-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
          <img src="https://res.cloudinary.com/dxcudyuno/image/upload/v1772835519/sandrin-nails/logo.jpg" alt="Sandr'in Nails" className="w-32 mx-auto mb-4" />
          <div className="w-8 h-8 border border-[var(--color-rose)] border-t-transparent rounded-full animate-spin mx-auto" />
        </motion.div>
      </div>
    );
  }

  return (
    <LightboxProvider>
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <Prestations />
        <ImageBreak />
        <Gallery />
        <About />
        <Contact />
        <Footer />
      </main>
    </LightboxProvider>
  );
}