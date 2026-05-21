<!--
  DEFAULT GALLERY CAROUSEL — frozen snapshot (May 2026)
  Do not import this file. It is a restore reference only.

  To reset GalleryView.vue to this setup:
    cp src/views/GalleryView.carousel-default.vue src/views/GalleryView.vue

  Or ask Cursor: "Restore the gallery carousel from GalleryView.carousel-default.vue"
-->
<template>
  <div class="carousel">
    <div class="slideFrame">
      <button
        class="carouselButtons carouselButtons--prev"
        type="button"
        aria-label="Previous slide"
        @click="previousSlide"
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
            <h3 class="slideTitle">"{{ slide.title }}"</h3>
          </div>
        </div>
      </div>

      <button
        class="carouselButtons carouselButtons--next"
        type="button"
        aria-label="Next slide"
        @click="nextSlide"
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

      autoplay: null
    }
  },

  mounted() {
    this.startAutoplay()
  },

  beforeUnmount() {
    clearInterval(this.autoplay)
  },

  computed: {
    stepAngle() {
      return 360 / this.slides.length
    },

    containerRotation() {
      return this.activeIndex * this.stepAngle
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
      this.activeIndex = (this.activeIndex + 1) % this.slides.length
    },

    previousSlide() {
      this.activeIndex =
        (this.activeIndex - 1 + this.slides.length) % this.slides.length
    },

    startAutoplay() {
      this.autoplay = setInterval(() => {
        this.nextSlide()
      }, 5000)
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

  color: white;
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
