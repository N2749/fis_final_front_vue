<template>
  <div class="carousel">
    <slot></slot>
    <button @click="prev" class="carousel__btn prev">&lt;</button>
    <button @click="next" class="carousel__btn next">&gt;</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    prev() {
      console.log('prev');
      this.$emit('prev');
    },

    next() {
      console.log('next');
      this.$emit('next');
    },
  },
};
</script>

<style>
.carousel {
  position: relative;
  display: flex;
}

.carousel__btn {
  display: inline-flex;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  background-color: #038c7f;
  color: white;
  position: absolute;
  top: calc(50% - 25px);
}

.prev {
  left: -70px;
}

.next {
  right: -70px;
}
</style>
