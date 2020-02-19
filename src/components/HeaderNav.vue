<template>
  <div id="navbar">
    <div id="burger">
      <div class="burger-item" @click="changeNavbarActive" :class="{ 'is-active': isActive }">
        <span class="top"></span>
        <span class="middle"></span>
        <span class="bottom"></span>
      </div>
    </div>
    <transition name="nav">
      <nav id="header-nav" v-show="isActive">
        <ul class="nav">
          <li class="nav-item"><router-link to="/">top</router-link></li>
          <li class="nav-item"><router-link to="/about">about</router-link></li>
          <li class="nav-item"><router-link to="/article">article</router-link></li>
          <li class="nav-item"><router-link to="/contact">contact</router-link></li>
          <li class="nav-item"><router-link to="/portfolio">portfolio</router-link></li>
        </ul>
      </nav>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    changeNavbarActive: function() {
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style lang="sass">
  #header-nav
    width: 100%
    height: 100%
    top: 0
    left: 0
    position: fixed
    background-color: rgb(128, 128, 128)
    display: flex
    justify-content: center
    align-items: center

  .burger 
    &-item
      width: 36px
      height: 30px
      margin-top: 15px
      margin-right: 15px
      margin-left: auto
      position: relative
      cursor: pointer
      z-index: 100
      span 
        width: 100%
        height: 8%
        background-color: #000
        display: block
        transition: .5s
        position: absolute
        &.top
          top: 0
        &.middle
          top: 14px
        &.bottom
          bottom: 0
      &.is-active 
        span 
          transition: .5s
          &.top
            transform: rotate(45deg)
            top: 50%
          &.middle 
            opacity: 0
          &.bottom
            transform: rotate(-45deg)
            top: 50%

  .nav
    list-style: none
    text-align: center
    z-index: 99 
    &-item
      font-family: serif;
      font-size: 40px
      line-height: 2
      a
        color: #EEEEEE
        text-decoration: none
    &-enter
      opacity: 0
      &-to
        opacity: 1
      &-active
        transition: .5s
    &-leave
      opacity: 1
      &-to
        opacity: 0
      &-active
        transition: .5s
</style>