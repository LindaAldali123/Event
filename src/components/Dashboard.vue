<template>
    <div class="board">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="dash" data-aos="fade-up">
                        <div class="sidebar">
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

                            <h3 class="sidebar-title">Events Wait Accept</h3>
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
                                    ><br />
                                    <div class="row btton">
                                        <button class="ac">Accept</button
                                        ><button class="rj">Reject</button>
                                    </div>
                                </div>
                                <hr />
                                <div class="post-item clearfix">
                                    <img src="../assets/s1.jpg" alt="" />
                                    <h4>
                                        <a href="blog-single.html"
                                            >Quidem autem et impedit</a
                                        >
                                    </h4>
                                    <time datetime="2020-01-01"
                                        >Jan 1, 2020</time
                                    ><br />
                                    <div class="row btton">
                                        <button class="ac">Accept</button
                                        ><button class="rj">Reject</button>
                                    </div>
                                </div>
                                <hr />
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
                                    ><br />
                                    <div class="row btton">
                                        <button class="ac">Accept</button
                                        ><button class="rj">Reject</button>
                                    </div>
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
                                    ><br />
                                    <div class="row btton">
                                        <button class="ac">Accept</button
                                        ><button class="rj">Reject</button>
                                    </div>
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
                                    ><br />
                                    <div class="row btton">
                                        <button class="ac">Accept</button
                                        ><button class="rj">Reject</button>
                                    </div>
                                </div>
                            </div>
                            <!-- End sidebar recent posts-->
                            <!-- End sidebar tags-->
                        </div>
                    </div>
                    <!-- End sidebar -->
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
    name: "Dashboard",
    data() {
        return {};
    }
};
</script>
