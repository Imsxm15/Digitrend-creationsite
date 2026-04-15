# Digitrend Creation

Site vitrine et plateforme de lead capture pour Digitrend Creation — architecture opérationnelle, IA appliquée et systèmes de conversion.

## Stack

- **Frontend** : React 19, TypeScript 5.9, Vite 7, Tailwind CSS 4
- **UI** : shadcn/ui (New York), Lucide Icons
- **Backend** : Supabase (PostgreSQL 17, RLS)
- **Hosting** : Netlify
- **Analytics** : Plausible

## Setup

```bash
git clone <repo-url>
cd project
cp .env.example .env.local
# Remplir SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY et SUPABASE_RATE_LIMIT_SALT
npm install
npm run dev
```

## Scripts

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement (port 5173) |
| `npm run build` | Build de production (typecheck + bundle) |
| `npm run preview` | Preview du build de production |
| `npm run typecheck` | Vérification TypeScript |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |

## Architecture

```
src/
├── components/
│   ├── common/       # Composants réutilisables (ScrollReveal, PageMeta, ErrorBoundary)
│   ├── layout/       # Layout, Navigation, Footer
│   ├── sections/     # Sections de la homepage
│   └── ui/           # Composants shadcn/ui
├── data/             # Données statiques (offres, navigation, profil)
├── hooks/            # Hooks custom
├── lib/              # Utilitaires (Supabase client, analytics, cn())
└── pages/            # Pages (lazy-loaded)
```

## Déploiement

Push sur `main` déclenche un build automatique sur Netlify. Les variables d'environnement Supabase doivent être configurées dans le dashboard Netlify.
