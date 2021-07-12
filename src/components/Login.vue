<template>
    <div class="login">
        <div class="d-md-flex half">
            <div class="bg"></div>
            <div class="contents">
                <div class="container">
                    <div class="row align-items-center justify-content-center">
                        <div class="col-md-12">
                            <div class="form-block mx-auto" data-aos="zoom-out">
                                <div class="text-center mb-5">
                                    <h3 class="text-uppercase">
                                        Login to <strong>Event</strong>
                                    </h3>
                                </div>
                                <form action="#" method="post">
                                    <div class="form-group first">
                                        <label for="username">Username</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="your-email@gmail.com"
                                            id="username"
                                            v-model="user"
                                        />
                                    </div>
                                    <div class="form-group last mb-3">
                                        <label for="password">Password</label>
                                        <input
                                            type="password"
                                            class="form-control"
                                            placeholder="Your Password"
                                            id="password"
                                            v-model="pas"
                                        />
                                    </div>
                                    <div
                                        class="d-sm-flex mb-5 align-items-center"
                                    >
                                        <label
                                            class="control control--checkbox mb-3 mb-sm-0"
                                            ><span class="caption"
                                                >Remember me</span
                                            >
                                            <input type="checkbox" checked />
                                            <div
                                                class="control__indicator"
                                            ></div>
                                        </label>
                                        <span class="ml-auto"
                                            ><a href="#" class="forgot-pass"
                                                >Forgot Password</a
                                            ></span
                                        >
                                    </div>
                                    <input
                                        type="submit"
                                        value="Log In"
                                        class="btn btn-block py-2 btn-primary"
                                        :disabled="!user && !pas"
                                    />
                                    <span class="text-center my-3 d-block"
                                        >or</span
                                    >
                                    <div class="">
                                        <a
                                            href="#"
                                            class="btn btn-block py-2 btn-facebook"
                                        >
                                            <span
                                                class="icon-facebook mr-3"
                                            ></span>
                                            Login with facebook
                                        </a>
                                        <a
                                            href="#"
                                            class="btn btn-block py-2 btn-google"
                                            ><span
                                                class="icon-google mr-3"
                                            ></span>
                                            Login with Google</a
                                        >
                                    </div>
                                    <div class="si">
                                        <span class="ml-auto"
                                            ><a :href="link" class="forgot-pass"
                                                >Sign up for Eventbrite</a
                                            ></span
                                        >
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
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
export default {
    name: "Login",
    data() {
        return {
            link: "/signup",
            user: "",
            pas: ""
        };
    }
};
</script>
