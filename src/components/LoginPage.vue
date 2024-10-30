<template lang="pug">
  .login-page
    .login-form( :class="{ 'active': isActive, }" )
      span.rotate-bg
      span.rotate-bg2

      div(
        v-for="form in data"
        :key="form.id"
      )
        .form-box( :class="form.id" )
          h2.animation.title( :style="getAnimationParameters(form.title.parameters)" ) {{ form.title.text }}

          form( action="#" )
            .animation.input-box(
              v-for="item in form.fields"
              :key="item.text"
              :style="getAnimationParameters(item.parameters)"
            )
              input( :type="item.type" required )
              label {{ item.text }}
              .input-box-icon( v-html="iconsPack[item.icon]" )
            button.animation(
              type="submit"
              :style="getAnimationParameters(form.button.parameters)"
            ) {{ form.button.text }}
            .animation.link-txt(
              v-if="hasRegistration"
              :style="getAnimationParameters(form.link.parameters)"
            )
              p {{ form.link.title }}&nbsp;
                a( href="#" @click="handleLink" ) {{ form.link.text }}

        .info-text( :class="form.id" )
          h2.animation.text-neon( :style="getAnimationParameters(form.info.title.parameters)" ) {{ form.info.title.text }}
          p.animation( :style="getAnimationParameters(form.info.description.parameters)" ) {{ form.info.description.text }}
</template>

