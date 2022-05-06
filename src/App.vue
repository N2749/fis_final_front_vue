<template>
  <div class="wrapper">
    <MyHeader></MyHeader>
    <MyMain></MyMain>
    <MyFooter></MyFooter>
  </div>
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
