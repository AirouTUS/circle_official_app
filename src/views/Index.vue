<template>
  <div id="index">
  <header-nav></header-nav>
  <router-view></router-view>
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav'
export default {
  components: {HeaderNav}
}
</script>

<style lang="sass">
  #index
    overflow: hidden
</style>
