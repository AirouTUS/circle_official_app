<template lang="pug">
  div.about_active.flexbox.has-middle.size-4
    div.bg-brown.text-yellow.p-2.mr-3
      span.text-middle {{ title }}
    div
      span.bold.text-middle {{ text }}
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
</style>