<template>
  <div id="navbar">
    <div id="burger">
      <div class="burger-item" @click="clickOpen" :class="{ 'is-active': isActive }">
        <span class="top"></span>
        <span class="middle"></span>
        <span class="bottom"></span>
      </div>
    </div>
    <transition name="nav">
      <nav id="headerNav" v-show="headerNav">
        <ul class="nav">
          <li class="nav-item"><router-link to="/">top</router-link></li>
          <li class="nav-item"><router-link to="/about">about</router-link></li>
          <li class="nav-item"><router-link to="/article">article</router-link></li>
          <li class="nav-item"><router-link to="/contact">contact</router-link></li>
          <li class="nav-item"><router-link to="portfolio">portfolio</router-link></li>
        </ul>
      </nav>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      isActive: false,
      headerNav: false
    }
  },
  methods: {
    clickOpen: function() {
      this.isActive = !this.isActive;
      this.headerNav = !this.headerNav;
    }
  }
}
</script>

<style lang="sass">
  .burger 
    &-item
      width: 36px
      height: 30px
      margin-top: 15px
      margin-right: 15px
      margin-left: auto
      position: relative
      cursor: pointer
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
    list-style-type: none
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