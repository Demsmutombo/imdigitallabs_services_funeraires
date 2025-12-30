# 📊 Système de Suivi des Choix de Templates

## ✅ Fonctionnalités Ajoutées

Un système complet a été mis en place pour savoir quel template votre client a choisi.

## 🎯 Comment ça fonctionne

### 1. **Bouton "Choisir ce template"**
Chaque template a maintenant un bouton vert "Choisir ce template" qui :
- Enregistre le choix dans le navigateur (localStorage)
- Ouvre WhatsApp avec un message pré-rempli contenant :
  - Le nom du template choisi
  - Le prix
  - Le lien vers le template
  - Un message de commande

### 2. **Identifiants Uniques**
Chaque template a maintenant un identifiant unique :
- `essentiel-1` : Template Essentiel 1
- `essentiel-2` : Template Essentiel 2
- `standard-1` : Template Standard 1
- `standard-2` : Template Standard 2
- `premium-1` : Template Premium 1
- `premium-2` : Template Premium 2

## 📱 Message WhatsApp Reçu

Quand un client clique sur "Choisir ce template", vous recevrez un message WhatsApp comme :

```
Bonjour, je suis intéressé(e) par le template suivant :

📋 Template : Template Standard 1
💰 Prix : 120$ – 180$ USD
🔗 Lien : https://funeraille-tamp2-standard.vercel.app/

Je souhaite commander ce template pour créer un site mémorial.
```

## 💾 Suivi Local (localStorage)

Le choix est également enregistré dans le navigateur du client avec ces informations :
```json
{
  "templateId": "standard-1",
  "templateName": "Template Standard 1",
  "templateType": "standard",
  "price": "120$ – 180$ USD",
  "url": "https://funeraille-tamp2-standard.vercel.app/",
  "timestamp": "2024-12-30T23:00:00.000Z"
}
```

## 🔍 Comment Vérifier le Choix d'un Client

### Méthode 1 : Via WhatsApp
Le client vous enverra automatiquement un message WhatsApp avec toutes les informations.

### Méthode 2 : Via localStorage (pour vous)
Si vous avez accès à la console du navigateur du client, vous pouvez vérifier :
```javascript
// Dans la console du navigateur
const choix = JSON.parse(localStorage.getItem('selectedTemplate'))
console.log(choix)
```

### Méthode 3 : Via les Analytics (à implémenter)
Vous pouvez ajouter Google Analytics ou un autre service pour tracker les clics.

## 🎨 Interface Utilisateur

- **Bouton "Voir le site"** (gris foncé) : Ouvre le template en prévisualisation
- **Bouton "Choisir ce template"** (vert WhatsApp) : Sélectionne le template et ouvre WhatsApp

## ⚙️ Configuration

Le numéro WhatsApp est configuré dans `src/views/Templates.vue` :
```javascript
whatsappNumber: '243991683269'
```

Vous pouvez le modifier si nécessaire.

## 📊 Statistiques Possibles

Pour obtenir des statistiques sur les templates les plus choisis, vous pouvez :
1. Analyser les messages WhatsApp reçus
2. Implémenter un backend pour enregistrer les choix
3. Utiliser Google Analytics pour tracker les clics

## 🚀 Améliorations Futures Possibles

- Ajouter un formulaire de contact directement sur le site
- Envoyer un email automatique en plus de WhatsApp
- Créer un tableau de bord pour voir les statistiques
- Ajouter un système de panier/commande

