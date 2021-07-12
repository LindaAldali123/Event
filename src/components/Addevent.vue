<template>
    <div class="add">
        <div class="row">
            <div class="col-md-3 str">
                <h1>Let's Build Your Event</h1>
                <p>
                    Tell Us About Some Details To Build Your Event.
                </p>
            </div>
            <div class="col-md-9">
                <form class="ADD">
                    <form class="Que1" data-aos="fade-up">
                        <p>
                            <i class="fa fa-signing"></i>
                            What's Your Level of experience hosting events?
                        </p>
                        <input
                            placeholder="Select your experinece"
                            list="Que1"
                            v-model="Que1"
                        />
                        <datalist id="Que1">
                            <option value="Newbie - This is my first event">
                            </option>
                            <option
                                value="Beginner - Not my first time, but I need experience"
                            >
                            </option>
                            <option
                                value="Intermidate - I have some past experience hosting event"
                            >
                            </option>
                            <option
                                value="Expert Ihave plenty of experience hosting event"
                            >
                            </option>
                        </datalist>
                    </form>

                    <form class="Que2" data-aos="fade-up">
                        <p>
                            <i class="fa fa-volume-up"></i>
                            How did you first hear about events?
                        </p>
                        <input
                            placeholder="Select an option"
                            list="Que2"
                            v-model="Que2"
                        />
                        <datalist id="Que2">
                            <option value="Friend or Colleage"> </option>
                            <option value="Social Media post"> </option>
                            <option value="Online Search"> </option>
                            <option value="Online ad"> </option>
                            <option value="3rd party blog or forum"> </option>
                            <option value="The event blog"> </option>
                            <option
                                value="Lattended an event ticketed by event"
                            >
                            </option>
                            <option value="Other"> </option>
                        </datalist>
                    </form>

                    <form class="Que3" data-aos="fade-up">
                        <p>
                            <i class="fa fa-group"></i>
                            How many people help plan your events online?
                        </p>
                        <input
                            placeholder="Select quantity"
                            list="Que3"
                            v-model="Que3"
                        />
                        <datalist id="Que3">
                            <option value="Just me"> </option>
                            <option value="1-5 people"> </option>
                            <option value="6-10 people"> </option>
                            <option value="11-20 people"> </option>
                            <option value="More Than 20"> </option>
                            <option
                                value="Lattended an event ticketed by event"
                            >
                            </option>
                            <option value="Other"> </option>
                        </datalist>
                    </form>

                    <form class="Que4" data-aos="fade-up">
                        <p>
                            <i class="fa fa-calendar-check-o"></i>
                            How often do you plan to host events?
                        </p>
                        <input
                            placeholder="Select"
                            list="Que4"
                            v-model="Que4"
                        />
                        <datalist id="Que4">
                            <option value="Just Once"> </option>
                            <option value="Weekly"> </option>
                            <option value="Monthly"> </option>
                            <option value="Afew times ayear "> </option>
                            <option value="Once A year"> </option>
                        </datalist>
                    </form>

                    <form class="Que5" data-aos="fade-up">
                        <p>
                            <i class="fa fa-blind"></i>
                            What type of event are you hosting today?
                        </p>
                        <input
                            placeholder="Select Type"
                            list="Que5"
                            v-model="Que5"
                        />
                        <datalist id="Que5">
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
                    </form>

                    <form class="Que6" data-aos="fade-up">
                        <p>
                            <i class="fa fa-vcard-o"></i>
                            Name of your event
                        </p>
                        <label class="bold">Part </label>
                        <input type="text" v-model="Que6" />
                    </form>
                    <form class="Que7" data-aos="fade-up">
                        <p>
                            <i class="fa fa-calendar"></i>
                            Date and Time
                        </p>
                        <form class="ev">
                            <label for="birthday">Start Event:</label>
                            <input
                                class="inpu"
                                type="date"
                                id="birthday"
                                name="birthday"
                                v-model="Que7"
                            />
                            <label for="birthday">End Event:</label>
                            <input
                                class="inpu"
                                type="date"
                                id="birthday"
                                name="birthday"
                                v-model="Que8"
                            />
                        </form>
                        <form class="ev">
                            <label for="birthday">Start Time:</label>
                            <input
                                class="inpu"
                                type="time"
                                id="birthday"
                                name="birthday"
                                v-model="Que9"
                            />
                            <label for="birthday">End Time:</label>
                            <input
                                class="inpu"
                                type="time"
                                id="birthday"
                                name="birthday"
                                v-model="Que10"
                            />
                        </form>
                    </form>
                    <form class="hom" data-aos="fade-up">
                        <p>
                            <i class="fa fa-home"></i>
                            Location of your event
                        </p>
                        <button>Venue</button>
                        <button>Online event</button>
                        <button>To be announced</button><br />
                        <label for="birthday">Venue Location:</label><br />
                        <input
                            class="in"
                            type="search"
                            name="search"
                            placeholder="Search events"
                            aria-label="Search"
                        />
                    </form>
                    <form class="btn">
                        <button
                            :disabled="
                                !Que1 &&
                                    !Que2 &&
                                    !Que3 &&
                                    !Que4 &&
                                    !Que5 &&
                                    !Que6 &&
                                    !Que7 &&
                                    !Que8 &&
                                    !Que9 &&
                                    !Que10
                            "
                        >
                            <a :href="link2">NEXT</a>
                        </button>
                    </form>
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
export default {
    name: "addevent",
    data() {
        return {
            link2: "/Addevent2",
            Que1: "",
            Que2: "",
            Que3: "",
            Que4: "",
            Que5: "",
            Que6: "",
            Que7: "",
            Que8: "",
            Que9: "",
            Que10: ""
        };
    }
};
</script>
