import type { Metadata } from "next";
import "./globals.css";
import SessionProvider from "@/components/cms/SessionProvider";
import CMSProvider from "@/components/cms/CMSProvider";
import AdminBar from "@/components/cms/AdminBar";

export const metadata: Metadata = {
  title: "Sandr'in Nails — Prothésiste ongulaire à Saint-Donat-sur-l'Herbasse",
  description:
    "Pose gel, semi-permanent, nail art personnalisé. Prothésiste ongulaire professionnelle à Saint-Donat-sur-l'Herbasse. Sur rendez-vous.",
  keywords:
    "prothésiste ongulaire, manucure, nail art, pose gel, semi-permanent, Saint-Donat-sur-l'Herbasse, Drôme, Sandr'in Nails",
  openGraph: {
    title: "Sandr'in Nails — Ongles sublimés à Saint-Donat",
    description: "Pose gel, semi-permanent, nail art. Prothésiste ongulaire professionnelle. Sur rendez-vous.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              name: "Sandr'in Nails",
              address: {
                "@type": "PostalAddress",
                streetAddress: "2 Av. Georges Bert",
                addressLocality: "Saint-Donat-sur-l'Herbasse",
                postalCode: "26260",
                addressCountry: "FR",
              },
              telephone: "+33621575648",
              email: "sandrin_nails@icloud.com",
              url: "https://sandrin-nails.vercel.app",
              sameAs: [
                "https://www.instagram.com/sandrin_nails/",
                "https://www.facebook.com/p/Sandrin-Nails-100063693723089/",
                "https://www.planity.com/sandrin-nails-26260-saint-donat-sur-lherbasse",
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <SessionProvider>
          <CMSProvider>
            {children}
            <AdminBar />
          </CMSProvider>
        </SessionProvider>
      </body>
    </html>
  );
}