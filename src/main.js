import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import store from "./store";
import "./scss/main.scss";
import "normalize.css";
import "aos";
import "aos/dist/aos.js";
import "aos/dist/aos.css";
import "font-awesome/package.json";
import "font-awesome/css/font-awesome.css";
import "font-awesome/css/font-awesome.min.css";
import "popper.js";
import "jquery";
import "./css/header.css";
import "./css/style.css";
import "./css/Event.css";
import "./css/Footer.css";
import "./css/Login.css";
import "mixitup";
import "mixitup/dist/mixitup";
import "./css/Addevent.css";
import "./css/header2.css";
import "./css/Eventdetail.css";
import "./css/User.css";
import "./css/Payment.css";
import "./css/Contact.css";
import "./css/Dashboard.css";
import "./css/Updatev.css";
import "./css/Organizers.css";
import "vue-owl-carousel";
import "vue-owl-carousel2";
import "vue-owl-carousel2/dist/vue-owl-carousel2";
//import "owl.carousel";
//import "owl.carousel/dist/assets/owl.carousel.css";
//import "owl.carousel/dist/assets/owl.carousel.min.css";
//import "owl.carousel/dist/assets/owl.theme.default.css";
//import "owl.carousel";
//import "owl.carousel/dist/owl.carousel.js";
//import "owl.carousel/dist/owl.carousel.min.js";
//import "owl.carousel/dist/assets/owl.carousel.css";
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
