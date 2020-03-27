<template>
  <div id="index">
    <div class="top">
      <img class="top_img" src="@/assets/images/campus.jpg" />
    </div>
    <div class="content">
      <img class="content_img" src="@/assets/images/neko.png" />
      <div class="content_title">
        <p>Welcome to</p>
        <p>airou</p>
      </div>
      <router-link to="/recruit">
        <div class="recruit_box flexbox has-alignitem-center">
          <p>部員募集中</p>
        </div>
      </router-link>
    </div>
    <div class="news flexbox">
      <div class="news_top">
        <p>お知らせ</p>
        <p>NEWS</p>
      </div>
      <div class="news_item flexbox has-alignitem-center">
        <p>サイトがオープンしました</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="sass">
  #index
    position: relative
    width: 100% 
    .top
      @media screen and (max-width: 960px)
        text-align: center
      &_img
        width: 80%
        height: 600px
        object-fit: cover
        opacity: 0.45
        @media screen and (max-width: 960px) 
          width: 87%
          margin-top: -50px
        @media screen and (max-width: 560px) 
          width: 80%
          margin-top: -45px

    .content
      position: absolute
      top: 156px
      right: 80px
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
      .recruit_box
        background-color: #42210b
        width: 220px
        height: 70px
        margin: 0 auto
        & > p
          position: relative
          color: #fff
          font-size: 25px
          font-style: italic
          font-weight: 900
          letter-spacing: 3px
          width: 100%
          text-align: center
          padding: 10px 0
          &:before
            position: absolute
            content: ''
            width: 80%
            height: 8px
            left: 8%
            bottom: 3px
            border-bottom: 2px solid #fff
            border-right: 2px solid #fff
            transform: skew(45deg)
      
    .news
      margin-top: 35px
      @media screen and (max-width: 560px)
        flex-direction: column
        align-items: center
        margin-top: 50px
      &_top
        margin: 0 40px
        & > p
          line-height: 1.25
          @media screen and (max-width: 560px)
            text-align: center
            line-height: 1.5
          &:nth-child(1)
            font-size: 28px
            font-weight: 500
            @media screen and (max-width: 560px)
              font-size: 19px
          &:nth-child(2)
            font-size: 18px
            transform: translateX(3px)
            @media screen and (max-width: 560px)
              font-size: 13px
              transform: translateX(1.5px) 
      &_item
        & > p
          font-size: 20px 
          @media screen and (max-width: 560px)
            font-size: 15px
            margin-top: 20px
        

      
</style>
