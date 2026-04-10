<template>
    <div class="danceReel">
        <h1 class="danceReelTitle">Dance Reel</h1>
        <iframe src="https://www.youtube.com/embed/G6V8vNE4E9s" class="danceReelVideo"></iframe>
    </div>
</template>

<script>
</script>

<style>
.danceReel{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.danceReelTitle{
    font-weight: lighter;
    font-family: "Playfair Display", serif;
    color: #915F6D;
    text-decoration: none;
    font-size: 90px;
}

.danceReelVideo{
    height: 600px;
    width: 1200px;
}
</style>