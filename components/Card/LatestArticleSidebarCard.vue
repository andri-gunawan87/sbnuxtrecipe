<template>
  <li class="clearfix">
    <div class="post-comments">
      <p class="user_comment">
        {{ article.title }}
      </p>
      <nuxt-link class="comment_text username_comments" :to="{name: 'article-id', params: { article:article.key}}">
      {{ article.key }}
      </nuxt-link>
    </div>
  </li>
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