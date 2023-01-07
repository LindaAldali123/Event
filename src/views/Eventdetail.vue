<template>
    <div class="deta">
        <app-header />
        <div class="clearfix"></div>
        <div class="backeve">
            <!-- <img src="../assets/s1.jpg" width="100%" height="500" />-->
        </div>
        <div class="sli">
            <Eventdetail />
        </div>
        <div v-if="token">
            <p class="blue">Other Events You May Like</p>
            <Likeevent />
        </div>
        <!--<p class="blue">More Events From This Organizer</p>
        <Organizerevent />-->
        <Footer />
        <div class="endd">
            <End />
        </div>
        <a href="#" class="back-to-top"><i class="fa fa-angle-up"></i></a>
    </div>
</template>
<script>
// @ is an alias to /src
import AppHeader from "@/components/AppHeader.vue";
import Eventdetail from "@/components/Eventdetail.vue";
//import Organizerevent from "@/components/Organizerevent.vue";
import VueCookies from "vue-cookies";
import Footer from "@/components/Footer.vue";
import End from "@/components/End.vue";
import Likeevent from "@/components/Likeevent.vue";
export default {
    name: "eventdetail",
    components: {
        AppHeader,
        Eventdetail,
        Likeevent,
        // Organizerevent,
        Footer,
        End
    },
    data() {
        return {
            token: VueCookies.get("session").token
        };
    }
};
</script>
<style scoped>
.deta {
    background-color: var(--back-color);
}
.endd {
    margin-top: 100px;
}
.deta p {
    text-align: center;
    font-weight: bold;
    margin-top: 25px;
    font-size: 26px;
}
</style>
