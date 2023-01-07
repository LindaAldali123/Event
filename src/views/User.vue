<template>
    <div class="user">
        <app-header />
        <div class="us">
            <User />
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
import User from "@/components/User.vue";
import Footer from "@/components/Footer.vue";
import End from "@/components/End.vue";
export default {
    name: "user",
    components: {
        AppHeader,
        User,
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
