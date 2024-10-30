<template lang="pug">
  .home-page
    sidebar
    .home-page-content
</template>

<script setup>
  import Sidebar from './home-page/Sidebar.vue'
</script>

<style lang="scss" scoped>
  .home-page {
    display: flex;
    gap: 1vw;
    height: 100vh;
    padding: 1vw;

    &-content {
      flex: 1;
    }
  }
</style>
