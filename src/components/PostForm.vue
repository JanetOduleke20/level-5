<template>
  <div class="">
    <div class="d-flex">
        <form @submit.prevent="handleSubmit">
            <div class="form-group me-2">
                <input type="text" v-model="newPost" class="form-control" placeholder="What's on your mind?">
            </div>
            <div class="form-group me-2">
                <button class="btn btn-md border border-dark" type="submit">Add Task</button>
            </div>

        </form>
    </div>
    {{newPost}}
  </div>
</template>

<script>
import {usePostsStore} from '../stores/PostsStore'

export default {
    setup() {
        const postStore = usePostsStore();

        // const newPost  = ref('')

        // const handleSubmit = () => {
        //     postStore.addPost({id: 3, content: newPost.value, popular: false, user_id: 2})
        //     console.log(newPost.value)
        // }

        return { postStore}
    },
    data() {
        return {
            newPost: ''
        }
    },
    methods: {
        handleSubmit() {
            this.postStore.addPost({id: 3, content: this.newPost, popular: false, user_id: 2})
            console.log(this.newPost)
        }
    }
}
</script>

<style>

</style>