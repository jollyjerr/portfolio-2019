import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [{
      id: 1,
      name: 'footprint',
      description: 'A personalized chatbot to help users make sustainable decisions and reduce their carbon footprint.',
      link: 'https://github.com/jollyjerr/footprints-frontend',
      image: 'https://github.com/jollyjerr/footprints-backend/raw/master/github/chat.gif'
    }, {
      id: 2,
      name: 'Stellar Navigation',
      description: 'An interactive portrayal of stellar systems that calculates travel time between celestial bodies.',
      link: 'https://github.com/jollyjerr/StellarNavigation-Frontend',
      image: 'https://github.com/jollyjerr/StellarNavigation-Backend/raw/master/GitHubFiles/intro.gif'
    }, {
      id: 3,
      name: 'Harmonics',
      description: 'A web application that recommends chord progressions according to principles of tonal harmony as a user writes music.',
      link: 'https://github.com/jollyjerr/Harmonics',
      image: 'https://github.com/jollyjerr/Harmonics/raw/master/github/save.gif'
    }, {
      id: 4,
      name: 'Trip-Up',
        description: 'A web application for scheduling trips with your friends.',
      link: 'https://github.com/jollyjerr/Trip-Up',
      image: 'https://github.com/jollyjerr/Trip-Up/raw/master/github/comments.gif'
    }]
  },
  mutations: {
  },
  actions: {
  }
})
