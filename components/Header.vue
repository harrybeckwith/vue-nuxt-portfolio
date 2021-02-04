<template>
  <header>
    <ul class="nex-items">
      <li>
        <nuxt-link to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/users">Users</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 50px;
  background-color: orange;
}

.nav-items {
  display: flex;
  justify-content: space-around;
  width: 80%;
}
</style>
