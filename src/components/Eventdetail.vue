<template>
    <div class="detail">
        <div class="container">
            <div class="back">
                <img src="../assets/s1.jpg" width="100%" height="500" />
            </div>
            <div class="row">
                <div class="col-md-7">
                    <div class="img">
                        <img src="../assets/s1.jpg" width="600" height="400" />
                    </div>
                    <br />
                    <i class="fa fa-upload para"></i>
                    <i class="fa fa-heart-o para"></i>
                    <hr />
                    <h4>Weekend Marketing featured</h4>
                    <h6>About this event</h6>
                    <p>
                        Black Owned Hackney launches for our Spring/Summer 2021
                        series in collaboration with Black Eats LDN .<i
                            class="fa fa-smile-o"
                        ></i>
                        Catch with Us on the third Weekend of june opposite
                        Hackney Central station showcasing london ,artisan
                        trader and many more black.
                    </p>
                    <ul>
                        <li>region fantastic</li>
                        <li>region fantastic</li>
                        <li>region fantastic</li>
                        <li>region fantasti</li>
                        <li>region fantastic</li>
                    </ul>
                    <p>Share With Friends</p>
                    <div class="lol">
                        <i class="fa fa-facebook"></i>
                        <i class="fa fa-wechat"></i>
                        <i class="fa fa-linkedin"></i>
                        <i class="fa fa-twitter"></i>
                        <i class="fa fa-envelope"></i>
                    </div>
                </div>
                <div class="col-md-5">
                    <form>
                        <div class="fol">
                            <h2 class="upper">multiple dates</h2>
                            <h5>Black Owned</h5>
                            <p>
                                By Bohmin Place Marcket<br />
                                1183 followers
                                <button class="bor">Follow</button>
                            </p>
                            <p>0$ - 2.75$</p>
                        </div>
                    </form>
                    <form>
                        <div class="fol2">
                            <label>Location</label>
                            <ul>
                                <li>Bohem Place</li>
                                <li>Bohem</li>
                                <li>London</li>
                                <li>E8 1DU</li>
                                <li>United Kigdom</li>
                                <li class="blue">View Map</li>
                            </ul>
                            <h6 class="ref">Refund Policy</h6>
                            <p>ContactThe Orgnaisor to request arefuind</p>
                        </div>
                    </form>
                    <form>
                        <a :href="pay" class="card-button">
                            To Reserve Event (Paypal Payment)</a
                        >
                        <hr />
                        <a :href="upd" class="card-button">
                            To Update Event (Click Here)</a
                        >
                    </form>
                </div>
            </div>
            <p class="blue org">More Events From This Organizer</p>
            <Organizerevent />
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26169.600604472475!2d36.74669283451427!3d34.92651883019593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1523711a3d8c9ff1%3A0xa67db3608787b804!2z2KfZhNix2LPYqtmG2Iwg2LPZiNix2YrYpw!5e0!3m2!1sar!2sca!4v1620771846851!5m2!1sar!2sca"
                frameborder="0"
                style="border:0;width:100%;height:290px;"
                allowfullscreen
            ></iframe>
        </div>
    </div>
</template>
<script>
require(["aos"], function(AOS) {
    AOS.init({
        easing: "ease-in-out-sine"
    });
});
import Organizerevent from "@/components/Organizerevent.vue";
export default {
    name: "Eventdetail",
    components: { Organizerevent },
    data() {
        return {
            link: "/signup",
            pay: "/payment",
            upd: "/updatevent"
        };
    }
};
</script>
