<template>
  <v-layout wrap>
        <v-img
        class="grow hidden-sm-and-down"
        contain
        max-height="80"
        width="100%"
        position="top center"
        :src="require('@/assets/dotted_arrow_footer.png')"
        />
      <v-container pt-10 pb-0>
          <h2 class="display-2 v-heading mb-0 font-weight-black text-uppercase text-center secondary--text">We are a Partner</h2>
      </v-container>

    <v-container>
      <v-responsive class="mx-auto" max-width="1024">

        <v-layout wrap>
          <v-flex
            xs12
            md6
            pa-5
          >
            <v-card tile flat color="background" class="pa-5">
              <h3 class="mb-1 font-weight-bold primary--text">
                Our Commitment to Client Service
              </h3>
              <p>Professionalism, collaboration and genuine camaraderie are the keys to our successful, long-term relationships with clients. Customer service is a core part of the solutions we deliver.</p>
            </v-card>
          </v-flex>

          <v-flex
            xs12
            md6
            pa-5
          >
            <v-card tile flat color="background" class="pa-5">
              <h3 class="mb-1 font-weight-bold primary--text">
                Our Commitment to the Travel Industry
              </h3>
              <p>At Miles, we showcase our commitment to the travel industry through regular attendance at industry conferences, speaking engagements, sponsorships, hosting educational events and more.</p>
            </v-card>
          </v-flex>

        </v-layout>
      </v-responsive>
    </v-container>
  </v-layout>
</template>
