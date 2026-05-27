<template>
  <div class="homept1">
      <img class="isa" src="../photos/isa.png"/>
      <h1 class="signature">Isa Ramirez</h1>
      <div class="explore">
        <div class="exploreImages">
          <div class="explore1">
            <img src="../photos/passePhoto.JPG" alt="" class="exploreImage1">
            <h3 class="exploreTitle1">Performer</h3>
            <router-link to="/headshot" class="exploreButton1">See More</router-link>
          </div>
          <div class="explore2">
            <img src="../photos/teacherHome.JPG" alt="" class="exploreImage2">
            <h3 class="exploreTitle2">Teacher</h3>
            <router-link to="/teacher" class="exploreButton2">Come Take A Class</router-link>
          </div>
          <!-- <div class="explore3">
            <img src="../photos/jaden/jaden.JPG" alt="" class="exploreImage3">
            <h3 class="exploreTitle3">Jaden</h3>
            <router-link to="/jaden" class="exploreButton3">Learn More</router-link>
          </div> -->
        </div>
      </div>
      </div>
      <div class="fixedPhoto"></div>
      <div class="homept2">
        <div class="miniBio">
        <p class="miniBioText">Isa graduated from Oklahoma City University with a bachelor's degree in Performing Arts. 
          Isa’s performing credits include: “Matilda” at the Fireside Theatre; “In the Heights”  Marriott Lincolnshire; Music Theater Works “Brigadoon” as Maggie Anderson, “White Christmas” and “Zorro! The Musical”;  “Beauty and the Beast” Beverly Arts Center’s (BAC) as a Silly Girl and Choreographer. 
          She is also a certified Yoga Instructor and teaches in the Chicagoland area and is also a part of the Gus Legacy Company.  
          Most recent contract is in “West Side Story” with the Fireside Theater. </p>
          <img src="../photos/aboutIsa2.png" alt="" class="miniBioImage">
      </div>
      </div>
</template>

<script>
</script>

<style>

.homept1{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: 
  " isa isa signature"
  "explore explore explore";
  align-items: center;
  align-content: space-between;
  justify-items: center;
  margin: 0;
  gap: 0;
}
.homept2{
}

.isa{
  display: flex;
  transform: translateY(-150px) translateX(50px) ;
  height: 800px;
  width: 450px;
  opacity: 75%;
  padding-left: 100px;
  grid-area: isa;
}

.signature{
  transform: translateX(50px);
  display: flex;
  flex-wrap: wrap;
  font-family: 'Dancing Script', cursive;
  font-size: 175px;
  line-height: 200px;
  margin: 0;
  padding-right: 150px;
  grid-area: signature;
  stroke:#000;
  stroke-miterlimit:10;
  stroke-linecap: round;
  stroke-width: 3;
  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: write 5s ease-in-out infinite;
}

.explore{
  transform: translateY(190px);
  grid-area: explore;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 100px;
}

.exploreImages{
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.explore1, .explore2, .explore3{
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.exploreImage1, .exploreImage2, .exploreImage3{
  height: 525px;
  width: 425px; 
  border-radius: 15%;
}

.exploreTitle1, .exploreTitle2, .exploreTitle3{
  transform: translateY(-680px);
  color: black;
  text-decoration: underline solid black 5px;
  text-underline-offset: 8px;
  font-size: 70px;
  font-family: 'Dancing Script', cursive;
  margin: 0;
}

.exploreButton1, .exploreButton2, .exploreButton3{
  border: none;
  width: 425px;
  font-family: "Playfair Display", serif;
  background-color: black;
  color: white;
  text-decoration: none;
  text-align: center;
  font-size: 25px;
  transform: translateY(-270px);
  padding: 5px 0;
  border-radius: 3% 3% 15% 15%;
}

.exploreButton1:hover, .exploreButton2:hover, .exploreButton3:hover{
  text-decoration: underline white 2px;
  text-underline-offset: 2.5px;
}

.fixedPhoto{
  height: 600px;
  background-attachment: fixed;
  background-image: url("../photos/isaBackground.JPG");
  background-position-x: 50%;
  background-position-y: 10%;
  background-size: cover;
}

.miniBio{
  grid-area: miniBio;
  transform: translateY(40px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 5px 20px 30px;
}

.miniBioText{
  font-family: "Playfair Display", serif;
  font-size: 37px;
  text-align: center;
}

.miniBioImage{
  height: 690px;
  width: 690px;
  transform: translateY(-50px);
}

@keyframes write {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
