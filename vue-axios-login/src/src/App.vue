<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn target="_blank" v-on:click="logout" v-show="token" text>
        <span class="mr-2">Logout</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import * as types from "./store/types";
import { mapState } from "vuex";

export default {
  name: "App",

  data: () => ({}),

  computed: mapState({
    title: (state) => state.title,
    token: (state) => state.token,
  }),

  methods: {
    logout() {
      this.$store.commit(types.LOGOUT);
      this.$router.push({
        path: "/",
      });
    },
  },
};
</script>
