<template lang="pug">
  div#root
    div.container

      section.top-section.columns
        div.column.is-one-thirds.fullheight
          div.flexbox.fullheight
            div
              h1.ja_hero.title Welcom to <br> airou
                img.title-icon(src="/images/icon.png")
              p.ja_body.title-caption 東京理科大学プログラミングサークル学年や専攻を問わず、プログラミングやデザイン、創作活動に興味を持った学生が集まって活動
        img.column.is-two-thirds(src="/images/web_development.svg")
      
      section.type-sectoin.flex
        div.is-center.front
          h2.ja_heading.text-center エンジニア & デザイナー
          p.ja_body.title_caption.text-center エンジニアとデザイナーが協力し機能面だけでなく視覚面でもクオリティーの高いサービスを実現します
          div.flex
            div.flex-1.engineer
              img(src="/images/engineer.svg")
              div.ja_bold
                p Web 開発
                p.mt-1 iPhone & Android 開発
                p.mt-1 ゲーム 開発
                p.mt-1 画像処理
                p.mt-1 音声処理
            div.flex-1.designer
              img(src="/images/designer.svg")
              div.ja_bold
                p Web デザイン
                p.mt-1 UI & UX デザイン
                p.mt-1 Mobile デザイン
                p.mt-1 DTP
                p.mt-1 etc...

      section.what-section
      section.event-section
      section.message-section
</template>

<script>
export default {
  
}
</script>

<style lang="sass" scoped>
  #root
</style>

<style lang="sass" scoped>
  .top-section
    height: calc( 100vh*0.9 )
    min-height: 720px
    .title
      display: inline
      &-icon
        margin-left: 24px
        height: 64px
      &-caption
        margin-top: 32px
        color: $gray
    .top-image
      width: 100%
  
  .type-sectoin
    position: relative
    z-index: 1
    .front
      position: relative
      width: 80%
      background: rgb(255, 255, 255)
      padding: 32px 64px
      border-radius: 32px
      box-shadow: 16px 24px 64px rgba(53, 28, 2, 0.1)
      margin-bottom: 30px
      .title_caption
        margin-top: 16px
        color: $gray
      &::before
        content: ""
        position: absolute
        z-index: -1
        top: 120px
        left: -11.5%
        height: calc( 100% - 90px )
        width: 125%
        border-radius: 32px
        background: rgba($primary , .6)
      .engineer, .designer
        padding: 0 32px
</style>
