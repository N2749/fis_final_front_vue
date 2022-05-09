<template>
  <div class="tickets-list">
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
        <li class="tickets__item">
          <div class="ticket">
            <div class="ticket-img">
              <div class="img"></div>
              <span class="ticket__number">#200302202</span>
            </div>
            <div class="ticket-info">
              <div class="ticket-info__date">29 june 2022</div>
              <h2 class="ticket-info__from-destination">From Almaty</h2>
              <h3 class="ticket-info__to-destination">To Semei</h3>
              <span class="station">Station Sairan</span>
              <span class="ticket-info__time">Time: 11:00</span>
              <span class="ticket-info__bus-type">Type: Coach</span>
              <div class="row-select">
                <label for="row">Select row</label>
                <select class="ticket-info__select" name="row" id="row">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div class="place-select">
                <label for="place">Select place</label>
                <select class="ticket-info__select" name="place" id="place">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>
            <div class="ticket-price">
              <h2 class="ticket__logo">Bus Ticket Kz</h2>
              <span class="ticket__price">4500 kzt</span>
              <button class="ticket__buy-btn">Buy</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
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
