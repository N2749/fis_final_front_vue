<template>
  <form action="" class="ticket-buy-form" @submit.prevent>
    <div class="ticket-buy-form__container">
      <div class="ticket-buy-form__destinations">
        <div class="ticket-buy-form__cell">
          <label class="ticket-buy-form__label" for="departure-point"
            >From</label
          >
          <select
            class="ticket-buy-form__select"
            name="departure-point"
            id="departure-point"
            v-model="ticketProperties.departurePoint"
          >
            <option value="">Select a location...</option>
            <option
              v-for="station in stations"
              :value="station.location"
              :key="station.id"
            >
              {{ station.location }}
            </option>
          </select>
        </div>
        <div class="ticket-buy-form__cell">
          <label class="ticket-buy-form__label" for="arrival-point">To</label>
          <select
            class="ticket-buy-form__select"
            name="arrival-point"
            id="arrival-point"
            v-model="ticketProperties.destinationPoint"
          >
            <option value="">Select a location...</option>
            <option
              v-for="station in stations"
              :value="station.location"
              :key="station.id"
            >
              {{ station.location }}
            </option>
          </select>
        </div>
        <div class="ticket-buy-form__cell">
          <label for="#date" class="ticket-buy-form__label"
            >departure date</label
          >
          <input
            type="date"
            class="ticket-buy-form__input"
            id="date"
            v-model="ticketProperties.departureDate"
          />
        </div>
      </div>
      <button class="ticket-buy-form__button" @click="createTicketQuery">
        Check available tickets
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    stations: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      ticketProperties: {
        departurePoint: '',
        destinationPoint: '',
        departureDate: '',
      },
    };
  },
  methods: {
    createTicketQuery() {
      this.ticketProperties.id = Date.now();
      this.$emit('createTicketQuery', this.ticketProperties);
    },
  },
};
</script>

<style>
.ticket-buy-form {
  background-color: white;
  border-radius: 10px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 2px 10px 2px rgba(38, 62, 80, 0.16);
  width: 70%;
}

.ticket-buy-form__container {
  display: flex;
  flex-direction: column;
  gap: 30px 0;
}

.ticket-buy-form__destinations {
  display: flex;
  gap: 30px 30px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.ticket-buy-form__cell {
  display: flex;
  flex-direction: column;
  gap: 10px 0;
}

.ticket-buy-form__label {
  font-size: 18px;
  text-transform: uppercase;
  color: #3c5956;
  text-align: center;
}

.ticket-buy-form__button {
  display: inline-flex;
  width: 250px;
  height: 50px;
  margin: 0 auto;
  border: none;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 18px;
  background-color: #038c7f;
}

.ticket-buy-form__select {
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 5px;
  color: #3c5956;
  background-color: #e4f2f1;
}

.ticket-buy-form__input {
  height: 40px;
  border: none;
  border-radius: 5px;
  color: #3c5956;
  background-color: #e4f2f1;
}
</style>
