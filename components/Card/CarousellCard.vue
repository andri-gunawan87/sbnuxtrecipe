<template>
    <div class="mySlides" >
          <img :src="carousell.thumb" style="width: 75%" />
          <div class="py-2">
            <nuxt-link class="title-task carousell_link" :to="'/detail/' + carousell.key">{{ carousell.title }}</nuxt-link>
          </div>
    </div>
</template>

<script>
export default {
  props: {
    carousell: {
      type: Object,
    },
  },
};
</script>