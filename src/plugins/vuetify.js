import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#0073bb',
        secondary: '#0095d5',
        accent: '#E3F2FD',
        background: '#EDEDED',
      },
      dark: {
        primary: '#0073bb',
        secondary: '#0095d5',
        accent: '#E3F2FD',
      },
    },
  },
})
