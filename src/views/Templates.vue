<template>
  <div class="templates-page">
    <main class="main">
      <!-- Hero Section -->
      <section class="hero-section section dark-background">
        <div class="container d-flex flex-column align-items-center justify-content-center text-center" data-aos="fade-up">
          <h1>🌹 {{ pageTitle }}</h1>
          <p class="lead">Découvrez nos modèles de sites mémoriaux personnalisables</p>
          <p class="subtitle">IM DIGITAL LABS</p>
        </div>
      </section>

      <!-- Section Vidéo de Présentation -->
      <!-- Décommentez cette section et configurez showVideo: true dans data() quand vous aurez ajouté votre vidéo -->
      <section v-if="showVideo" class="video-section section">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>📹 Comment utiliser nos templates</h2>
            <p>Découvrez en vidéo comment personnaliser et utiliser nos templates de sites mémoriaux</p>
          </div>
          <div class="video-wrapper">
            <div class="video-container">
              <!-- Option 1 : Vidéo locale (MP4/WebM) -->
              <!-- Placez votre vidéo dans public/assets/video/presentation-templates.mp4 -->
              <video 
                v-if="!useYouTube"
                controls 
                class="presentation-video"
                preload="metadata">
                <source :src="videoPath" type="video/mp4">
                <source :src="videoPathWebm" type="video/webm">
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
              
              <!-- Option 2 : Vidéo YouTube -->
              <!-- Définissez useYouTube: true et youtubeVideoId dans data() pour utiliser YouTube -->
              <iframe 
                v-if="useYouTube"
                class="presentation-video youtube-video"
                :src="`https://www.youtube.com/embed/${youtubeVideoId}?rel=0`" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
              </iframe>
            </div>
            <p class="video-note">
              <i class="bi bi-info-circle me-2"></i>
              Cette vidéo vous guide étape par étape dans l'utilisation et la personnalisation de nos templates.
            </p>
          </div>
        </div>
      </section>

      <!-- Section des Templates -->
      <section class="templates-section section">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2 v-if="templateType === 'essentiel'">Templates Essentiel</h2>
            <h2 v-else-if="templateType === 'standard'">Templates Standard</h2>
            <h2 v-else-if="templateType === 'premium'">Templates Premium</h2>
            <h2 v-else>Choisissez Votre Template</h2>
            <p>Chaque template est conçu avec soin pour honorer la mémoire de vos proches</p>
          </div>

          <!-- Note explicative -->
          <div class="info-note" data-aos="fade-up" data-aos-delay="50">
            <div class="info-card">
              <div class="info-icon">
                <i class="bi bi-shield-check"></i>
              </div>
              <div class="info-content">
                <h4>📋 Comment ça se passe ?</h4>
                <p>
                  Choisissez votre template ci-dessous et cliquez sur « Choisir ce template » pour nous contacter via WhatsApp.
                </p>
                <p>
                  Nous échangeons avec vous afin de bien comprendre vos besoins et vous transmettre les instructions de paiement.
                </p>
                <p>
                  Après confirmation du paiement, nous vous envoyons immédiatement un lien vers un formulaire Google personnalisé.
                </p>
                <p>
                  Vous remplissez le formulaire à votre rythme, en toute tranquillité, avec toutes les informations nécessaires.
                </p>
                <p>
                  Nous réalisons votre site mémorial selon le template choisi et les informations fournies.
                </p>
                <p class="info-highlight">
                  <i class="bi bi-envelope-check me-2"></i>
                  <strong>📩 Le formulaire vous sera envoyé par e-mail ou WhatsApp après validation du paiement.</strong>
                </p>
              </div>
            </div>
          </div>

          <div class="row gy-4">
            <!-- Templates Essentiel -->
            <div 
              v-if="!templateType || templateType === 'essentiel'"
              v-for="(template, index) in templates.essentielList" 
              :key="index"
              class="col-lg-6 col-md-6 col-12" 
              :data-aos="'fade-up'" 
              :data-aos-delay="100 + (index * 100)">
              <div class="template-card">
                <div class="template-image-wrapper">
                  <img :src="getImageUrl(template.image)" :alt="`Template Essentiel ${index + 1}`" class="template-image">
                  <div class="template-overlay">
                    <a :href="template.externalUrl" target="_blank" class="btn btn-view">
                      <i class="bi bi-eye me-2"></i>Voir le site
                    </a>
                  </div>
                </div>
                <div class="template-content">
                  <div class="template-badge badge-essentiel">Essentiel</div>
                  <h3>Template Essentiel</h3>
                  <p class="template-price">{{ template.price }}</p>
                  <p class="template-why">{{ template.whyChoose }}</p>
                  <div class="template-footer">
                    <a :href="template.externalUrl" target="_blank" class="btn btn-view-template mb-2">
                      <i class="bi bi-eye me-2"></i>Voir le site
                    </a>
                    <button @click="selectTemplate(template)" class="btn btn-select">
                      <i class="bi bi-check-circle me-2"></i>Choisir ce template
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Templates Standard -->
            <div 
              v-if="!templateType || templateType === 'standard'"
              v-for="(template, index) in templates.standardList" 
              :key="'standard-' + index"
              class="col-lg-6 col-md-6 col-12" 
              :data-aos="'fade-up'" 
              :data-aos-delay="100 + (index * 100)">
              <div class="template-card featured">
                <div class="badge-featured-top">⭐ La plus demandée</div>
                <div class="template-image-wrapper">
                  <img :src="getImageUrl(template.image)" :alt="`Template Standard ${index + 1}`" class="template-image">
                  <div class="template-overlay">
                    <a :href="template.externalUrl" target="_blank" class="btn btn-view">
                      <i class="bi bi-eye me-2"></i>Voir le site
                    </a>
                  </div>
                </div>
                <div class="template-content">
                  <div class="template-badge badge-standard">Standard ⭐</div>
                  <h3>Template Standard</h3>
                  <p class="template-price">{{ template.price }}</p>
                  <p class="template-why">{{ template.whyChoose }}</p>
                  <div class="template-footer">
                    <a :href="template.externalUrl" target="_blank" class="btn btn-view-template mb-2">
                      <i class="bi bi-eye me-2"></i>Voir le site
                    </a>
                    <button @click="selectTemplate(template)" class="btn btn-select">
                      <i class="bi bi-check-circle me-2"></i>Choisir ce template
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Templates Premium -->
            <div 
              v-if="!templateType || templateType === 'premium'"
              v-for="(template, index) in templates.premiumList" 
              :key="'premium-' + index"
              class="col-lg-6 col-md-6 col-12" 
              :data-aos="'fade-up'" 
              :data-aos-delay="100 + (index * 100)">
              <div class="template-card premium">
                <div class="template-image-wrapper">
                  <img :src="getImageUrl(template.image)" :alt="`Template Premium ${index + 1}`" class="template-image">
                  <div class="template-overlay">
                    <a :href="template.externalUrl" target="_blank" class="btn btn-view">
                      <i class="bi bi-eye me-2"></i>Voir le site
                    </a>
                  </div>
                </div>
                <div class="template-content">
                  <div class="template-badge badge-premium">Premium 💎</div>
                  <h3>Template Premium</h3>
                  <p class="template-price">{{ template.price }}</p>
                  <p class="template-why">{{ template.whyChoose }}</p>
                  <div class="template-footer">
                    <a :href="template.externalUrl" target="_blank" class="btn btn-view-template mb-2">
                      <i class="bi bi-eye me-2"></i>Voir le site
                    </a>
                    <button @click="selectTemplate(template)" class="btn btn-select">
                      <i class="bi bi-check-circle me-2"></i>Choisir ce template
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Bouton Retour -->
          <div class="text-center mt-5">
            <router-link to="/" class="btn btn-secondary">
              <i class="bi bi-arrow-left me-2"></i>Retour aux offres
            </router-link>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'

