const { createApp }                          = Vue;
const { createRouter, createWebHashHistory } = VueRouter;

// Sesuaikan dengan URL project CI4 kamu
const apiUrl = 'http://localhost/lab11_ci/ci4/public';

// =========================================================================
// AXIOS INTERCEPTORS — Otomatis suntikkan token di setiap request
// =========================================================================
axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('userToken');
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Tangkap response error 401 secara global
axios.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            alert('Sesi Anda telah berakhir atau Token tidak sah. Silakan login kembali.');
            localStorage.clear();
            window.location.href = '#/login';
            window.location.reload();
        }
        return Promise.reject(error);
    }
);
// =========================================================================

// 1. Definisikan rute
const routes = [
    { path: '/',      component: Home  },
    { path: '/login', component: Login },
    {
        path:      '/artikel',
        component: Artikel,
        meta: { requiresAuth: true }
    },
    {
        path:      '/about',
        component: About,
        meta: { requiresAuth: true }
    }
];

// 2. Buat instance router
const router = createRouter({
    history: createWebHashHistory(),
    routes
});

// 3. Navigation Guards
router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';

    if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
        alert('Akses Ditolak! Anda harus login terlebih dahulu.');
        next('/login');
    } else {
        next();
    }
});

// 4. Root App
const app = createApp({
    data() {
        return {
            isLoggedIn: false,
            userName:   ''
        }
    },
    mounted() {
        this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        this.userName   = localStorage.getItem('userName') || '';
    },
    methods: {
        logout() {
            if (confirm('Apakah Anda yakin ingin keluar aplikasi?')) {
                localStorage.clear();
                this.isLoggedIn = false;
                this.userName   = '';
                this.$router.push('/');
            }
        }
    }
});

app.use(router);
app.mount('#app');