<template>
  <div>
    <v-card max-width="600" class="mx-auto">
      <v-list subheader two-line>
        <v-list-item v-for="repo in list" :key="repo.name">
          <v-list-item-avatar>
            <v-avatar
              ><img :src="repo.owner.avatar_url" alt="People"
            /></v-avatar>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="repo.name"></v-list-item-title>

            <v-list-item-subtitle
              v-text="repo.updated_at"
            ></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <a :href="repo.html_url" target="_blank"
              ><v-btn icon>
                <v-icon color="grey lighten-1">mdi-information</v-icon>
              </v-btn>
            </a>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import api from "../constant/api";
import * as types from "../store/types";

export default {
  name: "",
  data() {
    return {
      msg: "",
      list: [],
    };
  },
  mounted() {
    this.$store.commit(types.TITLE, "Your Repositories");
    this.getRepository();
  },

  methods: {
    getRepository() {
      let params = {
        sort: "updated",
      };
      console.log(this.$axios);
      this.$axios.get(api.repo_list, params).then((response) => {
        this.list = response.data;

        for (let i in this.list) {
          let date = new Date(this.list[i].updated_at);
          this.list[i].updated_at = date.toString();
        }
      });
    },
  },
};
</script>

<style scoped rel="stylesheet/css">
a {
  text-decoration: none;
}
</style>