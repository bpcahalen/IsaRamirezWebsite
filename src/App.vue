<template>
  <header>
    <div class="navigation">
      <router-link to="/" ><img class="logo" src="./photos/logo.png"/></router-link>
      <div class="menu">
        <router-link to="/about" class="router">About</router-link>
        <subMenu :subMenu="subMenu"/>
        <router-link to="/teacher" class="router">Teacher</router-link>
        <!-- <router-link to="/jaden" class="router">Jaden</router-link> -->
        <router-link to="/contactme" class="router">Contact</router-link>
      </div>
    </div>
  </header>
<RouterView />
<footer>
  <div class="footerInfo">
    <router-link to="/" class="footerName">Isa Ramirez</router-link>
    <a href="https://www.instagram.com/isa_nychi/" target="_blank"><fa :icon="['fab', 'instagram']" class="instagram" @mouseenter="addBounce($event)" @mouseleave="killBounce($event)"/></a>
    <!-- <div class="footerContact"> -->
      <router-link to="/contactme" class="footerConnectText">Let's Connect!</router-link> 
    <!-- </div> -->
  </div>
  <a href="https://www.linkedin.com/in/barrett-cahalen/" target="blank" class="copyRight"><fa class="copyRightIcon" :icon="['far', 'copyright']"/>2026 Barrett Cahalen</a>
</footer>
</template>

<script>
import subMenu from "./components/menu.vue"

export default{
  components: {
    subMenu
  },
  data() {
    return{
      show: true,
      subMenu: [
        {
          id: 1,
          title: "Performer",
          item1: "Headshots",
          item2: "Dance Reel",
          item3: "Gallery",
          item4: "Resume",
          itemLink1: "./headshot",
          itemLink2: "./dancereel",
          itemLink3: "./gallery",
          itemLink4: "./resume"
        }
      ]
    }
  },
  methods: {
    addBounce(event){
      event.target.classList.add("fa-bounce")
    },
    killBounce(event){
      event.target.classList.remove("fa-bounce")
    }
  }
}


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

html,
body {
  background-image: url("./photos/indigo_background.avif");
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;
  margin: 0;
  width: 100vw;
}

header{
  margin: 0;
  padding: 0;
  height: 150px;
}

.navigation {
  height: 175px;
  display: flex;
  margin: 0;
  padding: 20px 20px 0 20px;
  justify-content: space-between;
  align-items: center;
  /* border-bottom: solid 2px black; */
}

.menu {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 50%;
}

.performMenu{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

/* .subMenu{
  background-color: white;
} */

.logo{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 100px;
  width: 100px;
  border-radius: 20px;
}

.router {
  color: #4d0066;
  text-decoration: none;
  font-size: 20px;
  font-family: "Playfair Display", serif;
  margin: 0 0 15px 0;
}

.router:hover{
  text-decoration: underline solid;
  text-underline-offset: 2.5px;
}

footer{
  margin-top: 35px;
  padding: 10px 30px 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  background-image: url("./photos/indigo_background.avif");
}

.footerInfo{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.instagram{
  height: 30px;
  width: 30px;
  cursor: pointer;
  /* padding-left: 80px; */
  color: #4d0066;
}

.footerName{
  font-family: "Playfair Display", serif;
  font-weight: lighter;
  font-size: 25px;
  margin: 0;
  color: #4d0066;
  text-decoration: none;
}

.footerConnectText{
  margin: 0;
  font-family: "Playfair Display", serif;
  font-weight: lighter;
  font-size: 25px;
  color: #4d0066;
  text-decoration: none;
}

.footerConnectText:hover{
  text-shadow: 4px 0 8px #4d0066;
}

/* .footerContact{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
} */

/* .footerConnectText:hover{
  text-decoration: underline solid #4d0066;
  text-underline-offset: 2.5px;
} */

/* .footerEmail{
  margin: 0;
  font-family: "Playfair Display", serif;
  font-size: 22px;
  color: #4d0066;
} */

.copyRight{
  margin: 0;
  display: flex;
  justify-content: center;
  color: grey;
  opacity: .6;
  text-decoration: none;
  font-size: 15px;
  padding-bottom: 5px;
}

.copyRightIcon{
  margin-right: 5px;
}
</style>