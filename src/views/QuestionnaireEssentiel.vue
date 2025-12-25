<template>
  <div class="questionnaire-page">
    <Header />
    
    <main class="main">
      <section class="questionnaire-section section">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h2>📋 Questionnaire Formule Essentiel</h2>
            <p>Remplissez ce formulaire pour créer un site mémorial personnalisé</p>
          </div>

          <form @submit.prevent="submitForm" class="questionnaire-form">
            <!-- 1. INFORMATIONS PERSONNELLES DU DÉFUNT -->
            <div class="form-section">
              <h3 class="section-header">1. Informations Personnelles du Défunt</h3>
              
              <div class="subsection">
                <h4 class="subsection-header">1.1 Identité</h4>
                <div class="row gy-3">
                  <div class="col-md-6">
                    <label for="nomComplet" class="form-label">
                      Nom complet <span class="text-danger">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="nomComplet" 
                      v-model="form.nomComplet" 
                      class="form-control" 
                      required
                      placeholder="Entrez le nom complet"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="surnoms" class="form-label">Surnom(s) (optionnel)</label>
                    <input 
                      type="text" 
                      id="surnoms" 
                      v-model="form.surnoms" 
                      class="form-control"
                      placeholder="Entrez les surnoms"
                    />
                  </div>
                </div>
              </div>

              <div class="subsection">
                <h4 class="subsection-header">1.2 Dates importantes</h4>
                <div class="row gy-3">
                  <div class="col-md-4">
                    <label for="naissanceJour" class="form-label">
                      Date de naissance - Jour <span class="text-danger">*</span>
                    </label>
                    <input 
                      type="number" 
                      id="naissanceJour" 
                      v-model.number="form.naissanceJour" 
                      class="form-control" 
                      min="1" 
                      max="31" 
                      required
                      placeholder="JJ"
                    />
                  </div>
                  <div class="col-md-4">
                    <label for="naissanceMois" class="form-label">
                      Mois <span class="text-danger">*</span>
                    </label>
                    <select 
                      id="naissanceMois" 
                      v-model.number="form.naissanceMois" 
                      class="form-select" 
                      required
                    >
                      <option value="">Sélectionnez</option>
                      <option v-for="mois in moisList" :key="mois.value" :value="mois.value">
                        {{ mois.label }}
                      </option>
                    </select>
                  </div>
                  <div class="col-md-4">
                    <label for="naissanceAnnee" class="form-label">
                      Année <span class="text-danger">*</span>
                    </label>
                    <input 
                      type="number" 
                      id="naissanceAnnee" 
                      v-model.number="form.naissanceAnnee" 
                      class="form-control" 
                      min="1900" 
                      :max="new Date().getFullYear()" 
                      required
                      placeholder="AAAA"
                    />
                  </div>
                  <div class="col-md-4">
                    <label for="decesJour" class="form-label">
                      Date de décès - Jour <span class="text-danger">*</span>
                    </label>
                    <input 
                      type="number" 
                      id="decesJour" 
                      v-model.number="form.decesJour" 
                      class="form-control" 
                      min="1" 
                      max="31" 
                      required
                      placeholder="JJ"
                    />
                  </div>
                  <div class="col-md-4">
                    <label for="decesMois" class="form-label">
                      Mois <span class="text-danger">*</span>
                    </label>
                    <select 
                      id="decesMois" 
                      v-model.number="form.decesMois" 
                      class="form-select" 
                      required
                    >
                      <option value="">Sélectionnez</option>
                      <option v-for="mois in moisList" :key="mois.value" :value="mois.value">
                        {{ mois.label }}
                      </option>
                    </select>
                  </div>
                  <div class="col-md-4">
                    <label for="decesAnnee" class="form-label">
                      Année <span class="text-danger">*</span>
                    </label>
                    <input 
                      type="number" 
                      id="decesAnnee" 
                      v-model.number="form.decesAnnee" 
                      class="form-control" 
                      min="1900" 
                      :max="new Date().getFullYear()" 
                      required
                      placeholder="AAAA"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="lieuNaissance" class="form-label">
                      Lieu de naissance <span class="text-danger">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="lieuNaissance" 
                      v-model="form.lieuNaissance" 
                      class="form-control" 
                      required
                      placeholder="Entrez le lieu de naissance"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="lieuResidence" class="form-label">
                      Lieu de résidence <span class="text-danger">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="lieuResidence" 
                      v-model="form.lieuResidence" 
                      class="form-control" 
                      required
                      placeholder="Entrez le lieu de résidence"
                    />
                  </div>
                </div>
              </div>

              <div class="subsection">
                <h4 class="subsection-header">1.3 Profession</h4>
                <div class="row">
                  <div class="col-md-12">
                    <label for="profession" class="form-label">
                      Profession principale <span class="text-danger">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="profession" 
                      v-model="form.profession" 
                      class="form-control" 
                      required
                      placeholder="Entrez la profession"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- 2. INFORMATIONS FAMILIALES -->
            <div class="form-section">
              <h3 class="section-header">2. Informations Familiales</h3>
              
              <div class="subsection">
                <h4 class="subsection-header">2.1 Parents</h4>
                <div class="row gy-3">
                  <div class="col-md-6">
                    <label for="pere" class="form-label">Père</label>
                    <input 
                      type="text" 
                      id="pere" 
                      v-model="form.pere" 
                      class="form-control"
                      placeholder="Nom du père"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="mere" class="form-label">Mère</label>
                    <input 
                      type="text" 
                      id="mere" 
                      v-model="form.mere" 
                      class="form-control"
                      placeholder="Nom de la mère"
                    />
                  </div>
                </div>
              </div>

              <div class="subsection">
                <h4 class="subsection-header">2.2 Enfants</h4>
                <div class="row gy-3">
                  <div class="col-md-6">
                    <label for="nombreEnfants" class="form-label">Nombre d'enfants</label>
                    <input 
                      type="number" 
                      id="nombreEnfants" 
                      v-model.number="form.nombreEnfants" 
                      class="form-control" 
                      min="0"
                      placeholder="0"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="nomsEnfants" class="form-label">Noms des enfants</label>
                    <input 
                      type="text" 
                      id="nomsEnfants" 
                      v-model="form.nomsEnfants" 
                      class="form-control"
                      placeholder="Séparez les noms par des virgules"
                    />
                  </div>
                </div>
              </div>

              <div class="subsection">
                <h4 class="subsection-header">2.3 Frères et sœurs</h4>
                <div class="row">
                  <div class="col-md-12">
                    <label for="positionFratrie" class="form-label">
                      Position dans la fratrie (ex: 3ème de 5 enfants)
                    </label>
                    <input 
                      type="text" 
                      id="positionFratrie" 
                      v-model="form.positionFratrie" 
                      class="form-control"
                      placeholder="Ex: 3ème de 5 enfants"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- 3. BIOGRAPHIE -->
            <div class="form-section">
              <h3 class="section-header">3. Biographie</h3>
              <div class="row">
                <div class="col-md-12">
                  <label for="biographie" class="form-label">
                    Biographie du défunt (1-2 paragraphes, environ 200-300 mots) 
                    <span class="text-danger">*</span>
                  </label>
                  <textarea 
                    id="biographie" 
                    v-model="form.biographie" 
                    class="form-control" 
                    rows="6" 
                    required
                    placeholder="Rédigez la biographie du défunt..."
                    :maxlength="2000"
                  ></textarea>
                  <small class="text-muted">
                    {{ form.biographie.length }}/2000 caractères
                  </small>
                </div>
              </div>
            </div>

            <!-- 4. INFORMATIONS SUR LES OBSÈQUES -->
            <div class="form-section">
              <h3 class="section-header">4. Informations sur les Obsèques</h3>
              
              <div class="subsection">
                <h4 class="subsection-header">4.1 Veillée mortuaire</h4>
                <div class="row gy-3">
                  <div class="col-md-3">
                    <label for="veilleeJour" class="form-label">Jour</label>
                    <input 
                      type="number" 
                      id="veilleeJour" 
                      v-model.number="form.veilleeJour" 
                      class="form-control" 
                      min="1" 
                      max="31"
                      placeholder="JJ"
                    />
                  </div>
                  <div class="col-md-3">
                    <label for="veilleeMois" class="form-label">Mois</label>
                    <select 
                      id="veilleeMois" 
                      v-model.number="form.veilleeMois" 
                      class="form-select"
                    >
                      <option value="">Sélectionnez</option>
                      <option v-for="mois in moisList" :key="mois.value" :value="mois.value">
                        {{ mois.label }}
                      </option>
                    </select>
                  </div>
                  <div class="col-md-3">
                    <label for="veilleeAnnee" class="form-label">Année</label>
                    <input 
                      type="number" 
                      id="veilleeAnnee" 
                      v-model.number="form.veilleeAnnee" 
                      class="form-control" 
                      min="1900" 
                      :max="new Date().getFullYear() + 1"
                      placeholder="AAAA"
                    />
                  </div>
                  <div class="col-md-3">
                    <label for="veilleeHeure" class="form-label">Heure</label>
                    <input 
                      type="time" 
                      id="veilleeHeure" 
                      v-model="form.veilleeHeure" 
                      class="form-control"
                    />
                  </div>
                  <div class="col-md-12">
                    <label for="veilleeLieu" class="form-label">Lieu</label>
                    <input 
                      type="text" 
                      id="veilleeLieu" 
                      v-model="form.veilleeLieu" 
                      class="form-control"
                      placeholder="Lieu de la veillée mortuaire"
                    />
                  </div>
                </div>
              </div>

              <div class="subsection">
                <h4 class="subsection-header">4.2 Cérémonie funéraire</h4>
                <div class="row gy-3">
                  <div class="col-md-3">
                    <label for="ceremonieJour" class="form-label">Jour</label>
                    <input 
                      type="number" 
                      id="ceremonieJour" 
                      v-model.number="form.ceremonieJour" 
                      class="form-control" 
                      min="1" 
                      max="31"
                      placeholder="JJ"
                    />
                  </div>
                  <div class="col-md-3">
                    <label for="ceremonieMois" class="form-label">Mois</label>
                    <select 
                      id="ceremonieMois" 
                      v-model.number="form.ceremonieMois" 
                      class="form-select"
                    >
                      <option value="">Sélectionnez</option>
                      <option v-for="mois in moisList" :key="mois.value" :value="mois.value">
                        {{ mois.label }}
                      </option>
                    </select>
                  </div>
                  <div class="col-md-3">
                    <label for="ceremonieAnnee" class="form-label">Année</label>
                    <input 
                      type="number" 
                      id="ceremonieAnnee" 
                      v-model.number="form.ceremonieAnnee" 
                      class="form-control" 
                      min="1900" 
                      :max="new Date().getFullYear() + 1"
                      placeholder="AAAA"
                    />
                  </div>
                  <div class="col-md-3">
                    <label for="ceremonieHeure" class="form-label">Heure</label>
                    <input 
                      type="time" 
                      id="ceremonieHeure" 
                      v-model="form.ceremonieHeure" 
                      class="form-control"
                    />
                  </div>
                  <div class="col-md-12">
                    <label for="ceremonieLieu" class="form-label">Lieu</label>
                    <input 
                      type="text" 
                      id="ceremonieLieu" 
                      v-model="form.ceremonieLieu" 
                      class="form-control"
                      placeholder="Lieu de la cérémonie funéraire"
                    />
                  </div>
                </div>
              </div>

              <div class="subsection">
                <h4 class="subsection-header">4.3 Sépulture</h4>
                <div class="row">
                  <div class="col-md-12">
                    <label for="cimetiere" class="form-label">Nom du cimetière</label>
                    <input 
                      type="text" 
                      id="cimetiere" 
                      v-model="form.cimetiere" 
                      class="form-control"
                      placeholder="Nom du cimetière"
                    />
                  </div>
                </div>
              </div>
            </div>

            <!-- 5. PHOTOS -->
            <div class="form-section">
              <h3 class="section-header">5. Photos</h3>
              
              <div class="row gy-3">
                <div class="col-md-6">
                  <label for="nombrePhotos" class="form-label">
                    Nombre de photos à inclure (maximum 15)
                  </label>
                  <input 
                    type="number" 
                    id="nombrePhotos" 
                    v-model.number="form.nombrePhotos" 
                    class="form-control" 
                    min="0" 
                    max="15"
                    placeholder="0"
                  />
                </div>
                <div class="col-md-12">
                  <label class="form-label">Catégories de photos disponibles</label>
                  <div class="form-check">
                    <input 
                      class="form-check-input" 
                      type="checkbox" 
                      id="photosVie" 
                      v-model="form.categoriesPhotos.photosVie"
                    />
                    <label class="form-check-label" for="photosVie">
                      Photos de la vie du défunt
                    </label>
                  </div>
                  <div class="form-check">
                    <input 
                      class="form-check-input" 
                      type="checkbox" 
                      id="photosObsèques" 
                      v-model="form.categoriesPhotos.photosObsèques"
                    />
                    <label class="form-check-label" for="photosObsèques">
                      Photos des obsèques
                    </label>
                  </div>
                  <div class="form-check">
                    <input 
                      class="form-check-input" 
                      type="checkbox" 
                      id="photosFamille" 
                      v-model="form.categoriesPhotos.photosFamille"
                    />
                    <label class="form-check-label" for="photosFamille">
                      Photos de famille
                    </label>
                  </div>
                </div>
                <div class="col-md-12">
                  <label for="photoPrincipale" class="form-label">
                    Photo principale (celle qui apparaîtra en haut de la page) 
                    <span class="text-danger">*</span>
                  </label>
                  <input 
                    type="file" 
                    id="photoPrincipale" 
                    @change="handlePhotoPrincipale" 
                    class="form-control" 
                    accept="image/*"
                    required
                  />
                  <small class="text-muted">Format: JPG, PNG (haute qualité recommandée)</small>
                  <div v-if="photoPrincipalePreview" class="mt-3">
                    <img :src="photoPrincipalePreview" alt="Aperçu" class="preview-image" />
                  </div>
                </div>
                <div class="col-md-12">
                  <label for="photosGalerie" class="form-label">
                    Photos pour la galerie (maximum 15, format numérique)
                  </label>
                  <input 
                    type="file" 
                    id="photosGalerie" 
                    @change="handlePhotosGalerie" 
                    class="form-control" 
                    accept="image/*"
                    multiple
                  />
                  <small class="text-muted">
                    Vous pouvez sélectionner plusieurs photos à la fois (maximum 15)
                  </small>
                  <div v-if="photosGaleriePreview.length > 0" class="mt-3">
                    <div class="row g-2">
                      <div class="col-md-3" v-for="(photo, index) in photosGaleriePreview" :key="index">
                        <img :src="photo" alt="Aperçu" class="preview-image-small" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 6. CONTACT -->
            <div class="form-section">
              <h3 class="section-header">6. Contact</h3>
              
              <div class="row gy-3">
                <div class="col-md-6">
                  <label for="contactNom" class="form-label">
                    Nom de la personne contact <span class="text-danger">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="contactNom" 
                    v-model="form.contactNom" 
                    class="form-control" 
                    required
                    placeholder="Nom complet"
                  />
                </div>
                <div class="col-md-6">
                  <label for="contactTelephone" class="form-label">
                    Téléphone <span class="text-danger">*</span>
                  </label>
                  <input 
                    type="tel" 
                    id="contactTelephone" 
                    v-model="form.contactTelephone" 
                    class="form-control" 
                    required
                    placeholder="+243 XXX XXX XXX"
                  />
                </div>
                <div class="col-md-6">
                  <label for="contactEmail" class="form-label">
                    Email <span class="text-danger">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="contactEmail" 
                    v-model="form.contactEmail" 
                    class="form-control" 
                    required
                    placeholder="email@exemple.com"
                  />
                </div>
                <div class="col-md-6">
                  <label for="contactWhatsApp" class="form-label">WhatsApp (optionnel)</label>
                  <input 
                    type="tel" 
                    id="contactWhatsApp" 
                    v-model="form.contactWhatsApp" 
                    class="form-control"
                    placeholder="+243 XXX XXX XXX"
                  />
                </div>
              </div>
            </div>

            <!-- Informations de remplissage -->
            <div class="form-section">
              <div class="row gy-3">
                <div class="col-md-6">
                  <label for="dateRemplissage" class="form-label">Date de remplissage</label>
                  <input 
                    type="date" 
                    id="dateRemplissage" 
                    v-model="form.dateRemplissage" 
                    class="form-control"
                  />
                </div>
                <div class="col-md-6">
                  <label for="nomRemplisseur" class="form-label">Nom</label>
                  <input 
                    type="text" 
                    id="nomRemplisseur" 
                    v-model="form.nomRemplisseur" 
                    class="form-control"
                    placeholder="Nom de la personne qui remplit le formulaire"
                  />
                </div>
              </div>
            </div>

            <!-- Boutons de soumission -->
            <div class="form-actions">
              <button type="button" @click="resetForm" class="btn btn-secondary me-2">
                <i class="bi bi-arrow-counterclockwise me-2"></i>Réinitialiser
              </button>
              <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
                <i class="bi bi-check-circle me-2"></i>
                {{ isSubmitting ? 'Envoi en cours...' : 'Soumettre le formulaire' }}
              </button>
            </div>
          </form>
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
  name: 'QuestionnaireEssentiel',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      isSubmitting: false,
      photoPrincipalePreview: null,
      photosGaleriePreview: [],
      moisList: [
        { value: 1, label: 'Janvier' },
        { value: 2, label: 'Février' },
        { value: 3, label: 'Mars' },
        { value: 4, label: 'Avril' },
        { value: 5, label: 'Mai' },
        { value: 6, label: 'Juin' },
        { value: 7, label: 'Juillet' },
        { value: 8, label: 'Août' },
        { value: 9, label: 'Septembre' },
        { value: 10, label: 'Octobre' },
        { value: 11, label: 'Novembre' },
        { value: 12, label: 'Décembre' }
      ],
      form: {
        // 1. Informations personnelles
        nomComplet: '',
        surnoms: '',
        naissanceJour: null,
        naissanceMois: null,
        naissanceAnnee: null,
        decesJour: null,
        decesMois: null,
        decesAnnee: null,
        lieuNaissance: '',
        lieuResidence: '',
        profession: '',
        
        // 2. Informations familiales
        pere: '',
        mere: '',
        nombreEnfants: 0,
        nomsEnfants: '',
        positionFratrie: '',
        
        // 3. Biographie
        biographie: '',
        
        // 4. Obsèques
        veilleeJour: null,
        veilleeMois: null,
        veilleeAnnee: null,
        veilleeHeure: '',
        veilleeLieu: '',
        ceremonieJour: null,
        ceremonieMois: null,
        ceremonieAnnee: null,
        ceremonieHeure: '',
        ceremonieLieu: '',
        cimetiere: '',
        
        // 5. Photos
        nombrePhotos: 0,
        categoriesPhotos: {
          photosVie: false,
          photosObsèques: false,
          photosFamille: false
        },
        photoPrincipale: null,
        photosGalerie: [],
        
        // 6. Contact
        contactNom: '',
        contactTelephone: '',
        contactEmail: '',
        contactWhatsApp: '',
        
        // Informations de remplissage
        dateRemplissage: new Date().toISOString().split('T')[0],
        nomRemplisseur: ''
      }
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
        // Charger AOS si pas encore chargé
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
    handlePhotoPrincipale(event) {
      const file = event.target.files[0]
      if (file) {
        this.form.photoPrincipale = file
        const reader = new FileReader()
        reader.onload = (e) => {
          this.photoPrincipalePreview = e.target.result
        }
        reader.readAsDataURL(file)
      }
    },
    handlePhotosGalerie(event) {
      const files = Array.from(event.target.files)
      if (files.length > 15) {
        alert('Vous ne pouvez sélectionner que 15 photos maximum')
        event.target.value = ''
        return
      }
      
      this.form.photosGalerie = files
      this.photosGaleriePreview = []
      
      files.forEach((file) => {
        const reader = new FileReader()
        reader.onload = (e) => {
          this.photosGaleriePreview.push(e.target.result)
        }
        reader.readAsDataURL(file)
      })
    },
    resetForm() {
      if (confirm('Êtes-vous sûr de vouloir réinitialiser le formulaire ? Toutes les données seront perdues.')) {
        this.form = {
          nomComplet: '',
          surnoms: '',
          naissanceJour: null,
          naissanceMois: null,
          naissanceAnnee: null,
          decesJour: null,
          decesMois: null,
          decesAnnee: null,
          lieuNaissance: '',
          lieuResidence: '',
          profession: '',
          pere: '',
          mere: '',
          nombreEnfants: 0,
          nomsEnfants: '',
          positionFratrie: '',
          biographie: '',
          veilleeJour: null,
          veilleeMois: null,
          veilleeAnnee: null,
          veilleeHeure: '',
          veilleeLieu: '',
          ceremonieJour: null,
          ceremonieMois: null,
          ceremonieAnnee: null,
          ceremonieHeure: '',
          ceremonieLieu: '',
          cimetiere: '',
          nombrePhotos: 0,
          categoriesPhotos: {
            photosVie: false,
            photosObsèques: false,
            photosFamille: false
          },
          photoPrincipale: null,
          photosGalerie: [],
          contactNom: '',
          contactTelephone: '',
          contactEmail: '',
          contactWhatsApp: '',
          dateRemplissage: new Date().toISOString().split('T')[0],
          nomRemplisseur: ''
        }
        this.photoPrincipalePreview = null
        this.photosGaleriePreview = []
        document.getElementById('photoPrincipale').value = ''
        document.getElementById('photosGalerie').value = ''
      }
    },
    async submitForm() {
      this.isSubmitting = true
      
      try {
        // Validation supplémentaire
        if (this.form.photosGalerie.length > 15) {
          alert('Vous ne pouvez pas téléverser plus de 15 photos')
          this.isSubmitting = false
          return
        }
        
        // Créer FormData pour envoyer les fichiers
        const formData = new FormData()
        
        // Ajouter tous les champs du formulaire
        Object.keys(this.form).forEach(key => {
          if (key === 'categoriesPhotos') {
            formData.append(key, JSON.stringify(this.form[key]))
          } else if (key === 'photoPrincipale' || key === 'photosGalerie') {
            // Les fichiers seront ajoutés séparément
          } else {
            formData.append(key, this.form[key])
          }
        })
        
        // Ajouter les fichiers
        if (this.form.photoPrincipale) {
          formData.append('photoPrincipale', this.form.photoPrincipale)
        }
        
        this.form.photosGalerie.forEach((file, index) => {
          formData.append(`photosGalerie_${index}`, file)
        })
        
        // Ici, vous pouvez envoyer les données à votre API
        // Exemple avec fetch:
        /*
        const response = await fetch('/api/questionnaire-essentiel', {
          method: 'POST',
          body: formData
        })
        
        if (response.ok) {
          const result = await response.json()
          alert('Formulaire soumis avec succès !')
          this.resetForm()
        } else {
          throw new Error('Erreur lors de la soumission')
        }
        */
        
        // Pour l'instant, on affiche juste les données dans la console
        console.log('Données du formulaire:', this.form)
        console.log('FormData:', formData)
        
        // Simulation d'envoi
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        alert('Formulaire soumis avec succès ! Les données ont été enregistrées.')
        // this.resetForm() // Décommentez si vous voulez réinitialiser après soumission
        
      } catch (error) {
        console.error('Erreur lors de la soumission:', error)
        alert('Une erreur est survenue lors de la soumission du formulaire. Veuillez réessayer.')
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>

<style scoped>
.questionnaire-section {
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

.questionnaire-form {
  max-width: 1000px;
  margin: 0 auto;
  background: white;
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);
}

.form-section {
  margin-bottom: 40px;
  padding-bottom: 30px;
  border-bottom: 2px solid #e9ecef;
}

.form-section:last-of-type {
  border-bottom: none;
}

.section-header {
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--accent-color, #d4af37);
  margin-bottom: 25px;
  padding-bottom: 10px;
  border-bottom: 2px solid var(--accent-color, #d4af37);
}

.subsection {
  margin-bottom: 25px;
}

.subsection-header {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--heading-color, #333);
  margin-bottom: 15px;
}

.form-label {
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
}

.form-control,
.form-select {
  border-radius: 8px;
  border: 1px solid #ddd;
  padding: 10px 15px;
  transition: all 0.3s;
}

.form-control:focus,
.form-select:focus {
  border-color: var(--accent-color, #d4af37);
  box-shadow: 0 0 0 0.2rem rgba(212, 175, 55, 0.25);
}

.form-check {
  margin-bottom: 10px;
}

.form-check-label {
  margin-left: 8px;
  font-weight: normal;
}

.preview-image {
  max-width: 300px;
  max-height: 300px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  object-fit: cover;
}

.preview-image-small {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.form-actions {
  margin-top: 40px;
  padding-top: 30px;
  border-top: 2px solid #e9ecef;
  text-align: center;
}

.btn {
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.3s;
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

.btn-secondary {
  background-color: #6c757d;
  border-color: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background-color: #5a6268;
  border-color: #5a6268;
  transform: translateY(-2px);
}

.text-danger {
  color: #dc3545;
}

.text-muted {
  color: #6c757d;
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .questionnaire-form {
    padding: 20px;
  }
  
  .section-header {
    font-size: 1.5rem;
  }
  
  .section-title h2 {
    font-size: 2rem;
  }
}
</style>


