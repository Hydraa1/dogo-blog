<template>
    <div class="forms">
        <form @submit.prevent="submitblog" class="form">
            <label class="label"> ID</label>
            <input type="number" class="input" v-model="sid">

            <label class="label" id="label"> Title</label>
            <input type="text" class="input" v-model="stitle">

            <label class="label" id="label"> Content</label>
            <input type="text" class="input" v-model="sbody">

            <label class="label" id="label">Tags <span class="span">(Double Click to add)</span></label>
            <input type="text" class="input" v-model="stags" @dblclick="addstags">
            <div v-for="tag in staglist" :key="tag" class="pill"> #{{tag}}</div>
            <div class="btnd">
                <button class="btn">Create Blog</button>
            </div>
        </form>
    </div>
</template>
<script>
import { ref } from '@vue/reactivity'
import getposts from '../composibles/getposts'
import { onMounted } from '@vue/runtime-core'
// import axios from 'axios'

export default {
    setup(){
        const {posts,error,load} = getposts()
        
        

        let sid =  ref(null)
        let sbody = ref('')
        let stitle = ref('')
        let stags = ref(''.toLowerCase())
        let staglist = ref([])
        let sposts = ref({id: null,
                title: null,
                body: null,
                tags: null })

        onMounted( async () => {
            await load()
            sid.value = posts.value.length + 1
        })

        const addstags = () => {
            if (stags.value !== '' && !staglist.value.includes(stags.value)){
                staglist.value.push(stags.value)
                
            }
            stags.value = ''
        }

        const submitblog = async () => {
            sposts.value.id = sid.value
            sposts.value.title = stitle.value
            sposts.value.body = sbody.value
            sposts.value.tags = staglist.value

            if (sposts.value.id !== '' && sposts.value.title !== '' && sposts.value.body !== '' && sposts.value.tags !== null){
                try {
                    const response = await axios.post('http://localhost:3000/posts', sposts.value)
                    // const response = await axios.post('http://192.168.43.44:3000/posts', sposts.value)
                    // console.log(response);
                    if (response.statusText === 'Created'){
                        alert('Blog Created Sucessfully')
                    }
                } catch (error) {
                    alert(error)
                }
            }else{
                alert('Enter All Info!!!')
            }
            
            sid.value = await sid.value
            sbody.value = ''
            stitle.value = ''
            stags.value = ''
            staglist.value = []
            sposts.value = {id: null,
                    title: null,
                    body: null,
                    tags: null }
        }

        
        

        return{sid, sbody, stitle, stags, addstags, staglist,sposts, submitblog, posts, error,}
    }
}
</script>
<style>
    .form{
        background: white;
        margin: 0 auto;
        width: 60%;
        padding: 60px 80px;
        border-radius: 10px;
    }
    .label{
        display: inline-block;
        margin: 10px 0 5px;
        letter-spacing: 1px;
        text-transform: uppercase;
        font-size: 16px;
        font-weight: bold;
        color: #aaa;
    }
    .span{
        font-style: italic;
        text-transform: capitalize;
        font-size: 14px;
        letter-spacing: 0.1px;
        color: #444;
    }
    .input{
        display: inline-block;
        border: none;
        border-bottom: 2px solid orangered;
        padding: 12px 10px;
        color: #444;
        width: 100%;
        box-sizing: border-box;
        outline-color: rgba(255, 68, 0, 0.444);
        outline-style: hidden;
        text-transform: lowercase;
    }
    #label{
        margin-top: 50px;
    }
    .btn{
        background: orangered;
        color: white;
        font-weight: bold;
        font-size: 16px;
        border: none;
        padding: 15px 70px;
        cursor: pointer;
        border-radius: 50px;
        letter-spacing: 1px;
    }
    .btnd{
        margin: 40px 0 0 0;
        text-align: center;
    }
    .pill{
        text-transform: lowercase;
        display: inline-block;
        background: rgba(255, 68, 0, 0.336);
        color: #777;
        margin: 10px 5px 0 10px;
        padding: 6px 12px;
        font-size: 13px;
        border-radius: 20px;
        font-weight: bold;
        letter-spacing: 1px;
        cursor: pointer;
        text-align: center;
        text-transform: lowercase;
    }
    @media screen and (min-width : 280px) and (max-width : 650px){
        .form{
            margin: 0 auto;
            padding: 30px 25px;
            width: 80%;
        }
        .label{
            font-size: 12px;
            margin-bottom: 10px;
        }
        .span{
            font-size: 10px;
        }
        #label{
            margin-top: 35px;
        }
        .input{
            padding: 10px 10px;
        }
        .btn{
            font-size: 14px;
            padding: 10px 50px;
        }
    }
</style>