import { createRouter,createWebHistory } from "vue-router";

import Home from "../routes/Home.vue";



import Contactbook from "../routes/Contactbook.vue";

const router = createRouter ({
    history:createWebHistory(),
    routes:[
        {
            path:'/',
            component:Home
        },
     
        {
            path:'/contactbook/:id',
            component: Contactbook
        }
    ]
});

export default router;