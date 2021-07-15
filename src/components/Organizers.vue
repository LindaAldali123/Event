<template>
    <div>
        <section id="team" class="team section-bg">
            <div class="container" data-aos="fade-up">
                <div class="section-title">
                    <!-- <h2>Team</h2> -->
                    <h3 class="blue">Famous Party <span>Organizers</span></h3>
                </div>

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
                    >
                        <div
                            class="item"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <div class="member">
                                <div class="member-img">
                                    <img
                                        src="../assets/1.jpg"
                                        class="img-fluid"
                                        alt=""
                                    />
                                    <div class="social">
                                        <a href=""
                                            ><i class="fa fa-twitter"></i
                                        ></a>
                                        <a href=""
                                            ><i class="fa fa-facebook"></i
                                        ></a>
                                        <a href=""
                                            ><i class="fa fa-instagram"></i
                                        ></a>
                                        <a href=""
                                            ><i class="fa fa-linkedin"></i
                                        ></a>
                                    </div>
                                </div>
                                <div class="member-info">
                                    <h4>Walter White</h4>
                                    <span>Chief Executive Officer</span>
                                </div>
                            </div>
                        </div>

                        <div
                            class="item"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div class="member">
                                <div class="member-img">
                                    <img
                                        src="../assets/2.jpg"
                                        class="img-fluid"
                                        alt=""
                                    />
                                    <div class="social">
                                        <a href=""
                                            ><i class="fa fa-twitter"></i
                                        ></a>
                                        <a href=""
                                            ><i class="fa fa-facebook"></i
                                        ></a>
                                        <a href=""
                                            ><i class="fa fa-instagram"></i
                                        ></a>
                                        <a href=""
                                            ><i class="fa fa-linkedin"></i
                                        ></a>
                                    </div>
                                </div>
                                <div class="member-info">
                                    <h4>Sarah Jhonson</h4>
                                    <span>Product Manager</span>
                                </div>
                            </div>
                        </div>

                        <div
                            class="item"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <div class="member">
                                <div class="member-img">
                                    <img
                                        src="../assets/3.jpg"
                                        class="img-fluid"
                                        alt=""
                                    />
                                    <div class="social">
                                        <a href=""
                                            ><i class="fa fa-twitter"></i
                                        ></a>
                                        <a href=""
                                            ><i class="fa fa-facebook"></i
                                        ></a>
                                        <a href=""
                                            ><i class="fa fa-instagram"></i
                                        ></a>
                                        <a href=""
                                            ><i class="fa fa-linkedin"></i
                                        ></a>
                                    </div>
                                </div>
                                <div class="member-info">
                                    <h4>William Anderson</h4>
                                    <span>CTO</span>
                                </div>
                            </div>
                        </div>

                        <div
                            class="item"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <div class="member">
                                <div class="member-img">
                                    <img
                                        src="../assets/4.jpg"
                                        class="img-fluid"
                                        alt=""
                                    />
                                    <div class="social">
                                        <a href=""
                                            ><i class="fa fa-twitter"></i
                                        ></a>
                                        <a href=""
                                            ><i class="fa fa-facebook"></i
                                        ></a>
                                        <a href=""
                                            ><i class="fa fa-instagram"></i
                                        ></a>
                                        <a href=""
                                            ><i class="fa fa-linkedin"></i
                                        ></a>
                                    </div>
                                </div>
                                <div class="member-info">
                                    <h4>Amanda Jepson</h4>
                                    <span>Accountant</span>
                                </div>
                            </div>
                        </div>
                    </carousel>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
require(["aos"], function(AOS) {
    AOS.init({
        easing: "ease-in-out-sine"
    });
});
import carousel from "vue-owl-carousel";
export default {
    name: "Organizers",
    components: { carousel },
    data() {
        return {};
    }
};
</script>
