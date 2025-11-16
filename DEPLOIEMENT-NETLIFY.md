# 🚀 Guide de Déploiement Netlify

Ce guide vous explique comment déployer le site Scalead sur Netlify.

## ⚠️ Problème Résolu : 404 sur Netlify

Le problème "Page not found" venait de la configuration Next.js pour Netlify. **C'est maintenant corrigé !**

### Ce qui a été fait :

1. ✅ Créé `netlify.toml` avec la bonne configuration
2. ✅ Modifié `next.config.js` (retiré `output: 'standalone'`)
3. ✅ Ajouté le plugin `@netlify/plugin-nextjs`
4. ✅ Créé les visuels de base (logo, favicon, og-image)

---

## 📋 Étapes de Déploiement

### 1. Préparer le Dépôt Git

```bash
# Vérifier que tous les fichiers sont commités
git status

# Si des fichiers ne sont pas commités
git add .
git commit -m "Fix Netlify configuration + add visuals"
git push origin claude/scalead-website-nextjs-013jmaag4QmeBgCooUzZnEjv
```

### 2. Connecter à Netlify

#### Option A : Via l'interface Netlify (Recommandé)

1. Allez sur [netlify.com](https://netlify.com)
2. Cliquez sur **"Add new site" > "Import an existing project"**
3. Connectez votre compte GitHub
4. Sélectionnez le repo `Nolan-ui-ux/site-scalead`
5. Sélectionnez la branche `claude/scalead-website-nextjs-013jmaag4QmeBgCooUzZnEjv`

#### Option B : Via Netlify CLI

```bash
# Installer Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Déployer
netlify deploy --prod
```

### 3. Configuration Build sur Netlify

Netlify devrait détecter automatiquement grâce à `netlify.toml`, mais vérifiez :

**Build settings** :
- Build command: `npm run build`
- Publish directory: `.next`
- Node version: `18`

**Environment variables** (si nécessaire) :
Aucune variable requise pour le moment.

### 4. Installer les Dépendances

Netlify le fera automatiquement, mais assurez-vous que :
```bash
npm install
```
fonctionne localement sans erreur.

---

## ✅ Vérifications Post-Déploiement

Une fois déployé, vérifiez :

- [ ] Page d'accueil s'affiche (`/`)
- [ ] Navigation fonctionne
- [ ] Pages piliers accessibles (`/cold-email`, `/automatisation-linkedin`, etc.)
- [ ] Blog accessible (`/blog`)
- [ ] Formulaires s'affichent (`/contact`, `/audit-gratuit`)
- [ ] Footer et navbar fonctionnent
- [ ] Pas d'erreur 404

---

## 🐛 Dépannage

### Erreur "Page not found" persiste

1. **Vérifier que `netlify.toml` existe** à la racine
2. **Vérifier le plugin dans `package.json`** :
   ```json
   "@netlify/plugin-nextjs": "^5.0.0"
   ```
3. **Clear cache** sur Netlify :
   - Site settings > Build & deploy > Clear cache and deploy

### Erreur de Build

1. **Vérifier les logs** dans Netlify Dashboard > Deploys
2. **Erreurs TypeScript** :
   ```bash
   npm run build
   ```
   localement pour voir les erreurs
3. **Dépendances manquantes** :
   ```bash
   npm install
   ```

### Images ne s'affichent pas

Les images SVG sont dans `/public/` :
- `/public/logo.svg`
- `/public/favicon.svg`
- `/public/og-image.svg`

Elles devraient s'afficher automatiquement.

---

## 🎨 Améliorer les Visuels (Optionnel)

Les visuels actuels sont des **placeholders SVG simples**.

Pour un rendu plus professionnel, voir le fichier `VISUELS.md`.

**Outils recommandés** :
- **Canva** - Templates logo + OG image
- **Figma** - Design professionnel
- **Favicon.io** - Générateur favicon

---

## 🔧 Configuration Avancée

### Domaine Personnalisé

1. Netlify Dashboard > Domain settings
2. Add custom domain
3. Suivre les instructions DNS

### Variables d'Environnement

Pour ajouter des variables (API keys, etc.) :

1. Site settings > Environment variables
2. Add variable
3. Redéployer

### Formulaires Netlify

Les formulaires actuels sont en HTML simple.

Pour connecter à Netlify Forms :

1. Ajouter `data-netlify="true"` aux forms
2. Ajouter un champ caché :
   ```html
   <input type="hidden" name="form-name" value="contact" />
   ```

Exemple :
```tsx
<form data-netlify="true" name="contact">
  <input type="hidden" name="form-name" value="contact" />
  {/* ... autres champs */}
</form>
```

---

## 📊 Analytics (Optionnel)

Pour ajouter Google Analytics ou autre :

1. Créer un composant `Analytics.tsx`
2. L'ajouter dans `layout.tsx`

Ou utiliser **Netlify Analytics** (payant mais simple).

---

## ✨ Prochaines Étapes

Après déploiement réussi :

1. ✅ Tester toutes les pages
2. ✅ Vérifier le SEO (Google Search Console)
3. ✅ Améliorer les visuels si besoin
4. ✅ Configurer les formulaires
5. ✅ Ajouter plus d'articles de blog
6. ✅ Configurer un domaine personnalisé

---

## 🆘 Support

Si problème persiste :

1. **Logs Netlify** : Deploys > cliquez sur le deploy > Function logs
2. **Documentation Next.js + Netlify** : https://docs.netlify.com/frameworks/next-js/
3. **Support Netlify** : https://answers.netlify.com/

---

## 📝 Résumé Rapide

```bash
# 1. Commit les changements
git add .
git commit -m "Fix Netlify config"
git push

# 2. Sur Netlify
# - Import from Git
# - Sélectionner le repo
# - Déployer

# 3. Vérifier
# - Ouvrir l'URL Netlify
# - Tester la navigation
```

**Le site devrait maintenant fonctionner parfaitement ! 🎉**
