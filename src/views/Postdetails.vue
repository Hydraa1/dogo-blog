<template>
    <div class="singlepost">
        <div v-if="error">{{error}}</div>
        <div v-if="post">
            <h3 class="singletitle">{{post.title}}</h3>
            <div class="temp2">
                <div class="singlebody">
                    <p class="singletext">{{post.body}}</p>
                    <div :style="{'text-align': 'center', 'padding-top': '5px'}">
                        <span class="singletag" v-for="tag in post.tags" :key="tag">#{{tag}}</span>
                    </div>
                </div>
            </div>    
        </div>
        <div v-else>
            Loading...
        </div>
    </div>
</template>
<script>
import { onMounted } from '@vue/runtime-core'
import getpost from '../composibles/getpost'

export default {
    props: ['id'],
    setup(props){
        const {post, error, load} = getpost(props.id)
        onMounted( async () => {
           await load()
        })
        

        

        return{post, error}
    }
}
</script>
<style>
    .singlepost{
        margin: 30px 130px;
        padding: 30px 60px;
    }
    .singletitle{
        color: white;
        background: orangered;
        font-size: 25px;
        padding: 10px 20px;
        text-align: center;
        margin-bottom: 40px;
    }
    .singlebody{
        background: white;
        padding: 20px 30px 30px 30px;
        border-radius: 5px;
    }
    .singletext{
        color: #444;
        font-size: 15px;
        line-height: 25px;
        text-align: left;
    }
    .singletag{
        color: orangered;
        font-weight: bold;
        padding: 0 5px 0 5px;
        font-size: 18px;
    }
    .temp2{
        padding: 0 40px;
    }

    @media screen and (min-width : 280px) and (max-width : 650px){
        .singlepost{
            margin: 0;
            padding: 0;
        }
        .singletitle{
            font-size: 20px;
            padding: 0 auto;
        }
        .temp2{
            padding: 0 10px;
        }
        .singletext{
            font-size: 14px;
        }
    }
    @media screen and (min-width : 651px) and (max-width : 1150px){
        .singlepost{
            margin: 0;
            padding: 0;
        }
        .singletitle{
            font-size: 22px;
            padding: 0 auto;
        }
        .temp2{
            padding: 0 20px;
        }
        
    }
</style>