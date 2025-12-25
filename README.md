# Memorial Days - Vue.js

Site mémorial pour Henock Ngandu Kabadi, converti en application Vue.js.

## Installation

Installez les dépendances :

```bash
npm install
```

## Développement

Lancez le serveur de développement :

```bash
npm run dev
```

Le site sera accessible à l'adresse : `http://localhost:5173`

## Build de production

Pour créer une version de production :

```bash
npm run build
```

Les fichiers de production seront générés dans le dossier `dist/`.

## Structure du projet

```
├── public/              # Fichiers statiques (assets, images, etc.)
│   └── assets/
├── src/
│   ├── components/      # Composants réutilisables
│   │   ├── Header.vue
│   │   └── Footer.vue
│   ├── views/           # Pages principales
│   │   ├── Home.vue
│   │   ├── Temoignage.vue
│   │   ├── Questionnaires.vue
│   │   └── QuestionnaireEssentiel.vue
│   ├── router/          # Configuration du routeur
│   │   └── index.js
│   ├── utils/           # Utilitaires
│   │   └── scriptLoader.js
│   ├── App.vue          # Composant racine
│   └── main.js          # Point d'entrée
├── index.html           # Fichier HTML principal (pour Vite)
├── vite.config.js       # Configuration Vite
└── package.json         # Dépendances et scripts
```

## Technologies utilisées

- Vue.js 3
- Vue Router
- Bootstrap 5
- AOS (Animate On Scroll)
- Typed.js
- Swiper
- Isotope
- Lightbox2
- GLightbox

## Pages disponibles

- `/` - Page d'accueil (Home)
- `/temoignage` - Page des témoignages
- `/questionnaires` - Page de sélection des formules (Essentiel, Standard, Premium)
- `/questionnaire-essentiel` - Formulaire interactif pour la formule Essentiel

## Questionnaires

### Page de sélection (`/questionnaires`)

Une page d'accueil présente les trois formules disponibles (Essentiel, Standard, Premium) avec leurs caractéristiques et prix. Les utilisateurs peuvent choisir leur formule et accéder au questionnaire correspondant.

### Formulaire Essentiel (`/questionnaire-essentiel`)

Le formulaire `/questionnaire-essentiel` permet de collecter toutes les informations nécessaires pour créer un site mémorial avec la formule Essentiel :

- Informations personnelles du défunt
- Informations familiales
- Biographie
- Informations sur les obsèques
- Gestion des photos (photo principale + galerie jusqu'à 15 photos)
- Informations de contact

Le formulaire inclut :
- Validation des champs requis
- Prévisualisation des images
- Compteur de caractères pour la biographie
- Interface responsive et moderne

## Notes

- Tous les styles et designs originaux ont été conservés
- Les scripts JavaScript ont été adaptés pour fonctionner avec Vue.js
- Les images et assets restent dans le dossier `public/assets/`
- Le formulaire est prêt pour l'intégration avec une API backend (section commentée dans `submitForm()`)

