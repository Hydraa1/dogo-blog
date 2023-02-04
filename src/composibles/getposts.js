import { ref, } from '@vue/reactivity'

const getposts = () => {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            let data = await fetch('http://localhost:3000/posts')
            // let data = await fetch('http://192.168.43.44:3000/posts')
            if (!data.ok){
                throw Error('No post available')
            }
            posts.value = await data.json()
        } 
        catch (err) {
            error.value = err.message
        }
    }
        
    return { posts, error, load }
}

export default getposts