<script setup>
  import { ref, } from 'vue'
  import { iconsPack, } from '../assets/icons/index.js'

  const data = [
    {
      id: 'login',
      title: {
        text: 'Login',
        parameters: [ 0, 21, ],
      },
      fields: [
        {
          type: 'text',
          text: 'Username',
          icon: 'user_male',
          parameters: [ 1, 22, ],
        },
        {
          type: 'password',
          text: 'Password',
          icon: 'lock',
          parameters: [ 2, 23, ],
        },
      ],
      button: {
        text: 'Login',
        parameters: [ 3, 24, ],
      },
      link: {
        title: `Don't have an account?`,
        text: 'Sing up',
        parameters: [ 5, 25, ],
      },
      info: {
        title: {
          text: 'Welcome Back!',
          parameters: [ 0, 20, ],
        },
        description: {
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,rem?',
          parameters: [ 1, 21, ],
        },
      },
    },
    {
      id: 'register',
      title: {
        text: 'Sing up',
        parameters: [ 17, 0, ],
      },
      fields: [
        {
          type: 'text',
          text: 'Username',
          icon: 'user_male',
          parameters: [ 18, 1, ],
        },
        {
          type: 'email',
          text: 'Email',
          icon: 'mailbox',
          parameters: [ 19, 2, ],
        },
        {
          type: 'password',
          text: 'Password',
          icon: 'lock',
          parameters: [ 20, 3, ],
        },
      ],
      button: {
        text: 'Sing up',
        parameters: [ 21, 4, ],
      },
      link: {
        title: `Already have an account?`,
        text: 'Login',
        parameters: [ 22, 5, ],
      },
      info: {
        title: {
          text: 'Welcome Back!',
          parameters: [ 17, 0, ],
        },
        description: {
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,rem?',
          parameters: [ 18, 1, ],
        },
      },
    },
  ]

  const hasRegistration = true

  const isActive = ref(false)

  const getAnimationParameters = (value) => `--i: ${ value[0] }; --j: ${ value[1] };`

  function handleLink() {
    isActive.value = !isActive.value
  }
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

  @mixin animation($value) {
    filter: blur(0);
    opacity: 1;
    transform: translateX(0);
    transition: .7s ease;
    transition-delay: calc(.1s * $value);
  }

  @mixin animation2($value, $deg) {
    filter: blur(10px);
    opacity: 0;
    transform: translateX($deg);
    transition: .7s ease;
    transition-delay: calc(.1s * $value);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  .login {
    &-page {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    &-form {
      position: relative;
      width: 750px;
      height: 450px;
      background-color: var(--color-main-white);
      border: 2px solid var(--color-main-primary);
      border-radius: 10px;
      box-shadow: 0 0 20px var(--color-main-primary);
      overflow: hidden;

      &.active {
        .form-box {
          &.login .animation {
            @include animation2(var(--i), -120%);
          }

          &.register {
            pointer-events: auto;

            .animation {
              @include animation(var(--i));
            }
          }
        }

        .info-text {
          &.login .animation {
            @include animation2(var(--i), 120%);
          }

          &.register {
            pointer-events: auto;

            .animation {
              @include animation(var(--i));
            }
          }
        }

        .rotate {
          &-bg {
            transform: rotate(0) skewY(0);
            transition-delay: .5s;
          }

          &-bg2 {
            transform: rotate(-11deg) skewY(-40deg);
            transition-delay: 1.2s;
          }
        }
      }

      .form-box {
        position: absolute;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
        height: 100%;

        &.login {
          left: 0;
          padding: 0 60px 0 40px;

          .animation {
            @include animation(var(--j));
          }
        }

        &.register {
          right: 0;
          padding: 0 40px 0 60px;

          .animation {
            @include animation2(var(--j), 120%);
          }
        }

        h2 {
          position: relative;
          margin-bottom: 10px;
          color: var(--color-main-primary);
          text-align: center;
          font-size: 32px;

          &::after {
            content: "";
            position: absolute;
            bottom: -10px;
            left: 50%;
            width: 40px;
            height: 4px;
            background-color: var(--color-main-primary);
            transform: translateX(-50%);
          }
        }
      }

      .info-text {
        position: absolute;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 50%;
        height: 100%;

        &.login {
          right: 0;
          padding: 0 40px 60px 150px;
          text-align: right;

          .animation {
            @include animation(var(--j));
          }
        }

        &.register {
          left: 0;
          padding: 0 150px 60px 40px;
          text-align: left;
          pointer-events: none;

          .animation {
            @include animation2(var(--j), -120%);
          }
        }

        h2 {
          color: var(--color-main-white);
          font-size: 36px;
          line-height: 1.3;
          text-transform: uppercase;
        }

        p {
          color: var(--color-main-white);
          font-size: 16px;
        }
      }

      .rotate {
        &-bg {
          position: absolute;
          top: -4px;
          right: 0;
          width: 850px;
          height: 600px;
          background-color: var(--color-main-primary);
          transform: rotate(10deg) skewY(40deg);
          transform-origin: bottom right;
          transition: 1.5s ease;
          transition-delay: 1.6s;
        }

        &-bg2 {
          position: absolute;
          top: 100%;
          left: 250px;
          width: 850px;
          height: 700px;
          background-color: var(--color-main-white);
          transform: rotate(0) skewY(0);
          transform-origin: bottom left;
          transition: 1.5s ease;
          transition-delay: .5s;
        }
      }

      .input-box {
        position: relative;
        width: 100%;
        height: 50px;
        margin: 25px 0;

        input {
          width: 100%;
          height: 100%;
          padding-right: 23px;
          background-color: transparent;
          color: var(--color-main-primary);
          border: none;
          border-bottom: 2px solid var(--color-main-primary);
          outline: none;
          font-size: 16px;
          font-weight: 500;
          transition: .5s;

          &:focus {
            border-bottom-color: var(--color-text-lightblue);

            &~label {
              top: -5px;
              color: var(--color-text-lightblue);
            }

            &~.input-box-icon ::v-deep svg path {
              fill: var(--color-text-lightblue);
            }
          }

          &:valid {
            border-bottom-color: var(--color-text-lightblue);

            &~label {
              top: -5px;
              color: var(--color-text-lightblue);
            }

            &~.input-box-icon ::v-deep svg path {
              fill: var(--color-text-lightblue);
            }
          }
        }

        label {
          position: absolute;
          top: 50%;
          left: 0;
          color: var(--color-main-primary);
          font-size: 16px;
          transform: translateY(-50%);
          transition: .5s;
          pointer-events: none;
        }

        &-icon {
          position: absolute;
          top: 50%;
          right: 0;
          width: 24px;
          height: 24px;
          transform: translateY(-50%);
          transition: .5s;
        }
      }

      button {
        width: 100%;
        height: 45px;
        background-color: var(--color-main-primary);
        color: var(--color-main-white);
        border: none;
        border-radius: 40px;
        outline: none;
        font-size: 16px;
        font-weight: 600;
        transition: .3s;
        cursor: pointer;

        &:hover {
          box-shadow: 0 0 10px #000000cc;
        }
      }

      .link-txt {
        margin: 20px 0 10px;
        color: var(--color-main-primary);
        font-size: 14px;
        text-align: center;

        a {
          color: var(--color-text-lightblue);
          font-weight: 600;
          text-decoration: none;
        }
      }
    }
  }
</style>
