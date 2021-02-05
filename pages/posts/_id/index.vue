<template>
  <div>
    <h2>{{ currentRouteId }}</h2>
    <div class="post" v-for="post in blogTopicItems" :key="post.id">
      <a :href="post.canonical_url" target="_blank">
        <div class="post__container">
          <div class="post__content">
            <h2 class="post__title">{{ post.title }}</h2>
            <p class="post__desc">{{ post.description }}</p>
            <div class="post__bottom">
              <p>{{ post.readable_publish_date }}</p>
              <p>Likes: {{ post.positive_reactions_count }}</p>
            </div>
          </div>
          <div class="post__img">
            <img :src="post.cover_image" />
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      blogTopicItems: []
    };
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
<style lang="scss" scoped>
.post {
  padding: 50px;
  &__container {
    display: flex;
    align-items: center;
  }

  &__title {
    font-size: 25px;
    color: black;
    font-weight: 600;
  }

  &__desc{
    color: grey;
    font-weight: 300;
  }

  &__img {
    margin-left: 50px;
    img {
      width: 300px;
    }
  }

  &__bottom {
    display: flex;
    * {
      margin-right: 10px;
    }
  }
}

a {
  text-decoration: none;
}
</style>
