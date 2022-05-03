<template>
  <div class="col-md-8 index_carousel">
    <center>
      <p class="custom_font text-capitalize">{{ paramId }}</p>
      <div class="slideshow-container bg">
        <CarousellCard
          v-for="(carousell, index) in carousells"
          :key="index"
          :carousell="carousell"
        />
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
      </div>
    </center>
    <div>
      <p class="custom_font cust_title">&nbsp; Latest Recipe</p>
      <hr />
      <div class="row">
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
    return {
      paramId: this.$route.params.id,
      paramtitle: this.$route.params.title,

      reseps: [],
      carousells: [],
    };
  },

  beforeUpdate() {
    showSlides(slideIndex);
  },

  async fetch() {
    await this.$axios
      .get("/api/categorys/recipes/" + this.paramId)
      .then((res) => (this.reseps = res.data.results));
    return this.$axios
      .get("/api/categorys/recipes/" + this.paramId)
      .then((res) => (this.carousells = res.data.results));
  },

};
</script>