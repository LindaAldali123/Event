<template>
    <div class="addev" v-if="token">
        <app-header />
        <div class="even">
            <Addevent />
        </div>
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
import Addevent from "@/components/Addevent.vue";
import Footer from "@/components/Footer.vue";
import End from "@/components/End.vue";
import VueCookies from "vue-cookies";
export default {
    name: "Home",
    components: {
        AppHeader,
        Addevent,
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
.addev {
    background: var(--back-color);
}
.even {
    margin-top: 80px;
}
.endd {
    margin-top: 100px;
}
</style>
