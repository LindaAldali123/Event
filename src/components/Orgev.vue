<template>
  <div class="orgev" data-aos="fade-in">
    <div class="middle" v-if="isload">
      <div style="text-align: center;" class="spinner-border text-muted"></div>
    </div>
    <div v-if="usr">
      <div class="bac">
        <img
          :src="`https://auth-islend-800.herokuapp.com/media/${usr.image}`"
        />
      </div>
      <div class="row usrin">
        <div class="col-md-6">
          <div class="infuser">
            <img
              :src="`https://auth-islend-800.herokuapp.com/media/${usr.image}`"
            />
            <h3>
              <span>{{ userlog }}</span>
            </h3>
            <!--<p>{{ FollowerCounts }} Following</p>-->
          </div>
        </div>
        <div class="col-md-6">
          <div class="folw">
            <p>
              Hello I'am {{ userlog }} <br />
              <span v-if="!token" class="ban">
                0 followers
                <a class="bor">
                  Follow
                </a>
              </span>
              <span v-if="token" class="ban">
                {{ FollowerCounts }} followers
                <a
                  v-if="!stat && username !== `${usr.user.username}`"
                  @click.prevent="follower(usr.user.username)"
                  class="bor"
                >
                  Follow
                </a>
                <a
                  v-if="stat && username !== `${usr.user.username}`"
                  @click.prevent="follower(usr.user.username)"
                  class="bor sm"
                >
                  Un Follow
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div class="cono eveu">
        <div class="row">
          <div
            class="mix foryou food col-md-3"
            v-for="orv in orgevent"
            v-bind:key="orv.id"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="card-sl">
              <a
                class="link"
                @click="
                  save_event(orv);
                  nam(orv.author.username);
                "
              >
                <div
                  class="card-state"
                  :class="[
                    orv.status === 'LIVE'
                      ? 'state1'
                      : orv.status === 'NEW'
                      ? 'state3'
                      : 'state2',
                  ]"
                >
                  {{ orv.status }}
                </div>
                <div class="card-price">{{ orv.price }}$</div>
                <div class="card-reg">
                  <i class="fa fa-user-o"></i>
                  {{ orv.RegisteredCount }}<span class="red"> REG</span>
                </div>
                <div class="card-image">
                  <img
                    :src="`https://auth-islend-800.herokuapp.com/media/${orv.image}`"
                    height="150"
                    width="100%"
                  />
                </div>
              </a>
              <a @click.prevent="likeevent(orv.id)" href="#"
                ><p
                  :class="[
                    orv.likeStat === false ? 'card-action' : 'card-action2',
                  ]"
                >
                  <i class="fa fa-heart"></i></p
              ></a>
              <a
                class="link"
                @click="
                  save_event(orv);
                  nam(orv.author.username);
                "
              >
                <div class="card-heading">
                  {{ orv.title }}
                </div>
                <div class="card-date">
                  {{ orv.dateEvent }}
                </div>
                <div class="card-text">
                  {{ orv.subtitle }}
                </div>
                <div class="card-foteer">
                  <i class="fa fa-user-o"></i>
                  {{ orv.FollowersCount }} creator followers<i
                    class="fa fa-upload"
                  ></i></div
              ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
require(["aos"], function (AOS) {
  AOS.init({
    easing: "ease-in-out-sine",
  });
});
import VueCookies from "vue-cookies";
import { orgv } from "../graphql/Queries";
import { likeevent } from "../graphql/Queries";
import { followe } from "../graphql/Queries";
export default {
  name: "organizevedetail",
  data() {
    return {
      username: VueCookies.get("session").username,
      userlog: VueCookies.get("userlogname"),
      orgevent: "",
      usr: "",
      token: VueCookies.get("session").token,
      FollowerCounts: null,
      count: "",
      userna: "",
      stat: "",
      isload: true,
    };
  },
  async mounted() {
    try {
      var result13 = await orgv(this.userlog);
      this.usr = result13.data.getUser;
      this.isload = false;
      console.log("**********************");
      console.log(this.usr);
      console.log("**********************");
      this.orgevent = result13.data.getUser.Events;
      this.FollowerCounts = this.usr.FollowerCount;
      this.stat = this.usr.FollowStat;
      console.log(this.FollowerCounts);
      console.log(this.stat);
      console.log(this.orgevent);
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    async likeevent(number) {
      try {
        var result5 = await likeevent(
          this.username,
          (this.eventID = `${number}`)
        );
        console.log(result5);
        console.log(result5.data.setLikes[0].likeStat);
        //VueCookies.set('like', result5.data.setLikes[0].likeStat);
        window.location.reload(3000);
        console.log("-----------------------------------------");
      } catch (error) {
        console.error(error);
      }
    },
    async save_event(orv) {
      try {
        VueCookies.set("even", orv);
        console.log("-----------------------------------------");
        this.$router.push("/eventdetail");
      } catch (error) {
        console.error(error);
      }
    },
    async nam(nam) {
      VueCookies.set("nam", nam);
    },
    async follower(usern) {
      try {
        var result6 = await followe(this.username, usern);
        this.count = result6.data.setFollowe.FollowerCount;
        this.stat = result6.data.setFollowe.FollowStat;
        console.log(this.stat);
        console.log(this.count);
        this.FollowerCounts = this.count;
        console.log(this.username);
        console.log("****************");
        console.log(result6);
        console.log("-----------------------------------------");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
