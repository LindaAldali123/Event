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
                                        <input
                                            type="email"
                                            class="form-control"
                                            placeholder="your-email@gmail.com"
                                            id="username"
                                            v-model="nam"
                                        />
                                    </div>
                                    <div class="form-group first">
                                        <input
                                            type="email"
                                            class="form-control"
                                            placeholder="Confirm Email"
                                            id="username"
                                            v-model="ema"
                                        />
                                    </div>
                                    <div class="form-group first">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="FirstName"
                                            id="fname"
                                            v-model="first"
                                        />
                                    </div>
                                    <div class="form-group first">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="LastName"
                                            id="lname"
                                            v-model="last"
                                        />
                                    </div>
                                    <div class="form-group first">
                                        <input
                                            type="password"
                                            class="form-control"
                                            placeholder="Enter Password"
                                            id="password"
                                            v-model="pass"
                                        />
                                    </div>
                                    <input
                                        type="submit"
                                        value="Create Acount"
                                        :disabled="
                                            !nam &&
                                                !ema &&
                                                !first &&
                                                !last &&
                                                !pass
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
export default {
    name: "creatacount",
    data() {
        return {
            link2: "/login",
            nam: "",
            ema: "",
            first: "",
            last: "",
            pass: ""
        };
    }
};
</script>
