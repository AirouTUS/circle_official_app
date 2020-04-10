<template lang="pug">
  #header-nav
    .navbar.flexbox.has-space-between.has-alignitem-center
      .navbar_left.flexbox
        router-link.flexbox.has-alignitem-center(to="/")
          img.logo_img(@click='isActive=false' :class="{ 'is-active': isActive }" src="@/assets/images/logo.png")
        .navbar_left_items.flexbox.has-alignitem-center.bold
          router-link.navbar_left_item(v-scroll-to="'#about'" to="/#about") about
          router-link.navbar_left_item(v-scroll-to="'#contact'" to="/#contact") contact
      .navbar_right
        .sns
          sns-icon(v-for="item in items" :key="item.id" :src="item.src" :pack="item.pack" :icon="item.icon")
      .burger_items(@click='multipleActive()' :class="{ 'is-active': isActive }" v-scroll-lock="lock")
        span.top
        span.middle
        span.bottom
    transition(name="nav")
      nav.nav.flexbox.has-alignitem-center(v-show='isActive')
        ul.nav_toggle.flexcolumn.has-space-around
          li.nav_toggle_item(@click='multipleActive()')
            router-link.text-white.flexbox.has-alignitem-center(to="/") HOME
          li.nav_toggle_item(@click='multipleActive()')
            router-link.text-white.flexbox.has-alignitem-center(v-scroll-to="'#about'" to="/#about") ABOUT
          li.nav_toggle_item(@click='multipleActive()')
            router-link.text-white.flexbox.has-alignitem-center(v-scroll-to="'#contact'" to="/#contact") CONTACT
          
          //<li class="nav-toggle-item" @click="changeNavbarActive"><router-link to="/article">ARTICLE</router-link></li>
            <li class="nav-toggle-item" @click="changeNavbarActive"><router-link to="/portfolio">PORTFOLIO</router-link></li>
 
</template>

<script>
import SnsIcon from '@/components/SnsIcon.vue'

export default {
  components: { SnsIcon },

  data: function() {
    return {
      isActive: false,
      lock: false,

      items: [
        {
          id: 1,
          src: "https://twitter.com/airou_tus",
          pack: "fab",
          icon: "twitter"
        }, {
          id: 2,
          src: "",
          pack: "fab",
          icon: "facebook-square" 
        }, {
          id: 3,
          src: "",
          pack: "",
          icon: "envelope"
        }
      ]
    }
  },
  methods: {
    multipleActive: function() {
      this.changeNavbarActive()
      this.scrollLock()
    },
    changeNavbarActive: function() {
      this.isActive = !this.isActive;
    },
    scrollLock: function() {
      this.lock = !this.lock;
    }
  }
}
</script>

<style lang="sass" scoped>
  .navbar
    margin: 32px 0
    &_left
      .logo_img
        width: 140px
        margin-left: 20px 
        cursor: pointer
        z-index: 99
        transition: .5s
        &:hover
          opacity: 1
          -webkit-animation: flash 1s
          animation: flash 1s
        @-webkit-keyframes flash 
          0% 
            opacity: .4
          100% 
            opacity: 1
        @keyframes flash 
          0% 
            opacity: .4
          100%
            opacity: 1
        &.is-active
          filter: invert(88%) sepia(91%) saturate(0%) hue-rotate(229deg) brightness(107%) contrast(101%) 
          transition: .5s
      &_items
        margin: 0 16px
      &_item
        font-size: 37px
        margin: 0 24px
        position: relative
        &:visited
          color: $m-brown
        &:after
            position: absolute
            display: inline-block
            bottom: -3px
            left: 0
            content: ''
            width: 100%
            height: 3px
            background: $m-brown
            border-radius: 5px
            transform: scale(0, 1)
            transform-origin: center top
            transition: .3s
        &:hover
          &:after
            transform: scale(1, 1)
    &right
      .sns
        margin-right: 20px
    
  @media screen and (min-width: 961px) 
    .burger_items
      display: none
    
  @media screen and (max-width: 960px)
    .navbar
      &_left
        &_items
          display: none
    .sns
      display: none

    .burger_items 
      width: 40px
      height: 30px
      margin-right: 30px
      position: relative
      cursor: pointer
      z-index: 100
      & > span 
        width: 100%
        height: 10%
        background-color: #757575
        display: block
        transition: .5s
        position: absolute
        border-radius: 50px
        &.top
          top: 10%
        &.middle
          top: 50%
        &.bottom
          top: 90%
      &.is-active
        & > span 
          transition: .5s
          background-color: $white
          &.top
            transform: rotate(45deg)
            top: 50%
          &.middle 
            opacity: 0
          &.bottom
            transform: rotate(-45deg)
            top: 50%

  @media screen and (max-width: 560px)
    .navbar
      margin-top: 25px
      &_left
        .logo_img 
          width: 100px
          margin-left: 20px

    .burger_items
      width: 35px
      height: 25px
      margin-right: 20px

  .nav
    width: 100%
    height: 100%
    top: 0
    left: 0
    position: fixed
    background-color: rgba(128, 128, 128, 1)
    justify-content: center
    z-index: 98
    &_toggle
      z-index: 99 
      width: 250px
      height: 400px
      @media screen and (max-width: 560px)
        width: 200px
      &_item
        & > a
          justify-content: center
          font-size: 40px
          width: 100%
          height: 60px
          @media screen and (max-width: 560px)
            font-size: 25px
          &:hover
            outline: 2px solid $white

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
