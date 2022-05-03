<template>
    <div class="row search_item">
			<div class="col-md-4">
			<img class="normal" :src="data.thumb">
			</div>
			<div class="col-md-8">				
				<table>
					<tr>
						<td class="table_size">Nama</td>
						<td><nuxt-link class="title-task mb-1 comment_text" :to="'detail/' + data.key">{{ data.title }}</nuxt-link></td>
					</tr>
					<tr>
						<td>Kesulitan</td>
						<td>{{ data.difficulty }}</td>
					</tr>
					<tr>
						<td>Porsi</td>
						<td>{{ data.serving }}</td>
					</tr>
					<tr>
						<td>Waktu</td>
						<td><a class="comment_text" href="{% url 'profile' i.user.id %}">{{ data.times }}</a></td>
					</tr>
				</table>
			</div>
		</div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
  },
};
</script>