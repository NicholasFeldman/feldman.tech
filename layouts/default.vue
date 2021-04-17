<template>
  <v-app dark>
    <v-app-bar fixed app dense>
      <v-btn depressed nuxtto="/">
        FELDMAN<span class="font-weight-light">.TECH</span>
      </v-btn>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <v-footer
      color="#00000000"
      padless
      absolute
      app
    >
      <v-spacer />
      <span>&copy; {{ new Date().getFullYear() }} Nicholas Feldman</span>
      <v-spacer />
    </v-footer>
  </v-app>
</template>
