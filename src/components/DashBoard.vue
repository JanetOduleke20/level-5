<template>
<div class="row">
    <div class="col-md-4"></div>
    <form class="col-md-4 card px-1 px-2" @submit.prevent="handleSubmit">
    
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"></label>
            <textarea cols="60" type="email" name="content" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Write your post..." v-model="content"></textarea>
            <div id="postHelp" class="form-text">Max words - 500</div>
            <div class="form-group mt-2">
                <label for="" class="fw-bold">Add images</label>
                <input type="file" name="image" class="form-control" @change="uploadImage" multiple/>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Post</button>
    </form>
    <div class="col-md-4">
        <div v-for="post in posts" :key="post.id" class="card">
            <div class="">{{post.content}}</div>
            <div v-for="image in post.images" :key="image">
                <img :src="`http://localhost:8000/storage/`+image" alt="" id="image">
                
            </div>
        </div>    
    </div>

    <button @click="userStore.count++">Increase count</button>
    <button @click="increaseCount">Increase count</button>

    {{userStore.count}}
    {{userStore.multiplyCount}}
    <button @click="goHome">Go to home</button>

    <div v-for="item in userStore.items" :key="item.id">
        <div>{{item.name}}</div>
        <button @click="deleteItem(item.id)">Delete</button>
    </div>
</div>
  
</template>

<script>
import axios from 'axios';
import {useUserStore} from '../stores/UserStore'

export default {
    beforeMount() {
        axios.get("http://localhost:8000/api/getPosts").then((res)=> {
            this.posts =res.data.posts;
            console.log(this.posts)
        })
    },
    setup() {
        const userStore = useUserStore();
        return {userStore}
    },
    data() {
        return {
            posts: [],
            content: '',
            images: null
        }
    },
    // const userStore = useUserStore();
    methods: {
        uploadImage(e) {
            this.images = e.target.files;
        },
        handleSubmit() {
            const formData = new FormData();
            formData.append('content', this.content);
            for (let i = 0; i < this.images.length; i++) {
                const name = Math.floor(Math.random * 5000);
                formData.append("images[]", this.images[i]+name)
            }
            const config = {headers: {"Content-Type": "multipart/form-data"}}
            axios.post("http://localhost:8000/api/post", formData, config).then((res)=> {
                console.log(res.data)
            })
        },
        increaseCount() {
            this.userStore.count++;
        },
        goHome() {
            this.$router.push('/')
        }
    }
}
</script>

<style>
#image {
    width: 200px;
    height: 200px;
}
</style>