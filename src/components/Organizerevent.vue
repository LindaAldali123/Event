<template>
  <div class="container">
    <div class="middle" v-if="isload">
      <div style="text-align: center;" class="spinner-border text-muted"></div>
    </div>
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
      v-if="eventso"
      ><!--class="owl-carousel owl-theme"-->
      <div
        class="mix item foryou food col-lg-12"
        v-for="eve in eventso"
        v-bind:key="eve.id"
        data-aos="zoom-out"
      >
        <div class="card-sl">
          <a
            @click.prevent="
              save_eve(eve);
              namev(eve.author.username);
            "
            class="link"
          >
            <div
              class="card-state"
              :class="[
                eve.status === 'LIVE'
                  ? 'state1'
                  : eve.status === 'NEW'
                  ? 'state3'
                  : 'state2',
              ]"
            >
              {{ eve.status }}
            </div>
            <div class="card-price">{{ eve.price }}$</div>
            <div class="card-reg">
              <i class="fa fa-user-o"></i>
              {{ eve.RegisteredCount }}
              <span class="red"> REG</span>
            </div>
            <div class="card-image">
              <img
                :src="`https://auth-islend-800.herokuapp.com/media/${eve.image}`"
                height="150"
                width="100%"
              />
            </div>
          </a>
          <a
            :class="[eve.likeStat === false ? 'card-action' : 'card-action2']"
            @click.prevent="likeevent(eve.id)"
            href="#"
            ><i class="fa fa-heart"></i
          ></a>
          <a
            @click.prevent="
              save_eve(eve);
              namev(eve.author.username);
            "
            class="link"
          >
            <div class="card-heading">
              {{ eve.title }}
            </div>
            <div class="card-date">
              {{ eve.dateEvent }}
            </div>
            <div class="card-text">
              {{ eve.subtitle }}
            </div>
            <div class="card-foteer">
              <i class="fa fa-user-o"></i>
              {{ eve.FollowersCount }} creator followers<i
                class="fa fa-upload"
              ></i>
            </div>
          </a>
        </div>
      </div>
    </carousel>
  </div>
</template>
<script>
require(["aos"], function (AOS) {
  AOS.init({
    easing: "ease-in-out-sine",
  });
});
import carousel from "vue-owl-carousel";
import { eventsorg } from "../graphql/Queries";
import VueCookies from "vue-cookies";
import { likeevent } from "../graphql/Queries";
export default {
  name: "Organizerevent",
  components: { carousel },
  nam: "",
  data() {
    return {
      link3: "/eventdetail",
      eventso: "",
      username: VueCookies.get("session").username,
      isload: true,
    };
  },
  async mounted() {
    try {
      this.nam = VueCookies.get("nam");
      var result4 = await eventsorg(this.username, this.nam);
      console.log(result4);
      console.log(result4.data);
      this.isload = false;
      this.eventso = result4.data.OrganizerEvents;
      //console.log(this.id);
      // VueCookies.set("even", this.events[this.id]);
      console.log(this.eventso);
      // this.people = result;
      console.log("-----------------------------------------");
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async save_eve(eve) {
      try {
        VueCookies.remove("even");
        VueCookies.set("even", eve);
        console.log("-----------------------------------------");
        // this.$router.push("/eventdetail");
        window.location.reload(3000);
      } catch (error) {
        console.error(error);
      }
    },
    async namev(nam) {
      VueCookies.remove("nam");
      VueCookies.set("nam", nam);
    },
    async likeevent(number) {
      try {
        var result5 = await likeevent(
          this.username,
          (this.eventID = `${number}`)
        );
        console.log(result5);
        console.log(result5.data.setLikes[0].likeStat);
        //VueCookies.set("like", result5.data.setLikes[0].likeStat);
        window.location.reload(3000);
        //this.$router.push("/#");
        // this.people = result;
        console.log("-----------------------------------------");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
<style scoped>
carousel {
  width: 100%;
}
</style>
