<template>
  <div class="col-md-8 index_carousel">
      <div v-if="$fetchState.pending"><img src="~/static/img/loading.gif"></div>
  <div v-else>
    <center>
      <p class="custom_font">Hasil pencarian dengan kata kunci </p>
    </center>
    <div>
      <p class="custom_font cust_title text-capitalize font-weight-bold">&nbsp; "{{query}}"</p>
      <hr />
      <div class="row">
        <SearchCard
          v-for="(data, index) in datas"
          :key="index"
          :data="data"
        />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import SearchCard from "@/components/Card/SearchCard.vue";

export default {
  name: "IndexPage",
  components: {
    SearchCard,
  },

  data() {
    return {
      query: this.$route.query.q,
      datas: [],
    };
  },

  watch: {
    '$route.query'() {
      this.submit(this.q)
    }
  },

  async fetch() {
    await this.$axios
      .get("/api/search/?q=" + this.query)
      .then((res) => (this.datas = res.data.results));
  },

};
</script>