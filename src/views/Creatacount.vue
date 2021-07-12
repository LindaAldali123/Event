<template>
    <div class="crea">
        <Creatacount />
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
import Creatacount from "@/components/Creatacount.vue";
import Footer from "@/components/Footer.vue";
import End from "@/components/End.vue";
export default {
    name: "creatacount",
    components: {
        Footer,
        Creatacount,
        End
    }
};
</script>
<style scoped>
.crea {
    background: var(--back-color);
}
@media (max-width: 969px) {
    .fo {
        margin-top: 60px;
    }
}
.endd {
    margin-top: 100px;
}
</style>
