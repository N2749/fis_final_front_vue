<template>
  <div class="wrapper">
    <my-header></my-header>
    <main>
      <h3>
        Tickets from {{ ticketProperties.departurePoint }} to
        {{ ticketProperties.destinationPoint }} on date
        {{ ticketProperties.departureDate }}
      </h3>
      <MyTicketsList :ticket-properties="ticketProperties"></MyTicketsList>
    </main>
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from '/src/components/MyHeader.vue';
import MyFooter from '/src/components/MyFooter.vue';
import MyTicketsList from '/src/components/MyTicketsList.vue';
export default {
  components: {
    MyHeader,
    MyFooter,
    MyTicketsList,
  },
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

<style>
.wrapper {
  background-color: #8ebfb1;
  min-height: 100%;
  display: grid;
  grid-template: minmax(70px, auto) 1fr minmax(350px, auto) / 1fr;
  grid-template-areas:
    'header'
    'main'
    'footer';
}
</style>
