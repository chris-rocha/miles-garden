<template>
  <v-layout wrap>
    <v-flex
      xs12
      md6
      layout
      wrap
    >

    <v-layout
      align-center
      justify-center
      pa-10
    >
      <v-flex>
        <h2 class="display-2 v-heading mb-3 font-weight-light">
          We see your destination <br>
          through the <br>
          eyes of a visitor
        </h2>
        <p>We believe that successful marketing solutions look to travelers’ needs first—and as a result, they meet your needs and those of your industry partners.</p>

        <v-btn dark depressed color="secondary">
          gain some knowledge
        </v-btn>
      </v-flex>
    </v-layout>
    </v-flex>

    <v-flex
      xs12
      md6
    >
      <v-img
        :src="require('@/assets/car.jpg')"
        height="100vh"
      />
    </v-flex>
  </v-layout>
</template>
