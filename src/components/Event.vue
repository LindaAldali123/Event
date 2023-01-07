<template>
  <!--Start Slider -->
  <div class="cont eventc" id="container">
    <form class="ev2">
      <h3 class="bol">
        Popular in
      </h3>
      <!--<input placeholder="Select an Location" list="ev2" />
      <datalist id="ev2">
        <option value="Use my current location"> </option>
        <option value="Online Events"> </option>
      </datalist>-->
    </form>
    <ul class="shuffle">
      <li class="selected filter" data-filter="all">All</li>
      <li class="filter" data-filter=".foryou">For you</li>
      <li class="filter" data-filter=".online">Online</li>
      <li class="filter" data-filter=".today">Today</li>
      <li class="filter" data-filter=".weekend">This Weekend</li>
      <li class="filter" data-filter=".jul">4th of July</li>
      <li class="filter" data-filter=".free">Free</li>
      <li class="filter" data-filter=".music">Music</li>
      <li class="filter" data-filter=".food">Food & Drink</li>
      <li class="filter" data-filter=".charity">Charity & Causes</li>
    </ul>
    <div class="middle" v-if="isload">
      <div style="text-align: center;" class="spinner-border text-muted"></div>
    </div>
    <div class="row">
      <div
        class="mix foryou food col-md-3"
        v-for="e in eventno"
        v-bind:key="e.id"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div class="card-sl">
          <a
            class="link"
            @click="
              save_event(e);
              nam(e.author.username);
            "
          >
            <div
              class="card-state"
              :class="[
                e.status === 'LIVE'
                  ? 'state1'
                  : e.status === 'NEW'
                  ? 'state3'
                  : 'state2',
              ]"
            >
              {{ e.status }}
            </div>
            <div class="card-price">{{ e.price }}$</div>
            <div class="card-reg">
              <i class="fa fa-user-o"></i>
              {{ e.RegisteredCount }}<span class="red"> REG</span>
            </div>
            <div class="card-image">
              <img
                :src="`https://auth-islend-800.herokuapp.com/media/${e.image}`"
                height="150"
                width="100%"
              />
            </div>
          </a>
          <a href="#"
            ><p class="card-action">
              <i class="fa fa-heart"></i></p
          ></a>
          <a
            class="link"
            @click="
              save_event(e);
              nam(e.author.username);
            "
          >
            <div class="card-heading">
              {{ e.title }}
            </div>
            <div class="card-date">
              {{ e.dateEvent }}
            </div>
            <div class="card-text">
              {{ e.subtitle }}
            </div>
            <div class="card-foteer">
              <i class="fa fa-user-o"></i>
              {{ e.FollowersCount }} creator followers<i
                class="fa fa-upload"
              ></i></div
          ></a>
        </div>
      </div>
    </div>
    <div class="row" v-if="token">
      <div
        class="mix foryou food col-md-3"
        v-for="event in events"
        v-bind:key="event.id"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div class="card-sl">
          <a
            class="link"
            @click="
              save_event(event);
              nam(event.author.username);
            "
          >
            <div
              class="card-state"
              :class="[
                event.status === 'LIVE'
                  ? 'state1'
                  : event.status === 'NEW'
                  ? 'state3'
                  : 'state2',
              ]"
            >
              {{ event.status }}
            </div>
            <div class="card-price">{{ event.price }}$</div>
            <div class="card-reg">
              <i class="fa fa-user-o"></i>
              {{ event.RegisteredCount }}<span class="red"> REG</span>
            </div>
            <div class="card-image">
              <img
                :src="`https://auth-islend-800.herokuapp.com/media/${event.image}`"
                height="150"
                width="100%"
              />
            </div>
          </a>
          <a @click.prevent="likeevent(event.id)" href="#"
            ><p
              :class="[
                event.likeStat === false ? 'card-action' : 'card-action2',
              ]"
            >
              <i class="fa fa-heart"></i></p
          ></a>
          <a
            class="link"
            @click="
              save_event(event);
              nam(event.author.username);
            "
          >
            <div class="card-heading">
              {{ event.title }}
            </div>
            <div class="card-date">
              {{ event.dateEvent }}
            </div>
            <div class="card-text">
              {{ event.subtitle }}
            </div>
            <div class="card-foteer">
              <i class="fa fa-user-o"></i>
              {{ event.FollowersCount }} creator followers<i
                class="fa fa-upload"
              ></i></div
          ></a>
        </div>
      </div>
    </div>
  </div>
  <!-- End Slider -->
</template>
<script>
require(["aos"], function (AOS) {
  AOS.init({
    easing: "ease-in-out-sine",
  });
});
import VueCookies from "vue-cookies";
import mixitup from "mixitup";
import { eventnotoken } from "../graphql/Queries";
import { events } from "../graphql/Queries";
import { likeevent } from "../graphql/Queries";
export default {
  name: "Event",
  data() {
    return {
      link3: "/eventdetail",
      num: 8,
      events: "",
      id: null,
      eventno: "",
      token: VueCookies.get("session").token,
      username: VueCookies.get("session").username,
      isload: true,
      //uname:"",
      //number:""
    };
  },
  async mounted() {
    var containerEl = document.querySelector(".container");
    mixitup(containerEl);
    //var co = document.querySelector(".shuffle li");
    //co.addClass("selected")
    //.siblings()
    //.removeClass("selected");
    if (this.token != null) {
      try {
        var result3 = await events(this.username, this.num);
        this.events = result3.data.allEvent;
        //console.log(this.id);
        // VueCookies.set("even", this.events[this.id]);
        this.isload = false;
        console.log(this.events);
        console.log(result3.data.allEvent[0].price);
        console.log(result3.data.allEvent[0].image);
        // this.people = result;
        console.log("-----------------------------------------");
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        // VueCookies.remove("session");
        VueCookies.set("session", { username: "", token: null });
        var result9 = await eventnotoken(this.num);
        this.eventno = result9.data.allEventnotoken;
        console.log(this.eventno);
        this.isload = false;
        console.log("-----------------------------------------");
      } catch (error) {
        console.error(error);
      }
    }
  },
  methods: {
    async save_event(event) {
      try {
        VueCookies.set("even", event);
        console.log("-----------------------------------------");
        this.$router.push("/eventdetail");
      } catch (error) {
        console.error(error);
      }
    },
    async nam(nam) {
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
        VueCookies.set("like", result5.data.setLikes[0].likeStat);
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
