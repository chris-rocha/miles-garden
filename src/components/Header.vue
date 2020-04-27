<template>
  <div>
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
            position="left center"
          />
        </v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-toolbar-items class="d-none d-sm-flex">
        <v-btn
          to="/meet-miles"
          text
        >
          <span class="mr-2">Meet Miles</span>
        </v-btn>
      </v-toolbar-items>

      <v-btn
        @click.stop="drawer = !drawer"
        fab
        text
        class="hidden-sm-and-up"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>

    </v-app-bar>

    <v-navigation-drawer fixed right temporary v-model="drawer">

      <v-container px-5 pb-0>
        <v-row justify="end">

          <v-btn
            @click.stop="drawer = !drawer"
            fab
            text
            x-small
            class="mb-2"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-row>
      </v-container>

      <v-list pt-0>
        <v-list-item to="/">
            <span class="mb-1">Home</span>
        </v-list-item>
        <v-list-item to="/meet-miles">
          <span class="mb-1">Meet Miles</span>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null
  }),
}
</script>
