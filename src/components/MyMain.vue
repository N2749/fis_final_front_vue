<template>
  <main class="main">
    <div class="container"></div>
  </main>
</template>

<script>
export default {};
</script>

<style>
.main {
  grid-area: main;
  height: 500px;
}

.container {
  max-width: 1200px;
  width: 100%;
}

.header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__logo {
  display: flex;
  gap: 0 15px;
  align-items: center;
}

.header__text {
  color: #f8f9fa;
}

.logo12 {
  width: 40px;
}

.nav-link {
  transition: underline 0.4s ease 0s;
}

.nav-link:hover {
  text-decoration: underline;
}
</style>
