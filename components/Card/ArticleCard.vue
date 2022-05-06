<template>
    <div class="col-sm-3 produk">
			<center>
				<img class="normal" :src="article.thumb">
			</center>
			<div class="sedikit_info">
        <nuxt-link class="title-task mb-1" :to="{name: 'article-detail-id', params: { article:paramarticlecategory, detail:article.key} }">
				<p class="title_link tex-center">{{ article.title }}</p>
        </nuxt-link>
				<br>
			</div>
		</div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
    },
  },
  data() {
    return {
      paramarticlecategory: this.$route.params.article,
    };
  },
};
</script>