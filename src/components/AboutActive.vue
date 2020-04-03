<template>
  <div class="about_active">
    <div class="about_active_item">
      <span>{{ activeTitle }}</span>
      <span class="bold">{{ activeText }}</span>
    </div>
  </div>
  
</template>

<script>
export default {
  props: {
    activeTitle: String,
    activeText: String
  }
}
</script>

<style lang="sass">
  .about_active
    &_item
      margin-bottom: 40px
      & > span
        &:nth-child(1)
          color: #FAF6DD
          background-color: #42210b
          padding: 10px
          margin-right: 20px
        &:nth-last-child(2)
          
    
</style>