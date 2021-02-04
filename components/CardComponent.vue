<template>
  <div class="card">
    <nuxt-link :to="`/posts/${title}`">
      <h3 class="card__title">{{ title }}</h3>   
      <img :src="imageUrl" />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    title: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.card {
  &__title {
    color: red;
  }
}
</style>
