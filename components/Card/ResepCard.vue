<template>
    <div class="col-sm-3 produk">
			<center>
				<img class="normal" :src="resep.thumb">
			</center>
			<div class="sedikit_info">
        <nuxt-link class="title-task mb-1 text-center" :to="'/detail/' + resep.key">
				<p class="title_link tex-center">{{ resep.title }}</p>
        </nuxt-link>
        <div class="row">
          <div class="col-md-4">
				<span class="title_link">
          <b>Kesulitan</b><br>
        <b>Waktu</b><br>
        <b>Porsi</b><br></span>
          </div>
          <div class="col-md-8">
            <span class="title_link">
              <b>: {{ resep.dificulty }}</b><br>
        <b>: {{ resep.times }}</b><br>
        <b>: {{ resep.portion }}</b><br></span>
          </div>
        </div>
      </div>
				<br>
		</div>
</template>

<script>
export default {
  props: {
    resep: {
      type: Object,
    },
  },
};
</script>