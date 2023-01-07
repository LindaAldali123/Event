<template>
	<div class="detail">
		<div class="container">
			<div class="row">
				<div class="col-md-8">
					<div class="img">
						<img
							:src="`https://auth-islend-800.herokuapp.com/media/${even.image}`"
							height="370"
							width="100%"
						/>
					</div>
					<br />

					<i class="fa fa-upload para"></i>

					<a v-if="token" @click.prevent="likeevent(even.id)">
						<i :class="[even.likeStat === true ? 'stat1' : 'stat2']" class="fa fa-heart para"></i>
					</a>
					<a v-if="!token">
						<i class="fa fa-heart para"></i>
					</a>
					<hr />
					<h4>{{ even.title }}</h4>
					<h6>About this event</h6>
					<p>
						{{ even.subtitle }}<i class="fa fa-smile-o"></i><br />
						{{ even.body }}
					</p>
					<ul>
						<li>region fantastic</li>
						<li>region fantastic</li>
						<li>region fantastic</li>
						<li>region fantasti</li>
						<li>region fantastic</li>
					</ul>
					<p>Share With Friends</p>
					<div class="lol">
						<i class="fa fa-facebook"></i>
						<i class="fa fa-wechat"></i>
						<i class="fa fa-linkedin"></i>
						<i class="fa fa-twitter"></i>
						<i class="fa fa-envelope"></i>
					</div>
				</div>
				<div class="col-md-4">
					<form class="form">
						<div class="fol">
							<h2 class="upper">multiple dates</h2>
							<h5>{{ even.author.username }}</h5>
							<p>
								By Bohmin Place Marcket<br />
								<span v-if="!token" class="ban">
									0 followers
									<a class="bor">
										Follow
									</a>
								</span>
								<span v-if="token" class="ban">
									{{ FollowerCounts }} followers
									<a
										v-if="!stat && username !== `${even.author.username}`"
										@click.prevent="follower(even.author.username)"
										class="bor"
									>
										Follow
									</a>
									<a
										v-if="stat && username !== `${even.author.username}`"
										@click.prevent="follower(even.author.username)"
										class="bor sm"
									>
										Un Follow
									</a>
								</span>
							</p>
							<p v-if="token">
								{{ even.likesCount }} Likes
								<i class="fa fa-heart red"></i>
							</p>
							<p v-if="!token">
								0 Likes
								<i class="fa fa-heart red"></i>
							</p>
							<p class="pric">{{ even.price }}$</p>
						</div>
					</form>
					<form class="form">
						<div class="date">
							<button>Date :{{ even.dateEvent }}</button>
						</div>
					</form>
					<form>
						<div class="fol2">
							<label>Location</label>
							<ul>
								<li>{{ even.address }}</li>
								<li>Bohem</li>
								<li>London</li>
								<li>E8 1DU</li>
								<li>United Kigdom</li>
								<li class="blue">View Map</li>
							</ul>
							<h6 class="ref">Refund Policy</h6>
							<p>ContactThe Orgnaisor to request arefuind</p>
						</div>
					</form>
					<form>
						<a
							v-if="username !== `${even.author.username}`"
							@click.prevent="savid(even.id)"
							class="card-button"
						>
							To Reserve Event (Click Here)</a
						>
						<hr />
						<a
							v-if="username === `${even.author.username}`"
							@click.prevent="saveid(even.id)"
							class="card-button"
						>
							To Update Event (Click Here)</a
						>
					</form>
				</div>
			</div>
			<span v-if="token">
				<p class="blue org">More Events From This Organizer</p>
				<Organizerevent />
			</span>
			<iframe
				:src="even.Location"
				frameborder="0"
				style="border:0;width:100%;height:290px;"
				allowfullscreen
			></iframe>
		</div>
	</div>
</template>
<script>
require(['aos'], function(AOS) {
	AOS.init({
		easing: 'ease-in-out-sine',
	});
});
import Organizerevent from '@/components/Organizerevent.vue';
import VueCookies from 'vue-cookies';
import { likeevent } from '../graphql/Queries';
import { followe } from '../graphql/Queries';
import { follcount } from '../graphql/Queries';
export default {
	name: 'Eventdetail',
	components: { Organizerevent },
	data() {
		return {
			link: '/signup',
			pay: '/payment',
			upd: '/updatevent',
			even: VueCookies.get('even'),
			token: VueCookies.get('session').token,
			username: VueCookies.get('session').username,
			FollowerCounts: null,
			count: '',
			userna: '',
			numb: null,
			stat: '',
		};
	},
	async mounted() {
		if (this.token != null) {
			//this.FollowerCounts = this.even.FollowersCount;
			this.userna = this.username;
			this.numb = this.even.id;
			try {
				var result7 = await follcount(this.userna, this.numb);
				this.FollowerCounts = result7.data.event.FollowersCount;
				this.stat = result7.data.event.FollowStat;
				console.log(this.FollowerCounts);
				console.log(result7);
			} catch (error) {
				console.error(error);
			}
		}
	},
	methods: {
		async follower(usern) {
			try {
				var result6 = await followe(this.username, usern);
				this.count = result6.data.setFollowe.FollowerCount;
				this.stat = result6.data.setFollowe.FollowStat;
				console.log(this.stat);
				console.log(this.count);
				this.FollowerCounts = this.count;
				console.log(this.username);
				console.log('****************');
				console.log(result6);
				console.log('-----------------------------------------');
			} catch (error) {
				console.error(error);
			}
		},
		async likeevent(number) {
			try {
				var result5 = await likeevent(this.username, (this.eventID = `${number}`));
				console.log(result5.data.setLikes[0].likeStat);
				this.even.likeStat = result5.data.setLikes[0].likeStat;
				console.log('-----------------------------------------');
			} catch (error) {
				console.error(error);
			}
		},
		async saveid(uid) {
			try {
				VueCookies.set('uid', uid);
				console.log('-----------------------------------------');
				this.$router.push('/updatevent');
			} catch (error) {
				console.error(error);
			}
		},
		async savid(tid) {
			try {
				VueCookies.set('tid', tid);
				console.log('-----------------------------------------');
				this.$router.push('/summa');
			} catch (error) {
				console.error(error);
			}
		},
	},
};
</script>
