<template>
    <!--Start Slider -->
    <div class="row slider">
        <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
        >
            <ol class="carousel-indicators">
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    class="active"
                ></li>
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                ></li>
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                ></li>
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="3"
                ></li>
                <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="4"
                ></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img
                        class="d-block w-100"
                        src="@/assets/s1.jpg"
                        alt="First slide"
                        width="1200"
                        height="500"
                    />
                </div>
                <div class="carousel-item">
                    <img
                        class="d-block w-100"
                        src="../assets/s2.jpg"
                        alt="Second slide"
                        width="1200"
                        height="500"
                    />
                </div>
                <div class="carousel-item">
                    <img
                        class="d-block w-100"
                        src="../assets/s3.jpg"
                        alt="Third slide"
                        width="1200"
                        height="500"
                    />
                </div>
                <div class="carousel-item">
                    <img
                        class="d-block w-100"
                        src="../assets/s4.jpg"
                        alt="Third slide"
                        width="1200"
                        height="500"
                    />
                </div>
            </div>
            <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
            >
                <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
            </a>
            <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
            >
                <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
    <!-- End Slider -->
</template>
<script>
//import Dropdown from "./Dropdown";
export default {
    name: "Slider"
};
</script>
