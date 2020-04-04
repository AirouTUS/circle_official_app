<template lang="pug">
  #header-nav
    .navbar.flexbox.has-space-between.has-alignitem-center
      .navbar_left.flexbox
        router-link.flexbox.has-alignitem-center(to='/')
          img.logo_img(@click='isActive=false' :class="{ 'is-active': isActive }" src='../assets/images/logo.png')
        .navbar_left-items.flexbox.has-alignitem-center
          router-link.navbar_left-item(v-scroll-to="'#about'" to='/#about') about
          router-link.navbar_left-item(v-scroll-to="'#contact'" to='/#contact') contact
      .navbar_right
        .sns
          a.sns_icon(href='https://twitter.com/airou_tus')
            b-icon.twitter(pack='fab' icon='twitter' custom-class='faa-wrench animated-hover')
          a.sns_icon
            b-icon.facebook(pack='fab' icon='facebook-square' custom-class='faa-wrench animated-hover')
          a.sns_icon
            b-icon.mail(icon='envelope' custom-class='faa-wrench animated-hover')
      .burger-items(@click='changeNavbarActive' :class="{ 'is-active': isActive }")
        span.top
        span.middle
        span.bottom
    transition(name='nav')
      nav.nav(v-show='isActive')
        ul.nav-toggle.flexcolumn.has-space-around
          li.nav-toggle-item.flexbox.has-alignitem-center(@click='changeNavbarActive')
            router-link(to='/') HOME
          li.nav-toggle-item.flexbox.has-alignitem-center(@click='changeNavbarActive')
            router-link(v-scroll-to="'#about'" to='/#about') ABOUT
          li.nav-toggle-item.flexbox.has-alignitem-center(@click='changeNavbarActive')
            router-link(v-scroll-to="'#contact'" to='/#contact') CONTACT
          //
            <li class="nav-toggle-item" @click="changeNavbarActive"><router-link to="/article">ARTICLE</router-link></li>
            <li class="nav-toggle-item" @click="changeNavbarActive"><router-link to="/portfolio">PORTFOLIO</router-link></li>
 
</template>

<script>
export default {
  data: function() {
    return {
      isActive: false
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
    width: 100vw
    .navbar
      margin: 32px 0
      &_left
        .logo_img
          position: relative
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
            filter: invert(88%) sepia(61%) saturate(0%) hue-rotate(229deg) brightness(107%) contrast(101%) 
            transition: .5s
        &-items
          margin: 0 16px
          font-weight: 600
        &-item
          font-size: 37px
          margin: 0 24px
          position: relative
          &:visited
            color: #42210b
          &:after
              position: absolute
              display: inline-block
              bottom: -3px
              left: 0
              content: ''
              width: 100%
              height: 3px
              background: #42210b
              border-radius: 5px
              transform: scale(0, 1)
              transform-origin: center top
              transition: .3s
          &:hover
            &:after
              transform: scale(1, 1)

      &_right
        position: relative
        .sns
          margin-right: 20px
          &_icon
            font-size: 24px
            margin: 0 24px
            &:visited
              color: #42210b
    
    @media screen and (min-width: 961px) 
      .burger-items
        display: none
            
    
    @media screen and (max-width: 960px)
      .navbar
        &_left
          &-items
            display: none
      .sns
        display: none

      .burger-items 
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
            background-color: #EEE
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

      .burger-items
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
      display: flex
      justify-content: center
      align-items: center
      z-index: 98
      &-toggle
        z-index: 99 
        width: 250px
        height: 400px
        &-item
          justify-content: center
          font-size: 40px
          height: 60px
          &:hover
            outline: 2px solid #EEEEEE
            transition: .2s
          a
            color: #EEEEEE
            position: relative
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