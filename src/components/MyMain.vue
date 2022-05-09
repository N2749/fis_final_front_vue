<template>
  <main class="main">
<<<<<<< HEAD
    <MyFeatures></MyFeatures>
=======
    <section class="buy-ticket">
      <div class="container buy-ticket__container">
        <h1 class="buy-ticket__title section-title">
          Go wherever you need to go
        </h1>
        <MyTicketForm :stations="stations" @createTicketQuery="showListOfTickets"></MyTicketForm>
      </div>
    </section>
<<<<<<< HEAD
    <section class="features">
      <MyFeatures></MyFeatures>
=======
    <section class="list">
      <MyTicketsList :ticket-properties="ticketProperties"></MyTicketsList>
>>>>>>> 7a8fa046977697d5d05c87fe470e09ba2fbc0b71
    </section>
>>>>>>> master
  </main>
</template>

<script>
import MyTicketForm from './MyTicketForm.vue';
import MyFeatures from './MyFeatures.vue';
export default {
<<<<<<< HEAD
  components: { MyFeatures },
=======
  components: { MyTicketsList, MyFeatures },
=======
import MyTicketForm from "./MyTicketForm.vue";
import TicketList from "./TicketList.vue";
import MyTicketsList from "./MyTicketsList.vue";

export default {
  components: {TicketList, MyTicketForm, MyTicketsList},
>>>>>>> master
  data() {
    return {
      ticketProperties: {
        departurePoint: "",
        destinationPoint: "",
        departureDate: ""
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
<<<<<<< HEAD
        },
      ],
    };
  },
=======
        }
      ]
    }
  },
  methods: {
    showListOfTickets(ticketProperties) {
      console.log(ticketProperties.target.value)
    }
  }
>>>>>>> f41d4555758966e1f1e88b843b8091c4aa709018
>>>>>>> master
};
</script>

<style>
<<<<<<< HEAD
=======

main {
  background-color: #8ebfb1;
}

>>>>>>> master
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
