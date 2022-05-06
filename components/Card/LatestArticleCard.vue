<template>
<div class="row">
    <div class="col-sm-4 mb-2">
			<center>
				<img class="normal" src="~/static/img/latest-article.jpg">
			</center>
		</div>
        <div class="col-sm-8">
            			<div class="sedikit_info">
        <nuxt-link class="title-task mb-1" :to="{name: 'article-id', params: { article:article.key, id:1}}">
				<p class="latest_article_text tex-center">{{ article.title }}</p>
        </nuxt-link>
			</div>

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
};
</script>