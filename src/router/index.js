import {createRouter, createWebHistory} from 'vue-router';
import HomeComponent  from '../components/HomeComponent.vue';
import SignUp  from '../components/SignUp.vue';
import UsersComponent  from '../components/UsersComponent.vue';
import UserDetails  from '../components/UserDetails.vue';
import DashBoard  from '../components/DashBoard.vue';
import MyPosts  from '../components/MyPosts.vue';



const routes = [
    {
        path: '/',
        component: HomeComponent,
        name: "Home"
    },
    {
        path: "/register",
        component: SignUp,
        name: "SignUp"
    },
    {
        path: "/users",
        component: UsersComponent,
        name: "Users"
    },
    {
        path: "/users/:id",
        component: UserDetails,
        name: "Details"
    }, 
    {
        path: '/dashboard',
        component: DashBoard,
        name: "Dashboard"
    },
    {
        path: '/posts',
        component: MyPosts,
        name: "Posts"
    }

]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router;