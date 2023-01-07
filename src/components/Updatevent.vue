<template>
	<div class="update">
		<div class="add row">
			<div class="container">
				<div class="col-md-12" v-if="uevent">
					<form class="ADD" @submit.prevent="updateEvent" action="#">
						<div class="form-group">
							<h3>Update The Event</h3>
						</div>
						<div class="Que1 form-group" data-aos="fade-up">
							<p>
								<i class="fa fa-blind"></i>
								What type of event are you hosting today?
							</p>
							<input
								placeholder="Select Type"
								list="Que1"
								class="form-control"
								v-model="utype"
								required
							/>
							<datalist id="Que1">
								<option value="Conference"> </option>
								<option value="Seminar Or Talk"> </option>
								<option value="Tradeshow,Consumer Show,or Expo"> </option>
								<option value="Convention"> </option>
								<option value="Festival or Fair"> </option>
								<option value="Concert or Performance"> </option>
								<option value="Screening"> </option>
								<option value="Dinner or Gala"> </option>
								<option value="Class, Training,or Workshop"> </option>
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
							<input type="text" class="form-control" v-model="titl" required />
							<!-- <p v-if="`${tit}` === null">pleas full</p> -->
						</div>
						<div class="Que3 form-group">
							<h1><i class="fa fa-font"></i>SubTitle</h1>
							<textarea
								@input="countchars"
								v-model="subt"
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
							<textarea cols="70" rows="8" class="form-control" v-model="bodyy" required> </textarea>
						</div>
						<div class="Que5 form-group">
							<img :src="`https://auth-islend-800.herokuapp.com/media/${imag}`" height="220" />
							<h1><i class="fa fa-file-picture-o"></i>Change Event Image</h1>
							<input
								type="file"
								ref="files"
								multiple
								class="form-control"
								id="files"
								@change="handleImage"
								name="img"
								accept="image"
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
									v-model="ustart1"
									required
								/>
								<label for="birthday">End Event:</label>
								<input
									class="inpu  form-control"
									type="date"
									id="birthday"
									name="birthday"
									v-model="uend1"
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
									v-model="ustart2"
									required
								/>
								<label for="birthday">End Time:</label>
								<input
									class="inpu form-control"
									type="time"
									id="birthday"
									name="birthday"
									v-model="uend2"
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
								v-model="uaddress"
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
								v-model="pricee"
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
								v-model="upeople"
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
								v-model="metaa"
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
								v-model="tagss"
								required
							/>
						</div>

						<div class="btn form-group">
							<input
								class="button btn btn-primary"
								type="submit"
								:disabled="
									!utype &&
										!titl &&
										!subt &&
										!bodyy &&
										!ustart1 &&
										!uend1 &&
										!ustart2 &&
										!uend2 &&
										!uaddress &&
										!pricee &&
										!upeople &&
										!metaa &&
										!tagss
								"
								value="UPDATE EVENT"
							/>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
require(['aos'], function(AOS) {
	AOS.init({
		easing: 'ease-in-out-sine',
	});
});
import VueCookies from 'vue-cookies';
import { getevent } from '../graphql/Queries';
import { updateEvent } from '../graphql/Queries';
import moment from 'moment';
export default {
	name: 'Updatevent',
	data() {
		return {
			maxLength: 30,
			remainingchars: 30,
			message: null,
			reachzero: false,
			id: VueCookies.get('uid'),
			username: VueCookies.get('session').username,
			autho: '',
			titl: '',
			ima: '',
			subt: '',
			bodyy: '',
			metaa: '',
			pricee: null,
			tagss: '',
			ustart: '',
			uend: '',
			ustart1: '',
			uend1: '',
			ustart2: '',
			uend2: '',
			upeople: null,
			utype: '',
			uaddress: '',
			uevent: '',
		};
	},
	async mounted() {
		try {
			var result15 = await getevent(this.id, this.username);
			console.log(result15);
			console.log(result15.data);
			this.uevent = result15.data.event;
			console.log(this.uevent);
			this.utype = this.uevent.eventType;
			console.log(this.utype);
			this.pricee = this.uevent.price;
			this.upeople = this.uevent.Countpeople;
			this.titl = this.uevent.title;
			this.bodyy = this.uevent.body;
			this.subt = this.uevent.subtitle;
			this.uaddress = this.uevent.address;
			this.metaa = this.uevent.metaDescription;
			this.imag = this.uevent.image;
			this.ustart = this.uevent.dateCreated;
			this.uend = this.uevent.dateEvent;
			this.ustart = this.ustart.replace('T', ' ');
			this.uend = this.uend.replace('T', ' ');
			console.log(this.ustart);
			console.log(this.uend);
			this.ustart1 = moment(this.ustart).format('YYYY-MM-DD');
			this.ustart2 = moment(this.ustart).format('HH:mm');
			this.uend1 = moment(this.uend).format('YYYY-MM-DD');
			this.uend2 = moment(this.uend).format('HH:mm');
			console.log(this.ustart1);
			try {
				var i = 0;
				while (i < this.uevent.tags.length) {
					this.tagss = this.tagss + this.uevent.tags[i].name + ' , ';
					console.log(this.tagss);
					i++;
				}
			} catch (error) {
				console.log(error);
			}

			console.log('-----------------------------------------');
			console.log('---+++++++++--------------------------------------');
		} catch (error) {
			console.error(error);
		}
	},
	methods: {
		handleImage(e) {
			const selectedImage = e.target.files[0];
			this.createBase64Image(selectedImage);
		},
		createBase64Image(fileobj) {
			const reader = new FileReader();
			reader.onload = (e) => {
				this.ima = e.target.result;
			};
			reader.readAsDataURL(fileobj);
		},
		countchars: function() {
			this.remainingchars = this.maxLength - this.subt.length;
			this.reachzero = this.remainingchars === 0;
			console.log(this.reachzero);
		},
		async updateEvent() {
			const { ima } = this;
			console.log(ima);
			try {
				var result14 = await updateEvent(
					this.id,
					this.username,
					this.titl,
					this.ima,
					this.subt,
					this.bodyy,
					this.metaa,
					this.pricee,
					this.tagss,
					(this.ustart = `${this.ustart1}+${this.ustart2}`),
					(this.uend = `${this.uend1}+${this.uend2}`),
					this.upeople,
					this.utype,
					this.uaddress
				);
				console.log(result14);
				console.log('Update Success');
				window.location.reload(3000);
				// VueCookies.set("even",this.uevent);
				//this.$router.push('/eventdetail');
				//console.log(result11.data);
			} catch (error) {
				console.error(error);
			}
		},
	},
};
</script>
