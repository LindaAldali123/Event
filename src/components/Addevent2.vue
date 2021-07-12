<template>
    <div class="add2">
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
                        This is the first image attendees will see at the top
                        of<br />
                        your listing. Use a high quality image .Learn More
                    </p>
                    <input type="file" id="img" name="img" accept="image" />

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
                    <textarea cols="70" rows="10"> </textarea>
                    <br />
                    <button>Add Text</button>
                    <button>Add Image</button>
                    <button>Add Video</button>
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
    name: "addevent2",
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
