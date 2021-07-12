<template>
    <div class="container">
        <carousel
            :items="4"
            :autoplay="true"
            :dots="true"
            :loop="true"
            :margin="25"
            :nav="true"
            :autoplaySpeed="true"
            :autoplayTimeout="5000"
            :autowidth="true"
            :mouseDrag="true"
            :responsive="{
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }"
            ><!--class="owl-carousel owl-theme"-->
            <div class="mix item foryou food " data-aos="zoom-out">
                <div class="card-sl">
                    <div class="card-image">
                        <img src="../assets/s1.jpg" />
                    </div>

                    <a class="card-action" href="#"
                        ><i class="fa fa-heart"></i
                    ></a>
                    <div class="card-heading">
                        Audi Q8
                    </div>
                    <div class="card-date">
                        Sun,jul 25,12:00PM
                    </div>
                    <div class="card-text">
                        crossover SUV coup made by Audi.
                    </div>
                    <div class="card-foteer">
                        <i class="fa fa-user-o"></i> 2.8k creator followers
                    </div>
                    <a :href="link3" class="card-button"> Purchase</a>
                </div>
            </div>
            <div class="mix item online food " data-aos="fade-up">
                <div class="card-sl">
                    <div class="card-image">
                        <img src="../assets/s1.jpg" />
                    </div>

                    <a class="card-action" href="#"
                        ><i class="fa fa-heart"></i
                    ></a>
                    <div class="card-heading">
                        Audi Q8
                    </div>
                    <div class="card-date">
                        Sun,jul 25,12:00PM
                    </div>
                    <div class="card-text">
                        crossover SUV coup made by Audi.
                    </div>
                    <div class="card-foteer">
                        <i class="fa fa-user-o"></i> 2.8k creator followers
                    </div>
                    <a :href="link3" class="card-button"> Purchase</a>
                </div>
            </div>
            <div class="mix item music food " data-aos="fade-up">
                <div class="card-sl">
                    <div class="card-image">
                        <img src="../assets/s1.jpg" />
                    </div>

                    <a class="card-action" href="#"
                        ><i class="fa fa-heart"></i
                    ></a>
                    <div class="card-heading">
                        Audi Q8
                    </div>
                    <div class="card-date">
                        Sun,jul 25,12:00PM
                    </div>
                    <div class="card-text">
                        crossover SUV coup made by Audi.
                    </div>
                    <div class="card-foteer">
                        <i class="fa fa-user-o"></i> 2.8k creator followers
                    </div>
                    <a :href="link3" class="card-button"> Purchase</a>
                </div>
            </div>
            <div class="mix item music jul " data-aos="zoom-out">
                <div class="card-sl">
                    <div class="card-image">
                        <img src="../assets/s1.jpg" />
                    </div>

                    <a class="card-action" href="#"
                        ><i class="fa fa-heart"></i
                    ></a>
                    <div class="card-heading">
                        Audi Q8
                    </div>
                    <div class="card-date">
                        Sun,jul 25,12:00PM
                    </div>
                    <div class="card-text">
                        crossover SUV coup made by Audi.
                    </div>
                    <div class="card-foteer">
                        <i class="fa fa-user-o"></i> 2.8k creator followers
                    </div>
                    <a :href="link3" class="card-button"> Purchase</a>
                </div>
            </div>
            <div class="mix item music jul " data-aos="zoom-out">
                <div class="card-sl">
                    <div class="card-image">
                        <img src="../assets/s1.jpg" />
                    </div>

                    <a class="card-action" href="#"
                        ><i class="fa fa-heart"></i
                    ></a>
                    <div class="card-heading">
                        Audi Q8
                    </div>
                    <div class="card-date">
                        Sun,jul 25,12:00PM
                    </div>
                    <div class="card-text">
                        crossover SUV coup made by Audi.
                    </div>
                    <div class="card-foteer">
                        <i class="fa fa-user-o"></i> 2.8k creator followers
                    </div>
                    <a :href="link3" class="card-button"> Purchase</a>
                </div>
            </div>
            <div class="mix item music jul " data-aos="zoom-out">
                <div class="card-sl">
                    <div class="card-image">
                        <img src="../assets/s1.jpg" />
                    </div>

                    <a class="card-action" href="#"
                        ><i class="fa fa-heart"></i
                    ></a>
                    <div class="card-heading">
                        Audi Q8
                    </div>
                    <div class="card-date">
                        Sun,jul 25,12:00PM
                    </div>
                    <div class="card-text">
                        crossover SUV coup made by Audi.
                    </div>
                    <div class="card-foteer">
                        <i class="fa fa-user-o"></i> 2.8k creator followers
                    </div>
                    <a :href="link3" class="card-button"> Purchase</a>
                </div>
            </div>
        </carousel>
    </div>
</template>
<script>
require(["aos"], function(AOS) {
    AOS.init({
        easing: "ease-in-out-sine"
    });
});
import carousel from "vue-owl-carousel2";
export default {
    name: "Likeevent",
    components: { carousel },
    data() {
        return {
            link3: "/eventdetail"
        };
    }
};
</script>
<style scoped>
carousel {
    width: 100%;
}
</style>
