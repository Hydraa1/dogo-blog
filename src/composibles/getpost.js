import { ref, } from '@vue/reactivity'

const getpost = (id) => {
    const post = ref([])
    const error = ref(null)

    const load = async () => {
        try {
            let data = await fetch('http://localhost:3000/posts/' + id)
            // let data = await fetch('http://192.168.43.44:3000/posts/' + id)
            if (!data.ok){
                throw Error('No post available')
            }
            post.value = await data.json()
        } 
        catch (err) {
            error.value = err.message
        }
    }
        
    return { post, error, load }
}

export default getpost