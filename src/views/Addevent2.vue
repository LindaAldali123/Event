<template>
    <div class="addev2">
        <app-header2 />
        <div class="even">
            <Addevent2 />
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
import AppHeader2 from "@/components/AppHeader2.vue";
import Addevent2 from "@/components/Addevent2.vue";
import Footer from "@/components/Footer.vue";
import End from "@/components/End.vue";
export default {
    name: "Home",
    components: {
        AppHeader2,
        Addevent2,
        Footer,
        End
    }
};
</script>
<style scoped>
.addev2 {
    background: var(--back-color);
}
.even {
    margin-top: 80px;
}
.endd {
    margin-top: 100px;
}
</style>
