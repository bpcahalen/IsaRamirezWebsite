<template>
  <div class="about">
    <h1 class="hello">Hi, I’m <br> Isa Ramirez! </h1>
    <img class="introPhoto" src="../photos/aboutIsa.png"/>
    <p class="intro"> I was born and raised in Chicago, IL and from the age of 16 I danced with the pre-professional company at Gus Giordano Dance School.  At GUS I learned the art of performing, the history of Giordano Jazz Technique and the Legacy that is Gus Giordano. 
At 18 I attended, then later graduated, from Oklahoma City University.  At OKCU I went the Dance Performance track and had the opportunity to be apart of Home for the Holidays and Broadway Revue (our winter and spring shows) all 4 years! After graduating I moved back to my hometown in Chicago, IL where I worked in a music video with Reverend Horton Heat in “Perfect!”, and taught at Gus Giordano Dance School. </p>
<img class="ocuPhoto" src="../photos/isaFirstPhoto.JPG"/>
<p class="middle"> Soon after that I made the big move to New York City. 
During my time in New York City I worked at Capezio where I had the opportunity to work alongside companies such as “Steps On Broadway”, “Ballet Hispanico”, “Broadway Dance Center” and I became a certified Yoga Instructor with CorePower Yoga.  Covid-19 cut short my stay and led me to return to Chicago.  The pandemic had a big impact on performing opportunities which allowed me to fully embrace my role as a choreographer!  In 2021 re-began my career in Chicago as a dance captain and co-choreographer for the Beverly Arts Center’s production of “Beauty & the Beast”.  After that, I had the pleasure of choreographing  3 Maine West High School productions: Theory of Relativity, Beauty and the Beast, and Young Frankenstein.
</p>
<img class="midAbout" src="../photos/isaMidPhoto.JPG"/>
<p class="end">  
Since choreographing I have done 3 contracts with Music Theater Works in “Brigadoon” as Maggie Anderson and Dance Captain,  (“Zorro! The Musical” (Ensemble) and “White Christmas” (Ensemble). Other Regional Credits include Marriott Theatre's “In the Heights” (Ensemble and 2nd U.S. to Daniela); Fireside Theater’s "Matilda! The Musical" and coming up is “West Side Story”!! 
When I’m not performing  I have the amazing pleasure of teaching at Gus Giordano Dance School and as a member of the Gus Legacy Dance Company. 
</p>
<img class="endAbout" src="../photos/isa_end.jpg"/>
  </div>
  <div class="connect">
  <p>If you want to find about more you can contact me <router-link to="./contactme" class="reRoute">here</router-link>! </p>
</div>
</template>

<style>
.about {
    display: grid;
    margin-top: 60px;
    padding: 20px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
    "introPhoto hello"
    "intro ocuPhoto"
    "midPhoto middle"
    "end endAbout";
    justify-items: center;
    align-items: center;
  }

  .introPhoto{
    height: 505px;
    width: 455px;
    padding: 10px 0 10px 0;
    margin: 0;
    border-radius: 25px;
  }

  .ocuPhoto, .midAbout, .endAbout{
    height: 575px;
    width: 505px;
    padding: 10px 0 10px 0;
    margin: 0;
    border-radius: 25px;
  }

  .hello{
    grid-area: hello;
    margin: 0;
    padding: 5px;
    text-align: center;
    font-family: "Playfair Display", serif;
    font-size: 100px;
  }

  .introPhoto{
    margin: 0;
    padding-bottom: 20px;
    grid-area: introPhoto;
  }

  .intro{
    margin: 0;
    padding: 40px 0 40px 0;
    grid-area: intro;
    text-align: center;
    font-family: "Playfair Display", serif;
    font-size: 28px;
    letter-spacing: 1px;
  }

  .ocuPhoto{
    grid-area: ocuPhoto;
  }

  .middle{
    margin: 0;
    padding: 40px 0 40px 0;
    grid-area: middle;
    text-align: center;
    font-family: "Playfair Display", serif;
    font-size: 28px;
    letter-spacing: 1px;
  }

  .midAbout{
    grid-area: midPhoto;
  }

  .end{
    margin: 0;
    padding: 40px 0 40px 0;
    grid-area: end;
    text-align: center;
    font-family: "Playfair Display", serif;
    font-size: 28px;
    letter-spacing: 1px;
  }

  .endAbout{
    grid-area: endAbout;
  }

  .connect{
    margin: 0;
    padding: 20px 0 20px 0;
    text-align: center;
    font-family: "Playfair Display", serif;
    font-size: 20px;
  }

  .reRoute{
    color: black;
    /* text-decoration: underline black 2px solid; */
    text-decoration: none;
  }

  .reRoute:hover{
    /* color: #4d0066; */
    text-decoration: underline black 1px solid;
    text-underline-offset: 2px;
  }

@media (min-width: 1024px) {
  
}
</style>
