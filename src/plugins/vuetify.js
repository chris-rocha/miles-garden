import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#0073bb',
        secondary: '#0095d5',
      },
      dark: {
        primary: '#0073bb',
        secondary: '#0095d5',
      },
    },
  },
})
