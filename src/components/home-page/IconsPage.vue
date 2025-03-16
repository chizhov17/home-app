<template lang="pug">
  .icons-page
    .icons-page-item(
      v-for="item in Object.keys(iconsPack)"
      :key="item"
    )
      div( v-html="iconsPack[item]" )
      div {{ item }}
</template>

<script setup>
  import { iconsPack, } from '../../assets/icons/index.js'
</script>

<style lang="scss" scoped>
  .icons-page {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 12px;
    height: 100%;
    margin-right: -12px;
    padding-right: 12px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 14px;
    overflow-y: auto;

    &-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 12px;
      width: 180px;
      padding: 16px;
      background-color: var(--color-main-primary);
      color: var(--color-text-primary);
      border-radius: 16px;

      ::v-deep svg {
        width: 36px;
        height: 36px;

        path {
          fill: var(--color-text-primary);
        }
      }
    }
  }
</style>
