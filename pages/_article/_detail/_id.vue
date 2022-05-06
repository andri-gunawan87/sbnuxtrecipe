<template>
  <div class="col-md-8">
    <div v-if="$fetchState.pending"><img src="~/static/img/loading.gif" /></div>
    <div v-else>
      <hr />
      <center>
      <div class="row search_item">
        <div>
          <img :src="article.thumb" class="rounded mx-auto d-block img-thumbnail img-fluid " style="width: 75%"/>
          <div></div>
        </div>
      </div>
      </center>
      <hr />
      <hr />
      <div class="row like_menu">
        <p class="custom_font">{{ article.title }}</p>
      </div>

      <p>Penulis: {{article.author}}</p>
      <p>Publish: {{article.date_published}}</p>
      <div id="ellipsis-ex" class="text-desc" onclick="toggleEllipsis()">
        <p class="text_desc">{{ article.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paramDetail: this.$route.params.detail,
      paramArticle: this.$route.params.article,
      article: {
        type: Object,
      },
    };
  },

  async fetch() {
    await this.$axios
      .get("/api/article/" + this.paramArticle + "/" + this.paramDetail)
      .then((res) => (this.article = res.data.results));
  },

  //   async asyncData() {
  //     const { data } = await axios.get(
  //       "/api/recipe/resep-nasi-goreng-sarden-pedas"
  //     )

  //     return { detail: data.data.results }
  //   },

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
    });
  },
};
</script>