# Intégration des Formulaires Google Forms

## Vue d'ensemble

L'application Vue.js intègre maintenant trois formulaires Google Forms pour les différentes offres de sites mémoriaux. Ces formulaires sont affichés directement dans l'application via des iframes, offrant une expérience utilisateur fluide et professionnelle.

## 📋 Formulaires disponibles

### 1. Formulaire Essentiel
- **URL de la page** : `/formulaire-essentiel`
- **Lien Google Forms** : https://forms.gle/2mYSN7oBuEsKAe2d7
- **Composant Vue** : `src/views/FormulaireEssentiel.vue`
- **Prix** : 50$ – 80$ USD
- **Délai** : 24 heures

### 2. Formulaire Standard ⭐
- **URL de la page** : `/formulaire-standard`
- **Lien Google Forms** : https://forms.gle/2hXLNAVxKX74nrev8
- **Composant Vue** : `src/views/FormulaireStandard.vue`
- **Prix** : 120$ – 180$ USD
- **Délai** : 2 jours

### 3. Formulaire Premium 💎
- **URL de la page** : `/formulaire-premium`
- **Lien Google Forms** : https://forms.gle/uVAW4KNfz12JsMus9
- **Composant Vue** : `src/views/FormulairePremium.vue`
- **Prix** : 250$ – 350$ USD
- **Délai** : 3–4 jours

## 🎨 Caractéristiques de l'intégration

### Design responsive
- **Desktop** : Sidebar avec informations de la formule + formulaire
- **Mobile** : Layout en colonne unique
- Hauteur dynamique selon le formulaire

### Interface utilisateur
Chaque page comprend :
1. **Header et Footer** : Navigation cohérente avec le reste de l'application
2. **Titre et description** : Introduction claire de la formule
3. **Sidebar informative** :
   - Badge distinctif (Standard ⭐, Premium 💎)
   - Prix et délai
   - Liste des fonctionnalités incluses
   - Sticky positioning (reste visible pendant le scroll)
4. **Formulaire intégré** : Iframe Google Forms
5. **Section d'aide** :
   - Lien WhatsApp : +243 991 683 269
   - Lien Email : israelmutombo9319@gmail.com

### Styles personnalisés
- Cartes avec ombres et bordures arrondies
- Badges colorés selon la formule
- Boutons d'action avec effets hover
- Animations AOS (Animate On Scroll)

## 🔗 Routes configurées

Les routes suivantes ont été ajoutées dans `src/router/index.js` :

```javascript
{
  path: '/formulaire-essentiel',
  name: 'FormulaireEssentiel',
  component: FormulaireEssentiel
},
{
  path: '/formulaire-standard',
  name: 'FormulaireStandard',
  component: FormulaireStandard
},
{
  path: '/formulaire-premium',
  name: 'FormulairePremium',
  component: FormulairePremium
}
```

## 🔄 Navigation depuis la page Questionnaires

La page `/questionnaires` a été mise à jour pour rediriger vers les nouveaux formulaires Google :

- **Bouton Essentiel** → `/formulaire-essentiel`
- **Bouton Standard** → `/formulaire-standard`
- **Bouton Premium** → `/formulaire-premium`

## 📝 Modification des formulaires Google

### Comment obtenir l'URL d'intégration

1. Ouvrir le formulaire dans Google Forms
2. Cliquer sur "Envoyer"
3. Cliquer sur l'icône `<>` (Intégrer HTML)
4. Copier l'URL dans l'attribut `src` de l'iframe

### Format de l'URL d'intégration

```
https://docs.google.com/forms/d/e/[FORM_ID]/viewform?embedded=true
```

### Modifier l'URL dans les composants

Pour changer le formulaire affiché, modifiez l'attribut `src` de l'iframe dans le composant correspondant :

```vue
<iframe 
  src="NOUVELLE_URL_ICI"
  width="100%" 
  height="3800" 
  frameborder="0" 
  marginheight="0" 
  marginwidth="0"
  title="Formulaire Offre Essentiel"
>
  Chargement…
</iframe>
```

### Ajuster la hauteur

Si le formulaire est trop long ou trop court, modifiez l'attribut `height` et la propriété CSS `min-height` :

```vue
<!-- Dans le template -->
<iframe height="4000" ...>

<!-- Dans les styles -->
.formulaire-container iframe {
  min-height: 4000px;
}
```

## 📊 Gestion des réponses

Les réponses des formulaires sont automatiquement collectées dans Google Forms et peuvent être :
- Consultées dans l'interface Google Forms
- Exportées vers Google Sheets
- Reçues par email (si configuré)

## 🎯 Avantages de cette intégration

### Pour les développeurs
- ✅ Pas besoin de backend pour gérer les soumissions
- ✅ Stockage automatique dans Google Drive
- ✅ Interface facile à modifier sans toucher au code
- ✅ Notifications email automatiques

### Pour les clients
- ✅ Interface familière de Google Forms
- ✅ Sauvegarde automatique des réponses
- ✅ Possibilité de modifier les réponses
- ✅ Design intégré à l'application

### Pour l'entreprise
- ✅ Collecte centralisée des données
- ✅ Export facile vers Excel/Sheets
- ✅ Analyse des réponses intégrée
- ✅ Gratuit et fiable

## 🔧 Maintenance

### Tâches courantes

1. **Changer un formulaire** : Modifier l'URL dans le composant Vue correspondant
2. **Ajouter des questions** : Modifier le formulaire dans Google Forms
3. **Consulter les réponses** : Accéder à Google Forms ou Google Sheets
4. **Ajuster le design** : Modifier les styles CSS dans les composants Vue

### Fichiers à modifier

- **Composants** : `src/views/Formulaire*.vue`
- **Routeur** : `src/router/index.js`
- **Page de sélection** : `src/views/Questionnaires.vue`

## 📱 Responsive Design

L'intégration est entièrement responsive :

- **Desktop (>992px)** : Sidebar + formulaire côte à côte
- **Tablet (768px-992px)** : Sidebar au-dessus du formulaire
- **Mobile (<768px)** : Layout vertical optimisé

## 🌐 Compatibilité

L'intégration fonctionne sur :
- ✅ Chrome, Firefox, Safari, Edge (dernières versions)
- ✅ iOS Safari et Chrome
- ✅ Android Chrome
- ✅ Tous les appareils modernes

## 📞 Support

Pour toute question ou problème :
- **WhatsApp** : +243 991 683 269
- **Email** : israelmutombo9319@gmail.com

---

**Documentation mise à jour le** : 7 janvier 2026

