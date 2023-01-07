<template>
	<div class="dash">
		<app-header />
		<div class="container">
			<div class="row">
				<div class="col-md-4 side">
					<h3>Control Board</h3>
					<hr />
					<ul>
						<li @click="selected = 'DashboardUser'">
							<a href="#"> Users Control</a>
						</li>
						<li @click="selected = 'DashboardEvent'">
							<a href="#"> Events Control</a>
						</li>
						<li @click="selected = 'Dashboard'">
							<a href="#"> Event Not Accept Yet</a>
						</li>
						<li @click="selected = 'DashboardEmp'">
							<a href="#"> Supervisors Control</a>
						</li>
					</ul>
				</div>
				<div class="das col-md-8">
					<div v-if="!selected"><DashboardUser /></div>
					<!-- <Dashboard />
                    <Dashboard2 />
                    <Dashboard3 />
                    <Dashboard4 />-->
					<component :is="selected"></component>
				</div>
			</div>
		</div>
		<Footer />
		<div class="endd">
			<End />
		</div>
		<a href="#" class="back-to-top"><i class="fa fa-angle-up"></i></a>
	</div>
</template>
<script>
// @ is an alias to /src
import AppHeader from '@/components/AppHeader.vue';
import Dashboard from '@/components/Dashboard.vue';
import DashboardEvent from '@/components/DashboardEvent.vue';
import DashboardEmp from '@/components/DashboardEmp.vue';
import DashboardUser from '@/components/DashboardUser.vue';
import Footer from '@/components/Footer.vue';
import End from '@/components/End.vue';
export default {
	name: 'dashboard',
	components: {
		AppHeader,
		Dashboard,
		DashboardEvent,
		DashboardEmp,
		DashboardUser,
		Footer,
		End,
	},
	data() {
		return {
			selected: '',
		};
	},
};
</script>
<style scoped>
.dash {
	background: var(--back-color);
}
.even {
	margin-top: 80px;
}
.endd {
	margin-top: 100px;
}
</style>
