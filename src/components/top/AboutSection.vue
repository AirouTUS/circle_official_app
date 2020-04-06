<template lang="pug">
  #about
    .about
      img.about_img(src="@/assets/images/about.png")
      .about_content
        p.about_content_text.size-2.bold
          | はじめまして！学生団体airouです
          br
          | 当団体では、プログラミングを中心とした活動を行っており、メンバーを募集しております
        about-active(v-for="information in informations" :key="information.id" :title="information.title" :text="information.content")
        recruit-box.size-2(:custom-text="text")
</template>

<script>
import AboutActive from '@/components/AboutActive.vue'
import RecruitBox from '@/components/RecruitBox.vue'

export default {
  components: { AboutActive, RecruitBox },

  data: function() {
    return {
      informations: [
        {
          id: 1,
          title: "活動場所",
          content: "東京理科大学 葛飾キャンパス"
        }, {
          id: 2,
          title: "活動内容",
          content: "プログラミング学習支援"
        }
      ],
      text: "一緒に活動したい！"
    }
  }
}
</script>

<style lang="sass" scoped>
  .about
    &_img
      width: 250px
      margin-left: 38px
      @media screen and (max-width: 960px)
        display: block
        margin: 0 auto
        width: 200px
    &_content
      width: 80%
      margin-top: -40px
      margin-left: auto
      padding: 80px 10px 60px
      background-color: #FAF6DD
      @media screen and (max-width: 960px) 
        margin: -25px auto 0
      &_text
        line-height: 2
        letter-spacing: 3px
        margin-bottom: 50px
      .recruit_box
        margin-top: 100px

</style>

<style lang="sass">
  #about
    .recruit_box
      &_item
        & > p
          color: #42210b
</style>