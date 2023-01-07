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
                                <form>
                                    <div class="form-group first">
                                        <div class="red">{{ errorlog }}</div>
                                        <label for="username">Username</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Enter The Username"
                                            id="username"
                                            v-model="username"
                                            required
                                        />
                                    </div>
                                    <div class="form-group last mb-3">
                                        <label for="password">Password</label>
                                        <input
                                            type="password"
                                            class="form-control"
                                            placeholder="Your Password"
                                            id="password"
                                            v-model="password"
                                            required
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
                                        @click.prevent="login"
                                        :disabled="!username && !password"
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
import VueCookies from "vue-cookies";
import { login } from "../graphql/Queries";
export default {
    name: "Login",
    data() {
        return {
            link: "/signup",
            username: "",
            password: "",
            errorlog: "",
            token: ""
        };
    },
    methods: {
        async login() {
            try {
                var result2 = await login(this.username, this.password);
                console.log(result2);
                if (result2.data.tokenAuth == null) {
                    this.errorlog = "Have Error Username Or password Try Again";
                    console.log(this.errorlog);
                } else {
                    console.log("Success Login");
                    //VueCookies.set("token", result2.data.tokenAuth.token);
                    //console.log(result2.data.tokenAuth.token);
                    VueCookies.set("session", {
                        username: this.username,
                        token: result2.data.tokenAuth.token
                    });
                    this.$router.push("/#");
                }
                // this.people = result;
                console.log("-----------------------------------------");
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>
