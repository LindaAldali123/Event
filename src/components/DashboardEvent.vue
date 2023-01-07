<template>
	<div class="board2">
		<div class="container">
			<div class="row">
				<div class="col-md-12 dash2" v-if="eves">
					<h2 class="red">Events</h2>
					<hr />
					<div class="middle" v-if="isload">
                    <div style="text-align: center;" class="spinner-border text-muted"></div>
                    </div>	
					<form class="Events">
						<div class="Evn row" v-for="ev in eves" v-bind:key="ev.id">
							<div class="col-md-7">
								<div class="post-item">
									<div class="row">
										<img
											class="col-md-4"
											:src="`https://auth-islend-800.herokuapp.com/media/${ev.image}`"
											alt=""
										/>
										<div class="col-md-8">
											<h4>
												<a href="#">{{ ev.title }}</a>
											</h4>
											<p>{{ ev.subtitle }}</p>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-5">
								<div class="btto">
									<button @click.prevent="deleve(ev.id)" class="rj">Delete</button>
									<button
										class="ac"
										@click.prevent="
											save_eve(ev);
											namev(ev.author.username);
										"
									>
										Display
									</button>
									<span v-if="ev.published === true">
										<button @click.prevent="stopeve(ev.id)" class="is">
											Active
										</button>
									</span>
									<span v-if="ev.published === false">
										<button @click.prevent="stopeve(ev.id)" class="is">
											Off
										</button>
									</span>
								</div>
							</div>
						</div>
					</form>
					<div class="bnbn">
						<button v-if="eves[0].Prev === true"><a @click.prevent="cou2"> prev</a></button>
						<button v-if="eves[0].Next === true"><a @click.prevent="cou"> next</a></button>
					</div>
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
import { geteve } from '../graphql/Queries';
import { stopeve } from '../graphql/Queries';
import { deleve } from '../graphql/Queries';
import VueCookies from 'vue-cookies';
export default {
	name: 'DashboardEvent',
	data() {
		return {
			eves: '',
			state: 'Next',
			count: 6,
			lastid: -1,
			stop: '',
			del: '',
			isload:true,
		};
	},

	async mounted() {
		try {
			var result18 = await geteve(this.state, this.count, this.lastid);
			this.eves = result18.data.dashevents;
			this.isload=false;
			console.log(this.eves);
			this.lastid = this.eves[this.eves.length - 1].id;
			console.log(this.lastid);
			console.log('-----------------------------------------');
		} catch (error) {
			console.error(error);
		}
	},
	methods: {
		async save_eve(eves) {
			try {
				VueCookies.remove('even');
				VueCookies.set('even', eves);
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
		async stopeve(id) {
			try {
				var result19 = await stopeve(id);
				this.stop = result19.data.stopPosting;
				console.log(this.stop);
				window.location.reload(3000);
				console.log('sucess stop');
			} catch (error) {
				console.error(error);
			}
		},
		async deleve(id) {
			try {
				var result20 = await deleve(id);
				this.del = result20.data.deletevents;
				console.log(this.del);
				window.location.reload(3000);
				console.log('sucess delet');
			} catch (error) {
				console.error(error);
			}
		},
		async cou() {
			this.state = 'Next';
			this.lastid = this.eves[this.eves.length - 1].id;
			console.log(this.lastid);
			var result18 = await geteve(this.state, this.count, this.lastid);
			this.eves = result18.data.dashevents;
			//this.lastid = this.eves[this.eves.length - 1].id;
			console.log(this.lastid);
		},
		async cou2() {
			this.state = 'Prev';
			this.lastid = this.eves[this.eves.length - 1].id;
			console.log(this.lastid);
			var result18 = await geteve(this.state, this.count, this.lastid);
			this.eves = result18.data.dashevents;
			//this.lastid = this.eves[this.eves.length - 1].id;
		},
	},
};
</script>
