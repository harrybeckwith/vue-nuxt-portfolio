<template>
  <div>
    <h1>{{ currentRouteId }}</h1>
    <div v-for="post in blogTopicItems" :key="post.id">
        <h3>Title: {{post.title}}</h3>
            <p>Description: {{post.description}}</p>
            <a :href="post.canonical_url" target="_blank">Link</a>
            <p>Likes: {{post.positive_reactions_count}}</p>
            <p>Published date: {{post.readable_publish_date}}</p>
            <img :src="post.cover_image"/>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            blogTopicItems: []
        }
    },
  computed: {
    ...mapGetters([
      "devToData"
      // Here you can import other getters from the products.js
    ]),
    currentRouteId() {
      return this.$route.params.id;
    }
  },
  mounted() {
    const filterByParams = this.devToData.filter(item => {
      return item.tags.includes(this.currentRouteId);
    });
    this.blogTopicItems = filterByParams;
  }
};
</script>
