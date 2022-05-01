<template>
  <div>
    <div class="custom_font custom_navbar">
      <b>
        <nuxt-link class="navbar-item" to="/">Home</nuxt-link><br />
        <a href="" class="hyper_link"
          >Recipe Category</a
        ><br />
        <a href="" class="hyper_link">All Recipe</a><br />
        <a href="" class="hyper_link">New Recipe</a><br />
        <a href="" class="hyper_link">Article</a><br />
        <form class="d-flex search" action="" method="get">
          <input
            class="form-control me-2"
            type="text"
            name="q"
            placeholder="Search"
            aria-label="Search"
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