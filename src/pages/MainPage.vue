<template>
  <div class="wrapper">
    <MyHeader></MyHeader>
    <main class="main">
      <section class="buy-ticket">
        <div class="container buy-ticket__container">
          <h1 class="buy-ticket__title section-title">
            Go wherever you need to go
          </h1>
          <MyTicketForm
            :stations="stations"
            @createTicketQuery="updateTicketProperties"
          ></MyTicketForm>
        </div>
      </section>
      <MyFeatures></MyFeatures>
      <my-buses-type></my-buses-type>
      <MyPopularAreas></MyPopularAreas>
    </main>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from '/src/components/MyHeader.vue';
import MyFooter from '/src/components/MyFooter.vue';
import MyTicketForm from '/src/components/MyTicketForm.vue';
import MyTicketsList from '/src/components/MyTicketsList.vue';
<<<<<<< HEAD
import MyFeatures from '/src/components/MyFeatures.vue';
import MyBusesType from '/src/components/my-buses-type.vue';
import MyPopularAreas from '/src/components/MyPopularAreas.vue';
=======
import stationDataService from '../services/stationDataService';
>>>>>>> master
export default {
  components: {
    MyHeader,
    MyFooter,
    MyTicketForm,
    MyTicketsList,
    MyFeatures,
    MyBusesType,
    MyPopularAreas,
  },
  data() {
    return {
      ticketProperties: {
        departurePoint: '',
        destinationPoint: '',
        departureDate: '',
      },
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
  methods: {
    retrieveStations() {
      stationDataService
        .getAll()
        .then((response) => {
          this.stations = response.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    updateTicketProperties(ticketProperties) {
      this.ticketProperties = ticketProperties;
      localStorage.setItem(
        'ticketProperties',
        JSON.stringify(ticketProperties)
      );
      console.log(ticketProperties);
      window.location.href = '/tickets';
    },
  },
  mounted() {
    this.retrieveStations();
  },
};
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

.buy-ticket__title {
  color: white;
}
</style>
