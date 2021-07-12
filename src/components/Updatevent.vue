<template>
    <div class="update">
        <div class="row">
            <div class="col-md-3">
                <h1></h1>
            </div>
            <div class="col-md-9">
                <form>
                    <h1>
                        <i class="fa fa-file-picture-o"></i>Main Event Image
                    </h1>
                    <p>
                        <img src="../assets/s1.jpg" />
                    </p>
                    <input type="file" id="img" name="img" accept="image" />
                    <hr />
                    <h1><i class="fa fa-text-width"></i>The Title</h1>
                    <input
                        type="text"
                        placeholder="Weekend Marketing featured."
                    />
                    <br />
                    <hr />

                    <h1><i class="fa fa-text-width"></i>Description</h1>
                    <p>
                        Add More details to your event like your schedule,
                        sponsors<br />
                        ,or featured guests . Learn More
                    </p>
                    <textarea
                        @input="countchars"
                        v-model="message"
                        :maxlength="maxLength"
                        cols="70"
                        rows="5"
                        placeholder="Write A short event summary to get attendes exicted."
                    >
                    </textarea>
                    <br />
                    <span class="counter" :class="{ zero: reachzero }">
                        0 | <span>{{ remainingchars }}</span>
                    </span>
                    <br />
                    <textarea
                        cols="70"
                        rows="10"
                        placeholder="About this event Black Owned Hackney launches for our Spring/Summer 2021 series in collaboration with Black Eats LDN . Catch with Us on the third Weekend of june opposite Hackney Central station showcasing london ,artisan trader and many more black."
                    >
                    </textarea>
                    <br />
                    <button>Update Data</button>
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
    name: "Updatevent",
    data() {
        return {
            maxLength: 140,
            remainingchars: 140,
            message: null,
            reachzero: false
        };
    },
    methods: {
        countchars: function() {
            this.remainingchars = this.maxLength - this.message.length;
            this.reachzero = this.remainingchars === 0;
            console.log(this.reachzero);
        }
    }
};
</script>
