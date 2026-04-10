<template>
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
    inset: 0 0 0 0;
    transform: 
    rotateY(calc((var(--position) - 1) * (360/var(--quantity)) * 1deg))
    translateZ(550px);
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
</style>