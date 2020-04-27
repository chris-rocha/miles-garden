<template>
  <v-layout wrap>
    <v-flex
      xs12
      md6
    >
      <v-img
        :src="require('@/assets/walkway.jpg')"
        height="100vh"
      />
    </v-flex>

    <v-flex
      xs12
      md6
      layout
      wrap
    >


      <v-layout
            px-10

        align-center
        justify-center
      >

        <v-flex>
          <h2 class="display-2 v-heading mb-3 font-weight-light">
            We use independent <br>
            research to <br>
            drive strategy
          </h2>
          <p>We turn research and analytics into actionable insights that inform decisions, shape changes and drive improvements for our clients.</p>
          <v-btn dark depressed color="secondary">
            see our work
          </v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
