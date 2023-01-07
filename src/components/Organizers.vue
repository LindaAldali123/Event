<template>
  <div>
    <section id="team" class="team eventc section-bg">
      <div class="conta" data-aos="fade-up">
        <div class="section-title">
          <!-- <h2>Team</h2> -->
          <h3 class="bol">Famous Party <span>Organizers</span></h3>
          <div class="middle" v-if="isload">
            <div
              style="text-align: center;"
              class="spinner-border text-muted"
            ></div>
          </div>
        </div>

        <div class="container">
          <carousel
            :items="4"
            :autoplay="true"
            :dots="true"
            :loop="true"
            :margin="25"
            :nav="false"
            :autoplaySpeed="true"
            :autoplayTimeout="5000"
            :autowidth="true"
            :mouseDrag="true"
            :responsive="{
              0: {
                items: 1,
              },
              600: {
                items: 3,
              },
              1000: {
                items: 4,
              },
            }"
            v-if="organizer"
          >
            <div
              class="item"
              v-for="org in organizer"
              v-bind:key="org.id"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="member">
                <a @click="save_user(org.user.username)">
                  <div class="member-img">
                    <img
                      :src="`https://auth-islend-800.herokuapp.com/media/${org.image}`"
                      class="img-fluid"
                      alt=""
                    />
                    <div class="social">
                      <a href=""><i class="fa fa-twitter"></i></a>
                      <a href=""><i class="fa fa-facebook"></i></a>
                      <a href=""><i class="fa fa-instagram"></i></a>
                      <a href=""><i class="fa fa-linkedin"></i></a>
                    </div>
                  </div>
                  <div class="member-info">
                    <h4>{{ org.user.username }}</h4>
                    <span>{{ org.jobtitle }}</span>
                  </div>
                </a>
              </div>
            </div>
          </carousel>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
require(["aos"], function (AOS) {
  AOS.init({
    easing: "ease-in-out-sine",
  });
});
import carousel from "vue-owl-carousel";
import { organizers } from "../graphql/Queries";
import VueCookies from "vue-cookies";
export default {
  name: "Organizers",
  components: { carousel },
  data() {
    return {
      r: 8,
      organizer: "",
      isload: true,
    };
  },
  async mounted() {
    try {
      var result10 = await organizers(this.r);
      this.organizer = result10.data.famousOrganizers;
      this.isload = false;
      console.log("+++++++++++++++++++++++++++++++");
      console.log(result10.data.famousOrganizers);
      console.log(this.organizer);
      console.log("-----------------------------------------");
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async save_user(namusr) {
      VueCookies.set("userlogname", namusr);
      this.$router.push("/organizevedetail");
    },
  },
};
</script>
