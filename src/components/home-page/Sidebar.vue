<template lang="pug">
  .sidebar( :class="{ 'sidebar--is-collapsed': isCollapsed, }" )
    .sidebar-header
      a.text-neon( href="https://github.com/chizhov17/home-app" target="_blank" ) home-app
      .action-icon(
        v-html="iconsPack[isCollapsed ? 'menu' : 'arrow_left']"
        @click="isCollapsed = !isCollapsed"
      )
    hr
    .sidebar-content
      .sidebar-content-item(
        v-for="item in data"
        :key="item.title"
        @click="router.push(item.url)"
      )
        .sidebar-content-item-icon( v-html="iconsPack[item.icon]" )
        span {{ item.title }}
      .sidebar-content-item--highlight
    .sidebar-footer
      .sidebar-footer-content
        img( src="../../assets/images/halloween17.jpeg" alt="chizhov17" )
        div
          a.text-neon( href="https://github.com/chizhov17" target="_blank" ) chizhov17
          .sidebar-footer-content-subtitle Admin
      .action-icon(
        v-html="iconsPack.logout"
        @click="router.push('/login')"
      )
</template>

<script setup>
  import { ref, } from 'vue'
  import { useRouter, } from 'vue-router'
  import { iconsPack, } from '../../assets/icons/index.js'

  const router = useRouter()

  const data = [
    { icon: 'home', title: 'Home', url: '/', },
    { icon: 'news', title: 'News', url: '/', },
    { icon: 'book', title: 'Book', url: '/', },
    { icon: 'document', title: 'Document', url: '/', },
    { icon: 'synchronize', title: 'Synchronize', url: '/', },
    { icon: 'about', title: 'About', url: '/', },
    { icon: 'share', title: 'Share', url: '/', },
    { icon: 'settings', title: 'Settings', url: '/', },
  ]

  const isCollapsed = ref(false)
</script>

<style lang="scss" scoped>
  .sidebar {
    display: flex;
    flex-direction: column;
    width: 256px;
    background-color: var(--color-main-primary);
    color: var(--color-main-white);
    border-radius: 16px;
    overflow: hidden;
    user-select: none;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    transition: width .2s;

    &--is-collapsed {
      width: 88px;

      .sidebar {
        &-header {
          justify-content: center;

          a {
            display: none;
          }
        }

        &-content-item span {
          display: none;
        }

        &-footer {
          justify-content: center;

          &-content > div,
          .action-icon {
            display: none;
          }
        }
      }
    }

    &-header {
      z-index: 2;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 16px;
      background-color: var(--color-main-primary);
      border-radius: 16px;

      a {
        font-size: 24px;
        white-space: nowrap;
      }
    }

    hr {
      margin: 0;
      border: none;
      border-top: solid 1px var(--color-main-secondary);
    }

    &-content {
      position: relative;
      flex: 1;
      margin: -16px 0;
      padding: 16px 0;
      direction: rtl;
      overflow-x: hidden;

      &-item {
        z-index: 1;
        position: relative;
        display: flex;
        align-items: center;
        gap: 12px;
        height: 54px;
        margin-left: 32px;
        color: var(--color-text-primary);
        direction: ltr;
        cursor: pointer;

        &-icon {
          width: 24px;
          height: 24px;
        }

        ::v-deep svg {
          width: 24px;
          height: 24px;
          min-width: 24px;

          path {
            fill: var(--color-text-primary);
          }
        }

        &--highlight {
          position: absolute;
          top: -70px;
          width: calc(100% - 16px);
          height: 54px;
          background-color: var(--color-main-background);
          border-radius: 16px 0 0 16px;
          transition: top .2s;

          &:before,
          &:after {
            content: '';
            position: absolute;
            right: 0;
            bottom: 100%;
            width: 32px;
            height: 32px;
            border-radius: 50%;
            box-shadow: 16px 16px var(--color-main-background);
          }

          &:after {
            top: 100%;
            box-shadow: 16px -16px var(--color-main-background);
          }
        }

        @for $i from 1 through 8 {
          &:nth-of-type(#{$i}):hover {
            color: var(--color-main-primary);

            & ~ .sidebar-content-item--highlight {
              top: ($i - 1) * 54 + 16px;
            }

            ::v-deep svg path {
              fill: var(--color-main-primary);
            }
          }
        }
      }

      &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }

      &::-webkit-scrollbar-thumb {
        background-color: var(--color-text-primary);
        border-radius: 99px;
      }

      &::-webkit-scrollbar-button {
        height: 16px;
      }
    }

    &-footer {
      z-index: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      background-color: var(--color-main-secondary);
      border-radius: 16px;

      &-content {
        display: flex;
        align-items: center;
        gap: 12px;

        img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }

        &-subtitle {
          color: var(--color-text-primary);
          font-size: 10px;
        }
      }
    }

    a {
      color: inherit;
      text-decoration: inherit;
    }

    .action-icon {
      cursor: pointer;

      ::v-deep svg {
        width: 28px;
        height: 28px;

        path {
          fill: var(--color-main-white);
        }
      }

      &:hover {
        animation-name: shake;
        animation-duration: .8s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        transform-origin: 50% 100%;
      }
    }

    @keyframes shake {
      0% {
        transform: translate(2px, 1px) rotate(0deg);
      }

      10% {
        transform: translate(-1px, -2px) rotate(-2deg);
      }

      20% {
        transform: translate(-3px, 0) rotate(3deg);
      }

      30% {
        transform: translate(0, 2px) rotate(0deg);
      }

      40% {
        transform: translate(1px, -1px) rotate(1deg);
      }

      50% {
        transform: translate(-1px, 2px) rotate(-1deg);
      }

      60% {
        transform: translate(-3px, 1px) rotate(0deg);
      }

      70% {
        transform: translate(2px, 1px) rotate(-2deg);
      }

      80% {
        transform: translate(-1px, -1px) rotate(4deg);
      }

      90% {
        transform: translate(2px, 2px) rotate(0deg);
      }

      100% {
        transform: translate(1px, -2px) rotate(-1deg);
      }
    }
  }
</style>
