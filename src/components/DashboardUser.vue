<template>
	<div class="board4">
		<div class="container">
			<div class="row">
				<div class="col-md-12 dash4" v-if="users">
					<h2 class="red bold">Users</h2>
					<hr />
					<div class="middle" v-if="isload">
                    <div style="text-align: center;" class="spinner-border text-muted"></div>
                     </div>
					<form class="Events">
						<div class="Evn row" v-for="user in users" v-bind:key="user.user.id">
							<div class="col-md-7">
								<div class="post-item">
									<div class="row">
										<img
											class="col-md-4"
											:src="`https://auth-islend-800.herokuapp.com/media/${user.image}`"
											alt=""
										/>
										<div class="col-md-8">
											<h4>
												<a href="#">{{ user.user.username }}</a>
											</h4>
											<p>{{ user.jobtitle }}</p>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-5">
								<div class="btto">
									<button @click.prevent="deleteuser(user.id)" class="rj">Delete</button>
									<button @click.prevent="usertr(user.user.username)" class="ac">Display</button>
									<span v-if="user.user.isActive === true">
										<button @click.prevent="stopuser(user.id)" class="is">
											Active
										</button>
									</span>
									<span v-if="user.user.isActive === false">
										<button @click.prevent="stopuser(user.id)" class="is">
											Off
										</button>
									</span>
								</div>
							</div>
						</div>
					</form>
					<div class="bnbn">
						<button v-if="users[0].Prev === true"><a @click.prevent="cou2"> prev</a></button>
						<button v-if="users[0].Next === true"><a @click.prevent="cou"> next</a></button>
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
import { getuser } from '../graphql/Queries';
import { stopuser } from '../graphql/Queries';
import { deleteuser } from '../graphql/Queries';
import VueCookies from 'vue-cookies';
export default {
	name: 'DashboardUser',
	data() {
		return {
			users: '',
			numberr: 6,
			state: 'Next',
			//count: 6,
			lastid: -1,
			stop: '',
			del: '',
            isload:true,
		};
	},
	async mounted() {
		try {
			var result17 = await getuser(this.state, this.numberr, this.lastid);
			this.users = result17.data.getusers;
            this.isload=false;
			console.log(this.users);
			console.log('-----------------------------------------');
		} catch (error) {
			console.error(error);
		}
	},
	methods: {
		async stopuser(id) {
			try {
				var result21 = await stopuser(id);
				this.stop = result21.data.stopUser;
				console.log(this.stop);
				window.location.reload(3000);
				console.log('sucess stop');
			} catch (error) {
				console.error(error);
			}
		},
		async deleteuser(id) {
			try {
				var result22 = await deleteuser(id);
				this.del = result22.data.deleteuser;
				console.log(this.del);
				window.location.reload(3000);
				console.log('sucess delet');
			} catch (error) {
				console.error(error);
			}
		},
		async cou() {
			this.state = 'Next';
			this.lastid = this.users[this.users.length - 1].id;
			console.log(this.lastid);
			var result17 = await getuser(this.state, this.numberr, this.lastid);
			this.users = result17.data.getusers;
			console.log(this.users);
			console.log('-----------------------------------------');
			//this.lastid = this.users[this.users.length - 1].id;
			console.log(this.lastid);
		},
		async cou2() {
			this.state = 'Prev';
			this.lastid = this.users[this.users.length - 1].id;
			console.log(this.lastid);
			var result17 = await getuser(this.state, this.numberr, this.lastid);
			this.users = result17.data.getusers;
			console.log(this.users);
			console.log('-----------------------------------------');
			//this.lastid = this.users[this.users.length - 1].id;
		},
		async usertr(user) {
			try {
				//VueCookies.remove("session");
				VueCookies.set('session', { username: user });
				//VueCookies.remove('userdata');
				//VueCookies.set('userdata', this.users);
				console.log('-----------------------------------------');
				this.$router.push('/user');
				// window.location.reload(3000);
			} catch (error) {
				console.error(error);
			}
		},
	},
};
</script>
