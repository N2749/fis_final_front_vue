<template>
  <div class="ticket">
    <div class="left">
      <div class="image">
        <div class="ticket-number">
          <p>
            #200302202
          </p>
        </div>
      </div>
      <div class="ticket-info">
        <p class="date">
          <span class="day">29</span>
          <span class="month">June</span>
          <span class="years">2022</span>
        </p>
        <div class="show-name">
          <h1>From Almaty</h1>
          <h2>To Semei</h2>
        </div>
        <div class="time">
          <p><span>Type: </span>Coach</p>
          <p><span>Time</span> 11:00 PM</p>
          <fieldset class="zal0">
            <label for="zal1">Select row:</label>
            <select id="zal1" class="zal2">
              <option value="">Select a row</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </fieldset>
          <fieldset>
            <label for="placce1">Select a place:</label>
            <select id="place1" class="place2">
              <option value="">Select a place</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
            </select>
          </fieldset>
        </div>
        <p class="location"><span>Station</span>
          <span class="separator"><i class="far fa-smile"></i></span><span>Sairan</span>
        </p>
      </div>
    </div>
    <div class="right">
      <div class="right-info-container">
        <div class="show-name">
          <h1>Bus Ticket KZ</h1>
        </div>
        <div class="pricetic"><p>4500T</p></div>
        <button class="custom-btn btn-3"><span>Buy</span></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
//   props: {
//     tickets: {
//       type: Array,
//       required: true,
//     }
//   },
  data() {
    return {
      tickets: [
        {
          departurePoint: "Almaty",
          destinationPoint: "Taraz",
          departureDate: false,
          typeOfBus: false,
          number: 1
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>