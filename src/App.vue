<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      height="80"
    >
      <div class="d-flex align-center">
        <v-btn
          text
          color="white"
          to="/"
        >
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="@/assets/miles-logo.png"
            transition="scale-transition"
            height="50"
            to="/"
          />

        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        to="/about"
        text
      >
        <span class="mr-2">About</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
