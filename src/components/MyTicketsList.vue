<template>
  <div>
    <div class="tickets-list">
      <br />
      <div class="filter">
        <h2 class="filter__title">Sort by</h2>
        <select class="filter__select" name="filter" id="filter">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div class="tickets">
        <h2 class="tickets__title">List of tickets</h2>
        <ul class="tickets__list">
          <li v-for="ticket in tickets" :key="ticket.id" class="tickets__item">
            <MyTicket :ticket="ticket"></MyTicket>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import MyTicket from './MyTicket.vue';
export default {
  components: { MyTicket },

  props: {
    ticketProperties: {
      required: true,
    },
  },
  data() {
    return {
      tickets: [
        {
          id: '1',
          departurePoint: 'Almaty',
          destinationPoint: 'Shymkent',
          departureDate: '20-05-22',
          departureTime: '11:00',
          station: 'Sairan',
          bus: 'Coach',
          seatRow: '1',
          seatColumn: '2',
          price: '3000 kzt',
        },
        {
          id: '1',
          departurePoint: 'Almaty',
          destinationPoint: 'Shymkent',
          departureDate: '20-05-22',
          departureTime: '11:00',
          station: 'Sairan',
          bus: 'Coach',
          seatRow: '1',
          seatColumn: '2',
          price: '3000 kzt',
        },
        {
          id: '1',
          departurePoint: 'Almaty',
          destinationPoint: 'Shymkent',
          departureDate: '20-05-22',
          departureTime: '11:00',
          station: 'Sairan',
          bus: 'Coach',
          seatRow: '1',
          seatColumn: '2',
          price: '3000 kzt',
        },
        {
          id: '1',
          departurePoint: 'Almaty',
          destinationPoint: 'Shymkent',
          departureDate: '20-05-22',
          departureTime: '11:00',
          station: 'Sairan',
          bus: 'Coach',
          seatRow: '1',
          seatColumn: '2',
          price: '3000 kzt',
        },
        {
          id: '1',
          departurePoint: 'Almaty',
          destinationPoint: 'Shymkent',
          departureDate: '20-05-22',
          departureTime: '11:00',
          station: 'Sairan',
          bus: 'Coach',
          seatRow: '1',
          seatColumn: '2',
          price: '3000 kzt',
        },
      ],
    };
  },
  methods: {
    //retrieveTickets() {},
  },
};
</script>

<style>
.tickets-list {
  display: flex;
  gap: 0 50px;
  justify-content: center;
}

.filter {
  display: flex;
  flex-direction: column;
  gap: 30px 0;
}

.filter__title {
  font-size: 30px;
  color: white;
  margin: 0;
}

.filter__select {
  width: 200px;
  height: 40px;
  border: none;
  border-radius: 5px;
  color: #3c5956;
  padding: 0 5px;
  background-color: #e4f2f1;
}

.tickets {
  display: flex;
  flex-direction: column;
  gap: 30px 0;
}

.tickets__title {
  font-size: 30px;
  color: white;
  margin: 0;
}

.tickets__list {
  display: flex;
  flex-direction: column;
  gap: 30px 0;
  padding: 0;
}

.tickets__item {
  list-style: none;
}
</style>
