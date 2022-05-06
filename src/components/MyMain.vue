<template>
  <main class="main">
    <div class="container">
      <header class="header">
        <div class="header__logo">
          <a href="#">
            <img class="logo12" src="../assets/bus.png" />
          </a>
          <span class="header__text">Bus Tickets Kz</span>
        </div>
        <nav header-top__navigation>
          <ul class="nav nav-info">
            <li class="nav-item">
              <a href="#" class="nav-link link-light">Home</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link link-light">Schedule</a>
            </li>
            <li class="nav-item">
              <a href="tracking.html" class="nav-link link-light">Tracking</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link link-light">Help</a>
            </li>
            <li class="nav-item">
              <a href="profile.html" class="nav-link link-light">Profile</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link link-light">Log out</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
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
