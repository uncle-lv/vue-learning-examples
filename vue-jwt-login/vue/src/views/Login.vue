<template>
  <div class="login-div">
    <div class="avatar-div">
      <sui-image :src="avatar_url" size="tiny" circular centered />
    </div>
    <div class="form-div">
      <sui-form>
        <sui-form-field>
          <sui-input
            v-model="username"
            placeholder="username"
            icon="user"
            iconPosition="left"
            type="text"
            required
          />
        </sui-form-field>
        <sui-form-field>
          <sui-input
            v-model="password"
            placeholder="password"
            icon="lock"
            iconPosition="left"
            type="password"
            required
          />
        </sui-form-field>
      </sui-form>
      <sui-button @click="login" class="fluid login-btn" primary
        >Login</sui-button
      >
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import * as types from "../store/types";

export default {
  name: "Login",

  data() {
    return {
      avatar_url:
        "https://cdn.jsdelivr.net/gh/uncle-lv/PicX-image-hosting@main/vue-learning-examples/image.jpg",
      username: "",
      password: "",
    };
  },

  computed: mapState({
    token: (state) => state.token,
  }),

  mounted() {
    let user = localStorage.getItem("user");
    if (user !== null) {
      user = JSON.parse(user);
      this.avatar_url = user.avatar_url;
    }
  },

  methods: {
    login() {
      if (this.token) {
        let redirect = decodeURIComponent(this.$route.query.redirect || "/");
        this.$router.push({
          path: redirect,
        });
      } else {
        const params = new URLSearchParams();
        params.append("username", this.username);
        params.append("password", this.password);
        this.axios
          .post("/login/oauth/access_token", params)
          .then((res) => {
            console.log(res);
            this.$store.commit(types.LOGIN, res.data);
            this.getUser();
            let redirect = decodeURIComponent(
              this.$route.query.redirect || "/"
            );
            this.$router.push({
              path: redirect,
            });
          })
          .catch((err) => {
            console.error(err);
          });
      }
    },

    getUser() {
      this.axios
        .get("/auth/current_user", {
          headers: {
            Authorization:
              this.token.token_type + " " + this.token.access_token,
          },
        })
        .then((res) => {
          console.log(res);
          this.$store.commit(types.USER, res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>

<style scoped>
.login-div {
  position: fixed;
  top: 36%;
  left: 50%;
  width: 20%;
  -webkit-transform: translateX(-50%) translateY(-50%);
}

.login-btn {
  margin-top: 20px !important;
}

.avatar-div {
  margin: 20px auto;
}
</style>