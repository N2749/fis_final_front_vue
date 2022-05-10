<template>
  <section class="buses-type">
    <h2 class="buses-type__title">Type of buses</h2>

    <div class="buses-type__tabs">
      <tabsWrapper>
        <tab title="Motor coach"
          ><img
            class="buses-type__img"
            src="./../assets/coach3.jpg"
            alt="motor-coach-bus"
        /></tab>
        <tab title="Motor coach with beds"
          ><img
            src="../assets/cochbed.jpg"
            alt="coach with bed"
            class="buses-type__img"
        /></tab>
        <tab title="Shuttle bus"
          ><img
            src="../assets/shuttle.jpg"
            alt="coach with bed"
            class="buses-type__img"
        /></tab>
        <tab title="Minibus">
          <img
            src="../assets/minibus.jpg"
            alt="coach with bed"
            class="buses-type__img"
          />
        </tab>
      </tabsWrapper>
    </div>
  </section>
</template>

<script>
import tab from './tabs-component/tab.vue';
import tabsWrapper from './tabs-component/tabs-wrapper.vue';
export default {
  components: { tabsWrapper, tab },
};
</script>

<style>
.buses-type {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
  gap: 30px 0;
}

.buses-type__title {
  font-size: 35px;
  color: white;
}

.buses-type__img {
  width: 800px;
  height: 500px;
  border: none;
  border-radius: 10px;
  box-shadow: 4px 4px 15px 6px rgba(34, 60, 80, 0.2);
  transition: all 0.4s ease 0s;
}
</style>
