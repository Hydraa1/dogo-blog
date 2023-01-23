<template>
    <div class="post">
        <router-link :to="{name : 'Postdetails', params:{id : post.id}}" class="postslink">
            <h3 class="poststitle">{{ post.title }}</h3>
        </router-link>
        <div class="temp">
            <div class="postsbody">
                <p class="poststext">{{snippet}}</p>
                <span class="poststag" v-for="tag in post.tags" :key="tag">#{{ tag }} </span>
            </div>
        </div>
    </div>
</template>
<script>
import { computed, ref } from '@vue/runtime-core'

export default {
    props:['post'],
    setup(props){
        

        const snippet = computed(() =>{
            return props.post.body.substring(0,100) + '...'
        })

        
        
        return{snippet}
    }
}
</script>
<style>
    .postslink{
        text-decoration: none;
    }
    .poststitle{
        color: white;
        background: orangered;
        transform: rotate(-4deg);
        font-size: 25px;
        padding: 5px 20px;
        width: 40%;
        margin-left: 40px;
        margin-bottom: 30px;
        text-align: center;
        text-transform: capitalize;
    }
    .postsbody{
        background: white;
        padding: 10px 50px 20px 50px;
        text-align: left;
        border-radius: 10px;
    }
    .poststext{
        color: #444;
        font-size: 16px;
    }
    .poststag{
        color: orangered;
        font-weight: bold;
        padding: 0 5px 0 5px;
        font-size: 18px;
        text-transform: lowercase;
    }
    .temp{
        padding: 0 60px;
        margin-bottom: 80px;
    }


    @media screen and (min-width : 280px) and (max-width : 650px){
        .poststitle{
            width: 50%;
            font-size: 14px;
            font-weight: bold;
            margin-left: 13px;
            margin-bottom: 15px;
            transform: rotate(-3deg);
        }
        .postsbody{
            padding: 5px 20px 15px 20px;
        }
        .temp{
            padding: 0 25px;
            margin-bottom: 60px;
        }
        .poststext{
            font-size: 15px;
        }
        .poststag{
            font-size: 16px;
        }
    }

    @media screen and (min-width : 651px) and (max-width : 1150px){
        .poststitle{
            font-size: 15px;
            margin-left: 0;
            width: 50%;
        }
        .temp{
            padding: 0 12px;
            margin-left: 5px;
            margin-bottom: 50px;
        }
        .postsbody{
            padding: 5px 15px 20px 20px;
        }
        .poststext{
            font-size: 14px;
        }
        .poststag{
            font-size: 16px;
        }
    }
</style>