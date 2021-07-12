<template>
    <div class="deta">
        <app-header />
        <div class="clearfix"></div>
        <div class="slid">
            <Eventdetail />
        </div>
        <p class="blue">Other Events You May Like</p>
        <Likeevent />
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
import Footer from "@/components/Footer.vue";
import End from "@/components/End.vue";
import Likeevent from "@/components/Likeevent.vue";
export default {
    name: "eventdetail",
    components: {
        AppHeader,
        Eventdetail,
        Likeevent,
        Footer,
        End
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
