<template>
  <div class="container">
			<div class="row">
				<div class="col-md-4">
						<Sidebar />
				</div>
				<Nuxt />
			</div>
		</div>
</template>
<script>
// Memanggil component sesuai lokasi masing - masing file
import Sidebar from "@/components/Sidebar.vue";

export default {
  // Dideklarasikan agar dapat diakses oleh template
  components: {
    Sidebar,
  },
};
</script>
<style>
</style>