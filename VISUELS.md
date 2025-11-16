# 🎨 Guide des Visuels à Créer

Ce document liste tous les visuels nécessaires pour le site Scalead.

## 📋 Visuels Prioritaires

### 1. Logo Scalead
**Emplacement** : `/public/logo.png` et `/public/logo.svg`

**Spécifications** :
- Format : SVG (vectoriel) + PNG (fallback)
- Dimensions recommandées : 200x50px
- Couleurs : Bleu primary (#1877F2) + Blanc
- Style : Moderne, SaaS, épuré

**Comment créer** :
- Option 1 : Canva (templates logo SaaS)
- Option 2 : Figma (gratuit)
- Option 3 : Looka.com (générateur IA)

**À quoi ça doit ressembler** :
```
┌─────────────────┐
│  S  Scalead     │  <- Lettre S dans un carré bleu + texte
└─────────────────┘
```
Ou simplement le texte "Scalead" en typo moderne (Inter, Poppins).

---

### 2. Favicon
**Emplacement** : `/public/favicon.ico`

**Spécifications** :
- Format : ICO ou PNG
- Dimensions : 32x32px ou 64x64px
- Contenu : Juste la lettre "S" ou version mini du logo

**Comment créer** :
- Favicon.io (gratuit, convertit text en favicon)
- Ou réduire le logo à 32x32px

---

### 3. Open Graph Image (partage réseaux sociaux)
**Emplacement** : `/public/og-image.png`

**Spécifications** :
- Format : PNG ou JPG
- Dimensions : 1200x630px (format Facebook/LinkedIn)
- Contenu : Logo + tagline + fond dégradé bleu

**À quoi ça doit ressembler** :
```
┌────────────────────────────────────────┐
│                                        │
│           [LOGO SCALEAD]               │
│                                        │
│   Développement Commercial B2B        │
│   Prospection Multicanale Automatisée │
│                                        │
│        Fond dégradé bleu (#1877F2)    │
└────────────────────────────────────────┘
```

**Comment créer** :
- Canva (template "Facebook Post" 1200x630)
- Photopea (Photoshop gratuit en ligne)
- Figma

---

## 📦 Visuels Optionnels (mais recommandés)

### 4. Image de fond Hero (optionnel)
**Emplacement** : `/public/images/hero-bg.svg` ou `.png`

**Spécifications** :
- Pattern abstrait ou gradient
- Tons de bleu
- Peut être remplacé par du CSS gradient

**Pas urgent** - Le site utilise déjà des gradients CSS.

---

### 5. Icônes de fonctionnalités (optionnel)
**Emplacement** : `/public/icons/`

Le site utilise déjà des emojis (📧, 🎯, 🤖, etc.) donc **pas nécessaire**.

Si vous voulez les remplacer :
- Heroicons (gratuit)
- Lucide Icons (gratuit)
- Font Awesome (gratuit)

---

## 🚀 Structure des Fichiers à Créer

```
public/
├── logo.svg              # Logo principal (PRIORITAIRE)
├── logo.png              # Logo fallback
├── favicon.ico           # Favicon (PRIORITAIRE)
├── og-image.png          # Image partage social (PRIORITAIRE)
└── images/
    └── hero-bg.svg       # Optionnel
```

---

## ✅ Checklist

- [ ] Créer logo.svg (200x50px)
- [ ] Créer favicon.ico (32x32px)
- [ ] Créer og-image.png (1200x630px)
- [ ] Remplacer les chemins dans le code si nécessaire

---

## 🎨 Outils Recommandés (Gratuits)

1. **Canva** (canva.com) - Templates prêts
2. **Figma** (figma.com) - Design professionnel
3. **Favicon.io** - Générateur favicon
4. **Looka** - Générateur logo IA
5. **Photopea** - Photoshop en ligne gratuit

---

## 📝 Alternative Simple (30 secondes)

**Si vous voulez démarrer VITE** :

1. **Logo** : Utilisez juste le texte "Scalead" en CSS (déjà fait dans Navbar)
2. **Favicon** : Favicon.io > Type "S" > Télécharger
3. **OG Image** : Canva > "Facebook Post" > Ajoutez texte "Scalead" + dégradé bleu

Le site fonctionne **parfaitement sans images** grâce aux composants CSS !

---

## 💡 Note Importante

Le site actuel utilise :
- ✅ Logo en CSS (div avec "S" + texte)
- ✅ Mockups en CSS pur (DashboardMockup)
- ✅ Icônes en emojis
- ✅ Gradients en CSS

Donc **le site fonctionne déjà visuellement** sans aucune image !

Les visuels ci-dessus sont pour :
- SEO (og-image)
- Branding (logo professionnel)
- Polish final (favicon)
