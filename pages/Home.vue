<template>
  <div id="index">
    <img class="logo_img" src="../src/assets/images/logo.png" />
    <div class="content">
      <img class="neko_img" src="../src/assets/images/neko.png" />
      <h1 class="content_title">Welcome to <br /><span>airou</span></h1>
      <div class="pad">
        <div class="pad_items">
          <span class="digital"></span>
          <span class="digital"></span>
          <span class="digital"></span>
          <span class="digital"></span>
          <span class="palm"></span>
        </div>
      </div>
      <div class="content_text">
        はじめまして！学生団体 <strong>airou</strong> です。<br />当団体では、プログラミングを中心とした活動を行っており、メンバーを募集しております。
      </div>
      <div class="contact">
        <h2 class="contact_title">CONTACT</h2>
        <div class="contact_text">
          お気軽にお問い合わせください
        </div>
        <div class="sns">
          <a class="sns_icon" href="https://twitter.com/airou_tus">
            <font-awesome-icon :icon="['fab', 'twitter']" class="twitter" />
          </a>
          <a class="sns_icon">
            <font-awesome-icon :icon="['fab', 'github']" class="github" />
          </a>
          <a class="sns_icon">
            <font-awesome-icon icon="envelope" class="mail" />
          </a>
        </div>
        <div class="foot_img">
          <img class="neko_img_2" src="../src/assets/images/neko.png" />
        </div>
      </div>
    </div>
    <p class="copyright">
      <small>Copyright &copy; 2020 airou All Rights Reserved</small>
    </p>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="sass">
  #index
    font-size: 20px

    .logo_img
      width: 15%
      height: auto
      margin-left: 50px
    
    .content
      margin: -2% 6.25% 0
      background-color: rgba(255, 255, 204, 1)
      .neko_img
        width: 12%
        height: 12%
        margin: 7% 0 0 70%
      &_title
        font-size: 6rem
        text-align: center
        margin-top: -9px
        color: #42210b
        span
          font-size: 8.5rem
      &_text
        max-width: 500px
        margin: 0 auto 20rem
        font-size: 1.8rem
        color: #42210b

      .pad
        display: flex
        justify-content: center
        transform: translateX(-40px)
        height: 83px
        margin: 8rem 0
        &_items
          position: relative
          .digital
            position: absolute
            width: 20px
            height: 20px
            border: 1px solid #42210b
            border-radius: 100%
            box-sizing: border-box
            background: #42210b
            &:nth-child(1)
              top: 28px
              left: 0
            &:nth-child(2)
              top: 5px
              left: 20px
            &:nth-child(3)
              top: 5px
              left: 50px 
            &:nth-child(4)
              top: 28px
              left: 70px
          .palm
           position: absolute
           top: 28px
           left: 25px
           width: 40px
           height: 40px
           border-radius: 50%
           background:#42210b
           box-shadow: 5px 7px 0 0 #42210b, -5px 7px 0 0 #42210b

      .contact
        &_title
          text-align: center
          color: #42210b
        &_text
          text-align: center
          margin: 2rem 0
          color: #42210b
        .sns
          display: flex
          justify-content: center
          &_icon
            margin: 2rem 3rem 
            border-radius: 100%
            width: 70px
            height: 70px
            background: #FFFFCC
            display: flex
            justify-content: center 
            align-items: center
            transition: 0.4s
            border: 6px solid #42210b
            &:hover
              background-color: #42210b
              & > .twitter
                color: #FFFFCC 
              & > .github
                color: #FFFFCC
              & > .mail
                color: #FFFFCC 
          .twitter, .github, .mail
            width: 40px
            height: 40px
            color: #42210b
            transition: 0.4s
        .foot_img
          display: flex
          justify-content: center
          .neko_img_2
            width: 12%
            height: 12%
            margin: 4rem auto
    .copyright
      text-align: center
</style>
