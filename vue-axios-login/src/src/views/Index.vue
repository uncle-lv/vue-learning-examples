<template>
  <div>
    <ul>
      <router-link :to="{ path: '/repository' }">
        <div class="btn-group">
          <v-btn
            href="#/repository"
            target="_blank"
            color="primary"
            class="mr-4"
          >
            View Repositories
          </v-btn>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      msg: "",
    };
  },
};
</script>

<style scoped rel="stylesheet/css">
a {
  text-decoration: none;
}

.btn-group {
  width: 180px;
  margin: 50px auto;
}
</style>
