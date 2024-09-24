<template>
  <div class="wrapper" :class="{ 'active': isActive, }">
    <span class="rotate-bg"></span>
    <span class="rotate-bg2"></span>
    
    <div class="form-box login">
      <h2 class="title animation" style="--i:0; --j:21;">Login</h2>
      <form action="#">
        <div v-for="item in login" :key="item.text" class="input-box animation" :style="`--i:${item.i}; --j:${item.j};`">
          <input :type="item.type" required>
          <label for="">{{ item.text }}</label>
          <i :class='item.icon'></i>
        </div>
        <button type="submit" class="animation" style="--i:3; --j:24;">Login</button>
        <div class="link-txt animation" style="--i:5; --j:25;">
          <p>Don't have an account? <a href="#" @click="handleLink">Sign Up</a></p>
        </div>
      </form>
    </div>
    <div class="info-text login">
      <h2 class="animation" style="--i:0; --j:20;">Welcome Back!</h2>
      <p class="animation" style="--i:1; --j:21;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,rem?</p>
    </div>
    <div class="form-box register">
      <h2 class="title animation" style="--i:17; --j:0;">Sign Up</h2>
      <form action="#">
        <div v-for="item in register" :key="item.text" class="input-box animation" :style="`--i:${item.i}; --j:${item.j};`">
          <input :type="item.type" required>
          <label for="">{{ item.text }}</label>
          <i :class='item.icon'></i>
        </div>
        <button type="submit" class="animation" style="--i:21; --j:4;">Sign Up</button>
        <div class="link-txt animation" style="--i:22; --j:5;">
          <p>Already have an account? <a href="#" @click="handleLink">Login</a></p>
        </div>
      </form>
    </div>
    <div class="info-text register">
      <h2 class="animation" style="--i:17; --j:0;">Welcome Back!</h2>
      <p class="animation" style="--i:18; --j:1;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,rem?</p>
    </div>
  </div>
</template>

<script setup>
  import { ref, } from 'vue'
  const login = [
    {
      type: 'text',
      text: 'Username',
      icon: 'bx bxs-user',
      i: 1,
      j: 22,
    },
    {
      type: 'password',
      text: 'Password',
      icon: 'bx bxs-lock-alt',
      i: 2,
      j: 23,
    },
  ]
  const register = [
    {
      type: 'text',
      text: 'Username',
      icon: 'bx bxs-user',
      i: 18,
      j: 1,
    },
    {
      type: 'email',
      text: 'Email',
      icon: 'bx bxs-envelope',
      i: 19,
      j: 2,
    },
    {
      type: 'password',
      text: 'Password',
      icon: 'bx bxs-lock-alt',
      i: 20,
      j: 3,
    },
  ]
  const isActive = ref(false)
  function handleLink() {
    isActive.value = !isActive.value
  }
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
  @mixin login-animation($value) {
    filter: blur(0);
    opacity: 1;
    transform: translateX(0);
    transition: .7s ease;
    transition-delay: calc(.1s * $value);
  }
  @mixin register-animation($value, $deg) {
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
  .wrapper {
    --white: #fff;
    --black: #000;
    --lightBulue: #17a;
    position: relative;
    width: 750px;
    height: 450px;
    background: var(--white);
    border: 2px solid var(--black);
    border-radius: 10px;
    box-shadow: 0 0 20px var(--black);
    overflow: hidden;
    &.active {
      .form-box {
        &.login .animation {
          @include register-animation(var(--i), -120%);
        }
        &.register {
          pointer-events: auto;
          .animation {
            @include login-animation(var(--i));
          }
        }
      }
      .info-text {
        &.login .animation {
          @include register-animation(var(--i), 120%);
        }
        &.register {
          pointer-events: auto;
          .animation {
            @include login-animation(var(--i));
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
          @include login-animation(var(--j));
        }
      }
      &.register {
        right: 0;
        padding: 0 40px 0 60px;
        .animation {
          @include register-animation(var(--j), 120%);
        }
      }
      h2 {
        position: relative;
        margin-bottom: 10px;
        color: var(--black);
        text-align: center;
        font-size: 32px;
        &::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 50%;
          width: 40px;
          height: 4px;
          background: var(--black);
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
          @include login-animation(var(--j));
        }
      }
      &.register {
        left: 0;
        padding: 0 150px 60px 40px;
        text-align: left;
        pointer-events: none;
        .animation {
          @include register-animation(var(--j), -120%);
        }
      }
      h2 {
        color: var(--white);
        font-size: 36px;
        line-height: 1.3;
        text-transform: uppercase;
      }
      p {
        color: var(--white);
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
        background: #000;
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
        background: var(--white);
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
        background: transparent;
        color: var(--black);
        border: none;
        border-bottom: 2px solid var(--black);
        outline: none;
        font-size: 16px;
        font-weight: 500;
        transition: .5s;
        &:focus {
          border-bottom-color: var(--lightBulue);
          &~label {
            top: -5px;
            color: var(--lightBulue);
          }
          &~i {
            color: var(--lightBulue);
          }
        }
        &:valid {
          border-bottom-color: var(--lightBulue);
          &~label {
            top: -5px;
            color: var(--lightBulue);
          }
          &~i {
            color: var(--lightBulue);
          }
        }
      }
      label {
        position: absolute;
        top: 50%;
        left: 0;
        color: var(--black);
        font-size: 16px;
        transform: translateY(-50%);
        transition: .5s;
        pointer-events: none;
      }
      i {
        position: absolute;
        top: 50%;
        right: 0;
        font-size: 18px;
        transform: translateY(-50%);
        transition: .5s;
      }
    }
    button {
      width: 100%;
      height: 45px;
      background-color: var(--black);
      color: var(--white);
      border: none;
      border-radius: 40px;
      outline: none;
      font-size: 16px;
      font-weight: 600;
      transition: .3s;
      cursor: pointer;
      &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
      }
    }
    .link-txt {
      margin: 20px 0 10px;
      color: var(--black);
      font-size: 14px;
      text-align: center;
      a {
        color: blue;
        font-weight: 600;
        text-decoration: none;
      }
    }
  }
</style>
