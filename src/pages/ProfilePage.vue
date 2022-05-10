<template>
  <div class="wrapper">
    <my-header></my-header>
    <main class="profile-main">
      <div class="profile-info">
        <h4 class="profile-info__title">Profile information</h4>
        <h3 class="profile-info__name">N2749</h3>
        <span class="profile-info__balance">Balance: 20000 kzt</span>
        <span class="profile-info__email">Email: n2749@iitu.kz</span>
      </div>

      <my-tickets-list :ticket-properties="ticketProperties"></my-tickets-list>
    </main>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from '/src/components/MyHeader.vue';
import MyFooter from '/src/components/MyFooter.vue';
import MyTicketList from '/src/components/MyTicketsList.vue';

export default {
  components: { MyHeader, MyFooter, MyTicketList },
  data() {
    return {
      ticketProperties: JSON.parse(
        localStorage.getItem('ticketProperties')
      ) || {
        departurePoint: '',
        destinationPoint: '',
        departureDate: '',
      },
    };
  },
};
</script>

<style scoped>
.profile-main {
  padding: 100px;
}

.profile-info {
  width: 40%;
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 20px 0;
  background-color: white;
  border: none;
  border-radius: 10px;
  box-shadow: 4px 2px 10px 2px rgba(38, 62, 80, 0.16);
}

.profile-info__title {
  font-size: 35px;
}
.profile-info__balance,
.profile-info__email {
  font-size: 18px;
}
</style>
