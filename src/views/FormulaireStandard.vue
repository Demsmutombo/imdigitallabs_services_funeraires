<template>
  <div class="formulaire-page">
    <Header />
    
    <main class="main">
      <section class="formulaire-section section">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>📋 Formulaire Offre Standard ⭐</h2>
            <p>Remplissez le formulaire Google ci-dessous pour créer votre site mémorial</p>
          </div>

          <div class="formulaire-wrapper">
            <div class="formulaire-info">
              <div class="info-card standard">
                <div class="badge-featured">⭐ La plus demandée</div>
                <h4>📦 Formule Standard</h4>
                <p><strong>Prix :</strong> 120$ – 180$ USD</p>
                <p><strong>Délai :</strong> 2 jours</p>
                <div class="features">
                  <h5>Inclus dans cette formule :</h5>
                  <ul>
                    <li>✅ <strong>Tout Essentiel</strong></li>
                    <li>✅ Page Témoignages</li>
                    <li>✅ Biographie détaillée (2–3 paragraphes)</li>
                    <li>✅ Galerie photos (jusqu'à 30 photos)</li>
                    <li>✅ Vidéos YouTube (jusqu'à 2 vidéos)</li>
                    <li>✅ Citations/Versets bibliques</li>
                    <li>✅ Animations au scroll</li>
                    <li>✅ Personnalisation couleurs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="formulaire-container">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSeujLnpyxHjkzLExm-LwjDEL3U-J_0xQcO3hLGOeQYm6OVFQw/viewform?embedded=true"
                width="100%" 
                height="4500" 
                frameborder="0" 
                marginheight="0" 
                marginwidth="0"
                title="Formulaire Offre Standard"
              >
                Chargement…
              </iframe>
            </div>
          </div>

          <div class="help-section" data-aos="fade-up" data-aos-delay="100">
            <h4>💡 Besoin d'aide ?</h4>
            <p>Si vous avez des questions ou des difficultés à remplir le formulaire, n'hésitez pas à nous contacter :</p>
            <div class="contact-buttons">
              <a href="https://wa.me/243991683269" target="_blank" class="btn btn-whatsapp">
                <i class="bi bi-whatsapp"></i> WhatsApp: +243 991 683 269
              </a>
              <a href="mailto:israelmutombo9319@gmail.com" class="btn btn-email">
                <i class="bi bi-envelope"></i> Email
              </a>
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
  name: 'FormulaireStandard',
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
.formulaire-section {
  padding: 80px 0;
  background-color: #f9f9f9;
  min-height: 100vh;
}

.section-title {
  text-align: center;
  margin-bottom: 40px;
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

.formulaire-wrapper {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 30px;
  margin-bottom: 40px;
}

.formulaire-info {
  position: sticky;
  top: 100px;
  height: fit-content;
}

.info-card {
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
  position: relative;
}

.info-card.standard {
  border: 3px solid var(--accent-color, #d4af37);
}

.badge-featured {
  position: absolute;
  top: -12px;
  right: 15px;
  background: var(--accent-color, #d4af37);
  color: white;
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  box-shadow: 0 2px 10px rgba(212, 175, 55, 0.3);
}

.info-card h4 {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--accent-color, #d4af37);
  margin-bottom: 15px;
  margin-top: 10px;
}

.info-card p {
  margin-bottom: 10px;
  color: #555;
}

.features {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 2px solid #f0f0f0;
}

.features h5 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #333;
}

.features ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.features li {
  padding: 6px 0;
  font-size: 0.9rem;
  color: #555;
}

.formulaire-container {
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 20px;
}

.formulaire-container iframe {
  border: none;
  width: 100%;
  min-height: 4500px;
}

.help-section {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.help-section h4 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--accent-color, #d4af37);
  margin-bottom: 15px;
}

.help-section p {
  color: #666;
  margin-bottom: 25px;
}

.contact-buttons {
  display: flex;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-whatsapp {
  background-color: #25D366;
  color: white;
}

.btn-whatsapp:hover {
  background-color: #128C7E;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
}

.btn-email {
  background-color: #0066cc;
  color: white;
}

.btn-email:hover {
  background-color: #0052a3;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 102, 204, 0.3);
}

@media (max-width: 992px) {
  .formulaire-wrapper {
    grid-template-columns: 1fr;
  }

  .formulaire-info {
    position: relative;
    top: 0;
  }

  .section-title h2 {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .formulaire-section {
    padding: 40px 0;
  }

  .section-title h2 {
    font-size: 1.8rem;
  }

  .formulaire-container {
    padding: 10px;
  }

  .contact-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
    justify-content: center;
  }
}
</style>

