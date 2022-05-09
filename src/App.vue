<<<<<<< HEAD
<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import MyHeader from './components/MyHeader.vue';
import MyFooter from './components/MyFooter.vue';
</script>

<template>
  <MyHeader></MyHeader>
  <MyFooter></MyFooter>
=======
<template>
  <div class="wrapper">
    <MyHeader></MyHeader>
    <MyMain></MyMain>
    <MyFooter></MyFooter>
  </div>
>>>>>>> origin/solomon-dev
</template>

<script setup>
import MyHeader from './components/MyHeader.vue';
import MyFooter from './components/MyFooter.vue';
import MyMain from './components/MyMain.vue';
</script>

<style>
.wrapper {
  min-height: 100%;
  display: grid;
  grid-template: minmax(70px, auto) 1fr minmax(350px, auto) / 1fr;
  grid-template-areas:
    'header'
    'main'
    'footer';
}
</style>
