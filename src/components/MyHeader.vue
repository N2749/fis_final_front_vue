<template>
  <div class="header-wrapper">
    <div class="container">
      <header class="header">
        <div class="header__logo">
          <a href="/">
            <img class="logo12" src="../assets/bus.png" alt="logo"/>
            <span class="header__text">Bus Tickets Kz</span>
          </a>
        </div>
        <nav class="header-top__navigation">
          <ul class="navigation">
            <li class="navigation__item">
              <a href="/" class="nav__link">Home</a>
            </li>
            <li class="navigation__item">
              <a href="#" class="nav__link">Schedule</a>
            </li>
            <li class="navigation__item">
              <a href="tracking.html" class="nav__link">Tracking</a>
            </li>
            <li class="navigation__item">
              <a href="#" class="nav__link">Help</a>
            </li>
            <li v-if="authenticated()" class="navigation__item">
              <a href="/profile" class="nav__link">Profile</a>
            </li>
            <li class="navigation__item">
              <a v-if="authenticated()" href="/" @click="logOut()" class="nav__link">Log out</a>
              <a v-else href="/login" class="nav__link">Log in</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    authenticated () {
      return JSON.parse(localStorage.getItem("authenticated")) || false;
    },
    logOut () {
      localStorage.setItem("authenticated", JSON.stringify(false));
      localStorage.setItem("currentCustomer", null);
    }
  }
};
</script>

<style>
.header-wrapper {
  width: 100%;
  grid-area: header;
  background-color: #3c5956;
}

a {
  text-decoration: none;
}

.container {
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.header {
  max-width: 1200px;
  width: 100%;
  height: 70px;
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
  font-size: 20px;
}

.logo12 {
  width: 40px;
}

.navigation {
  display: flex;
  gap: 0 20px;
  padding: 0;
  align-items: center;
  margin: 0;
}

.navigation__item {
  list-style: none;
}

.nav__link {
  font-size: 16px;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease 0s;
}

.nav__link:hover {
  color: #f2f2f2;
}
</style>
