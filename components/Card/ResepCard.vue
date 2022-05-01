<template>
    <div class="col-sm-3 produk">
			<center>
				<img class="normal" :src="resep.thumb">
			</center>
			<div class="sedikit_info">
        <nuxt-link class="title-task mb-1" :to="'detail/' + resep.key">
				<p class="title_link tex-center">{{ resep.title }}</p>
        </nuxt-link>
				<span class="title_link">Kesulitan: {{ resep.dificulty }}<br>
        <b>Waktu: {{ resep.times }}</b><br></span>
        <b>Porsi: {{ resep.portion }}</b><br>
				<br>
			</div>
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