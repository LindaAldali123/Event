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
                                        <strong>Event</strong>
                                    </h3>
                                </div>
                                <form :action="lin">
                                    <div class="form-group first">
                                        <label for="username">Username</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="your-email@gmail.com"
                                            id="username"
                                            v-model="name"
                                        />
                                    </div>
                                    <input
                                        type="submit"
                                        :href="lin"
                                        :disabled="!name"
                                        value="Continue"
                                        class="btn btn-block py-2 btn-primary"
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
    name: "signup",
    data() {
        return {
            lin: "/creatacount",
            name: ""
        };
    }
};
</script>
