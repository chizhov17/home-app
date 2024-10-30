<template lang="pug">
  .home-page
    sidebar
    .home-page-content
      router-view
</template>

<script setup>
  import Sidebar from './home-page/Sidebar.vue'
</script>

<style lang="scss" scoped>
  .home-page {
    display: flex;
    gap: 12px;
    height: 100vh;
    padding: 12px;

    &-content {
      flex: 1;
    }
  }
</style>
