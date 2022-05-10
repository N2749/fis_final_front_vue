<template>
  <div class="ticket">
    <div class="ticket-img">
      <div class="img"></div>
      <span class="ticket__number">#200302202</span>
    </div>
    <div class="ticket-info">
      <div class="ticket-info__date">{{departureDate}}</div>
      <h2 class="ticket-info__from-destination">From {{departurePoint}}</h2>
      <h3 class="ticket-info__to-destination">To {{destinationPoint}}</h3>
      <span class="station">Station {{station}}</span>
      <span class="ticket-info__time">Time {{departureTime}}</span>
      <span class="ticket-info__bus-type">Type: {{bus}}</span>
      <div class="row-select">
        <label for="row">Select row</label>
        <select class="ticket-info__select" name="row" id="row" v-model="seatRow">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <div class="place-select">
        <label for="place">Select place</label>
        <select class="ticket-info__select" name="place" id="place" v-model="seatColumn">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
    </div>
    <div class="ticket-price">
      <h2 class="ticket__logo">Bus Ticket Kz</h2>
      <span class="ticket__price">{{price}}</span>
      <button class="ticket__buy-btn">Buy</button>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    ticket: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      id: "",
      departurePoint: "",
      destinationPoint: "",
      departureDate: "",
      departureTime: "",
      station: "",
      bus: "",
      seatRow: "",
      seatColumn: "",
      price: "",
    }
  }
}
</script>

<style scoped>

.ticket {
  display: flex;
  gap: 0 20px;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
}

.ticket-img {
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px 0;
}

.ticket__number {
  font-size: 16px;
}

.ticket-info {
  display: flex;
  flex-direction: column;
  gap: 5px 0;
  padding: 20px;
}

.ticket-info > * {
  font-size: 18px;
}

.ticket-info__from-destination {
  font-size: 30px;
}

.ticket-info__to-destination {
  font-size: 24px;
}

.ticket-info__select {
  width: 70px;
  border: none;
  border-radius: 5px;
  background-color: #e4f2f1;
  padding-left: 5px;
}

.row-select,
.place-select {
  display: flex;
  gap: 0 10px;
}

.img {
  width: 100px;
  height: 100px;
  border: none;
  border-radius: 50%;
  background-color: red;
}

.ticket-price {
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px 0;
}

.ticket__price {
  font-size: 24px;
}

.ticket__buy-btn {
  width: 150px;
  height: 40px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  background-color: #038c7f;
  color: white;
}

</style>