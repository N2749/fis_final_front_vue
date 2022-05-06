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