<template>
<div class="col-md-8 index_carousel">
  <div v-if="$fetchState.pending"><img src="~/static/img/loading.gif"></div>
  <div v-else>
    <center class="mb-5">
      <p class="custom_font">Kategori Article</p>
      <div class="row">
      <ArticleCategoryCard
        v-for="(category, index) in categories"
          :key="index"
          :category="category"
        />
      </div>
    </center>
    <p class="custom_font">Artikel Terbaru</p>
    <div class="row categories-row category-blocks-row">
        <LatestArticleCard
        v-for="(article, index) in articles"
          :key="index"
          :article="article"
        />
    </div>
  </div>
  </div>
</template>
<script>
import LatestArticleCard from "@/components/Card/LatestArticleCard.vue"
import ArticleCategoryCard from "@/components/Card/ArticleCategoryCard.vue"
export default {
    components: {
        LatestArticleCard,
        ArticleCategoryCard,
    },

    data() {
    return {
      categories: [],
      articles: [],
    };
  },

    async fetch() {
    await this.$axios
      .get("/api/categorys/article")
      .then((res) => (this.categories = res.data.results));
    return this.$axios
      .get("/api/articles/new")
      .then((res) => (this.articles = res.data.results));
  },
    
}
</script>