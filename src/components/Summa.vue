<template>
  <div class="summa">
    <div class="container su">
      <form>
        <div class="row">
          <div class="col-md-8">
            <h3 class="bold red">The Event</h3>
            <div class="middle" v-if="isload">
              <div
                style="text-align: center;"
                class="spinner-border text-muted"
              ></div>
            </div>
            <hr />
            <h5>{{ titl }}</h5>
            <p>{{ bodyy }}</p>
            <hr />
            <h6>
              The Price
              <div>
                <label>The Number Serv</label>
                <br />
                <select name="people" id="people" v-model="tic">
                  <option v-for="i in upeople" v-bind:key="i" :value="i">{{
                    i
                  }}</option>
                </select>
              </div>
            </h6>
            <p>{{ pricee }}</p>
            <hr />
            <h6>The Count The People Allow</h6>
            <p>{{ upeople }}</p>
            <div
              class="Button"
              v-if="
                username !== regis &&
                pricee !== '0.00' &&
                pricee !== '0' &&
                upeople !== 0
              "
            >
              <button @click.prevent="registerpay">
                Checkout
              </button>
            </div>
            <div
              class="Button"
              v-if="
                username !== regis &&
                pricee === '0.00' &&
                pricee !== '0' &&
                upeople !== 0
              "
            >
              <button @click.prevent="registerpay">
                Register For Free
              </button>
            </div>
          </div>
          <div class="col-md-4" v-if="sevent">
            <h3 class="bold red">The Book</h3>
            <hr />
            <img
              :src="`https://auth-islend-800.herokuapp.com/media/${imag}`"
              height="120"
              width="100%"
            />
            <hr />
            <h6>Order Summary</h6>
            <label>{{ tic }} * {{ pricee }}</label>
            <hr />
            <h5>Total:</h5>
            <h6>{{ tic * pricee }}</h6>
          </div>
        </div>
      </form>
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
import { getevent } from "../graphql/Queries";
import { registerpay } from "../graphql/Queries";
import moment from "moment";
export default {
  name: "summa",
  data() {
    return {
      id: VueCookies.get("tid"),
      username: VueCookies.get("session").username,
      autho: "",
      titl: "",
      ima: "",
      subt: "",
      bodyy: "",
      metaa: "",
      pricee: null,
      tagss: "",
      ustart: "",
      uend: "",
      ustart1: "",
      uend1: "",
      ustart2: "",
      uend2: "",
      upeople: null,
      utype: "",
      uaddress: "",
      sevent: "",
      i: 0,
      tic: 0,
      total: null,
      regis: "",
      isload: true,
    };
  },
  async mounted() {
    try {
      var result15 = await getevent(this.id, this.username);
      console.log(result15);
      console.log(result15.data);
      this.sevent = result15.data.event;
      console.log(this.sevent);
      this.utype = this.sevent.eventType;
      console.log(this.utype);
      this.pricee = this.sevent.price;
      this.upeople = this.sevent.Countpeople;
      this.titl = this.sevent.title;
      this.bodyy = this.sevent.body;
      this.subt = this.sevent.subtitle;
      this.uaddress = this.sevent.address;
      this.metaa = this.sevent.metaDescription;
      this.imag = this.sevent.image;
      this.ustart = this.sevent.dateCreated;
      this.uend = this.sevent.dateEvent;
      this.isload = false;
      var l = 0;
      while (l < this.sevent.Registered.length) {
        this.regis = this.sevent.Registered[l].username;
        console.log(this.regis);
        l++;
      }
      this.ustart = this.ustart.replace("T", " ");
      this.uend = this.uend.replace("T", " ");
      console.log(this.ustart);
      console.log(this.uend);
      this.ustart1 = moment(this.ustart).format("YYYY-MM-DD");
      this.ustart2 = moment(this.ustart).format("HH:mm");
      this.uend1 = moment(this.uend).format("YYYY-MM-DD");
      this.uend2 = moment(this.uend).format("HH:mm");
      console.log(this.ustart1);
      try {
        var i = 0;
        while (i <= this.sevent.tags.length) {
          this.tagss = this.tagss + this.sevent.tags[i].name + " , ";
          console.log(this.tagss);
          i++;
        }
      } catch (error) {
        console.log(error);
      }

      console.log("-----------------------------------------");
      console.log("---+++++++++--------------------------------------");
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    /*pay() {
			this.$router.push('/payment');
		},*/
    async registerpay() {
      console.log("*********");
      try {
        var result16 = await registerpay(this.username, this.id, this.tic);
        console.log(result16);
        if (this.pricee != 0) {
          this.$router.push("/payment");
        } else {
          window.location.reload(3000);
        }
        //window.location.reload(3000);
        // this.people = result;
        console.log("-----------------------------------------");
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
