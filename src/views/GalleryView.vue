<!--
  Gallery carousel — live file.
  Default / restore baseline: GalleryView.carousel-default.vue
  Restore: cp src/views/GalleryView.carousel-default.vue src/views/GalleryView.vue
-->

<!-- <template>
    <div class="carousel">
        <div class="carouselContainer" style="--quantity: 10">
            <div class="slide" style="--position: 1">
                <img class="carouselPhoto" src="../photos/gallery/ith2.jpg" alt="">
                <h3 class="slideTitle">"In The Heights"</h3>
            </div>
            <div class="slide" style="--position: 2">
                <img class="carouselPhoto" src="../photos/gallery/ith3.JPG" alt="">
                <h3 class="slideTitle">"In The Heights"</h3>
            </div>
            <div class="slide" style="--position: 3">
                <img class="carouselPhoto" src="../photos/gallery/matilda.jpg" alt="">
                <h3 class="slideTitle">"Matilda"</h3>
            </div>
            <div class="slide" style="--position: 4">
                <img class="carouselPhoto" src="../photos/gallery/ith.jpg" alt="">
                <h3 class="slideTitle">"In The Heights"</h3>
            </div>
            <div class="slide" style="--position: 5">
                <img class="carouselPhoto" src="../photos/gallery/matilda2.jpg" alt="">
                <h3 class="slideTitle">"Matilda"</h3>
            </div>
            <div class="slide" style="--position: 6">
                <img class="carouselPhoto" src="../photos/gallery/matilda3.jpg" alt="">
                <h3 class="slideTitle">"Matilda"</h3>
            </div>
            <div class="slide" style="--position: 7">
                <img class="carouselPhoto" src="../photos/gallery/wc.jpg" alt="">
                <h3 class="slideTitle">"White Christmas"</h3>
            </div>
            <div class="slide" style="--position: 8">
                <img class="carouselPhoto" src="../photos/gallery/wc2.jpg" alt="">
                <h3 class="slideTitle">"White Christmas"</h3>
            </div>
            <div class="slide" style="--position: 9">
                <img class="carouselPhoto" src="../photos/gallery/zorro.JPG" alt="">
                <h3 class="slideTitle">"Zorro"</h3>
            </div>
            <div class="slide" style="--position: 10">
                <img class="carouselPhoto" src="../photos/gallery/brig.jpg" alt="">
                <h3 class="slideTitle">"Brigadoon"</h3>
            </div>
        </div>
        <div class="carouselNavigation">
            <button class="carouselButtons"></button>
            <button class="carouselButtons"></button>
        </div>
    </div>
</template>

<script>
</script>

<style>
.carousel{
    overflow: hidden;
    position: relative;
    height: 100vh;
    margin-top: 150px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
}

.carouselContainer{
    position: absolute;
    width: 100%;
    height: 550px;
    top: 30%;
    transform-style: preserve-3d;
    transform: 
    rotateX(-10deg)
    perspective(1000px);
    animation: slideshow 120s linear infinite;
}

.slide{
    position: absolute;
    inset: 10px 0 10px 0;
    transform: 
    rotateY(calc((var(--position) - 1) * (360/var(--quantity)) * 1deg))
    translateZ(600px);
}

.carouselPhoto{
    height: 250px;
    width: 250px;
    padding: 0 40px;
}

.slideTitle{
    color: white;
    font-family: "Playfair Display", serif;
    font-size: 30px;
    transform: translateY(-75px);
}

@keyframes slideshow {
   from{
    transform: perspective(1000px) rotateX(-10deg)  rotateY(0deg)
   }to{ 
    transform: perspective(1000px)  rotateX(-10deg) rotateY(360deg)
   }
}
</style> -->

<!--
  Gallery carousel — live file.
  Default / restore baseline: GalleryView.carousel-default.vue
  Restore: cp src/views/GalleryView.carousel-default.vue src/views/GalleryView.vue
-->

