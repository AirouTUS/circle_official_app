<template>
  <div id="article">
    articleページ
    <h2 v-for="article in articles" :key="article.sys.id">{{ article.fields.title }}</h2>
  </div>
</template>

<script>
import Contentful from '../models/Contentful'

export default {
  created() {
    this.Contentful.getEntries({
      content_type: "blogPost",
      order: "-fields.publishedAt"
    }).then((res) => this.articles = res.items)
  },
  data() {
    return {
      articles: []
    }
  }
}
</script>

<style lang="sass">
  #article
</style>