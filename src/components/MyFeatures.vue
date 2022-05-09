<template>
  <section class="features">
    <div class="features__feature buy-ticket-online">
      <img src="./../assets/tickets.png" alt="tickets" />
      <h2 class="features__title">Buying tickets online</h2>
      <p class="features__text">
        You can buy tickets without leaving your home. You can also return the
        money.
      </p>
    </div>
    <div class="features__feature tracking">
      <img src="./../assets/tracking.png" alt="tracking" />
      <h2 class="features__title">Tracking</h2>
      <p class="features__text">
        You can find out the approximate location of the bus.
      </p>
    </div>
    <div class="features__feature support">
      <img src="./../assets/support.png" alt="support" />
      <h2 class="features__title">Best Support</h2>
      <p class="features__text">
        Fusce leo dui. Mauris et justo eget arcu ultricies porta. Nulla
        facilisi.
      </p>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.features {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 100px;
  background-color: white;
}

.features__feature {
  flex-basis: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 20px 0;
  padding: 20px;
  background-color: #8ebfb1;
  border: none;
  border-radius: 5px;
  color: white;
}

.features__text {
  font-size: 16px;
  text-align: justify;
}
</style>
