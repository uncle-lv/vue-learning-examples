<template>
  <div>
    <v-form class="login-form">
      <v-container>
        <v-row>
          <v-col cols="12" md="12">
            <v-text-field
              type="password"
              v-model="token"
              label="Personal access token"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
    <div class="btn-group">
      <v-btn color="primary" class="mr-4" @click="login"> Submit </v-btn>
      <v-btn
        href="https://github.com/settings/tokens/new"
        target="_blank"
        color="primary"
        class="mr-4"
        @click="login"
      >
        Get Token
      </v-btn>
    </div>
  </div>
</template>

<script>
import * as types from "../store/types";
export default {
  name: "",
  data() {
    return {
      msg: "",
      token: "",
    };
  },
  mounted() {
    this.$store.commit(types.TITLE, "Login");
  },
  methods: {
    login() {
      if (this.token) {
        this.$store.commit(types.LOGIN, this.token);
        let redirect = decodeURIComponent(this.$route.query.redirect || "/");
        this.$router.push({
          path: redirect,
        });
      }
    },
  },
};
</script>

<style scoped rel="stylesheet/css">
.login-form {
  width: 400px;
  margin: 30px auto;
}

.btn-group {
  width: 250px;
  margin: 0px auto;
}
</style>