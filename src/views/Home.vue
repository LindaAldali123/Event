<template>
    <div class="home">
        <app-header />
        <div class="clearfix"></div>
        <div class="slid">
            <Slider />
        </div>
        <div class="clearfix"></div>
        <div class=" eve">
            <Event />
        </div>
        <Organizers />
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
import Slider from "@/components/Slider.vue";
import Event from "@/components/Event.vue";
import Organizers from "@/components/Organizers.vue";
import Footer from "@/components/Footer.vue";
import End from "@/components/End.vue";
export default {
    name: "Home",
    components: {
        AppHeader,
        Slider,
        Event,
        Organizers,
        Footer,
        End
    }
};
</script>
<style scoped>
.eve {
    margin-top: 550px;
}
.endd {
    margin-top: 100px;
}
</style>
