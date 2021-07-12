<template>
    <div class="board4">
        <div class="container">
            <div class="row">
                <div class="col-md-12 dash4">
                    <h2 class="red">Users</h2>
                    <hr />
                    <h3 class="sidebar-title">Search</h3>
                    <div class="sidebar-item search-form">
                        <form action="">
                            <input type="text" />
                            <button type="submit">
                                <i class="fa fa-search"></i>
                            </button>
                        </form>
                    </div>

                    <form class="Events">
                        <div class="Evn row">
                            <div class="col-md-8">
                                <div class="post-item ">
                                    <div class="row">
                                        <img
                                            class="col-md-4"
                                            src="../assets/user2.jpeg"
                                            alt=""
                                        />
                                        <div class="col-md-8">
                                            <h4>
                                                <a href="blog-single.html"
                                                    >User Name 1</a
                                                >
                                            </h4>
                                            <time datetime="2020-01-01"
                                                >Jan 1, 2020</time
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class=" btto">
                                    <button class="rj">Delete</button>
                                    <button class="ac">Update</button>
                                </div>
                            </div>
                        </div>
                        <div class="Evn row">
                            <div class="col-md-8">
                                <div class="post-item ">
                                    <div class="row">
                                        <img
                                            class="col-md-4"
                                            src="../assets/user2.jpeg"
                                            alt=""
                                        />
                                        <div class="col-md-8">
                                            <h4>
                                                <a href="blog-single.html"
                                                    >User Name 2</a
                                                >
                                            </h4>
                                            <time datetime="2020-01-01"
                                                >Jan 1, 2020</time
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class=" btto">
                                    <button class="rj">Delete</button>
                                    <button class="ac">Update</button>
                                </div>
                            </div>
                        </div>
                        <div class="Evn row">
                            <div class="col-md-8">
                                <div class="post-item ">
                                    <div class="row">
                                        <img
                                            class="col-md-4"
                                            src="../assets/user2.jpeg"
                                            alt=""
                                        />
                                        <div class="col-md-8">
                                            <h4>
                                                <a href="blog-single.html"
                                                    >User Name 3</a
                                                >
                                            </h4>
                                            <time datetime="2020-01-01"
                                                >Jan 1, 2020</time
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class=" btto">
                                    <button class="rj">Delete</button>
                                    <button class="ac">Update</button>
                                </div>
                            </div>
                        </div>
                    </form>
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
    name: "DashboardUser",
    data() {
        return {};
    }
};
</script>
