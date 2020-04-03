<template>
  <div class="recruit_box">
    <router-link to="/recruit">
      <div class="recruit_box_item flexbox has-alignitem-center bold size-3" :style="bgColor">
        <p :style="fontColor">{{ customText }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    customText: {
      type: String
    },
    bgColor: {
      type: String,
    },
    fontColor: {
      type: String
    }
  }
}
</script>

<style lang="sass">
  .recruit_box
    margin: 0 auto
    &_item
      width: 220px
      height: 70px
      margin: 0 auto
      border: 2px solid #42210b
      & > p
        position: relative
        letter-spacing: 3px
        text-indent: 3px
        width: 100%
        text-align: center
</style>