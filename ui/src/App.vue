<template lang="pug">
  div(id="app")
    header(id="nav")
      Navbar
    main
      b-container(fluid)
        router-view
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar
  }
};
</script>

<style lang="scss" src="./assets/scss/app.scss"></style>
