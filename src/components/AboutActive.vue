<template lang="pug">
  .about_active
    .about_active_item
      span.bg-brown {{ title }}
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
    &_item
      margin-bottom: 40px
      & > span
        @media screen and (max-width: 560px)
          font-size: $size-5
        &:nth-child(1)
          color: $m-yellow
          padding: 10px
          margin-right: 20px
    
</style>