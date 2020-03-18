<template lang="pug">
  b-navbar(toggleable="md", type="light", variant="light")
    b-navbar-brand(to="/")
      img(src="../assets/logo.png")
    
    b-navbar-toggle(target="nav-collapse")

    b-collapse(id="nav-collapse", is-nav)
      b-navbar-nav
        b-nav-item(to="/") Features
        b-nav-item(to="/todo") Todo
        b-nav-item(to="/about") About
        b-nav-item(target="_blank", href="https://github.com/CyberScouter/speakers-list") GitHub
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped></style>
