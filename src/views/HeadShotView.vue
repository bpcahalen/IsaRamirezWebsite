<template>
    <div class="headshots">
        <div class="headshot1">
            <img src="../photos/headshots/headshot2.JPG" alt="" class="headshot">
            <a href="../../headshot2.pdf" download="IsaRamirezHeadshot1 " class="headshot1Link">Download Here</a>
        </div>
        <div class="headshot2">
            <img src="../photos/headshots/headshot1.jpg" alt="" class="headshot">
            <a href="../../headshot1.pdf" download="IsaRamirezHeadshot2" class="headshot2Link">Download Here</a>
        </div>
    </div>
</template>

<script>
import headshot1 from "../../public/headshot1.pdf"
import headshot2 from "../../public/headshot2.pdf"
</script>

<style>
.headshots{
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 75px;
}

.headshot{
    height: 700px;
    width: 600px;
}

.headshot1, .headshot2{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.headshot2{
    padding-left: 75px;
}

.headshot1Link, .headshot2Link{
    padding-top: 15px;
    font-family: "Playfair Display", serif;
    color: #915F6D;
    text-decoration: none;
    font-size: 30px;
}

.headshot1Link:hover, .headshot2Link:hover{
    color: #cc80ff;
}
</style>