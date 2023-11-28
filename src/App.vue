<template>
<div>
 

  <router-view/>
  </div>
</template>

<script>
// import { usePostsStore } from './stores/PostsStore'
import axios from 'axios'
export default {
  name: 'App',
  

  data() {
    return {
      delay: null,
      isPlaying: false,
      posts: []
    }
  },
  beforeMount() {
    axios.get("http://localhost:8000/api/getPosts").then((res)=> {
        console.log(res.data.posts);
      this.posts = res.data.posts
    })
  },
  methods: {
    startGame() {
      this.isPlaying = true;
      this.delay = Math.random() * 5000;
    },
    gameResult(res) {
      console.log(res);
    }  
  }



}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
.availableItems {
  background-color: gold;
  padding: 8px 10px;
  /* text-align: center; */
}
a {
  text-decoration: none;
  color: blue

}
</style>
