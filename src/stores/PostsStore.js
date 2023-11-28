import {defineStore} from 'pinia';

export const usePostsStore = defineStore('posts', {
    state: () => ({
        posts: [
            {id: 1, content: "Hello, it's Monday!", user_id: 2, popular: true},
            {id: 2, content: "Hello, it's Tuesday!", user_id: 20, popular: false},
        ],
        name: "Janet"
    }),
    getters: {
        populars() {
            return this.posts.filter((post) => post.popular)
        }
    },
    actions: {
        addPost(post) {
            this.posts.push(post);
        },
        deletePost(id) {
            this.posts = this.posts.filter((post) => post.id!== id);
        },
        togglePopular(id) {
            this.posts = this.posts.filter((post) => {
                if(post.id == id) {
                    post.popular != post.popular
                }
            })
            
        }
    }
    
})