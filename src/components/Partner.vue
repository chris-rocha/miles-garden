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
    <v-row>
      <v-container pt-10>
      <h2 class="display-2 v-heading mb-3 font-weight-black text-uppercase text-center primary--text">We are a Partner</h2>
      </v-container>
    </v-row>
    <v-layout wrap>
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
        <v-card>
          <h2 class="display-1 v-heading mb-3 font-weight-bold">
            Our Commitment to Client Service
          </h2>
          <p>Professionalism, collaboration and genuine camaraderie are the keys to our successful, long-term relationships with clients. Customer service is a core part of the solutions we deliver.</p>
        </v-card>
        <v-card>
          <h2 class="display-1 v-heading mb-3 font-weight-bold">
            Our Commitment to the Travel Industry
          </h2>
          <p>At Miles, we showcase our commitment to the travel industry through regular attendance at industry conferences, speaking engagements, sponsorships, hosting educational events and more.</p>
        </v-card>


      </v-layout>
      </v-flex>
    </v-layout>

  </v-layout>
</template>
