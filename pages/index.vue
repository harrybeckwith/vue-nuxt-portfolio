<template>
  <div class="container">
    <a href="https://dev.to/hjames">
      <img
        src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
        alt="Harry J Beckwith's DEV Community Profile"
        height="30"
        width="30"
      />
    </a>
    <card-component
      v-for="topic in blogTopics"
      :key="topic.title"
      :image-url="topic.logo"
      :title="topic.title"
    >
    </card-component>
  </div>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      blogTopics: [
        { title: "vue", logo: require("~/assets/images/logos/vue.png") },
        { title: "php", logo: require("~/assets/images/logos/vue.png") }
      ]
    };
  },
  component: {
    CardComponent
  },
  computed: {
    ...mapGetters([
      "devToData"
      // Here you can import other getters from the products.js
    ])
  },
  methods: {
    ...mapActions(["storeDevToData"]),
    callDevTo() {
      fetch("https://dev.to/api/articles?username=hjames")
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.storeDevToData(data);
        })
        .catch(error => console.log(error));
    }
  },
  mounted() {
    this.callDevTo();
  }
};
</script>

<style></style>
