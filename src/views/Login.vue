<template>
    <div class="Login">
        <Login />
        <div class="clearfix"></div>
        <div class="fo">
            <Footer />
        </div>
        <div class="endd">
            <End />
        </div>
    </div>
</template>
<script>
import Login from "@/components/Login.vue";
import Footer from "@/components/Footer.vue";
import End from "@/components/End.vue";
export default {
    name: "login",
    components: {
        Login,
        Footer,
        End
    }
};
</script>
<style scoped>
.Login {
    background: var(--back-color);
}
@media (max-width: 969px) {
    .fo {
        margin-top: 100px;
    }
}
.endd {
    margin-top: 100px;
}
</style>
