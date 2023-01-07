<template>
    <div class="updat">
        <app-header />
        <div class="even">
            <Updatevent />
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
import Updatevent from "@/components/Updatevent.vue";
import Footer from "@/components/Footer.vue";
import End from "@/components/End.vue";
export default {
    name: "updatevent",
    components: {
        AppHeader,
        Updatevent,
        Footer,
        End
    }
};
</script>
<style scoped>
.updat {
    background: var(--back-color);
}
.even {
    margin-top: 80px;
}
.endd {
    margin-top: 100px;
}
</style>
