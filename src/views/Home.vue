<template>
  <div class="home">
    <section id="hero">
      <v-parallax
        height="600"
        src="@/assets/weinspiretravel-203.jpg"
      >
        <v-row no-gutters>
          <v-theme-provider dark>
            <v-container fill-height>
              <v-row
                align="center"
                class="white--text mx-auto"
                justify="center"
              >
                <v-col
                  class="white--text text-center"
                  cols="12"
                  tag="h1"
                >
                  <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-2': 'display-3']"
                    class="font-weight-black text-uppercase"
                  >
                    We inspire travel.
                  </span>
                </v-col>
                <v-btn
                  class="align-self-end"
                  fab
                  outlined
                  @click="$vuetify.goTo('#start')"
                >
                  <v-icon>mdi-chevron-double-down</v-icon>
                </v-btn>
              </v-row>
            </v-container>
          </v-theme-provider>
        </v-row>
      </v-parallax>
    </section>

    <v-layout primary>
      <v-container>
        <v-row
          justify="center"
          id="start"
          class="pa-5"
        >
          <v-col
            cols="10"
            md="8"
          >
            <p class="text-center white--text display-1"> Miles is a strategic marketing company focused exclusively on travel and tourism. We work with more than 90 destinations and hospitality businesses to create forward-thinking print and digital content marketing solutions.</p>
          </v-col>
        </v-row>
      </v-container>
    </v-layout>

    <!-- blocks -->
    <work />
    <think />
    <partner />
  </div>
</template>

<script>
// @ is an alias to /src
import Work from '@/components/Work';
import Think from '@/components/Think';
import Partner from '@/components/Partner';

export default {
  name: 'Home',
  components: {
    Work,
    Think,
    Partner
  }
}
</script>
