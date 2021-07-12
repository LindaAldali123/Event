<template>
    <div class="contac">
        <app-header />
        <div class="clearfix"></div>
        <div class="con">
            <Contact />
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
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";
import End from "@/components/End.vue";
export default {
    name: "Home",
    components: {
        AppHeader,
        Contact,
        Footer,
        End
    }
};
</script>
<style scoped>
.endd {
    margin-top: 100px;
}
</style>
