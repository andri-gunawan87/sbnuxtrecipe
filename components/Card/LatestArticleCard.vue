<template>
  <li class="clearfix">
    <div class="post-comments">
      <p class="user_comment">
        {{ article.title }}
      </p>
      <a
        class="comment_text username_comments"
        href="{% url 'profile' comment.user.id %}"
        >{{ article.key }}</a
      >
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