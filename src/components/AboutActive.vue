<template lang="pug">
  .about_active
    .about_active_item
      span {{ title }}
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
        &:nth-child(1)
          color: #FAF6DD
          background-color: #42210b
          padding: 10px
          margin-right: 20px
    
</style>