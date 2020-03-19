<template>
  
</template>

<script>
import Contentful from 'src/models/Contentful.js'

export default {
    created() {
    this.Contentful.getEntries({
      content_type: "blogPost",
      'fields.slug': params.slug
    }).then((res) => this.articles = res.items)
  },
  data() {
    return {
      articles: []
    }
  }
}
</script>

<style>

</style>