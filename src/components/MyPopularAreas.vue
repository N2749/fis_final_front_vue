<template>
  <section class="popular-destinations">
    <h2 class="popular-destinations__title">Popular destinations</h2>
    <div class="carousel-wrapper">
      <carousel @prev="prev" @next="next">
        <carousel-slide
          v-for="(slide, index) in slides"
          :key="slide"
          :index="index"
          :visibleSlide="visibleSlide"
        >
          <img :src="slide" class="carousel__img" />
        </carousel-slide>
      </carousel>
    </div>
  </section>
</template>

<script>
import Carousel from './carousel/Carousel.vue';
import CarouselSlide from './carousel/CarouselSlide.vue';
export default {
  data() {
    return {
      slides: [
        'src/assets/Almaty.jpg',
        'src/assets/taraz.jpg',
        'src/assets/taldy.jpg',
        'src/assets/oskemen.jpg',
        'src/assets/shymkent.jpg',
      ],
      visibleSlide: 0,
    };
  },
  components: { Carousel, CarouselSlide },
  methods: {
    prev() {
      if (this.visibleSlide <= 0) {
        this.visibleSlide = this.slides.length - 1;
      } else {
        this.visibleSlide--;
      }
      console.log('parent prev');
    },
    next() {
      if (this.visibleSlide >= this.slides.length - 1) {
        this.visibleSlide = 0;
      } else {
        this.visibleSlide++;
      }
      console.log('parent next');
    },
  },
};
</script>

<style>
.popular-destinations {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  gap: 30px 0;
  background-color: white;
}

.popular-destinations__title {
  font-size: 35px;
}

.carousel__img {
  width: 900px;
  height: 500px;
  border: none;
  border-radius: 10px;
}
</style>
