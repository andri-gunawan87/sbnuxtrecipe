<template>
  <div class="col-md-4 my-2">
    <div class="category-block bg-medium resep-category" :style="{backgroundImage: `url(` + require(`~/static/img/article-${category.key}` + '.jpg') + `)` }">
      <nuxt-link 
        class="
          block-link
          undecorated-link
          w-100
          h-100
          d-flex
          justify-content-center
          align-items-center
          p-4
        "
        :title="category.title"
        data-tracking="link-click"
        :data-tracking-value="category.title"
        :to="{name: 'article-id', params: { article:category.key} }" 
      >
        <div class="overlay absolute-fill"></div>
        <span class="category-name text-white text-center h3 custom_font"
          >{{ category.title }}</span
        >
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
    },
  },
};
</script>