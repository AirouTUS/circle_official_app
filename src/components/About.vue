<template>
  <div id="about">
    <div class="about">
      <img class="about_img" src="@/assets/images/about.png" >
      <div class="about_content">
        <p class="about_content_text size-3 bold">はじめまして！学生団体airouです<br>
        当団体では、プログラミングを中心とした活動を行っており、メンバーを募集しております
        </p>
        <about-active :active-title="placeTitle" :active-text="place" />
        <about-active :active-title="contentTitle" :active-text="content" />
        <recruit-box :custom-text="text" :font-color="mainBrown" />
      </div> 
    </div>
  </div>
</template>

<script>
import AboutActive from '@/components/AboutActive.vue'
import RecruitBox from '@/components/RecruitBox.vue'

export default {
  components: { AboutActive, RecruitBox },

  data: function() {
    return {
      placeTitle: '活動場所',
      contentTitle: '活動内容',
      place: '東京理科大学 葛飾キャンパス',
      content: 'プログラミング学習支援',
      text: '一緒に活動したい！',
      mainBrown: 'color: #42210b'
    }
  }
}
</script>

<style lang="sass">
  #about
    .about
      position: relative
      margin: 100px 0
      &_img
        position: relative
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
          font-family: 'Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3',YuGothic,'Yu Gothic',sans-serif
          margin-top: 80px
            

</style>