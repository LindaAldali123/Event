<template>
    <div class="Sign">
        <Signup />
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
import Signup from "@/components/Signup.vue";
import Footer from "@/components/Footer.vue";
import End from "@/components/End.vue";
export default {
    name: "signup",
    components: {
        Signup,
        Footer,
        End
    }
};
</script>
<style scoped>
.Sign {
    background: var(--back-color);
}
.endd {
    margin-top: 100px;
}
</style>
