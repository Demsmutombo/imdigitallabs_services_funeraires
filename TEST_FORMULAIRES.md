# ✅ Liste de vérification - Intégration des formulaires Google

## 🔍 Tests à effectuer

### 1. Installation et démarrage

- [ ] `npm install` fonctionne sans erreur
- [ ] `npm run dev` démarre le serveur de développement
- [ ] L'application est accessible sur `http://localhost:5173`
- [ ] Aucune erreur dans la console du navigateur

### 2. Navigation vers les formulaires

#### Via la page Questionnaires
- [ ] La page `/questionnaires` se charge correctement
- [ ] Les 3 cartes de formules sont affichées
- [ ] Le badge "⭐ La plus demandée" apparaît sur Standard
- [ ] Le badge "💎 Premium" apparaît sur Premium
- [ ] Les boutons "Remplir le formulaire" sont actifs pour les 3 formules
- [ ] Clic sur "Essentiel" → redirige vers `/formulaire-essentiel`
- [ ] Clic sur "Standard" → redirige vers `/formulaire-standard`
- [ ] Clic sur "Premium" → redirige vers `/formulaire-premium`

#### Accès direct
- [ ] URL `/formulaire-essentiel` fonctionne
- [ ] URL `/formulaire-standard` fonctionne
- [ ] URL `/formulaire-premium` fonctionne

### 3. Page Formulaire Essentiel

#### Structure
- [ ] Header et Footer présents
- [ ] Titre "📋 Formulaire Offre Essentiel" affiché
- [ ] Sidebar avec informations de la formule
- [ ] Prix "50$ – 80$ USD" visible
- [ ] Délai "⏱️ 24 heures" visible
- [ ] Liste des fonctionnalités incluses
- [ ] Formulaire Google chargé dans l'iframe
- [ ] Section d'aide en bas de page
- [ ] Boutons WhatsApp et Email fonctionnels

#### Responsive
- [ ] **Desktop** : Sidebar à gauche, formulaire à droite
- [ ] **Tablet** : Sidebar au-dessus, formulaire en dessous
- [ ] **Mobile** : Layout vertical, tout empilé
- [ ] Sidebar sticky sur desktop (reste visible au scroll)

#### Formulaire
- [ ] Le formulaire Google se charge complètement
- [ ] Tous les champs sont visibles
- [ ] Le formulaire est scrollable
- [ ] Pas de double scroll bar
- [ ] La hauteur est adaptée (pas trop de blanc en bas)

### 4. Page Formulaire Standard

#### Structure
- [ ] Header et Footer présents
- [ ] Titre "📋 Formulaire Offre Standard ⭐" affiché
- [ ] Badge "⭐ La plus demandée" visible
- [ ] Sidebar avec bordure dorée (accent-color)
- [ ] Prix "120$ – 180$ USD" visible
- [ ] Délai "⏱️ 2 jours" visible
- [ ] Liste des fonctionnalités "Tout Essentiel +"
- [ ] Formulaire Google chargé
- [ ] Section d'aide présente

#### Responsive
- [ ] Layout adapté sur tous les écrans
- [ ] Sidebar sticky sur desktop

#### Formulaire
- [ ] Formulaire Google chargé complètement
- [ ] Champs spécifiques à Standard visibles (vidéos, citations, etc.)

### 5. Page Formulaire Premium

#### Structure
- [ ] Header et Footer présents
- [ ] Titre "📋 Formulaire Offre Premium 💎" affiché
- [ ] Badge "💎 Premium" avec dégradé violet
- [ ] Sidebar avec bordure violette (#764ba2)
- [ ] Background gradient léger sur la sidebar
- [ ] Prix "250$ – 350$ USD" visible
- [ ] Délai "⏱️ 3–4 jours" visible
- [ ] Liste complète des fonctionnalités
- [ ] Formulaire Google chargé
- [ ] Section d'aide présente

#### Responsive
- [ ] Layout adapté sur tous les écrans
- [ ] Sidebar sticky sur desktop

#### Formulaire
- [ ] Formulaire Google chargé complètement
- [ ] Champs spécifiques à Premium visibles

### 6. Fonctionnalités communes

#### Animations
- [ ] Animations AOS fonctionnent au scroll
- [ ] Pas de saccades lors de l'affichage
- [ ] Smooth et fluide

#### Boutons d'aide
- [ ] Bouton WhatsApp cliquable
- [ ] Ouvre WhatsApp avec le bon numéro (+243991683269)
- [ ] Bouton Email cliquable
- [ ] Ouvre le client email avec la bonne adresse
- [ ] Effets hover sur les boutons

#### Navigation
- [ ] Le Header permet de naviguer vers d'autres pages
- [ ] Le Footer est toujours en bas
- [ ] Les liens fonctionnent correctement
- [ ] Retour possible vers `/questionnaires`

### 7. Soumission des formulaires

#### Test de remplissage
- [ ] Formulaire Essentiel : Tous les champs sont remplissables
- [ ] Formulaire Standard : Tous les champs sont remplissables
- [ ] Formulaire Premium : Tous les champs sont remplissables
- [ ] Upload de photos fonctionne
- [ ] Validation des champs obligatoires
- [ ] Message de confirmation après soumission
- [ ] Email de confirmation reçu (si configuré)

### 8. Compatibilité navigateurs

- [ ] Chrome : Tout fonctionne
- [ ] Firefox : Tout fonctionne
- [ ] Safari : Tout fonctionne
- [ ] Edge : Tout fonctionne

### 9. Compatibilité mobile

- [ ] iOS Safari : Affichage correct
- [ ] Android Chrome : Affichage correct
- [ ] Formulaire utilisable sur mobile
- [ ] Zoom fonctionne correctement
- [ ] Pas de débordement horizontal

### 10. Performance

- [ ] Temps de chargement initial < 3 secondes
- [ ] Iframe se charge rapidement
- [ ] Pas de freeze lors du scroll
- [ ] Animations fluides
- [ ] Pas d'erreurs dans la console

### 11. SEO et Accessibilité

- [ ] Balises `title` des iframes présentes
- [ ] Alt text sur les icônes importantes
- [ ] Contraste des couleurs suffisant
- [ ] Navigation au clavier possible
- [ ] Texte lisible sur tous les fonds

### 12. Documentation

- [ ] README.md à jour
- [ ] INTEGRATION_GOOGLE_FORMS.md créé
- [ ] GUIDE_UTILISATION_FORMULAIRES.md créé
- [ ] Liens vers formulaires Google corrects
- [ ] Instructions claires

## 🐛 Bugs connus / À résoudre

Liste des problèmes identifiés lors des tests :

1. _______________________________________________
2. _______________________________________________
3. _______________________________________________

## 📝 Notes supplémentaires

_______________________________________________
_______________________________________________
_______________________________________________

## ✅ Validation finale

- [ ] Tous les tests ci-dessus sont passés
- [ ] Aucun bug bloquant
- [ ] Documentation complète
- [ ] Prêt pour la production

---

**Testé par** : _______________  
**Date** : _______________  
**Version** : 1.0.0

