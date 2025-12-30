# Instructions pour activer la vidéo de présentation

## ✅ Problème résolu
L'erreur Vite a été corrigée. La section vidéo est maintenant conditionnelle et ne s'affichera que lorsque vous l'activerez.

## 📹 Comment activer la vidéo

### Option 1 : Vidéo locale (MP4)

1. **Placez votre vidéo** dans le dossier :
   ```
   public/assets/video/presentation-templates.mp4
   ```

2. **Ouvrez** `src/views/Templates.vue`

3. **Trouvez** la section `data()` (vers la ligne 201)

4. **Changez** `showVideo: false` en `showVideo: true`

5. La vidéo s'affichera automatiquement !

### Option 2 : Vidéo YouTube

1. **Ouvrez** `src/views/Templates.vue`

2. **Trouvez** la section `data()` (vers la ligne 201)

3. **Modifiez** ces valeurs :
   ```javascript
   showVideo: true,        // Activez la section vidéo
   useYouTube: true,       // Utilisez YouTube
   youtubeVideoId: 'VOTRE_ID_VIDEO', // Remplacez par l'ID de votre vidéo YouTube
   ```

4. **Pour trouver l'ID d'une vidéo YouTube** :
   - URL de la vidéo : `https://www.youtube.com/watch?v=ABC123xyz`
   - L'ID est : `ABC123xyz` (la partie après `v=`)

## 📝 Exemple de configuration

### Pour une vidéo locale :
```javascript
data() {
  return {
    showVideo: true,
    useYouTube: false,
    youtubeVideoId: '',
    videoPath: '/assets/video/presentation-templates.mp4',
    videoPathWebm: '/assets/video/presentation-templates.webm',
    // ... reste du code
  }
}
```

### Pour YouTube :
```javascript
data() {
  return {
    showVideo: true,
    useYouTube: true,
    youtubeVideoId: 'dQw4w9WgXcQ', // Exemple d'ID
    videoPath: '/assets/video/presentation-templates.mp4',
    videoPathWebm: '/assets/video/presentation-templates.webm',
    // ... reste du code
  }
}
```

## 🎬 Formats de vidéo recommandés

- **Format** : MP4 (H.264)
- **Résolution** : 1920x1080 (Full HD) ou 1280x720 (HD)
- **Taille** : Essayez de garder sous 50-100 MB pour un chargement rapide

## ⚠️ Note

Par défaut, `showVideo: false` pour éviter les erreurs si la vidéo n'existe pas encore. Activez-le seulement quand vous aurez ajouté votre vidéo !

