<template>
  <main class="main">
    <section class="buy-ticket">
      <div class="container buy-ticket__container">
        <h1 class="buy-ticket__title section-title">
          Go wherever you need to go
        </h1>
        <MyTicketForm :stations="stations"></MyTicketForm>
      </div>
    </section>
  </main>
</template>

<script>
import MyTicketForm from "./MyTicketForm.vue";
import TicketList from "./TicketList.vue";

export default {
  components: {TicketList, MyTicketForm},
  data() {
    return {
      stations: [
        {
          name: "Taraz",
          location: "Taraz",
          id: 0,
        },
        {
          name: "Ust-Kamenogorsk",
          location: "Ust-Kamenogorsk",
          id: 1,
        },
        {
          name: "Shymkent",
          location: "Shymkent",
          id: 2,
        },
        {
          name: "Taldykorgan",
          location: "Taldykorgan",
          id: 3,
        },
        {
          name: "Semei",
          location: "Semei",
          id: 4,
        },
        {
          name: "Nur-Sultan",
          location: "Nur-Sultan",
          id: 5,
        },
        {
          name: "Karaganda",
          location: "Karaganda",
          id: 6,
        },
        {
          name: "Burabai",
          location: "Burabai",
          id: 7,
        }
      ]
    }
  }
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
