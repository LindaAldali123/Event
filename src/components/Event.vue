<template>
    <!--Start Slider -->
    <div class="container" id="container">
        <form class="ev2" data-aos="fade-up">
            <p>
                Popular in
            </p>
            <input placeholder="Select an Location" list="ev2" />
            <datalist id="ev2">
                <option value="Use my current location"> </option>
                <option value="Online Events"> </option>
            </datalist>
        </form>
        <ul class="shuffle">
            <li class="selected filter" data-filter="all">All</li>
            <li class="filter" data-filter=".foryou">For you</li>
            <li class="filter" data-filter=".online">Online</li>
            <li class="filter" data-filter=".today">Today</li>
            <li class="filter" data-filter=".weekend">This Weekend</li>
            <li class="filter" data-filter=".jul">4th of July</li>
            <li class="filter" data-filter=".free">Free</li>
            <li class="filter" data-filter=".music">Music</li>
            <li class="filter" data-filter=".food">Food & Drink</li>
            <li class="filter" data-filter=".charity">Charity & Causes</li>
        </ul>
        <div class="row">
            <div class="mix foryou food col-md-3" data-aos="zoom-out">
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
            <div class="mix online food col-md-3" data-aos="fade-up">
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
            <div class="mix music food col-md-3" data-aos="fade-up">
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
            <div class="mix music jul col-md-3" data-aos="zoom-out">
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
        </div>
        <div class="row">
            <div class="mix online music jul col-md-3" data-aos="zoom-out">
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
            <div class="mix music jul col-md-3" data-aos="fade-up">
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
            <div class="mix free music col-md-3" data-aos="fade-up">
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
            <div class="mix free col-md-3" data-aos="zoom-out">
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
        </div>
    </div>
    <!-- End Slider -->
</template>
<script>
require(["aos"], function(AOS) {
    AOS.init({
        easing: "ease-in-out-sine"
    });
});
//import Dropdown from "./Dropdown";
import mixitup from "mixitup";
export default {
    name: "Event",
    data() {
        return {
            link3: "/eventdetail"
        };
    },
    mounted() {
        var containerEl = document.querySelector(".container");
        mixitup(containerEl);
        var co = document.querySelector(".shuffle li");
        co.addClass("selected")
            .siblings()
            .removeClass("selected");
    }
};
</script>
