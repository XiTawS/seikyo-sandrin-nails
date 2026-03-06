# Sandr'in Nails — Site vitrine

Site vitrine one-page pour **Sandr'in Nails**, prothésiste ongulaire à Saint-Donat-sur-l'Herbasse (Drôme).

## Infos client

| | |
|---|---|
| **Nom** | Sandr'in Nails |
| **Activité** | Prothésiste ongulaire |
| **Adresse** | 2 Av. Georges Bert, 26260 Saint-Donat-sur-l'Herbasse |
| **Téléphone** | 06 21 57 56 48 |
| **Email** | sandrin_nails@icloud.com |
| **Instagram** | [@sandrin_nails](https://www.instagram.com/sandrin_nails/) |
| **Facebook** | [Sandr'in Nails](https://www.facebook.com/p/Sandrin-Nails-100063693723089/) |
| **Planity** | [Réservation](https://www.planity.com/sandrin-nails-26260-saint-donat-sur-lherbasse) |
| **Produits** | Nailco |
| **Recommandation** | 100% (Facebook) |

## Tarifs

### Pose Gel / Résine
| Prestation | Prix |
|---|---|
| Ongles naturels | 60€ |
| Capsules / Chablon / French reverse | 65€ |
| Remplissage | 50€ |
| Dépose | 30€ |
| Réparation | 5€ |
| Longueur > taille M | +5€/taille |

### Semi-permanent
| Prestation | Prix |
|---|---|
| Mains | 35€ |
| Pieds | 35€ |
| Supplément capsules | +5€ |

### Nail Art
| Prestation | Prix |
|---|---|
| Strass/paillettes (2 ongles) | 2€ |
| Décoration 2 ongles | 4€ |
| Décoration 5 ongles | 8€ |

## Stack technique

- **Framework** : Next.js 16 (App Router)
- **Styling** : Tailwind CSS v4
- **Animations** : Framer Motion
- **CMS** : Inline CMS Seikyo (MongoDB + Cloudinary)
- **Auth** : NextAuth v5 (Credentials)
- **Déploiement** : Vercel

## Design

- **Palette** : Rose nude #C9938E, blush #F5EDE8, rose foncé #8B5E6B, bg #FDF8F5, dark #2D1F26
- **Typographie** : Cormorant Garamond (display) + Outfit (body)
- **Ton** : Magazine beauté luxe, féminin, épuré

## Sections

1. **Hero** — Image plein écran + texte superposé en bas
2. **Prestations** — Split (image gauche + carte tarifs droite) par catégories
3. **Image Break** — Parallax + citation éditable
4. **Créations** — Galerie bento full-width (4 cols, 8 images)
5. **À propos** — Asymétrique (photo 5-col + texte 7-col)
6. **Contact** — Split (infos + CTA gauche / Google Maps droite)

## CMS

- **Login** : `/login`
- **Identifiants** : `sandrin` / `nails2026`
- **SITE_ID** : `sandrin-nails`

## Variables d'environnement

```
MONGODB_URI
NEXTAUTH_SECRET
NEXTAUTH_URL
SITE_ID
CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET
```

## Créé par

[Seikyo](https://seikyo.fr) — Sites vitrines sur mesure pour professionnels.