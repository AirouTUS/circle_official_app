<template lang="pug">
  div#about
    div.about_content.bg-yellow
      div.about_content_image
        img(src="@/assets/images/about.png")
      div.about_content_main
        p.about_content_main_text.bold
          | はじめまして！学生団体airouです
          br
          | 当団体では、プログラミングを中心とした活動を行っており、メンバーを募集しております
      div.about_schedules
        about-active.py-2(v-for="information in informations" :key="information.id" :title="information.title" :text="information.content")
      //  recruit-box.size-2(:custom-text="text")

    div.twitter
      a.twitter-timeline(data-width="100%" data-height="100%" data-chrome="noheader nofooter" :href="twitter_url" target="_blank" rel="noopener")
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
    &_content
      width: 80%
      padding: 1.5rem
      margin-left: auto
      @media screen and (max-width: 960px) 
        margin: -25px auto 0
      &_image
        text-align: center
        & > img
          width: 250px
          margin-top: -40px
          @media screen and (max-width: 960px)
            width: 200px
      &_main
        padding: 1rem
        &_text
          line-height: 2
          letter-spacing: 3px
    &_schedules
        padding: 1rem

        .recruit_box
          margin-top: 100px
    
  .twitter
    width: 80%
    height: 600px
    margin: 80px auto 
    border-right-style: solid
    border-right-color: rgba(15, 70, 100, .12)
    border-right-width: 1px
    border-left-style: solid
    border-left-color: rgba(15, 70, 100, .12)
    border-left-width: 1px
    @media screen and (min-width: 960px)
      width: 768px
    &_head
      & > span
        padding: 8px 15px 8px 30px
    

</style>