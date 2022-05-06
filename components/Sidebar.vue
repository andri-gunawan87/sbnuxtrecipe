<template>
  <div>
    <div class="custom_font custom_navbar">
      <b>
        <nuxt-link class="hyper_link" to="/">Home</nuxt-link><br />
        <nuxt-link class="hyper_link" to="/resep-category">
          Recipe Category</nuxt-link><br />
        <nuxt-link class="hyper_link" :to="{name: 'new-recipe-id', params: { id:1} }">New Recipe</nuxt-link><br />
        <nuxt-link class="hyper_link" to="/article">Article</nuxt-link><br />
        <form class="d-flex search" action="/search" method="get">
          <input
            class="form-control me-2 text-center"
            type="text"
            name="q"
            placeholder="Cari Resep"
            aria-label="Cari Resep"
          /><br /></form
      ></b>
    </div>
    <div>
      <ArticleSidebar />
    </div>
  </div>
</template>

<script>
import ArticleSidebar from "@/components/ArticleSidebar.vue"

export default {
  components: {
    ArticleSidebar
  },
  
}
</script>