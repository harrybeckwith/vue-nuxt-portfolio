<template>
  <div>
    <Header />
    <div class="max-w-screen-sm m-auto">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  comments: {
    Header
  }
};
</script>
