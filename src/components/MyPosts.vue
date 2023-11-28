<template>
 <div class="row mx-auto my-4">
    <div class="col-6">
        <div class="">
            <PostForm/>
        </div>
        <h4 class="fw-bold">All posts</h4>
        <div v-for="post in postStore.posts" :key="post.id" class="">
            <div class="card px-2 shadow-sm my-1 d-flex">
                <div>{{post.content}}</div>
                <div class="align-items-end">
                    <span class="material-symbols-outlined icon" @click="deletePost(post.id)">delete</span>
                    <span class="material-symbols-outlined icon" :class="post.popular ? ' text-danger' : ''" @click="togglePopular(post.id)">favorite</span>

                </div>
            </div>
        </div>

        <h4 class="fw-bold">Popular posts</h4>
        <div v-for="post in postStore.populars" :key="post.id">
            <div>{{post.content}}</div>
        </div>

    </div>
 </div>
</template>

<script>
import {usePostsStore} from '../stores/PostsStore'
import PostForm  from './PostForm.vue'
    export default {
        components: {
            PostForm
        },
        setup() {
            const postStore = usePostsStore()

            const deletePost = (id) => {
                console.log(id)
                postStore.deletePost(id);
            }

            const togglePopular = (id) =>{
                postStore.togglePopular(id)
            }
            return {postStore, deletePost, togglePopular}

        }

    }
</script>

<style scoped>
template {
    align-content: center;
}
.icon {
    cursor: pointer;
}
</style>

