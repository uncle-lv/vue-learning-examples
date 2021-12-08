<template>
  <div class="main-div">
    <sui-card>
      <sui-image :src="user.avatar_url" />
      <sui-card-content>
        <sui-card-header v-text="user.username"></sui-card-header>
        <sui-card-meta v-text="user.email"></sui-card-meta>
      </sui-card-content>
    </sui-card>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",

  data() {
    return {
      user: null,
    };
  },

  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
  },
};
</script>

<style scoped>
.main-div {
  position: fixed;
  top: 36%;
  left: 50%;
  width: 20%;
  -webkit-transform: translateX(-50%) translateY(-40%);
}
</style>
