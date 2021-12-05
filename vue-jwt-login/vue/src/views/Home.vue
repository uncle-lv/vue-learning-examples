<template>
  <div class="main-div">
    <sui-card>
      <sui-image src="static/images/avatar/large/kristy.png" />
      <sui-card-content>
        <sui-card-header
          ><sui-image :src="user.avatar_url" size="tiny" circular centered
        /></sui-card-header>
        <sui-card-meta>Joined in 2013</sui-card-meta>
        <sui-card-description
          >Kristy is an art director living in New York.</sui-card-description
        >
      </sui-card-content>
      <sui-card-content extra>
        <sui-icon name="user" />
        22 Friends
      </sui-card-content>
    </sui-card>
  </div>
</template>

<script>
import { mapState } from "vuex";

// @ is an alias to /src
export default {
  name: "Home",

  computed: mapState({
    user: (state) => state.user,
  }),
};
</script>

<style scoped>
.main-div {
  position: fixed;
  top: 36%;
  left: 50%;
  width: 20%;
  -webkit-transform: translateX(-50%) translateY(-50%);
}
</style>
