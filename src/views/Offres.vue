<template>
  <div class="offres-page">
    <main class="main">
      <!-- Hero Section -->
      <section class="hero-section section dark-background">
        <div class="container d-flex flex-column align-items-center justify-content-center text-center" data-aos="fade-up">
          <h1>🌹 Sites Mémoriaux Numériques</h1>
          <p class="lead">Honorez la mémoire de vos proches avec dignité et élégance</p>
          <p class="subtitle">IM DIGITAL LABS</p>
        </div>
      </section>

      <!-- Section des Offres -->
      <section class="offres-section section">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Nos Formules</h2>
            <p>Choisissez la formule qui correspond le mieux à vos besoins</p>
          </div>

          <div class="row gy-4 mb-5">
            <!-- Formule Essentiel -->
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div class="offre-card">
                <div class="offre-header">
                  <h3>📦 Essentiel</h3>
                  <div class="price">50$ – 80$ USD</div>
                  <div class="delay">⏱️ Délai : 24 heures</div>
                </div>
                <div class="offre-body">
                  <ul class="features-list">
                    <li>✅ Page d'accueil (Hero + message d'hommage)</li>
                    <li>✅ Informations personnelles du défunt</li>
                    <li>✅ Biographie courte (1 paragraphe)</li>
                    <li>✅ Informations sur les obsèques</li>
                    <li>✅ Galerie photos (jusqu'à 10 photos)</li>
                    <li>✅ Section contact (WhatsApp / téléphone)</li>
                    <li>✅ Design sobre et respectueux</li>
                    <li>✅ Site responsive (mobile & ordinateur)</li>
                    <li>✅ Mise en ligne incluse</li>
                  </ul>
                  <div class="offre-footer">
                    <button @click="toggleForm('essentiel')" class="btn btn-primary">
                      {{ activeForm === 'essentiel' ? 'Masquer le formulaire' : 'Remplir le formulaire' }}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Formule Standard -->
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div class="offre-card featured">
                <div class="badge-featured">⭐ La plus demandée</div>
                <div class="offre-header">
                  <h3>📦 Standard ⭐</h3>
                  <div class="price">120$ – 180$ USD</div>
                  <div class="delay">⏱️ Délai : 2 jours</div>
                </div>
                <div class="offre-body">
                  <ul class="features-list">
                    <li>✅ <strong>Tout ce qui est dans ESSENTIEL</strong></li>
                    <li>✅ Page Témoignages / Condoléances</li>
                    <li>✅ Biographie détaillée (2–3 paragraphes)</li>
                    <li>✅ Galerie photos étendue (jusqu'à 30 photos)</li>
                    <li>✅ Intégration vidéos YouTube (jusqu'à 2 vidéos)</li>
                    <li>✅ Section citations ou versets bibliques</li>
                    <li>✅ Animations légères au scroll</li>
                    <li>✅ Personnalisation des couleurs (basique)</li>
                    <li>✅ Icône du site (favicon)</li>
                  </ul>
                  <div class="offre-footer">
                    <button @click="toggleForm('standard')" class="btn btn-primary">
                      {{ activeForm === 'standard' ? 'Masquer le formulaire' : 'Remplir le formulaire' }}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Formule Premium -->
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div class="offre-card premium">
                <div class="badge-premium">💎 Premium</div>
                <div class="offre-header">
                  <h3>📦 Premium 💎</h3>
                  <div class="price">250$ – 350$ USD</div>
                  <div class="delay">⏱️ Délai : 3–4 jours</div>
                </div>
                <div class="offre-body">
                  <ul class="features-list">
                    <li>✅ <strong>Tout ce qui est dans STANDARD</strong></li>
                    <li>✅ Design entièrement personnalisé</li>
                    <li>✅ Galerie photos illimitée</li>
                    <li>✅ Vidéos illimitées</li>
                    <li>✅ Témoignages multiples + poèmes</li>
                    <li>✅ Biographie complète</li>
                    <li>✅ Section Hommage personnalisée</li>
                    <li>✅ Carte Google Maps (cimetière)</li>
                    <li>✅ Partage sur réseaux sociaux</li>
                    <li>✅ Optimisation SEO de base</li>
                    <li>✅ Support & modifications pendant 1 mois</li>
                  </ul>
                  <div class="offre-footer">
                    <button @click="toggleForm('premium')" class="btn btn-primary">
                      {{ activeForm === 'premium' ? 'Masquer le formulaire' : 'Remplir le formulaire' }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Formulaires -->
          <div class="formulaires-container">
            <!-- Formulaire Essentiel -->
            <div v-show="activeForm === 'essentiel'" class="formulaire-wrapper" data-aos="fade-up">
              <h3 class="form-title">📋 Formulaire - Formule Essentiel</h3>
              <p class="form-subtitle">Remplissez ce formulaire pour votre site mémorial</p>
              <p class="text-muted mb-4">
                <strong>Contact :</strong> 
                <a href="https://wa.me/243991683269" target="_blank" class="text-primary">WhatsApp +243 991 683 269</a> | 
                <a href="mailto:imdigitallabs@gmail.com" class="text-primary">imdigitallabs@gmail.com</a>
              </p>
              <p class="alert alert-info">
                <strong>Note :</strong> Ce formulaire est un aperçu. Pour remplir le formulaire complet, veuillez nous contacter directement.
              </p>
              <div class="form-preview">
                <p><strong>Formulaire complet disponible sur demande</strong></p>
                <p>Le formulaire inclut : Informations personnelles, Informations familiales, Biographie, Obsèques, Photos, et Contact.</p>
                <p class="mt-3">
                  <a href="https://wa.me/243991683269?text=Bonjour,%20je%20suis%20intéressé%20par%20la%20formule%20ESSENTIEL" 
                     target="_blank" 
                     class="btn btn-success">
                    📱 Contacter pour le formulaire complet
                  </a>
                </p>
              </div>
            </div>

            <!-- Formulaire Standard -->
            <div v-show="activeForm === 'standard'" class="formulaire-wrapper" data-aos="fade-up">
              <h3 class="form-title">📋 Formulaire - Formule Standard ⭐</h3>
              <p class="form-subtitle">Remplissez ce formulaire pour votre site mémorial</p>
              <p class="text-muted mb-4">
                <strong>Contact :</strong> 
                <a href="https://wa.me/243991683269" target="_blank" class="text-primary">WhatsApp +243 991 683 269</a> | 
                <a href="mailto:imdigitallabs@gmail.com" class="text-primary">imdigitallabs@gmail.com</a>
              </p>
              <p class="alert alert-info">
                <strong>Note :</strong> Ce formulaire est un aperçu. Pour remplir le formulaire complet, veuillez nous contacter directement.
              </p>
              <div class="form-preview">
                <p><strong>Formulaire complet disponible sur demande</strong></p>
                <p>Le formulaire inclut : Informations personnelles, Informations familiales, Biographie détaillée, Obsèques, Photos (jusqu'à 30), Vidéos, Témoignages, Citations/Versets, Design, et Contact.</p>
                <p class="mt-3">
                  <a href="https://wa.me/243991683269?text=Bonjour,%20je%20suis%20intéressé%20par%20la%20formule%20STANDARD" 
                     target="_blank" 
                     class="btn btn-success">
                    📱 Contacter pour le formulaire complet
                  </a>
                </p>
              </div>
            </div>

            <!-- Formulaire Premium -->
            <div v-show="activeForm === 'premium'" class="formulaire-wrapper" data-aos="fade-up">
              <h3 class="form-title">📋 Formulaire - Formule Premium 💎</h3>
              <p class="form-subtitle">Remplissez ce formulaire pour votre site mémorial</p>
              <p class="text-muted mb-4">
                <strong>Contact :</strong> 
                <a href="https://wa.me/243991683269" target="_blank" class="text-primary">WhatsApp +243 991 683 269</a> | 
                <a href="mailto:imdigitallabs@gmail.com" class="text-primary">imdigitallabs@gmail.com</a>
              </p>
              <p class="alert alert-info">
                <strong>Note :</strong> Ce formulaire est un aperçu. Pour remplir le formulaire complet, veuillez nous contacter directement.
              </p>
              <div class="form-preview">
                <p><strong>Formulaire complet disponible sur demande</strong></p>
                <p>Le formulaire inclut : Informations personnelles complètes, Informations familiales détaillées, Biographie complète, Obsèques, Photos illimitées, Vidéos illimitées, Témoignages multiples, Poèmes, Éléments spirituels/culturels, Design personnalisé, et Contact.</p>
                <p class="mt-3">
                  <a href="https://wa.me/243991683269?text=Bonjour,%20je%20suis%20intéressé%20par%20la%20formule%20PREMIUM" 
                     target="_blank" 
                     class="btn btn-success">
                    📱 Contacter pour le formulaire complet
                  </a>
                </p>
              </div>
            </div>
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
  name: 'Offres',
  components: {
    Footer
  },
  data() {
    return {
      activeForm: null
    }
  },
  mounted() {
    this.initAOS()
  },
  methods: {
    toggleForm(formule) {
      if (this.activeForm === formule) {
        this.activeForm = null
      } else {
        this.activeForm = formule
        // Scroll vers le formulaire après un court délai
        this.$nextTick(() => {
          setTimeout(() => {
            const formulairesContainer = document.querySelector('.formulaires-container')
            if (formulairesContainer) {
              formulairesContainer.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          }, 300)
        })
      }
    },
    handleSubmit() {
      // Logique de soumission si nécessaire
      console.log('Formulaire soumis')
    },
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

.offres-section {
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

.offre-card {
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

.offre-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.offre-card.featured {
  border: 3px solid var(--accent-color, #d4af37);
}

.offre-card.premium {
  border: 3px solid #4a4a4a;
}

.badge-featured,
.badge-premium {
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

.badge-premium {
  background: #4a4a4a;
}

.offre-header {
  padding: 30px 25px 20px;
  text-align: center;
  background: linear-gradient(135deg, #f5f5f5 0%, #e9ecef 100%);
}

.offre-header h3 {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--heading-color, #333);
  margin-bottom: 15px;
}

.price {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent-color, #d4af37);
  margin-bottom: 10px;
}

.delay {
  font-size: 0.9rem;
  color: #666;
}

.offre-body {
  padding: 25px;
  flex-grow: 1;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0 0 25px;
}

.features-list li {
  padding: 8px 0;
  font-size: 0.95rem;
  color: #555;
  border-bottom: 1px solid #f0f0f0;
}

.features-list li:last-child {
  border-bottom: none;
}

.offre-footer {
  text-align: center;
  padding-top: 20px;
  border-top: 2px solid #f0f0f0;
}

.btn {
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s;
  width: 100%;
  border: none;
  cursor: pointer;
}

.btn-primary {
  background-color: var(--accent-color, #d4af37);
  color: white;
}

.btn-primary:hover {
  background-color: #c19d2e;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
}

.formulaires-container {
  margin-top: 60px;
}

.formulaire-wrapper {
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
  padding: 40px;
  margin-bottom: 30px;
}

.form-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--heading-color, #333);
  margin-bottom: 10px;
}

.form-subtitle {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 20px;
}

.form-preview {
  padding: 30px;
  background: #f8f9fa;
  border-radius: 10px;
  border-left: 4px solid var(--accent-color, #d4af37);
}

.form-preview p {
  margin-bottom: 15px;
  line-height: 1.8;
}

.btn-success {
  background-color: #25D366;
  color: white;
  padding: 12px 30px;
  border-radius: 8px;
  text-decoration: none;
  display: inline-block;
  font-weight: 600;
  transition: all 0.3s;
  border: none;
}

.btn-success:hover {
  background-color: #20ba5a;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
  color: white;
}

.text-primary {
  color: #2c2c2c !important;
  text-decoration: none;
  font-weight: 600;
}

.text-primary:hover {
  text-decoration: underline;
}


@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }
  
  .hero-section .lead {
    font-size: 1.2rem;
  }
  
  .offre-header h3 {
    font-size: 1.5rem;
  }
  
  .formulaire-wrapper {
    padding: 20px;
  }
}
</style>

