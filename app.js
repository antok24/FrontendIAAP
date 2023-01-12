const routes=[
    {path:'/home',component:home},
    {path:'/employee',component:employee},
    {path:'/mahasiswa',component:mahasiswa}
]

const router=VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

const app = Vue.createApp({
    router
})

app.use(router)

app.mount('#app')