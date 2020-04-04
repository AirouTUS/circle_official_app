<template lang="pug">
  #index
    header-nav
    router-view
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