<template>
  <div class="carousel">
    <div class="slideFrame">
      <button
        class="carouselButtons carouselButtons--prev"
        type="button"
        aria-label="Previous slide"
        @click="goPrevious"
      >
        ←
      </button>

      <div class="carouselStage">
        <div
          class="carouselContainer"
          :style="{
            transform: `rotateY(${containerRotation}deg)`,
          }"
        >
          <div
            v-for="(slide, index) in slides"
            :key="index"
            class="slide"
            :class="{ 'slide--active': index === activeIndex }"
            :style="{ transform: slideTransform(index) }"
          >
            <img
              class="carouselPhoto"
              :src="slide.image"
              :alt="slide.title"
            />
            <h3 class="slideTitle">{{ slide.title }}</h3>
          </div>
        </div>
      </div>

      <button
        class="carouselButtons carouselButtons--next"
        type="button"
        aria-label="Next slide"
        @click="goNext"
      >
        →
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0,
      totalRotation: 0,

      slides: [
        {
          image: new URL('../photos/gallery/ith2.jpg', import.meta.url).href,
          title: 'In The Heights'
        },
        {
          image: new URL('../photos/gallery/ith3.JPG', import.meta.url).href,
          title: 'In The Heights'
        },
        {
          image: new URL('../photos/gallery/matilda.jpg', import.meta.url).href,
          title: 'Matilda'
        },
        {
          image: new URL('../photos/gallery/ith.jpg', import.meta.url).href,
          title: 'In The Heights'
        },
        {
          image: new URL('../photos/gallery/matilda2.jpg', import.meta.url).href,
          title: 'Matilda'
        },
        {
          image: new URL('../photos/gallery/matilda3.jpg', import.meta.url).href,
          title: 'Matilda'
        },
        {
          image: new URL('../photos/gallery/wc.jpg', import.meta.url).href,
          title: 'White Christmas'
        },
        {
          image: new URL('../photos/gallery/wc2.jpg', import.meta.url).href,
          title: 'White Christmas'
        },
        {
          image: new URL('../photos/gallery/zorro.JPG', import.meta.url).href,
          title: 'Zorro'
        },
        {
          image: new URL('../photos/gallery/brig.jpg', import.meta.url).href,
          title: 'Brigadoon'
        },
      ],

      autoplay: null,
      autoplayResume: null,
    }
  },

  mounted() {
    this.startAutoplayInterval()
  },

  beforeUnmount() {
    this.clearAutoplayTimers()
  },

  computed: {
    stepAngle() {
      return 360 / this.slides.length
    },

    containerRotation() {
      return this.totalRotation
    },
  },

  methods: {
    slideTransform(index) {
      return `
        rotateY(${-index * this.stepAngle}deg)
        translateZ(700px)
      `
    },

    nextSlide() {
      this.totalRotation += this.stepAngle
      this.activeIndex = (this.activeIndex + 1) % this.slides.length
    },

    previousSlide() {
      this.totalRotation -= this.stepAngle
      this.activeIndex =
        (this.activeIndex - 1 + this.slides.length) % this.slides.length
    },

    clearAutoplayTimers() {
      clearInterval(this.autoplay)
      clearTimeout(this.autoplayResume)
      this.autoplay = null
      this.autoplayResume = null
    },

    startAutoplayInterval() {
      clearInterval(this.autoplay)
      this.autoplay = setInterval(() => {
        this.nextSlide()
      }, 5000)
    },

    scheduleAutoplayResume() {
      clearInterval(this.autoplay)
      this.autoplay = null
      clearTimeout(this.autoplayResume)
      this.autoplayResume = setTimeout(() => {
        this.autoplayResume = null
        this.startAutoplayInterval()
      }, 10000)
    },

    goNext() {
      this.nextSlide()
      this.scheduleAutoplayResume()
    },

    goPrevious() {
      this.previousSlide()
      this.scheduleAutoplayResume()
    },
  },
}
</script>

<style>
.carousel {
  overflow: visible;
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.slideFrame {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 76px;
}

.carouselStage {
  position: relative;
  width: 350px;
  height: 350px;

  perspective: 1800px;
  perspective-origin: center center;

  transform-style: preserve-3d;
}

.carouselContainer {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 0;
  height: 0;

  transform-style: preserve-3d;
  transform-origin: center center;

  transition: transform 1s ease;
}

.slide {
  position: absolute;
  left: 0;
  top: 0;

  width: 350px;
  height: 350px;
  margin-left: -175px;
  margin-top: -175px;

  transform-style: preserve-3d;
  transform-origin: center center;

  opacity: 0.45;
  transition:
    transform 1s ease,
    opacity 1s ease;
}

.slide--active {
  opacity: 1;
  z-index: 2;
}

.slide--active .carouselPhoto {
  transform: scale(1);
}

.carouselPhoto {
  width: 350px;
  height: 350px;

  object-fit: cover;

  border-radius: 20px;

  display: block;

  transform: scale(0.88);
  transform-origin: center center;

  transition: transform 1s ease;
}

.slideTitle {
  position: absolute;
  top: calc(100% + 16px);
  left: 50%;

  color: #4d0066;
  font-family: "Playfair Display", serif;
  font-size: 28px;
  text-align: center;
  white-space: nowrap;

  transform: translateX(-50%);
  margin: 0;
}

.carouselButtons {
  position: absolute;
  top: 50%;
  z-index: 10;

  width: 60px;
  height: 60px;

  border-radius: 50%;
  border: none;

  cursor: pointer;

  font-size: 24px;

  transform: translateY(-50%);
}

.carouselButtons--prev {
  left: 0;
}

.carouselButtons--next {
  right: 0;
}
</style>