<template >
    <div>
        <h1 class="createblog"><span class="createspan"> Create New Blog </span></h1>
        <Createsingle/>
    </div>
</template>
<script>
import Createsingle from '../components/Createsingle.vue'

export default {
    components: {Createsingle}
}
</script>
<style>
    .createblog{
        color: orangered;
        width: 100%;
        margin-bottom: 40px;
    }
    .createspan{
        padding: 0 70px;
    }
    @media screen and (min-width : 280px) and (max-width : 650px){
        .createblog{
            font-size: 22px;
            margin-top: 30px;
            margin-bottom: 20px;
            text-align: center;
        }
        .createspan{
            padding: 0;
            text-align: center;
        }
    }
</style>