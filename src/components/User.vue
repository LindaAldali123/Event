<template>
	<div class="person">
		<div class="container">
			<div class="row">
				<div class="col-md-4">
					<div class="blog" data-aos="fade-up">
						<div class="sidebar">
							<img :src="`https://auth-islend-800.herokuapp.com/media/${userdata.image}`" />
							<p>
								<span>{{ username }}</span>
							</p>
							<p>0 orders , 0 Likes,{{ userdata.FollowerCount }} Following</p>
							<h3 class="sidebar-title">Search</h3>
							<div class="sidebar-item search-form">
								<form action="">
									<input type="text" />
									<button type="submit">
										<i class="fa fa-search"></i>
									</button>
								</form>
							</div>
							<!-- End sidebar search formn-->

							<h3 class="sidebar-title">Categories</h3>
							<div class="sidebar-item categories">
								<ul>
									<li>
										<a href="#">General <span>(25)</span></a>
									</li>
									<li>
										<a href="#">Lifestyle <span>(12)</span></a>
									</li>
									<li>
										<a href="#">Travel <span>(5)</span></a>
									</li>
									<li>
										<a href="#">Design <span>(22)</span></a>
									</li>
									<li>
										<a href="#">Creative <span>(8)</span></a>
									</li>
									<li>
										<a href="#">Educaion <span>(14)</span></a>
									</li>
								</ul>
							</div>
							<!-- End sidebar categories-->

							<h3 class="sidebar-title">Recent Events</h3>
							<div class="middle" v-if="isload">
								<div style="text-align: center;" class="spinner-border text-muted"></div>
							</div>
							<div class="sidebar-item recent-posts" v-for="evere in eventsrec" v-bind:key="evere.id">
								<div class="post-item clearfix">
									<img :src="`https://auth-islend-800.herokuapp.com/media/${evere.image}`" alt="" />
									<h4>
										{{ evere.title }}<br />
										<a
											@click.prevent="
												save_eve(evere);
												namev(evere.author.username);
											"
											>{{ evere.subtitle }}</a
										>
									</h4>
									<time datetime="2020-01-01">{{ evere.dateEvent }}</time>
								</div>
							</div>
							<!-- End sidebar recent posts-->

							<h3 class="sidebar-title">Tags</h3>
							<div class="sidebar-item tags">
								<ul>
									<li><a href="#">Online Events</a></li>
									<li><a href="#">#Party</a></li>
									<li><a href="#">#Family</a></li>
									<li><a href="#">#Personality</a></li>
									<li><a href="#">Mac</a></li>
									<li><a href="#">Design</a></li>
									<li><a href="#">Office</a></li>
									<li><a href="#">Creative</a></li>
									<li><a href="#">Studio</a></li>
									<li><a href="#">Photo</a></li>
									<li><a href="#">Trips</a></li>
									<li><a href="#">Marketing</a></li>
								</ul>
							</div>
							<!-- End sidebar tags-->
						</div>
					</div>
					<!-- End sidebar -->

					<!-- End blog sidebar -->

					<!-- End .row -->

					<!-- End .container -->
				</div>
				<div class="col-md-8">
					<h1 class="red">Account Information</h1>
					<div class="middle" v-if="isloa">
						<div style="text-align: center;" class="spinner-border text-muted"></div>
					</div>
					<hr />
					<h4>Account Email Adress</h4>
					{{ email }}
					<hr />
					<h4>Profile Photo</h4>
					<input
						type="file"
						ref="files"
						multiple
						class="form-control"
						id="files"
						@change="handImage"
						name="img"
						accept="image"
						required
					/>
					<hr />
					<h4>Contact Information</h4>
					<div class="row">
						<div class="col-md-6">
							<h6>First Name</h6>
							<input type="text" v-model="fn" required />
						</div>
						<div class="col-md-6">
							<h6>Last Name</h6>
							<input type="text" v-model="ln" required />
						</div>
						<div class="col-md-6">
							<h6>Home Phone</h6>
							<input type="text" v-model="phon" required />
						</div>
						<div class="col-md-6">
							<h6>Cell Phone</h6>
							<input type="text" v-model="cell" required />
						</div>
						<div class="col-md-6">
							<h6>Job Title</h6>
							<input type="text" v-model="jobt" required />
						</div>
						<div class="col-md-6">
							<h6>Company / Organization</h6>
							<input type="text" v-model="cname" required />
						</div>
						<div class="col-md-6">
							<h6>Website</h6>
							<input type="text" v-model="webs" required />
						</div>
						<div class="col-md-6">
							<h6>Blog</h6>
							<input type="text" v-model="blog" required />
						</div>
					</div>
					<hr />
					<h4>Home Address</h4>
					<h6>Address</h6>
					<input type="text" v-model="addr1" required />
					<h6>Address2</h6>
					<input type="text" v-model="addr2" required />
					<h6>City</h6>
					<input type="text" v-model="city" required />
					<h6>Country</h6>
					<input type="selected" v-model="country" required />
					<hr />
					<button
						class="sav"
						@click.prevent="userupdate"
						:disabled="
							!fn &&
							!ln &&
							!cell &&
							!phon &&
							!webs &&
							!blog &&
							!addr1 &&
							!addr2 &&
							!jobt &&
							!cname &&
							!city &&
							!country
						"
					>
						Save
					</button>
					<hr />
					<h4 class="red">Events Registed By You</h4>
					<hr />
					<carousel
						:items="3"
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
								items: 2,
							},
							1000: {
								items: 3,
							},
						}"
						><!--class="owl-carousel owl-theme"-->
						<div class="mix item foryou food col-lg-12" data-aos="zoom-out">
							<a :href="link3" class="link">
								<div class="card-sl">
									<div class="card-state state1">On</div>
									<div class="card-price">100$</div>
									<div class="card-reg">
										<i class="fa fa-user-o"></i>123<span class="red"> REG</span>
									</div>
									<div class="card-image">
										<img src="../assets/s1.jpg" height="150" width="100%" />
									</div>

									<a class="card-action" href="#"><i class="fa fa-heart"></i></a>
									<div class="card-heading">
										Audi Q8
									</div>
									<div class="card-date">
										Sun,jul 25,12:00PM
									</div>
									<div class="card-text">
										crossover SUV coup made by Audi.
									</div>
									<div class="card-foteer">
										<i class="fa fa-user-o"></i> 2.8k creator followers<i class="fa fa-upload"></i>
									</div>
								</div>
							</a>
						</div>
						<div class="mix item online food col-lg-12" data-aos="fade-up">
							<a :href="link3" class="link">
								<div class="card-sl">
									<div class="card-state state1">On</div>
									<div class="card-price">100$</div>
									<div class="card-reg">
										<i class="fa fa-user-o"></i>123<span class="red"> REG</span>
									</div>
									<div class="card-image">
										<img src="../assets/s1.jpg" height="150" width="100%" />
									</div>

									<a class="card-action" href="#"><i class="fa fa-heart"></i></a>
									<div class="card-heading">
										Audi Q8
									</div>
									<div class="card-date">
										Sun,jul 25,12:00PM
									</div>
									<div class="card-text">
										crossover SUV coup made by Audi.
									</div>
									<div class="card-foteer">
										<i class="fa fa-user-o"></i> 2.8k creator followers<i class="fa fa-upload"></i>
									</div>
								</div>
							</a>
						</div>
						<div class="mix item music food col-lg-12" data-aos="fade-up">
							<a :href="link3" class="link">
								<div class="card-sl">
									<div class="card-state state2">Off</div>
									<div class="card-price">100$</div>
									<div class="card-reg">
										<i class="fa fa-user-o"></i>123<span class="red"> REG</span>
									</div>
									<div class="card-image">
										<img src="../assets/s1.jpg" height="150" width="100%" />
									</div>

									<a class="card-action" href="#"><i class="fa fa-heart"></i></a>
									<div class="card-heading">
										Audi Q8
									</div>
									<div class="card-date">
										Sun,jul 25,12:00PM
									</div>
									<div class="card-text">
										crossover SUV coup made by Audi.
									</div>
									<div class="card-foteer">
										<i class="fa fa-user-o"></i> 2.8k creator followers<i class="fa fa-upload"></i>
									</div>
								</div>
							</a>
						</div>
						<div class="mix item music jul col-lg-12" data-aos="zoom-out">
							<a :href="link3" class="link">
								<div class="card-sl">
									<div class="card-state state2">Off</div>
									<div class="card-price">100$</div>
									<div class="card-reg">
										<i class="fa fa-user-o"></i>123<span class="red"> REG</span>
									</div>
									<div class="card-image">
										<img src="../assets/s1.jpg" height="150" width="100%" />
									</div>

									<a class="card-action" href="#"><i class="fa fa-heart"></i></a>
									<div class="card-heading">
										Audi Q8
									</div>
									<div class="card-date">
										Sun,jul 25,12:00PM
									</div>
									<div class="card-text">
										crossover SUV coup made by Audi.
									</div>
									<div class="card-foteer">
										<i class="fa fa-user-o"></i> 2.8k creator followers<i class="fa fa-upload"></i>
									</div>
								</div>
							</a>
						</div>
						<div class="mix item music jul col-lg-12" data-aos="zoom-out">
							<a :href="link3" class="link">
								<div class="card-sl">
									<div class="card-state state2">Off</div>
									<div class="card-price">100$</div>
									<div class="card-reg">
										<i class="fa fa-user-o"></i>123<span class="red"> REG</span>
									</div>
									<div class="card-image">
										<img src="../assets/s1.jpg" height="150" width="100%" />
									</div>

									<a class="card-action" href="#"><i class="fa fa-heart"></i></a>
									<div class="card-heading">
										Audi Q8
									</div>
									<div class="card-date">
										Sun,jul 25,12:00PM
									</div>
									<div class="card-text">
										crossover SUV coup made by Audi.
									</div>
									<div class="card-foteer">
										<i class="fa fa-user-o"></i> 2.8k creator followers<i class="fa fa-upload"></i>
									</div>
								</div>
							</a>
						</div>
					</carousel>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
