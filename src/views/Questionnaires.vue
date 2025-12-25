<template>
  <div class="questionnaires-page">
    <Header />
    
    <main class="main">
      <section class="questionnaires-hero section dark-background">
        <div class="container d-flex flex-column align-items-center justify-content-center text-center" data-aos="fade-up">
          <h1>📋 Questionnaires Site Mémorial</h1>
          <p class="lead">Choisissez la formule qui correspond à vos besoins</p>
        </div>
      </section>

      <section class="questionnaires-section section">
        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="section-title">
            <h2>Nos Formules</h2>
            <p>Sélectionnez votre formule pour accéder au questionnaire correspondant</p>
          </div>

          <div class="row gy-4">
            <!-- Formule Essentiel -->
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div class="formule-card">
                <div class="formule-header">
                  <h3>📦 Essentiel</h3>
                  <div class="price">50$ – 80$ USD</div>
                  <div class="delay">⏱️ Délai : 24 heures</div>
                </div>
                <div class="formule-body">
                  <ul class="features-list">
                    <li>✅ Page d'accueil (Hero + message)</li>
                    <li>✅ Informations personnelles</li>
                    <li>✅ Biographie courte</li>
                    <li>✅ Informations obsèques</li>
                    <li>✅ Galerie photos (jusqu'à 15 photos)</li>
                    <li>✅ Section contact</li>
                    <li>✅ Design sobre et respectueux</li>
                    <li>✅ Site responsive</li>
                  </ul>
                  <div class="formule-footer">
                    <router-link to="/questionnaire-essentiel" class="btn btn-primary">
                      Remplir le formulaire
                    </router-link>
                  </div>
                </div>
              </div>
            </div>

            <!-- Formule Standard -->
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div class="formule-card featured">
                <div class="badge-featured">⭐ La plus demandée</div>
                <div class="formule-header">
                  <h3>📦 Standard ⭐</h3>
                  <div class="price">120$ – 180$ USD</div>
                  <div class="delay">⏱️ Délai : 2 jours</div>
                </div>
                <div class="formule-body">
                  <ul class="features-list">
                    <li>✅ <strong>Tout Essentiel</strong></li>
                    <li>✅ Page Témoignages</li>
                    <li>✅ Biographie détaillée (2–3 paragraphes)</li>
                    <li>✅ Galerie photos (jusqu'à 30 photos)</li>
                    <li>✅ Vidéos YouTube (jusqu'à 2 vidéos)</li>
                    <li>✅ Citations/Versets bibliques</li>
                    <li>✅ Animations au scroll</li>
                    <li>✅ Personnalisation couleurs</li>
                  </ul>
                  <div class="formule-footer">
                    <button class="btn btn-primary" disabled>
                      Formulaire à venir
                    </button>
                    <small class="text-muted d-block mt-2">
                      Disponible prochainement
                    </small>
                  </div>
                </div>
              </div>
            </div>

            <!-- Formule Premium -->
            <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div class="formule-card premium">
                <div class="badge-premium">💎 Premium</div>
                <div class="formule-header">
                  <h3>📦 Premium 💎</h3>
                  <div class="price">250$ – 350$ USD</div>
                  <div class="delay">⏱️ Délai : 3–4 jours</div>
                </div>
                <div class="formule-body">
                  <ul class="features-list">
                    <li>✅ <strong>Tout Standard</strong></li>
                    <li>✅ Design entièrement personnalisé</li>
                    <li>✅ Galerie photos illimitée</li>
                    <li>✅ Vidéos illimitées</li>
                    <li>✅ Témoignages multiples + poèmes</li>
                    <li>✅ Biographie complète</li>
                    <li>✅ Carte Google Maps</li>
                    <li>✅ Partage réseaux sociaux</li>
                    <li>✅ Support 1 mois</li>
                  </ul>
                  <div class="formule-footer">
                    <button class="btn btn-primary" disabled>
                      Formulaire à venir
                    </button>
                    <small class="text-muted d-block mt-2">
                      Disponible prochainement
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Contact -->
      <section class="contact-section section accent-background">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>Besoin d'aide ?</h2>
            <p>Contactez-nous pour toute question</p>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-8 text-center">
              <div class="contact-info">
                <p><strong>IM DIGITAL LABS</strong></p>
                <p>
                  <i class="bi bi-whatsapp me-2"></i>
                  <a href="https://wa.me/243991683269" target="_blank" style="color: #25D366;">
                    WhatsApp: +243 991 683 269
                  </a>
                </p>
                <p>
                  <i class="bi bi-envelope me-2"></i>
                  <a href="mailto:israelmutombo9319@gmail.com" style="color: green;">
                    israelmutombo9319@gmail.com
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
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Questionnaires',
  components: {
    Header,
    Footer
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
    }
  }
}
</script>

<style scoped>
.questionnaires-hero {
  padding: 100px 0 80px;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.questionnaires-hero h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 20px;
}

.questionnaires-hero .lead {
  font-size: 1.3rem;
  opacity: 0.9;
}

.questionnaires-section {
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

.formule-card {
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

.formule-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.formule-card.featured {
  border: 3px solid var(--accent-color, #d4af37);
}

.formule-card.premium {
  border: 3px solid #764ba2;
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
  background: #764ba2;
}

.formule-header {
  padding: 30px 25px 20px;
  text-align: center;
  background: linear-gradient(135deg, #f5f5f5 0%, #e9ecef 100%);
}

.formule-header h3 {
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

.formule-body {
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

.formule-footer {
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
}

.btn-primary {
  background-color: var(--accent-color, #d4af37);
  border-color: var(--accent-color, #d4af37);
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background-color: #c19d2e;
  border-color: #c19d2e;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.contact-section {
  padding: 60px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.contact-section .section-title h2,
.contact-section .section-title p {
  color: white;
}

.contact-info {
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 15px;
  backdrop-filter: blur(10px);
}

.contact-info p {
  margin-bottom: 15px;
  font-size: 1.1rem;
}

.contact-info a {
  text-decoration: none;
  font-weight: 600;
}

.contact-info a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .questionnaires-hero h1 {
    font-size: 2rem;
  }
  
  .formule-header h3 {
    font-size: 1.5rem;
  }
}
</style>

