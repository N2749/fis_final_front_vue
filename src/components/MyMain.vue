<template>
  <main class="main">
    <section class="buy-ticket">
      <div class="container buy-ticket__container">
        <h1 class="buy-ticket__title section-title">
          I&nbsp;don&rsquo;t know what the headline&nbsp;is.
          <br />We&nbsp;don&rsquo;t have a&nbsp;marketer.
        </h1>
        <form action="" class="ticket-buy-form">
          <h2 class="ticket-buy-form__title">
            Check availability for direction
          </h2>
          <hr class="ticket-buy-form__line" />
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
                >
                  <option value="">Select a location...</option>
                  <option value="Taraz">Taraz</option>
                  <option value="Almaty">Almaty</option>
                  <option value="Oskemen">Ust-Kamenogorsk</option>
                  <option value="Shymkent">Shymkent</option>
                  <option value="Taldykorgan">Taldykorgan</option>
                  <option value="Semei">Semei</option>
                  <option value="Nur-Sultan">Nur-Sultan</option>
                  <option value="Karaganda">Karaganda</option>
                  <option value="Burabai">Burabai</option>
                </select>
              </div>
              <div class="ticket-buy-form__cell">
                <label class="ticket-buy-form__label" for="arrival-point"
                  >To</label
                >
                <select
                  class="ticket-buy-form__select"
                  name="arrival-point"
                  id="arrival-point"
                >
                  <option value="">Select a location...</option>
                  <option value="Taraz">Taraz</option>
                  <option value="Almaty">Almaty</option>
                  <option value="Oskemen">Ust-Kamenogorsk</option>
                  <option value="Shymkent">Shymkent</option>
                  <option value="Taldykorgan">Taldykorgan</option>
                  <option value="Semei">Semei</option>
                  <option value="Nur-Sultan">Nur-Sultan</option>
                  <option value="Karaganda">Karaganda</option>
                  <option value="Burabai">Burabai</option>
                </select>
              </div>
            </div>
            <div class="ticket-buy-form__details">
              <div class="ticket-buy-form__cell">
                <label for="#date" class="ticket-buy-form__label"
                  >departure date</label
                >
                <input type="date" class="ticket-buy-form__input" id="date" />
              </div>
              <div class="ticket-buy-form__cell">
                <label for="type-bus" class="ticket-buy-form__label"
                  >types of bus</label
                >
                <select
                  class="ticket-buy-form__select"
                  name="type-bus"
                  id="type-bus"
                >
                  <option value="">Select a type...</option>
                  <option value="Kabanbai">Motor coach</option>
                  <option value="Almaty">Coach with beds</option>
                  <option value="Oskemen">Minibus</option>
                  <option value="Shymkent">Shuttle</option>
                </select>
              </div>
              <div class="ticket-buy-form__cell">
                <label for="quanttic" class="ticket-buy-form__label"
                  >Number</label
                >
                <select
                  class="ticket-buy-form__select"
                  name="quantic"
                  id="quantic"
                >
                  <option value="">Select a number...</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
            </div>
            <button class="ticket-buy-form__button">
              Check available tickets
            </button>
          </div>
        </form>
      </div>
    </section>
    <section class="list">
      <my-tickets-list></my-tickets-list>
    </section>
  </main>
</template>

<script>
import MyTicketsList from './MyTicketsList.vue';
export default {
  components: { MyTicketsList },
};
</script>

<style>
.buy-ticket,
.list {
  background-color: #8ebfb1;
  padding: 50px;
}

.buy-ticket__container {
  flex-direction: column;
  align-items: center;
  gap: 30px 0;
}

.ticket-buy-form {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 2px 10px 2px rgba(38, 62, 80, 0.16);
}

.buy-ticket__title {
  color: white;
}

.ticket-buy-form__title {
  color: #3c5956;
}

.ticket-buy-form__container {
  display: flex;
  flex-direction: column;
  gap: 30px 0;
}

.ticket-buy-form__destinations {
  display: flex;
  gap: 0 30px;
  align-items: center;
}

.ticket-buy-form__details {
  display: flex;
  gap: 0 30px;
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
  width: 300px;
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
