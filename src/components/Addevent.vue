<template>
    <div class="add row">
        <div class="container">
            <div class="col-md-12 str">
                <h1>Let's Build Your Event</h1>
            </div>
            <div class="col-md-12">
                <form class="ADD" @submit.prevent="createvent" action="#">
                    <div class="Que1 form-group" data-aos="fade-up">
                        <p>
                            <i class="fa fa-blind"></i>
                            What type of event are you hosting today?
                        </p>
                        <input
                            placeholder="Select Type"
                            list="Que1"
                            class="form-control"
                            v-model="etype"
                            required
                        />
                        <datalist id="Que1">
                            <option value="Conference"> </option>
                            <option value="Seminar Or Talk"> </option>
                            <option value="Tradeshow,Consumer Show,or Expo">
                            </option>
                            <option value="Convention"> </option>
                            <option value="Festival or Fair"> </option>
                            <option value="Concert or Performance"> </option>
                            <option value="Screening"> </option>
                            <option value="Dinner or Gala"> </option>
                            <option value="Class, Training,or Workshop">
                            </option>
                            <option value="Meeting, Networking event"> </option>
                            <option value="Party or Social Gathering"> </option>
                            <option value="Rally"> </option>
                            <option value="Tournament"> </option>
                            <option value="Game or Competation"> </option>
                            <option value="Race or Endurance event"> </option>
                            <option value="Attraction"> </option>
                            <option value="Camp,Trip or Retreat"> </option>
                            <option value="Appearnce or Signing"> </option>
                            <option value="Other"> </option>
                        </datalist>
                    </div>

                    <div class="Que2 form-group" data-aos="fade-up">
                        <p>
                            <i class="fa fa-vcard-o"></i>
                            Name of your event
                        </p>
                        <label class="bold">Part </label>
                        <input
                            type="text"
                            class="form-control"
                            v-model="tit"
                            required
                        />
                        <!-- <p v-if="`${tit}` === null">pleas full</p> -->
                    </div>
                    <div class="Que3 form-group">
                        <h1><i class="fa fa-font"></i>SubTitle</h1>
                        <textarea
                            @input="countchars"
                            v-model="sub"
                            class="form-control"
                            :maxlength="maxLength"
                            cols="70"
                            rows="4"
                            placeholder="Write A short event summary ."
                            required
                        >
                        </textarea>
                        <br />
                        <span class="counter" :class="{ zero: reachzero }">
                            0 | <span>{{ remainingchars }}</span>
                        </span>
                    </div>
                    <div class="Que4 form-group">
                        <h1><i class="fa fa-text-width"></i>Description</h1>
                        <p>
                            Add More details to your event .
                        </p>

                        <br />
                        <textarea
                            cols="70"
                            rows="8"
                            class="form-control"
                            v-model="bod"
                            required
                        >
                        </textarea>
                    </div>
                    <div class="Que5 form-group">
                        <h1>
                            <i class="fa fa-file-picture-o"></i>Select Event
                            Image
                        </h1>
                        <input
                            type="file"
                            ref="files"
                            multiple
                            class="form-control"
                            id="files"
                            @change="handleImage"
                            name="img"
                            accept="image"
                            required
                        />
                    </div>

                    <div class="Que6 form-group" data-aos="fade-up">
                        <p>
                            <i class="fa fa-calendar"></i>
                            Date and Time
                        </p>
                        <div class="ev form-group">
                            <label for="birthday">Start Event:</label>
                            <input
                                class="inpu form-control"
                                type="date"
                                id="birthday"
                                name="birthday"
                                v-model="start1"
                                required
                            />
                            <label for="birthday">End Event:</label>
                            <input
                                class="inpu  form-control"
                                type="date"
                                id="birthday"
                                name="birthday"
                                v-model="end1"
                                required
                            />
                        </div>
                        <div class="ev form-group">
                            <label for="birthday">Start Time:</label>
                            <input
                                class="inpu form-control"
                                type="time"
                                id="birthday"
                                name="birthday"
                                v-model="start2"
                                required
                            />
                            <label for="birthday">End Time:</label>
                            <input
                                class="inpu form-control"
                                type="time"
                                id="birthday"
                                name="birthday"
                                v-model="end2"
                                required
                            />
                        </div>
                    </div>
                    <div class="hom Que7 form-group" data-aos="fade-up">
                        <p>
                            <i class="fa fa-home"></i>
                            Address of your event
                        </p>

                        <input
                            class="in form-control"
                            type="text"
                            name="text"
                            placeholder="Address events"
                            aria-label="Address"
                            v-model="address"
                            required
                        />
                    </div>

                    <div class="hom Que8 form-group" data-aos="fade-up">
                        <p>
                            <i class="fa fa-hand-o-up"></i>
                            Price of your event
                        </p>

                        <input
                            class="in form-control"
                            type="number"
                            name="number"
                            placeholder="price events"
                            aria-label="price"
                            v-model="price"
                            required
                        />
                    </div>
                    <div class="hom Que8 form-group" data-aos="fade-up">
                        <p>
                            <i class="fa fa-child"></i>
                            People Number of your event
                        </p>

                        <input
                            class="in form-control"
                            type="number"
                            name="number"
                            placeholder="People events"
                            aria-label="People"
                            v-model="people"
                            required
                        />
                    </div>
                    <div class="hom Que9 form-group" data-aos="fade-up">
                        <p>
                            <i class="fa fa-text-height"></i>
                            Meta Description
                        </p>

                        <input
                            class="in form-control"
                            type="text"
                            name="text"
                            placeholder="des events"
                            aria-label="des"
                            v-model="meta"
                            required
                        />
                    </div>
                    <div class="hom Que10 form-group" data-aos="fade-up">
                        <p>
                            <i class="fa fa-compass"></i>
                            Tags:
                        </p>

                        <input
                            class="in form-control"
                            type="text"
                            name="text"
                            placeholder="tag events"
                            aria-label="tag"
                            v-model="tag"
                            required
                        />
                    </div>

                    <div class="btn form-group">
                        <input
                            class="button btn btn-primary"
                            type="submit"
                            :disabled="
                                !etype &&
                                    !tit &&
                                    !sub &&
                                    !bod &&
                                    !Que5 &&
                                    !start1 &&
                                    !end1 &&
                                    !start2 &&
                                    !end2 &&
                                    !address &&
                                    !price &&
                                    !people &&
                                    !meta &&
                                    !tag
                            "
                            value="ADD EVENT"
                        />
                    </div>
                </form>
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
import { createvent } from "../graphql/Queries";
import VueCookies from "vue-cookies";
export default {
    name: "addevent",
    data() {
        return {
            // link2: "/Addevent2",
            etype: "",
            tit: "",
            sub: "",
            bod: "",
            Que5: "",
            start: "",
            start1: "",
            start2: "",
            end: "",
            end1: "",
            end2: "",
            Que8: "",
            Que9: "",
            address: "",
            price: 0,
            people: 0,
            meta: "",
            tag: "",
            emp: "",
            files: "",
            username: VueCookies.get("session").username,
            maxLength: 30,
            remainingchars: 30,
            //message: null,
            reachzero: false,
            imagesrc: ""
            // image: VueCookies.get("imag")
        };
    },
    methods: {
        handleImage(e) {
            const selectedImage = e.target.files[0];
            this.createBase64Image(selectedImage);
        },
        createBase64Image(fileobj) {
            const reader = new FileReader();
            reader.onload = e => {
                this.imagesrc = e.target.result;
            };
            reader.readAsDataURL(fileobj);
        },
        countchars: function() {
            this.remainingchars = this.maxLength - this.sub.length;
            this.reachzero = this.remainingchars === 0;
            console.log(this.reachzero);
        },
        async createvent() {
            const { imagesrc } = this;
            try {
                var result8 = await createvent(
                    this.username,
                    this.tit,
                    this.sub,
                    this.bod,
                    this.meta,
                    this.price,
                    this.tag,
                    (this.start = `${this.start1}+${this.start2}`),
                    (this.end = `${this.end1}+${this.end2}`),
                    this.people,
                    this.etype,
                    this.address,
                    imagesrc
                );
                console.log(result8);
                console.log("ADD Event Success");
                alert("The Event Successfully Added");
                console.log(result8.data.createEvent.event);
                window.location.reload(3000);
                this.emp = result8.data.createEvent.event;
                if (this.emp == null) {
                    // alert("Empty");
                }
                // this.people = result;
                console.log("-----------------------------------------");
            } catch (error) {
                console.error(error);
            }
        }
    }
};
</script>
