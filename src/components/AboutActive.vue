<template lang="pug">
  .about_active
    span.bg-brown.text-yellow {{ title }}
    span.bold {{ text }}
</template>

<script>
export default {
  props: {
    title: String,
    text: String
  }
}
</script>

<style lang="sass" scoped>
  .about_active
    & > span
      @media screen and (max-width: 560px)
        font-size: 10px
      &:nth-child(1)
        padding: 10px
        margin-right: 20px
    
</style>