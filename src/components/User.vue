<template>
    <div class="person">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="blog" data-aos="fade-up">
                        <div class="sidebar">
                            <img src="../assets/user.png" />
                            <p><span>User Name</span></p>
                            <p>0 orders , 0 Likes, 0 Following</p>
                            <h3 class="sidebar-title">Search</h3>
                            <div class="sidebar-item search-form">
                                <form action="">
                                    <input type="text" />
                                    <button type="submit">
                                        <i class="fa fa-search"></i>
                                    </button>
                                </form>
                            </div>
                            <!-- End sidebar search formn-->

                            <h3 class="sidebar-title">Categories</h3>
                            <div class="sidebar-item categories">
                                <ul>
                                    <li>
                                        <a href="#"
                                            >General <span>(25)</span></a
                                        >
                                    </li>
                                    <li>
                                        <a href="#"
                                            >Lifestyle <span>(12)</span></a
                                        >
                                    </li>
                                    <li>
                                        <a href="#">Travel <span>(5)</span></a>
                                    </li>
                                    <li>
                                        <a href="#">Design <span>(22)</span></a>
                                    </li>
                                    <li>
                                        <a href="#"
                                            >Creative <span>(8)</span></a
                                        >
                                    </li>
                                    <li>
                                        <a href="#"
                                            >Educaion <span>(14)</span></a
                                        >
                                    </li>
                                </ul>
                            </div>
                            <!-- End sidebar categories-->

                            <h3 class="sidebar-title">Recent Events</h3>
                            <div class="sidebar-item recent-posts">
                                <div class="post-item clearfix">
                                    <img src="../assets/s1.jpg" alt="" />
                                    <h4>
                                        <a href="blog-single.html"
                                            >Nihil blanditiis at in nihil
                                            autem</a
                                        >
                                    </h4>
                                    <time datetime="2020-01-01"
                                        >Jan 1, 2020</time
                                    >
                                </div>

                                <div class="post-item clearfix">
                                    <img src="../assets/s1.jpg" alt="" />
                                    <h4>
                                        <a href="blog-single.html"
                                            >Quidem autem et impedit</a
                                        >
                                    </h4>
                                    <time datetime="2020-01-01"
                                        >Jan 1, 2020</time
                                    >
                                </div>

                                <div class="post-item clearfix">
                                    <img src="../assets/s1.jpg" alt="" />
                                    <h4>
                                        <a href="blog-single.html"
                                            >Id quia et et ut maxime similique
                                            occaecati ut</a
                                        >
                                    </h4>
                                    <time datetime="2020-01-01"
                                        >Jan 1, 2020</time
                                    >
                                </div>

                                <div class="post-item clearfix">
                                    <img src="../assets/s1.jpg" alt="" />
                                    <h4>
                                        <a href="blog-single.html"
                                            >Laborum corporis quo dara net
                                            para</a
                                        >
                                    </h4>
                                    <time datetime="2020-01-01"
                                        >Jan 1, 2020</time
                                    >
                                </div>

                                <div class="post-item clearfix">
                                    <img src="../assets/s1.jpg" alt="" />
                                    <h4>
                                        <a href="blog-single.html"
                                            >Et dolores corrupti quae illo quod
                                            dolor</a
                                        >
                                    </h4>
                                    <time datetime="2020-01-01"
                                        >Jan 1, 2020</time
                                    >
                                </div>
                            </div>
                            <!-- End sidebar recent posts-->

                            <h3 class="sidebar-title">Tags</h3>
                            <div class="sidebar-item tags">
                                <ul>
                                    <li><a href="#">Online Events</a></li>
                                    <li><a href="#">#Party</a></li>
                                    <li><a href="#">#Family</a></li>
                                    <li><a href="#">#Personality</a></li>
                                    <li><a href="#">Mac</a></li>
                                    <li><a href="#">Design</a></li>
                                    <li><a href="#">Office</a></li>
                                    <li><a href="#">Creative</a></li>
                                    <li><a href="#">Studio</a></li>
                                    <li><a href="#">Photo</a></li>
                                    <li><a href="#">Trips</a></li>
                                    <li><a href="#">Marketing</a></li>
                                </ul>
                            </div>
                            <!-- End sidebar tags-->
                        </div>
                    </div>
                    <!-- End sidebar -->

                    <!-- End blog sidebar -->

                    <!-- End .row -->

                    <!-- End .container -->
                </div>
                <div class="col-md-8">
                    <h1 class="red">Account Information</h1>
                    <hr />
                    <h4>Account Email Adress</h4>
                    eng.*****@gmail.com
                    <br /><button class="chan">Change</button>
                    <hr />
                    <h4>Profile Photo</h4>
                    <input
                        type="file"
                        class="select"
                        placeholder="Upload Image"
                    />
                    <hr />
                    <h4>Contact Information</h4>
                    <form class="row">
                        <div class="col-md-6">
                            <h6>First Name</h6>
                            <input type="text" />
                        </div>
                        <div class="col-md-6">
                            <h6>Last Name</h6>
                            <input type="text" />
                        </div>
                        <div class="col-md-6">
                            <h6>Home Phone</h6>
                            <input type="text" />
                        </div>
                        <div class="col-md-6">
                            <h6>Cell Phone</h6>
                            <input type="text" />
                        </div>
                        <div class="col-md-6">
                            <h6>Job Title</h6>
                            <input type="text" />
                        </div>
                        <div class="col-md-6">
                            <h6>Company / Organization</h6>
                            <input type="text" />
                        </div>
                        <div class="col-md-6">
                            <h6>Website</h6>
                            <input type="text" />
                        </div>
                        <div class="col-md-6">
                            <h6>Blog</h6>
                            <input type="text" />
                        </div>
                    </form>
                    <hr />
                    <h4>Home Address</h4>
                    <h6>Address</h6>
                    <input type="text" />
                    <h6>Address 2</h6>
                    <input type="text" />
                    <h6>City</h6>
                    <input type="text" />
                    <h6>Country</h6>
                    <input type="selected" />
                    <hr />
                    <button class="sav">Save</button>
                    <hr />
                    <h4 class="red">Events Registed By You</h4>
                    <hr />
                    <carousel
                        :items="3"
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
                                items: 2
                            },
                            1000: {
                                items: 3
                            }
                        }"
                        ><!--class="owl-carousel owl-theme"-->
                        <div class="mix item foryou food " data-aos="zoom-out">
                            <a :href="link3" class="link">
                                <div class="card-sl">
                                    <div class="card-price">100$</div>
                                    <div class="card-reg">
                                        <i class="fa fa-user-o"></i>123<span
                                            class="red"
                                        >
                                            REG</span
                                        >
                                    </div>
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
                                        <i class="fa fa-user-o"></i> 2.8k
                                        creator followers<i
                                            class="fa fa-upload"
                                        ></i>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="mix item online food " data-aos="fade-up">
                            <a :href="link3" class="link">
                                <div class="card-sl">
                                    <div class="card-state state1">On</div>
                                    <div class="card-price">100$</div>
                                    <div class="card-reg">
                                        <i class="fa fa-user-o"></i>123<span
                                            class="red"
                                        >
                                            REG</span
                                        >
                                    </div>
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
                                        <i class="fa fa-user-o"></i> 2.8k
                                        creator followers<i
                                            class="fa fa-upload"
                                        ></i>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="mix item music food " data-aos="fade-up">
                            <a :href="link3" class="link">
                                <div class="card-sl">
                                    <div class="card-state state2">Off</div>
                                    <div class="card-price">100$</div>
                                    <div class="card-reg">
                                        <i class="fa fa-user-o"></i>123<span
                                            class="red"
                                        >
                                            REG</span
                                        >
                                    </div>
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
                                        <i class="fa fa-user-o"></i> 2.8k
                                        creator followers<i
                                            class="fa fa-upload"
                                        ></i>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="mix item music jul " data-aos="zoom-out">
                            <a :href="link3" class="link">
                                <div class="card-sl">
                                    <div class="card-state state2">Off</div>
                                    <div class="card-price">100$</div>
                                    <div class="card-reg">
                                        <i class="fa fa-user-o"></i>123<span
                                            class="red"
                                        >
                                            REG</span
                                        >
                                    </div>
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
                                        <i class="fa fa-user-o"></i> 2.8k
                                        creator followers<i
                                            class="fa fa-upload"
                                        ></i>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="mix item music jul " data-aos="zoom-out">
                            <a :href="link3" class="link">
                                <div class="card-sl">
                                    <div class="card-state state2">Off</div>
                                    <div class="card-price">100$</div>
                                    <div class="card-reg">
                                        <i class="fa fa-user-o"></i>123<span
                                            class="red"
                                        >
                                            REG</span
                                        >
                                    </div>
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
                                        <i class="fa fa-user-o"></i> 2.8k
                                        creator followers<i
                                            class="fa fa-upload"
                                        ></i>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </carousel>
                </div>
            </div>
        </div>
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
    name: "User",
    components: { carousel },
    data() {
        return {
            link3: "/eventdetail"
        };
    }
};
</script>
