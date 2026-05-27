<template >
    <div class="subMenu" v-for="sub in subMenu" :key="sub.id" @mousemove="show = true" @mouseleave="show = false">
    <h1 class="link" :id="sub.id">{{sub.title}}</h1>
    <div class="subItems" v-if="show" @mousemove="show = true" @mouseleave="show = false">
        <router-link :to=sub.itemLink1 class="item">{{ sub.item1 }}</router-link>
        <router-link :to=sub.itemLink2  class="item">{{ sub.item2 }}</router-link>
        <router-link :to=sub.itemLink3  class="item">{{ sub.item3 }}</router-link>
        <router-link :to=sub.itemLink4  class="item">{{ sub.item4 }}</router-link>
    </div>
</div>
</template>

<script>
export default{
   props: ['subMenu'],
   data(){
    return{
        show: false
    }
   }
}
</script>

<style>

.subMenu{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    z-index: 15;
}

.link{
  color: #4d0066;
  text-decoration: none;
  font-weight: lighter;
  font-size: 20px;
  font-family: "Playfair Display", serif;
  margin: 0;
  padding-bottom: 10px;
}

.link:hover{
  text-decoration: underline solid;
  text-underline-offset: 2.5px;
}

.subItems{
    background-image: url("../photos/indigo_background.avif");
    margin: 0;
    position: fixed;
    transform: translateY(100px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px 10px 0 10px;
    border-radius: 10%;
}

.item{
  color: #4d0066;
  text-decoration: none;
  font-size: 20px;
  font-family: "Playfair Display", serif;
  margin: 0 0 15px 0;
}

.item:hover{
  text-decoration: underline solid;
  text-underline-offset: 2.5px;
}
</style>