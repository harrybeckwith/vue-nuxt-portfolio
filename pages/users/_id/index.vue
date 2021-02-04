<template>
  <div>single user, with ID: {{ $route.params.id }}</div>
</template>
<script>
export default {
  validate(data) {
    // check for number only from user/1 url
    return /^\d+$/.test(data.params.id);
  },
  layout: "users"
};
</script>
