<template>
<div class="col-md-8 index_carousel">
  <div v-if="$fetchState.pending"><img src="~/static/img/loading.gif"></div>
  <div v-else>
    <center>
      <p class="custom_font">Kategori Resep</p>
    </center>
    <div class="row categories-row category-blocks-row">
        <CategoryCard
        v-for="(category, index) in categories"
          :key="index"
          :category="category"
        />
    </div>
  </div>
  </div>
</template>
<script>
import CategoryCard from "@/components/Card/CategoryCard.vue"
export default {
    components: {
        CategoryCard
    },

    data() {
    return {
      categories: [],
    };
  },

    async fetch() {
    await this.$axios
      .get("/api/categorys/recipes")
      .then((res) => (this.categories = res.data.results));
  },
    
}
</script>