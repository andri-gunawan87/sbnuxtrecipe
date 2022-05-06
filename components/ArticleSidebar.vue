<template>
  <div class="blog-comment">
    <h3 class="text-success">Latest Articles</h3>
    <hr />
    <ul class="comments">
      <LatestArticleSidebarCard
          v-for="(article, index) in articles"
          :key="index"
          :article="article"
        />
    </ul>
  </div>
</template>

<script>
import LatestArticleSidebarCard from './Card/LatestArticleSidebarCard.vue';
export default {
  components: {
    LatestArticleSidebarCard
  },

  data() {
    return {
      articles: [],
    };
  },

  async fetch() {
    await this.$axios
      .get("/api/articles/new")
      .then((res) => (this.articles = res.data.results));
  },
};
</script>