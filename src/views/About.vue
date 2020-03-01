<template>
  <div id="about">
    <div class="about-items">
      <img src="../assets/circleicon.png" >
      <p class="about-text">
        私たちは東京理科大学葛飾キャンパス周辺を中心に活動を行なっています。
        後輩一人に先輩がマンツーマンで担当し、するので初心者でも問題なくプログラミングを
        学習することができます。
      </p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass">

#about 
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  img 
    width: 200px;
    margin: 20px 0px;
    height: 200px;
  .about-text
    width: 300px;
    margin: 0 auto;
    font-size: 25px;

</style>