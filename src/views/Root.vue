<template lang="pug">
  #top
    .top
      .top_main
        img.top_main_img(src="@/assets/images/campus.jpg")
        .top_main_box
          .content
            img.content_img(src="@/assets/images/neko.png")
            .content_title
              p Welcome to
              p airou
            recruit-box.italic.size-1(:custom-text="text")
      .news.flexbox
        .news_top
          p.size-1 お知らせ
          p.size-2 NEWS
        .news_item.flexbox.has-middle
          p.size-2 サイトがオープンしました
      about
      contact
      .footer
        small &copy; 2020 airou All Right Reserved
</template>

<script>
import About from '@/components/top/AboutSection.vue'
import Contact from '@/components/top/ContactSection.vue'
import RecruitBox from '@/components/RecruitBox.vue'

export default {
  components: {About, Contact, RecruitBox},

  data: function() {
    return{
      text: "部員募集中"
    }
  }
}
</script>

<style lang="sass" scoped>
  .top
    position: relative
    &_main
      @media screen and (min-width: 2001px)
        display: flex
        align-items: center
      @media screen and (max-width: 960px)
        text-align: center
      &_img
        width: 80%
        height: 600px
        min-height: 30vw
        object-fit: cover
        opacity: 0.45
        @media screen and (max-width: 960px) 
          width: 87%
          margin-top: -50px
        @media screen and (max-width: 560px) 
          width: 80%
          margin-top: -45px
      &_box
        @media screen and (min-width: 2001px)
          margin: 0 auto
        .content
          @media screen and (max-width: 2000px)
            position: absolute
            top: 156px
            right: 0
            left: 65%
          @media screen and (max-width: 960px)
            left: 0
            right: 0
            margin: auto
          &_img
            width: 90px
            height: auto
            display: block
            margin: 0 auto
            @media screen and (max-width: 960px) 
              margin: 0 60%
          &_title
            text-align: center
            font-family: "Josefin Sans Italic"
            & > p
              &:nth-child(1)
                font-size: 40px
                margin-top: 60px
                margin-right: -5px
                word-spacing: 18px
                letter-spacing: 5px
                @media screen and (max-width: 560px) 
                  font-size: 30px
              &:nth-child(2)
                font-size: 96px
                letter-spacing: 14px
                margin: 30px -12px 80px 0
                @media screen and (max-width: 960px)
                  margin: 10px -12px 50px 0 
                @media screen and (max-width: 560px)
                  font-size: 80px
                  margin: 30px -12px 62px 0

    .news
      margin-top: 50px
      @media screen and (max-width: 960px) 
        margin-top: 80px
      @media screen and (max-width: 560px)
        flex-direction: column
        align-items: center
      &_top
        margin: 0 40px
        & > p
          line-height: 1.25
          @media screen and (max-width: 560px)
            text-align: center
            line-height: 1.5
      &_item
        & > p
          @media screen and (max-width: 560px)
            font-size: $size-3
            margin-top: 20px

    .footer
      text-align: center
      margin-bottom: 40px

</style>

<style lang="sass">
  #top
    .content
      .recruit_box_item
        background-color: $m-brown
        & > p
          color: $m-yellow
          &:before
            position: absolute
            content: ''
            width: 65%
            height: 8px
            left: 15%
            bottom: -10px
            border-bottom: 2px solid $m-yellow
            border-right: 2px solid $m-yellow
            transform: skew(45deg)
  
  #about
    margin: 200px 0

  #contact
    margin-bottom: 80px
  
</style>
