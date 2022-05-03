<template>
<div class="col-md-8">
<div v-if="$fetchState.pending"><img src="~/static/img/loading.gif"></div>
    <div v-else>
        
		<div class="row like_menu">
					<p class="custom_font">{{detail.title}}</p>
		</div>
		<hr>
			<div class="row search_item">
				<div class="col-md-4">
                    <div v-if="detail.thumb != null">
					<img class="detail_img" :src="detail.thumb">
                    </div>
                    <div v-else>
					<img class="detail_img" height="157px" src="~/static/icon.png">
                    </div>
				</div>
				<div class="col-md-8">				
					<table>
						
						<tr>
							<td class="table_size">Kesulitan</td>
							<td>{{ detail.dificulty }}</td>
						</tr>
						<tr>
							<td>Waktu </td>
							<td>{{ detail.times }}</td>
						</tr>
                        <tr>
							<td>Porsi </td>
							<td>{{ detail.servings }}</td>
						</tr>
						<tr>
							<td>Penulis</td>
							<td><a class="comment_text" href="">{{ detail.author.user }}</a></td>
						</tr>
                        <tr>
							<td>Tanggal</td>
							<td><a class="comment_text" href="">{{ detail.author.datePublished }}</a></td>
						</tr>
					</table>
					
				</div>
			</div>
				<hr>
				<hr>
				<p>Deskripsi:</p>
				<div id="ellipsis-ex" class="text-desc" onclick="toggleEllipsis()">				
					<p>{{ detail.desc }}</p>
				</div>
			<div class="row">				
				<div class="col-md-6"><div class="accordion accordion-flush" id="accordionFlushExample"></div>
				<div class="accordion-item">
					<h2 class="accordion-header" id="flush-headingOne">
					<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
					<b>Bahan-Bahan:</b>
					</button>
					</h2>
					<div id="flush-collapseOne" class="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
						<div class="accordion-body">
							<ul>
								<li v-for="i in detail.ingredient" :key="i">{{ i }}</li>		 
							</ul>
						</div>
					</div>
				</div>
				</div>
				<div class="col-md-6">
				<div class="accordion-item">
					<h2 class="accordion-header" id="flush-headingTwo">
					<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
					<b>Langkah Penyajian:</b>
					</button>
					</h2>
					<div id="flush-collapseTwo" class="accordion-collapse collapse show" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
						<div class="accordion-body">
								<p v-for="i in detail.step" :key="i">  {{ i }}</p>
						</div>
					</div>
				</div>
				</div>
			</div>			
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
        author: ""
      },
    };
  },

  async fetch() {
    await this.$axios
      .get("/api/recipe/" + this.paramId)
      .then((res) => (this.detail = res.data.results));
  },

//   async asyncData() {
//     const { data } = await axios.get(
//       "/api/recipe/resep-nasi-goreng-sarden-pedas"
//     )

//     return { detail: data.data.results }
//   },

  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
};
</script>