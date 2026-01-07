import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Offres from '../views/Offres.vue'
import Temoignage from '../views/Temoignage.vue'
import QuestionnaireEssentiel from '../views/QuestionnaireEssentiel.vue'
import Questionnaires from '../views/Questionnaires.vue'
import Templates from '../views/Templates.vue'
import FormulaireEssentiel from '../views/FormulaireEssentiel.vue'
import FormulaireStandard from '../views/FormulaireStandard.vue'
import FormulairePremium from '../views/FormulairePremium.vue'

const routes = [
  {
    path: '/',
    name: 'Offres',
    component: Offres
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/temoignage',
    name: 'Temoignage',
    component: Temoignage
  },
  {
    path: '/questionnaires',
    name: 'Questionnaires',
    component: Questionnaires
  },
  {
    path: '/questionnaire-essentiel',
    name: 'QuestionnaireEssentiel',
    component: QuestionnaireEssentiel
  },
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
  },
  {
    path: '/templates/:type?',
    name: 'Templates',
    component: Templates,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return { top: 0 }
    }
  }
})

export default router

