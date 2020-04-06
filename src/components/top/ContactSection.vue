<template lang="pug">
  #contact
    .contact
      img.contact_img(src="@/assets/images/contact.png")
      .contact_content
        p.contact_content_text.size-2.bold
          | お気軽にお問い合わせください
        sns-icon(v-for="item in items" :key="item.id" :src="item.src" :pack="item.pack" :icon="item.icon")
      img.contact_foot_img(src="@/assets/images/neko.png")
    

</template>

<script>
import SnsIcon from '@/components/SnsIcon.vue'

export default {
  components: { SnsIcon },

  data: function() {
    return {
      items: [
          {
            id: 1,
            src: "https://twitter.com/airou_tus",
            pack: "fab",
            icon: "twitter"
          }, {
            id: 2,
            src: "",
            pack: "fab",
            icon: "facebook-square" 
          }, {
            id: 3,
            src: "",
            pack: "",
            icon: "envelope"
          }
      ]
    }
  }
}
</script>

<style lang="sass" scoped>
  .contact
    text-align: center
    &_img
      width: 250px
      @media screen and (max-width: 960px)
        width: 200px
    &_content
      margin-bottom: 100px
      &_text
        margin: 50px 0
        letter-spacing: 3px
        @media screen and (max-width: 560px) 
          font-size: $size-3
    &_foot_img
      width: 90px
</style>