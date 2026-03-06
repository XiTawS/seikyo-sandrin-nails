"use client";

import EditableText from "@/components/cms/EditableText";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-deep)] py-12 px-6 md:px-12">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <EditableText contentKey="footer.name" defaultValue="Sandr'in Nails" tag="h3"
            className="font-display text-2xl text-[var(--color-text-light)] mb-2" />
          <EditableText contentKey="footer.desc" defaultValue="Prothésiste ongulaire à Saint-Donat-sur-l'Herbasse"
            tag="p" className="text-[var(--color-text-light)]/40 text-sm" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-[var(--color-rose)]/50" />
            <EditableText contentKey="footer.phone" defaultValue="06 21 57 56 48" tag="span" className="text-[var(--color-text-light)]/50 text-sm" />
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-[var(--color-rose)]/50" />
            <EditableText contentKey="footer.email" defaultValue="sandrin_nails@icloud.com" tag="span" className="text-[var(--color-text-light)]/50 text-sm" />
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-[var(--color-rose)]/50" />
            <EditableText contentKey="footer.address" defaultValue="2 Av. Georges Bert, Saint-Donat" tag="span" className="text-[var(--color-text-light)]/50 text-sm" />
          </div>
          <div className="flex items-center gap-3 mt-3">
            <a href="https://www.instagram.com/sandrin_nails/" target="_blank" rel="noopener noreferrer"
              className="text-[var(--color-text-light)]/30 hover:text-[var(--color-rose)] transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://www.facebook.com/p/Sandrin-Nails-100063693723089/" target="_blank" rel="noopener noreferrer"
              className="text-[var(--color-text-light)]/30 hover:text-[var(--color-rose)] transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-8 pt-6 border-t border-white/5 text-center">
        <p className="text-[var(--color-text-light)]/20 text-xs">
          Créé par{" "}
          <a href="https://seikyo.fr" target="_blank" rel="noopener noreferrer"
            className="text-[var(--color-rose)]/40 hover:text-[var(--color-rose)] transition-colors">
            Seikyo
          </a>
        </p>
      </div>
    </footer>
  );
}