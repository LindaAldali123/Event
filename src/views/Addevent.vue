<template>
    <div class="addev">
        <app-header2 />
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
import AppHeader2 from "@/components/AppHeader2.vue";
import Addevent from "@/components/Addevent.vue";
import Footer from "@/components/Footer.vue";
import End from "@/components/End.vue";
export default {
    name: "Home",
    components: {
        AppHeader2,
        Addevent,
        Footer,
        End
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
