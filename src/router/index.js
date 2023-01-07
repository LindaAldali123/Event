import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
//import login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
	{
		path: '/login',
		name: 'Login',
		component: () => import('../views/Login.vue'),
	},
	{
		path: '/signup',
		name: 'Signup',
		component: () => import('../views/Signup.vue'),
	},
	{
		path: '/creatacount',
		name: 'Creatacount',
		component: () => import('../views/Creatacount.vue'),
	},
	{
		path: '/addevent',
		name: 'Addevent',
		component: () => import('../views/Addevent.vue'),
	},
	{
		path: '/eventdetail',
		name: 'Eventdetail',
		component: () => import('../views/Eventdetail.vue'),
	},
	{
		path: '/user',
		name: 'User',
		component: () => import('../views/User.vue'),
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: () => import('../views/Dashboard.vue'),
	},
	{
		path: '/payment',
		name: 'Payment',
		component: () => import('../views/Payment.vue'),
	},
	{
		path: '/contact',
		name: 'Contact',
		component: () => import('../views/Contact.vue'),
	},
	{
		path: '/updatevent',
		name: 'Updatevent',
		component: () => import('../views/Updatevent.vue'),
	},
	{
		path: '/summa',
		name: 'Summa',
		component: () => import('../views/Summa.vue'),
	},
	{
		path: '/organizevedetail',
		name: 'Organizevedetail',
		component: () => import('../views/Organizevedetail.vue'),
	},
	{
		path: '/Queries_ids',
		name: 'Queries_ids',
		component: () => import('../graphql/Queries_ids'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
