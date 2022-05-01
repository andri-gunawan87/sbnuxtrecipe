<template>
    <div class="col-md-8">
		<div class="row like_menu">
		<div class="col-sm-6">		
		{{paramId}}
		</div>
		<div class="col-sm-6">
			<div class="fav_button">
					
					<input type="submit" class="btn btn-primary" value="Tambah ke Menu Favorite">
			</div>
		</div>
		<hr>
        </div>
    </div>
        
</template>

<script>

export default {
  data() {
    return {
      paramId: this.$route.params.id,
      detail: {
        type: Object,
      },
    };
  },

  async fetch() {
    await this.$axios
      .get("/api/recipe/resep-nasi-goreng-sarden-pedas")
      .then((res) => (this.detail = res.data.results));
  },

//   async asyncData() {
//     const { data } = await axios.get(
//       "/api/recipe/resep-nasi-goreng-sarden-pedas"
//     )

//     return { detail: data.data.results }
//   },

  mounted() {
    console.log("resep : ", this.detail);
    
  },
};
</script>