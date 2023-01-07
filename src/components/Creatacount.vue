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
                                        <strong>Create An Acount</strong>
                                    </h3>
                                </div>
                                <form action="#" method="post">
                                    <div class="form-group first">
                                        <div class="hide red">
                                            {{ erroremail }}
                                        </div>
                                        <input
                                            type="email"
                                            class="form-control"
                                            v-bind:value="email"
                                            id="email"
                                            required
                                        /><!-- v-model="email2"-->
                                    </div>
                                    <div class="form-group first">
                                        <div class="hide red">
                                            {{ erroruser }}
                                        </div>
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Username"
                                            id="username"
                                            v-model="username"
                                            required
                                        />
                                    </div>
                                    <div class="form-group first">
                                        <div class="hide red">
                                            {{ errorpass }}
                                        </div>
                                        <input
                                            type="password"
                                            class="form-control"
                                            placeholder="Enter Password"
                                            id="password1"
                                            v-model="password1"
                                            required
                                        />
                                    </div>
                                    <div class="form-group first">
                                        <input
                                            type="password"
                                            class="form-control"
                                            placeholder="Confirm Password"
                                            id="password2"
                                            v-model="password2"
                                            required
                                        />
                                    </div>
                                    <input
                                        type="submit"
                                        value="Create Acount"
                                        @click.prevent="create()"
                                        :disabled="
                                            !email &&
                                                !username &&
                                                !password1 &&
                                                !password2
                                        "
                                        class="btn btn-block py-2 btn-primary"
                                    />
                                    <span class="text-center my-3 d-block"
                                        ><a :href="link2">Log in</a></span
                                    >
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
import { register } from "../graphql/Queries";
//import email from "./Signup.vue";
import VueCookies from "vue-cookies";
export default {
    name: "creatacount",
    data() {
        return {
            link2: "/login",
            username: "",
            password1: "",
            password2: "",
            email: VueCookies.get("email"),
            erroremail: "",
            erroruser: "",
            errorpass: ""
        };
    },
    async mounted() {},
    methods: {
        async create() {
            try {
                var result1 = await register(
                    this.email,
                    this.username,
                    this.password1,
                    this.password2
                );
                console.log(result1);
                if (result1.data.register.success == false) {
                    if (result1.data.register.errors.username) {
                        this.erroruser =
                            result1.data.register.errors.username["0"].message;
                        console.log(this.erroruser);
                    }
                    if (result1.data.register.errors.password2) {
                        this.errorpass =
                            result1.data.register.errors.password2["0"].message;
                        console.log(this.errorpass);
                    }
                    if (result1.data.register.errors.email) {
                        this.erroremail =
                            result1.data.register.errors.email["0"].message;
                        console.log(this.erroremail);
                    }
                } else {
                    console.log("Success Register");
                    this.$router.push("/login");
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
