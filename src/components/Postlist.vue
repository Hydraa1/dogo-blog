<template>
    <div class="posts">
        <div v-for="post in posts" :key="post">
            <Singlepost :post="post"/>
        </div>
    </div>
</template>
<script>
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'
import Singlepost from './Singlepost.vue'

export default {
    props:['posts'],
    components:{Singlepost},
    setup(){
    }

}
</script>
<style>
    .posts{
        padding: 5px 65px;
    }
   
    @media screen and (min-width : 280px) and (max-width : 650px){
        .posts{
            padding: 0;
            width: 100%;
        }
    }
</style>