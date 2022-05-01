<template>
    <div class="mySlides" >
          <img :src="carousell.thumb" style="width: 75%" />
          <div>
            <a href="">{{ carousell.title }}</a>
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