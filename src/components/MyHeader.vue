<<<<<<< HEAD
<template>
    <div class="headersection">
        <div class="wrapper1">
            <header class="header-top">
                <a href="#">
                    <img class="logo12" src="../assets/bus.png">
                </a>
                <p class="shophame text-end">Bus Ticket KZ</p>
                <nav>
                    <ul class="nav nav-info" style="width: 950px">
                        <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Schedule</a></li>
                        <li class="nav-item"><a href="tracking.html" class="nav-link">Tracking</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Help</a></li>
                        <li class="nav-item"><a href="profile.html" class="nav-link">Profile</a></li>
                        <li class="nav-item"><a href="#" class="nav-link">Log out</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.headersection{
	background: #04bf68;
	display: flex;
	-webkit-box-pack: justify;
	justify-content: space-between;
	color: white;
}
.wrapper1 {
  max-width: 1110px;
  margin: 0 auto;
  display: grid;
  padding-left: 10px;
  padding-right: 10px;
}
.header-top {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding-bottom: 10px;
  padding-top: 10px;
}
.shophame{
	margin: 0;
	font-family: 'Bebas Neue', cursive;
	display: flex;
	color: white;
	text-transform: uppercase;
	justify-content: normal;
	font-size: 20px;
	width: 250px;
}
.nav-item .nav-link{
	color: white;
	text-decoration: none;
	font-size: 20px;
}
.logo12{
	width: 40px;
}
</style>
=======
<template>
  <div class="header-wrapper">
    <div class="container">
      <header class="header">
        <div class="header__logo">
          <a href="#">
            <img class="logo12" src="../assets/bus.png" />
          </a>
          <span class="header__text">Bus Tickets Kz</span>
        </div>
        <nav header-top__navigation>
          <ul class="navigation">
            <li class="navigation__item">
              <a href="#" class="nav__link">Home</a>
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
            <li class="navigation__item">
              <a href="profile.html" class="nav__link">Profile</a>
            </li>
            <li class="navigation__item">
              <a href="#" class="nav__link">Log out</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header-wrapper {
  width: 100%;
  grid-area: header;
  background-color: #04bf68;
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
>>>>>>> origin/solomon-dev
