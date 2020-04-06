<template lang="pug">
  .recruit_box
    router-link(to="/recruit")
      .recruit_box_item.flexbox.has-alignitem-center.bold
        p {{ customText }} 
</template>

<script>
export default {
  props: {
    customText: {
      type: String
    }
  }
}
</script>

<style lang="sass" scoped>
  .recruit_box
    margin: 0 auto
    &_item
      width: 220px
      height: 70px
      margin: 0 auto
      border: 2px solid #42210b
      & > p
        font-family: 'Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',YuGothic,'Yu Gothic',sans-serif
        position: relative
        letter-spacing: 3px
        text-indent: 3px
        width: 100%
        text-align: center
</style>