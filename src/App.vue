<template>
  <nav class="nav">
    <router-link to="/" @dblclick="reload">Home</router-link>
    <router-link :to="{name: 'Createblog'}" @dblclick="reload">Create Blog</router-link>
  </nav>
  <router-view/>
</template>
<script>
  export default {
    setup(){
      const reload = () => {
        location.reload()
      }
      return{reload}
    }
  }
</script>
<style>
body{
  background: #ddd;
  margin: 0;
  padding: 0;
  margin-bottom: 50px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
}
.nav{
  text-align: right;
  margin-top: 40px;
  margin-right: 50px;
}

.nav a {
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  color: #444;
  margin-left: 20px;
  
}

.nav .router-link-active{
  color: rgba(68, 68, 68, 0.633);
  padding: 5px 2px;
  border-bottom: 3px solid orangered;
}
@media screen and (min-width : 280px) and (max-width : 650px){
  .nav{
    text-align: center;
    margin-right: 0;
  }
}
</style>
