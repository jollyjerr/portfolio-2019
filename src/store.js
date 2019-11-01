import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projects: [{
      id: 1,
      name: 'footprint',
      description: 'A personalized chatbot to help users make sustainable decisions and reduce their carbon footprint.',
      link: '',
      image: ''
    }, {
      id: 2,
      name: 'Stellar Navigation',
      description: 'An interactive portrayal of stellar systems that calculates travel time between celestial bodies.',
      link: '',
      image: ''
    }, {
      id: 3,
      name: 'Harmonics',
      description: 'A web application that recommends chord progressions according to principles of tonal harmony as a user writes music.',
      link: '',
      image: ''
    },]
  },
  mutations: {
  },
  actions: {
  }
})
