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

<v-layout wrap>
  <v-flex
    xs12
    md6
  >
    <v-img
      :src="require('@/assets/car.jpg')"
      height="100vh"
    />
  </v-flex>

  <v-flex
    xs12
    md6
    layout
    wrap
    pa-10
  >

        <v-layout
          align-center
          justify-center
        >
        <v-flex>
<h2 class="display-2 v-heading mb-3 font-weight-light">
we see your destination <br>
through the <br>
eyes of a visitor
</h2>
<p>We believe that successful marketing solutions look to travelers’ needs first—and as a result, they meet your needs and those of your industry partners.</p>

<v-btn dark depressed color="primary">
see our work
</v-btn>
          </v-flex>
        </v-layout>

  </v-flex>
</v-layout>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>
