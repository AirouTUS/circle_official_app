<template lang="pug">
  #about
    .about
      img.about_img(src="@/assets/images/about.png")
      .about_content.bg-yellow
        p.about_content_text.size-2.bold
          | はじめまして！学生団体airouです
          br
          | 当団体では、プログラミングを中心とした活動を行っており、メンバーを募集しております
        about-active(v-for="information in informations" :key="information.id" :title="information.title" :text="information.content")
        recruit-box.size-2(:custom-text="text")
      .twitter
        .twitter_head.flexbox.has-alignitem-center.bg-brown
          b-icon.size-4(pack="fab" icon="twitter")
          p.size-1
            | Twitter
        a.twitter-timeline(data-width="100%" data-height="400" data-border-color="#42210b" data-chrome="noheader nofooter" :href="twitter_url" target="_blank" rel="noopener")
          | Tweets by airou_tus
        
</template>

<script>
import AboutActive from '@/components/AboutActive.vue'
import RecruitBox from '@/components/RecruitBox.vue'

export default {
  components: { AboutActive, RecruitBox },

  data: function() {
    return {
      text: "一緒に活動したい！",
      twitter_url: "https://twitter.com/airou_tus?ref_src=twsrc%5Etfw", 

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
    }
  },
  created() {
    const twitterWidget = document.createElement("script");
    twitterWidget.setAttribute("src", "https://platform.twitter.com/widgets.js");
    document.head.appendChild(twitterWidget);
  }
}
</script>

<style lang="sass" scoped>
  .about
    &_img
      width: 250px
      display: block
      margin: 0 auto
      @media screen and (max-width: 960px)
        width: 200px
    &_content
      width: 80%
      margin-top: -40px
      margin-left: auto
      padding: 80px 10px 60px
      @media screen and (max-width: 960px) 
        margin: -25px auto 0
      &_text
        line-height: 2
        letter-spacing: 3px
        margin-bottom: 50px
        @media screen and (max-width: 560px)
          font-size: $size-5
      .recruit_box
        margin-top: 100px
    .twitter
      width: 40%
      margin: 80px auto 0 
      border: 1px solid $m-brown
      box-shadow: 0 2px 4px rgba(0, 0, 0, .2)
      @media screen and (max-width: 560px)
        width: 60% 
      &_head
        color: $m-yellow
        & > span
          padding: 8px 15px 8px 30px 
       

</style>

<style lang="sass">
  #about
    .recruit_box
      &_item
        & > p
          color: $m-brown
</style>