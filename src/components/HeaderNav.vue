<template>
  <div id="header-nav">
    <div class="burger-items" @click="changeNavbarActive" :class="{ 'is-active': isActive }">
      <span class="top"></span>
      <span class="middle"></span>
      <span class="bottom"></span>
    </div>
    <transition name="nav">
      <nav class="nav" v-show="isActive">
        <ul class="navbar">
          <li class="navbar-items" @click="toTop"><router-link to="/">top</router-link></li>
          <li class="navbar-items"><router-link to="/about">about</router-link></li>
          <li class="navbar-items"><router-link to="/article">article</router-link></li>
          <li class="navbar-items"><router-link to="/contact">contact</router-link></li>
          <li class="navbar-items"><router-link to="/portfolio">portfolio</router-link></li>
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
    },
    toTop: function() {
      this.isActive = false;
    }
  },
  watch: {
    "$route.path"() {
      this.isActive = false;
    }
  }
}
</script>

<style lang="sass">
  #header-nav
    
    .burger-items 
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
        background-color: rgba(0, 0, 0, 1)
        display: block
        transition: .5s
        position: absolute
        &.top
          top: 0
        &.middle
          top: 45%
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
      width: 100%
      height: 100%
      top: 0
      left: 0
      position: fixed
      background-color: rgba(128, 128, 128, 1)
      display: flex
      justify-content: center
      align-items: center
      .navbar
        list-style: none
        text-align: center
        z-index: 99 
        &-items
          font-family: serif
          font-size: 40px
          line-height: 2
          a
            color: #EEEEEE
            text-decoration: none
            position: relative
            &:after
              position: absolute
              display: inline-block
              bottom: -9px;
              left: 0;
              content: '';
              width: 100%;
              height: 3px;
              background: #EEEEEE;
              transform: scale(0, 1);
              transform-origin: center top;
              transition: .3s;
            &:hover
              &:after
                transform: scale(1, 1);
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