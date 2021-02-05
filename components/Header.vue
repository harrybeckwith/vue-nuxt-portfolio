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
    <a href="https://dev.to/hjames">
      <img
        src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
        alt="Harry J Beckwith's DEV Community Profile"
        height="30"
        width="30"
      />
    </a>
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
