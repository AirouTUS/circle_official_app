<template lang="pug">
  #about
    .about
      .about_content.bg-yellow
        .about_content_image
          img(src="@/assets/images/about.png")
        .about_content_main
          p.about_content_main_text.size-2.bold.flexbox.is-center
            | はじめまして！学生団体airouです
            br
            | 当団体では、プログラミングを中心とした活動を行っており、メンバーを募集しております
          about-active(v-for="information in informations" :key="information.id" :title="information.title" :text="information.content")
        //  recruit-box.size-2(:custom-text="text")
      .twitter
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
      margin-left: auto
      @media screen and (max-width: 960px) 
        margin: -25px auto 0
      &_image
        text-align: center
        margin-bottom: 30px
        & > img
          width: 250px
          margin-top: -40px
          @media screen and (max-width: 960px)
            width: 200px
      &_main
        padding: 0 20px 20px
        &_text
          line-height: 2
          letter-spacing: 3px
          margin-bottom: 50px
          @media screen and (max-width: 560px)
            font-size: $size-5
        .about_active
          max-width: 850px
          margin: 0 auto 40px auto

        .recruit_box
          margin-top: 100px
    
    .twitter
      width: 40%
      height: 400px
      margin: 80px auto 
      border-right-style: solid
      border-right-color: rgba(15, 70, 100, .12)
      border-right-width: 1px
      border-left-style: solid
      border-left-color: rgba(15, 70, 100, .12)
      border-left-width: 1px
      @media screen and (max-width: 560px)
        width: 60% 
      @media screen and (min-width: 2001px)
        height: 700px 
      &_head
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