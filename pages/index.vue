<template>
  <div class="col-md-8 index_carousel">
    <!-- Slideshow container -->
    <center>
      <p class="custom_font">Highlight</p>
      <div class="slideshow-container bg">
        <CarousellCard
          v-for="(carousell, index) in carousells"
          :key="index"
          :carousell="carousell"
        />
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
      </div>
      <div>
      </div>
    </center>
    <div>
      <p class="custom_font cust_title">&nbsp; Latest Recipe</p>
      <hr />
      <div class="row justify-content-md-center">
        <ResepCard
          v-for="(resep, index) in reseps"
          :key="index"
          :resep="resep"
        />
      </div>
    </div>
    
  </div>
</template>

<script>
import ResepCard from "@/components/Card/ResepCard.vue";
import CarousellCard from "@/components/Card/CarousellCard.vue";

export default {
  name: "IndexPage",
  components: {
    ResepCard,
    CarousellCard,
  },

  data() {
    return {};
  },

  mounted() {
    showSlides(slideIndex);
  },

  // async fetch() {
  //   await this.$axios
  //     .get("/api/recipes")
  //     .then((res) => (this.Reseps = res.data.results));
  // },

  async asyncData({ $axios }) {
    const [resepsRes, carousellRes] = await Promise.all([
      $axios.get("/api/recipes"),
      $axios.get("/api/recipes-length/?limit=5"),
    ]);
    return {
      reseps: resepsRes.data.results.slice(2),
      carousells: carousellRes.data.results,
    };
  },
};
</script>