export default {
  name: 'Templates',
  components: {
    Footer
  },
  props: {
    type: {
      type: String,
      default: null
    }
  },
  computed: {
    templateType() {
      return this.type || this.$route.params.type || null
    },
    pageTitle() {
      if (this.templateType === 'essentiel') {
        return 'Templates Essentiel'
      } else if (this.templateType === 'standard') {
        return 'Templates Standard'
      } else if (this.templateType === 'premium') {
        return 'Templates Premium'
      }
      return 'Nos Templates Disponibles'
    }
  },
  data() {
    return {
      // Configuration de la vidéo de présentation
      showVideo: true, // Section vidéo activée
      useYouTube: false, // Mettez true pour utiliser YouTube au lieu d'une vidéo locale
      youtubeVideoId: '', // ID de votre vidéo YouTube (ex: 'dQw4w9WgXcQ')
      videoPath: '/assets/video/presentation-templates.mp4', // Chemin vers votre vidéo MP4
      videoPathWebm: '/assets/video/presentation-templates.webm', // Chemin vers votre vidéo WebM (optionnel)
      
      templates: {
        essentielList: [
          {
            id: 'essentiel-1',
            name: 'Template Essentiel 1',
            price: '50$ – 80$ USD',
            whyChoose: 'Choisissez ce template pour un hommage sobre et élégant à petit budget. Parfait pour ceux qui recherchent la simplicité et l\'essentiel.',
            externalUrl: 'https://funeraille-tamp2-essentiel.vercel.app/',
            image: '/assets/img/tamplate/essentiel1 (1).PNG'
          },
          {
            id: 'essentiel-2',
            name: 'Template Essentiel 2',
            price: '50$ – 80$ USD',
            whyChoose: 'Choisissez ce template pour un hommage sobre et élégant à petit budget. Parfait pour ceux qui recherchent la simplicité et l\'essentiel.',
            externalUrl: 'https://offres-essentiel.vercel.app/',
            image: '/assets/img/tamplate/essentiel1 (2).PNG'
          }
        ],
        standardList: [
          {
            id: 'standard-1',
            name: 'Template Standard 1',
            price: '120$ – 180$ USD',
            whyChoose: 'Optez pour ce template si vous voulez un hommage plus complet avec animations et fonctionnalités avancées. Le choix le plus populaire !',
            externalUrl: 'https://funeraille-tamp2-standard.vercel.app/',
            image: '/assets/img/tamplate/standard1.PNG'
          },
          {
            id: 'standard-2',
            name: 'Template Standard 2',
            price: '120$ – 180$ USD',
            whyChoose: 'Optez pour ce template si vous voulez un hommage plus complet avec animations et fonctionnalités avancées. Le choix le plus populaire !',
            externalUrl: 'https://offre-standard.vercel.app/',
            image: '/assets/img/tamplate/standard2.PNG'
          }
        ],
        premiumList: [
          {
            id: 'premium-1',
            name: 'Template Premium 1',
            price: '250$ – 350$ USD',
            whyChoose: 'Pour un hommage exceptionnel et entièrement personnalisé. Ce template offre toutes les fonctionnalités et une personnalisation totale.',
            externalUrl: 'https://funeraille-tamp2-premium.vercel.app/',
            image: '/assets/img/tamplate/prem1.PNG'
          },
          {
            id: 'premium-2',
            name: 'Template Premium 2',
            price: '250$ – 350$ USD',
            whyChoose: 'Pour un hommage exceptionnel et entièrement personnalisé. Ce template offre toutes les fonctionnalités et une personnalisation totale.',
            externalUrl: 'https://offre-premium.vercel.app/',
            image: '/assets/img/tamplate/prem2.PNG'
          }
        ]
      },
      whatsappNumber: '243991683269' // Numéro WhatsApp pour recevoir les choix
    }
  },
  mounted() {
    this.initAOS()
  },
  methods: {
    initAOS() {
      if (window.AOS) {
        window.AOS.init({
          duration: 600,
          easing: 'ease-in-out',
          once: true,
          mirror: false
        })
      } else {
        const script = document.createElement('script')
        script.src = '/assets/vendor/aos/aos.js'
        script.onload = () => {
          if (window.AOS) {
            window.AOS.init({
              duration: 600,
              easing: 'ease-in-out',
              once: true,
              mirror: false
            })
          }
        }
        document.head.appendChild(script)
      }
    },
    selectTemplate(template) {
      // Enregistrer le choix dans localStorage pour suivi
      const selection = {
        templateId: template.id,
        templateName: template.name,
        templateType: this.getTemplateType(template.id),
        price: template.price,
        url: template.externalUrl,
        timestamp: new Date().toISOString()
      }
      
      // Sauvegarder dans localStorage
      localStorage.setItem('selectedTemplate', JSON.stringify(selection))
      
      // Créer le message WhatsApp amélioré
      const templateTypeLabel = this.getTemplateTypeLabel(template.id)
      const message = encodeURIComponent(
        `Bonjour 👋\n` +
        `Je souhaite commander un site mémorial auprès de IM Digital Labs avec le template suivant :\n\n` +
        `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
        `📋 Template sélectionné : ${template.name}\n` +
        `📦 Formule : ${templateTypeLabel}\n` +
        `💰 Prix : ${template.price}\n` +
        `🔗 Aperçu : ${template.externalUrl}\n\n` +
        `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
        `Je souhaite être contacté(e) afin de confirmer le paiement de l'acompte (50%) et recevoir le formulaire à remplir pour la création du site.\n\n` +
        `Merci de me recontacter dans les plus brefs délais. 🙏\n` +
        `IM Digital Labs`
      )
      
      // Ouvrir WhatsApp avec le message pré-rempli
      const whatsappUrl = `https://wa.me/${this.whatsappNumber}?text=${message}`
      window.open(whatsappUrl, '_blank')
      
      // Optionnel : Afficher une notification
      this.showNotification(`Vous avez sélectionné : ${template.name}`)
    },
    getTemplateType(templateId) {
      if (templateId.startsWith('essentiel')) return 'essentiel'
      if (templateId.startsWith('standard')) return 'standard'
      if (templateId.startsWith('premium')) return 'premium'
      return 'unknown'
    },
    getTemplateTypeLabel(templateId) {
      if (templateId.startsWith('essentiel')) return 'Essentiel 📦'
      if (templateId.startsWith('standard')) return 'Standard ⭐'
      if (templateId.startsWith('premium')) return 'Premium 💎'
      return 'Inconnu'
    },
    getImageUrl(imagePath) {
      // Encoder les espaces et caractères spéciaux dans les noms de fichiers pour Vercel
      if (!imagePath) return ''
      
      // Normaliser le chemin : s'assurer qu'il commence par /
      let path = imagePath.startsWith('/') ? imagePath : '/' + imagePath
      
      // Séparer le chemin et le nom de fichier
      const parts = path.split('/').filter(part => part !== '')
      if (parts.length === 0) return ''
      
      const filename = parts[parts.length - 1]
      const directory = '/' + parts.slice(0, -1).join('/')
      
      // Encoder uniquement le nom de fichier (pas le chemin)
      // Cela permet de gérer les espaces, parenthèses et autres caractères spéciaux
      const encodedFilename = encodeURIComponent(filename)
      
      // Reconstruire le chemin avec le nom de fichier encodé
      return directory + '/' + encodedFilename
    },
    showNotification(message) {
      // Créer une notification simple
      const notification = document.createElement('div')
      notification.className = 'template-notification'
      notification.textContent = message
      notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #25D366;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
      `
      document.body.appendChild(notification)
      
      // Retirer après 3 secondes
      setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease'
        setTimeout(() => {
          document.body.removeChild(notification)
        }, 300)
      }, 3000)
    }
  }
}
</script>

<style scoped>
.hero-section {
  padding: 100px 0 80px;
  text-align: center;
  background: linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%);
  color: white;
}

.hero-section h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.hero-section .lead {
  font-size: 1.5rem;
  opacity: 0.95;
  margin-bottom: 10px;
}

.hero-section .subtitle {
  font-size: 1.1rem;
  opacity: 0.85;
}

.video-section {
  padding: 80px 0;
  background-color: white;
}

.video-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* Ratio 16:9 */
  background: #000;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.presentation-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.youtube-video {
  border: none;
}

.video-note {
  text-align: center;
  margin-top: 20px;
  color: #666;
  font-size: 0.95rem;
  font-style: italic;
}

.video-note i {
  color: var(--accent-color, #d4af37);
}

.templates-section {
  padding: 80px 0;
  background-color: #f9f9f9;
}

.section-title {
  text-align: center;
  margin-bottom: 50px;
}

.section-title h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--heading-color, #333);
  margin-bottom: 15px;
}

.section-title p {
  font-size: 1.1rem;
  color: #666;
}

.template-card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

.template-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.template-card.featured {
  border: 3px solid var(--accent-color, #d4af37);
}

.template-card.premium {
  border: 3px solid #4a4a4a;
}

.badge-featured-top {
  position: absolute;
  top: 15px;
  right: 15px;
  background: var(--accent-color, #d4af37);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  z-index: 10;
}

.template-image-wrapper {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  background: #f0f0f0;
}

.template-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.template-image-wrapper:hover .template-image {
  transform: scale(1.1);
}

.template-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.template-image-wrapper:hover .template-overlay {
  opacity: 1;
}

.btn-view {
  background-color: white;
  color: #2c2c2c;
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s;
  border: none;
  cursor: pointer;
}

.btn-view:hover {
  background-color: var(--accent-color, #d4af37);
  color: white;
  transform: translateY(-2px);
}

.template-content {
  padding: 25px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.template-badge {
  display: inline-block;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 15px;
  width: fit-content;
}

.badge-essentiel {
  background-color: #e9ecef;
  color: #333;
}

.badge-standard {
  background-color: var(--accent-color, #d4af37);
  color: white;
}

.badge-premium {
  background-color: #4a4a4a;
  color: white;
}

.template-content h3 {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--heading-color, #333);
  margin-bottom: 10px;
}

.template-price {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--accent-color, #d4af37);
  margin-bottom: 15px;
}

.template-why {
  font-size: 1rem;
  color: #666;
  margin-bottom: 25px;
  line-height: 1.8;
  flex-grow: 1;
  font-style: italic;
}

.template-footer {
  margin-top: auto;
  padding-top: 20px;
  border-top: 2px solid #f0f0f0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.btn-view-template {
  background-color: #2c2c2c;
  color: white;
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  display: inline-block;
  width: 100%;
  text-align: center;
  transition: all 0.3s;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
}

.btn-view-template:hover {
  background-color: #1a1a1a;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(44, 44, 44, 0.3);
  color: white;
  text-decoration: none;
}

.btn-select {
  background-color: #25D366;
  color: white;
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  display: inline-block;
  width: 100%;
  text-align: center;
  transition: all 0.3s;
  border: none;
  cursor: pointer;
}

.btn-select:hover {
  background-color: #20ba5a;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
  color: white;
}


.btn-secondary {
  background-color: #6c757d;
  color: white;
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  display: inline-block;
  transition: all 0.3s;
  border: none;
  cursor: pointer;
}

.btn-secondary:hover {
  background-color: #5a6268;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(108, 117, 125, 0.3);
  color: white;
  text-decoration: none;
}

@keyframes slideIn {
  from {
    transform: translateX(400px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideOut {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(400px);
    opacity: 0;
  }
}

.info-note {
  margin-bottom: 40px;
}

.info-card {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%);
  border: 2px solid var(--accent-color, #d4af37);
  border-left: 6px solid var(--accent-color, #d4af37);
  padding: 30px;
  border-radius: 15px;
  display: flex;
  gap: 25px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
}

.info-icon {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--accent-color, #d4af37) 0%, #c19d2e 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
}

.info-icon i {
  font-size: 1.8rem;
  color: white;
}

.info-content {
  flex: 1;
}

.info-content h4 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.info-content p {
  margin: 0 0 15px 0;
  color: #555;
  font-size: 1rem;
  line-height: 1.8;
}

.info-content p:last-child {
  margin-bottom: 0;
}

.info-content strong {
  color: #333;
  font-weight: 600;
}

.info-highlight {
  background: rgba(212, 175, 55, 0.1);
  padding: 15px 20px;
  border-radius: 10px;
  border-left: 4px solid var(--accent-color, #d4af37);
  margin-top: 20px !important;
  display: flex;
  align-items: center;
  gap: 10px;
}

.info-highlight i {
  font-size: 1.2rem;
  color: var(--accent-color, #d4af37);
}

.info-highlight strong {
  color: var(--accent-color, #d4af37);
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }
  
  .hero-section .lead {
    font-size: 1.2rem;
  }
  
  .video-section {
    padding: 60px 0;
  }
  
  .video-wrapper {
    padding: 0 15px;
  }
  
  .template-content h3 {
    font-size: 1.5rem;
  }
  
  .template-image-wrapper {
    height: 250px;
  }

  .info-card {
    flex-direction: column;
    padding: 20px;
    gap: 20px;
  }

  .info-icon {
    width: 50px;
    height: 50px;
    align-self: center;
  }

  .info-icon i {
    font-size: 1.5rem;
  }

  .info-content {
    text-align: center;
  }

  .info-content h4 {
    font-size: 1.1rem;
    justify-content: center;
  }

  .info-highlight {
    flex-direction: column;
    text-align: center;
  }
}
</style>

