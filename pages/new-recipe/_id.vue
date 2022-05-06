<template>
  <div class="col-md-8 index_carousel">
    
    <center>
      <p class="custom_font text-capitalize">New Recipe Page {{ paramId }}</p>
      <div class="slideshow-container bg">
        <CarousellCard
          v-for="(carousell, index) in carousells"
          :key="index"
          :carousell="carousell"
        />
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
      </div>
    </center>
    <div>
      <p class="custom_font cust_title">&nbsp; List Recipe</p>
      <hr />
      <div class="row">
        <ResepCard
          v-for="(resep, index) in reseps"
          :key="index"
          :resep="resep"
        />
      </div>
      </div>
      <nav aria-label="Page navigation example">
			<ul class="pagination justify-content-center">
				<li v-if="paramId > 1 || null" class="page-item">
          <nuxt-link class="page-link" :to="{name: 'new-recipe-id', params: { id:(parseInt(paramId) - 1)} }">
					Previous
          </nuxt-link>
				</li>
				<li v-else class="page-item disabled">
					<a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
				</li>

        <li v-if="paramId >= 7" class="page-item">
          <nuxt-link class="page-link" :to="{name: 'new-recipe-id', params: { id:(parseInt(paramId) - 6)} }">
            &hellip;
            </nuxt-link>
            </li>
            <li v-else-if="paramId >= 5" class="page-item">
              <nuxt-link class="page-link" :to="{name: 'new-recipe-id', params: { id:1} }">
            &hellip;
            </nuxt-link>
            </li>

				<li v-for="n in prevPage" :key="'A'+ n" class="page-item">
          <nuxt-link class="page-link" :to="{name: 'new-recipe-id', params: { id:((parseInt(paramId) - parseInt(prevPage) - 1) + parseInt(n))} }">
            {{((parseInt(paramId) - parseInt(prevPage) - 1) + parseInt(n))}}
            </nuxt-link>
        </li>

				<li class="page-item active" aria-current="page">
					<span class="page-link">
					{{ paramId }}
					</span>
				</li>

				<li v-for="n in pageRange" :key="n" class="page-item">
          <nuxt-link class="page-link" :to="{name: 'new-recipe-id', params: { id:(parseInt(paramId) + parseInt(n))} }">
            {{parseInt(paramId) + parseInt(n)}}
            </nuxt-link>
            </li>
            
            <li class="page-item">
              <nuxt-link class="page-link" :to="{name: 'new-recipe-id', params: { id:(parseInt(paramId) + 5)} }">
                &hellip;
                </nuxt-link>
                </li>

				<li class="page-item">
					<nuxt-link class="page-link" :to="{name: 'new-recipe-id', params: { id:(parseInt(paramId) + 1)} }">
            Next
          </nuxt-link>
				</li>
			</ul>
		</nav>
  </div>
</template>

<script>
import ResepCard from "@/components/Card/ResepCard.vue";
import CarousellCard from "@/components/Card/CarousellCard.vue";
import _ from 'lodash';

export default {
  name: "IndexPage",
  components: {
    ResepCard,
    CarousellCard,
  },

  data() {
    return {
      paramId: this.$route.params.id,
      pageRange: 3,
    };
  },

  async asyncData({ $axios, params }) {
    const [resepsRes] = await Promise.all([
      $axios.get("/api/recipes/" + params.id),
    ]);
    return {
      reseps: resepsRes.data.results.slice(0, 8),
      carousells: _.sampleSize(resepsRes.data.results, 3),
    };
  },

  computed: {
    prevPage() {
      if (this.paramId <= 3)
      {
        return parseInt(this.paramId - 1)
      } else {
        return 3
      }
    },
  },

  mounted() {
    showSlides(slideIndex);
  },
    
};
</script>