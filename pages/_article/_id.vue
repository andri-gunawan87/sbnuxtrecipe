<template>
  <div class="col-md-8 index_carousel">
      <div v-if="$fetchState.pending"><img src="~/static/img/loading.gif"></div>
  <div v-else>
    <div>
      <p class="custom_font cust_title text-capitalize">&nbsp; Artikel {{ paramarticlecategory }}</p>
      <hr />
      <div class="row">
        <ArticleCard
          v-for="(article, index) in articles"
          :key="index"
          :article="article"
        />
      </div>
      </div>
  </div>
  </div>
</template>

<script>
import ArticleCard from "@/components/Card/ArticleCard.vue";
import CarousellCard from "@/components/Card/CarousellCard.vue";

export default {
  name: "IndexPage",
  components: {
    ArticleCard,
    CarousellCard,
  },

  data() {
    return {
      paramarticlecategory: this.$route.params.article,
      articles: [],
    };
  },

  async fetch() {
    await this.$axios
      .get("/api/categorys/article/" + this.paramarticlecategory)
      .then((res) => (this.articles = res.data.results));
  },

};
</script>