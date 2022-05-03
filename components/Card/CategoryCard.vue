<template>
  <div class="col-md-6 my-2">
    <div class="category-block bg-medium resep-category" :style="{backgroundImage: `url(` + require(`~/static/img/${category.key}` + '.jpg') + `)` }">
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
        :title="category.category"
        data-tracking="link-click"
        :data-tracking-value="category.category"
        :to="{name: 'category-id', params: { id:category.key, title:category.category } }"
      >
        <div class="overlay absolute-fill"></div>
        <span class="category-name text-white text-center h3 custom_font"
          >{{ category.category }}</span
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