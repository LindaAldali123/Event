import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import store from './store';
import './scss/main.scss';
import 'normalize.css';
import 'aos';
import 'aos/dist/aos.js';
import 'aos/dist/aos.css';
import 'font-awesome/package.json';
import 'font-awesome/css/font-awesome.css';
import 'font-awesome/css/font-awesome.min.css';
import 'popper.js';
import 'jquery';
import './css/header.css';
import './css/style.css';
import './css/Event.css';
import './css/Footer.css';
import './css/Login.css';
import 'mixitup';
import 'mixitup/dist/mixitup';
import './css/Addevent.css';
import './css/header2.css';
import './css/Eventdetail.css';
import './css/User.css';
import './css/Summ.css';
import './css/Payment.css';
import './css/Contact.css';
import './css/Dashboard.css';
import './css/Updatev.css';
import './css/Organizers.css';
import './css/orgev.css';
import 'vue-owl-carousel';
import 'vue-owl-carousel2';
import 'axios';
import 'axios/dist/axios';
import 'axios/lib/core/Axios';
import 'axios/lib/axios';
import 'vue-axios';
import 'vue-owl-carousel2/dist/vue-owl-carousel2';
//import "./js/custom";
//import "./graphql/Queries";
new Vue({
	router,
	store,
	// apolloProvider,
	render: (h) => h(App),
}).$mount('#app');
