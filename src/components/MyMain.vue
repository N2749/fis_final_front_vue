<template>
  <main class="main">
    <MyFeatures></MyFeatures>
  </main>
</template>

<script>
import MyTicketForm from './MyTicketForm.vue';
import MyFeatures from './MyFeatures.vue';
export default {
  components: { MyFeatures },
  data() {
    return {
      stations: [
        {
          name: 'Taraz',
          location: 'Taraz',
          id: 0,
        },
        {
          name: 'Ust-Kamenogorsk',
          location: 'Ust-Kamenogorsk',
          id: 1,
        },
        {
          name: 'Shymkent',
          location: 'Shymkent',
          id: 2,
        },
        {
          name: 'Taldykorgan',
          location: 'Taldykorgan',
          id: 3,
        },
        {
          name: 'Semei',
          location: 'Semei',
          id: 4,
        },
        {
          name: 'Nur-Sultan',
          location: 'Nur-Sultan',
          id: 5,
        },
        {
          name: 'Karaganda',
          location: 'Karaganda',
          id: 6,
        },
        {
          name: 'Burabai',
          location: 'Burabai',
          id: 7,
        },
      ],
    };
  },
};
</script>

<style>
.buy-ticket {
  width: 100%;
  background-color: #8ebfb1;
  padding: 50px;
}

.buy-ticket__container {
  flex-direction: column;
  align-items: center;
  gap: 30px 0;
}
</style>
