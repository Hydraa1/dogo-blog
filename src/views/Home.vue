<template>
    <div class="main">
        <!-- {{ newposts }} -->
        <div class="mainposts">
            <div v-if="error">{{ error }}</div>
            <div v-if="posts.length" >
                <Postlist :posts="posts"/>
            </div>
            <div v-else :class="{loadingclass: loadingclass}">{{loading}}</div>
        </div>
            
        <div class="maintags">
            <span @click="creatnewposts(taglist)" class="tag" v-for="taglist in taglists" :key="taglist">#{{ taglist }}</span>
        </div>
      
    </div>
</template>
  
<script>
    import Postlist from '../components/Postlist.vue'
    import { ref, } from '@vue/reactivity'
    import getposts from '../composibles/getposts'
    import { computed, watch } from '@vue/runtime-core'
  
  
    export default {
        name: 'Home',
        components:{Postlist},
        setup(){
            let loading = ref('Loading...')
            let loadingclass = ref(false)
            let taglists = ref(['webdev','coding','css','html','news','java','python','js','devs'])
            const {posts,error,load} = getposts()
            load()
           
            const creatnewposts = async (taglist) => {
                await load()
                posts.value =  posts.value.filter( (item) => item.tags.includes(taglist))
                if (posts.value.length < 1){
                    loading.value = 'No Related Post Found!'
                    loadingclass.value = true
                }
            } 
                       

            return{posts, error, taglists, creatnewposts, loading, loadingclass}
        }
    }
</script>
<style>
   .main{
    padding: 0  30px;
    margin-top: 50px;
   }
   
   .mainposts{
    display: inline-block;
    width: 75%;
   }
   .maintags{
    display: inline-block;
    position: absolute;
    top: 35%;
    min-width: 100px;
    padding: 25px 40px;
    margin: 0 auto;
    font-size: 20px;
    color: rgb(126, 48, 19);
    font-weight: bolder; 
   }
   .tag{
    display: inline-block;
    padding: 10px 10px;
    cursor: pointer;
   }
   .loadingclass{
    color: rgb(255, 13, 0);
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
   }
   @media screen and (max-width : 650px){
    .main{
        padding: 0;
        margin-top: 30px;
        display: flex;
        flex-direction: column-reverse;
    }
    .mainposts{
        position: relative;
        width: 100%;
        margin-top: 5%;
    }
    .maintags{
        position: relative;
        background: white;
        text-align: center;
        padding: 10px 40px;
    }
    .tag{
        padding: 5px 10px;
        font-size: 16px;
    }
    .loadingclass{
        padding-bottom: 10px;
    }
   }

   
</style>