require(['aos'], function (AOS) {
	AOS.init({
		easing: 'ease-in-out-sine',
	});
});
import { events } from '../graphql/Queries';
import { userupdate } from '../graphql/Queries';
import { getuserdata } from '../graphql/Queries';
import carousel from 'vue-owl-carousel';
import VueCookies from 'vue-cookies';
export default {
	name: 'User',
	components: { carousel },
	data() {
		return {
			link3: '/eventdetail',
			numm: 5,
			eventsrec: '',
			username: VueCookies.get('session').username,
			fn: '',
			ln: '',
			cell: '',
			phon: '',
			webs: '',
			blog: '',
			jobt: '',
			addr1: '',
			addr2: '',
			city: '',
			country: '',
			cname: '',
			imagsr: '',
			userdata: '',
			email: '',
			isload: true,
			isloa: true,
		};
	},
	async mounted() {
		try {
			var result3 = await events(this.username, this.numm);
			console.log(result3);
			console.log(result3.data.allEvent);
			this.eventsrec = result3.data.allEvent;
			this.isload = false;
			//console.log(this.id);
			// VueCookies.set("even", this.events[this.id]);
			console.log(this.eventsrec);
			console.log(result3.data.allEvent[0].price);
			console.log(result3.data.allEvent[0].image);
			// this.people = result;
			console.log('-----------------------------------------');
		} catch (error) {
			console.error(error);
		}
		try {
			var result12 = await getuserdata(this.username);
			console.log(result12);
			console.log(result12.data.getUser);
			this.userdata = result12.data.getUser;
			this.isloa = false;
			this.fn = this.userdata.firstname;
			this.ln = this.userdata.lastname;
			this.cell = this.userdata.cellphone;
			this.addr1 = this.userdata.Address;
			this.addr2 = this.userdata.Address2;
			this.city = this.userdata.city;
			this.blog = this.userdata.blog;
			this.webs = this.userdata.website;
			this.cname = this.userdata.companyName;
			this.jobt = this.userdata.jobtitle;
			this.phon = this.userdata.companyphone;
			this.country = this.userdata.country;
			this.email = this.userdata.user.email;
			console.log(this.userdata.user.email);
			console.log('---+++++++++--------------------------------------');
		} catch (error) {
			console.error(error);
		}
	},
	methods: {
		handImage(e) {
			const selectedImage = e.target.files[0];
			this.createBase64Image(selectedImage);
		},
		createBase64Image(fileobj) {
			const reader = new FileReader();
			reader.onload = (e) => {
				this.imagsr = e.target.result;
			};
			reader.readAsDataURL(fileobj);
		},
		async save_eve(evere) {
			try {
				VueCookies.remove('even');
				VueCookies.set('even', evere);
				console.log('-----------------------------------------');
				this.$router.push('/eventdetail');
				// window.location.reload(3000);
			} catch (error) {
				console.error(error);
			}
		},
		async namev(nam) {
			VueCookies.remove('nam');
			VueCookies.set('nam', nam);
		},
		async userupdate() {
			const { imagsr } = this;
			console.log(imagsr);
			try {
				var result11 = await userupdate(
					this.username,
					imagsr,
					this.fn,
					this.ln,
					this.cell,
					this.phon,
					this.webs,
					this.blog,
					this.jobt,
					this.addr1,
					this.addr2,
					this.city,
					this.country,
					this.cname
				);
				console.log(result11);
				console.log('Update Success');
				// window.location.reload(3000);
				//console.log(result11.data);
			} catch (error) {
				console.error(error);
			}
		},
	},
};
</script>
